(function (global) {
  "use strict";

  const FRAME_HEADER = 0xdf;
  const HEADER_LENGTH = 6;
  const CHECKSUM_LENGTH = 1;
  const POSITION_PAYLOAD_LENGTH = 32;
  const POSITION_MESSAGE_ID = 0x12;
  const BASE_PARAMETER_PAYLOAD_LENGTH = 16;
  const ROVER_PARAMETER_PAYLOAD_LENGTH = 20;
  const COMMAND_RESPONSE_PAYLOAD_LENGTH = 2;

  function sumChecksum(bytes, end = bytes.length) {
    let sum = 0;
    for (let i = 0; i < end; i += 1) sum = (sum + bytes[i]) & 0xff;
    return sum;
  }

  function bytesToCompactHex(bytes) {
    return Array.from(bytes, (value) => value.toString(16).padStart(2, "0").toUpperCase()).join("");
  }

  function isCoordinatePairValid(lat, lon, allowZero = false) {
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return false;
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) return false;
    return allowZero || lat !== 0 || lon !== 0;
  }

  function scoreNumericPayload(values) {
    let score = 0;
    if (Number.isFinite(values.lat) && Number.isFinite(values.lon)) score += 2;
    if (isCoordinatePairValid(values.lat, values.lon, true)) score += 5;
    if (Math.abs(values.lat) >= 0.01 && Math.abs(values.lat) <= 90) score += 2;
    if (Math.abs(values.lon) >= 0.01 && Math.abs(values.lon) <= 180) score += 2;
    if (Number.isFinite(values.altitude) && Math.abs(values.altitude) <= 20000) score += 1;
    if (Number.isFinite(values.speed) && Math.abs(values.speed) <= 10000) score += 1;
    return score;
  }

  function readNumericPayload(payload, littleEndian) {
    const view = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
    return {
      lon: view.getFloat64(8, littleEndian),
      lat: view.getFloat64(16, littleEndian),
      altitude: view.getFloat32(24, littleEndian),
      speed: view.getFloat32(28, littleEndian),
    };
  }

  function decodePositionFrame(frame, preferredLittleEndian = null, messageId = POSITION_MESSAGE_ID) {
    if (!(frame instanceof Uint8Array)) frame = new Uint8Array(frame);
    if (frame.length < HEADER_LENGTH + CHECKSUM_LENGTH) throw new Error("RTK frame is too short");
    if (frame[0] !== FRAME_HEADER || frame[1] !== 0x01 || frame[2] !== 0x01 || frame[3] !== messageId) throw new Error("Not a rover information frame");
    const payloadLength = frame[5];
    if (frame.length !== HEADER_LENGTH + payloadLength + CHECKSUM_LENGTH) throw new Error("RTK frame length mismatch");
    if (payloadLength !== POSITION_PAYLOAD_LENGTH) throw new Error("Unsupported RTK payload length");
    if (sumChecksum(frame, frame.length - 1) !== frame[frame.length - 1]) throw new Error("RTK checksum mismatch");

    const payload = frame.subarray(HEADER_LENGTH, HEADER_LENGTH + payloadLength);
    const littleValues = readNumericPayload(payload, true);
    const bigValues = readNumericPayload(payload, false);
    const littleScore = scoreNumericPayload(littleValues);
    const bigScore = scoreNumericPayload(bigValues);
    let littleEndian = preferredLittleEndian;
    if (littleEndian === null) littleEndian = littleScore >= bigScore;
    const values = littleEndian ? littleValues : bigValues;
    const snValue = new DataView(payload.buffer, payload.byteOffset, 4).getUint32(0, littleEndian);

    return {
      deviceId: frame[1],
      systemId: frame[2],
      messageId: frame[3],
      sequence: frame[4],
      heartbeat: frame[4],
      payloadLength,
      sn: snValue.toString(16).padStart(8, "0").toUpperCase(),
      snRaw: bytesToCompactHex(payload.subarray(0, 4)),
      fixStatus: payload[4],
      satelliteCount: payload[5],
      signalStrength: messageId === POSITION_MESSAGE_ID ? new DataView(payload.buffer, payload.byteOffset, payload.byteLength).getInt8(6) : null,
      reserved: messageId === POSITION_MESSAGE_ID ? payload[7] : payload.slice(6, 8),
      lon: values.lon,
      lat: values.lat,
      altitude: values.altitude,
      speed: messageId === POSITION_MESSAGE_ID ? values.speed : null,
      littleEndian,
      endianConfidence: Math.abs(littleScore - bigScore),
      positionValid: isCoordinatePairValid(values.lat, values.lon),
      frame: frame.slice(),
    };
  }

  function decodeBaseParameterFrame(frame, littleEndian = true) {
    if (!(frame instanceof Uint8Array)) frame = new Uint8Array(frame);
    if (frame.length !== HEADER_LENGTH + BASE_PARAMETER_PAYLOAD_LENGTH + CHECKSUM_LENGTH) throw new Error("Base parameter frame length mismatch");
    if (frame[0] !== FRAME_HEADER || frame[1] !== 0x01 || frame[2] !== 0x01 || frame[3] !== 0x11) throw new Error("Not a base parameter frame");
    if (frame[5] !== BASE_PARAMETER_PAYLOAD_LENGTH) throw new Error("Base parameter payload length mismatch");
    if (sumChecksum(frame, frame.length - 1) !== frame[frame.length - 1]) throw new Error("RTK checksum mismatch");
    const payload = frame.subarray(HEADER_LENGTH, HEADER_LENGTH + BASE_PARAMETER_PAYLOAD_LENGTH);
    const view = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
    return {
      sequence: frame[4],
      heartbeat: frame[4],
      sn: view.getUint32(0, littleEndian).toString(16).padStart(8, "0").toUpperCase(),
      firmware: payload[4] + "." + payload[5] + "." + payload[6],
      firmwareParts: [payload[4], payload[5], payload[6]],
      workMode: payload[7],
      autoHopping: payload[8] === 1,
      country: payload[9],
      power: payload[10],
      reserved: payload[11],
      frequency: view.getUint16(12, littleEndian),
      trailingReserved: view.getUint16(14, littleEndian),
      littleEndian,
      frame: frame.slice(),
    };
  }

  class BaseParameterParser {
    constructor(options = {}) {
      this.buffer = [];
      this.littleEndian = options.littleEndian !== false;
    }

    reset() { this.buffer = []; }

    push(chunk) {
      if (chunk?.length) this.buffer.push(...chunk);
      const records = [];
      while (this.buffer.length >= HEADER_LENGTH + CHECKSUM_LENGTH) {
        const index = this.buffer.findIndex((value, i) => value === FRAME_HEADER && this.buffer[i + 1] === 0x01 && this.buffer[i + 2] === 0x01 && this.buffer[i + 3] === 0x11);
        if (index < 0) { this.buffer = this.buffer.slice(-3); break; }
        if (index > 0) this.buffer.splice(0, index);
        if (this.buffer.length < HEADER_LENGTH) break;
        if (this.buffer[5] !== BASE_PARAMETER_PAYLOAD_LENGTH) { this.buffer.shift(); continue; }
        const length = HEADER_LENGTH + BASE_PARAMETER_PAYLOAD_LENGTH + CHECKSUM_LENGTH;
        if (this.buffer.length < length) break;
        const frame = new Uint8Array(this.buffer.slice(0, length));
        if (sumChecksum(frame, length - 1) !== frame[length - 1]) { this.buffer.shift(); continue; }
        this.buffer.splice(0, length);
        records.push(decodeBaseParameterFrame(frame, this.littleEndian));
      }
      return records;
    }
  }

  function decodeBaseStationSnFrame(frame, littleEndian = true) {
    if (!(frame instanceof Uint8Array)) frame = new Uint8Array(frame);
    if (frame.length < HEADER_LENGTH + CHECKSUM_LENGTH) throw new Error("Base station SN frame is too short");
    if (frame[0] !== FRAME_HEADER || frame[1] !== 0x01 || frame[2] !== 0x01 || frame[3] !== 0x13) throw new Error("Not a base station SN frame");
    const payloadLength = frame[5];
    if (payloadLength % 5 !== 0 || frame.length !== HEADER_LENGTH + payloadLength + CHECKSUM_LENGTH) throw new Error("Base station SN frame length mismatch");
    if (sumChecksum(frame, frame.length - 1) !== frame[frame.length - 1]) throw new Error("RTK checksum mismatch");
    const payload = frame.subarray(HEADER_LENGTH, HEADER_LENGTH + payloadLength);
    const view = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
    const stations = [];
    for (let offset = 0; offset < payloadLength; offset += 5) {
      stations.push({
        sn: view.getUint32(offset, littleEndian).toString(16).padStart(8, "0").toUpperCase(),
        status: payload[offset + 4],
      });
    }
    return { sequence: frame[4], heartbeat: frame[4], payloadLength, stationSns: stations.map((station) => station.sn), stations, littleEndian, frame: frame.slice() };
  }

  class BaseStationSnParser {
    constructor(options = {}) { this.buffer = []; this.littleEndian = options.littleEndian !== false; }
    reset() { this.buffer = []; }
    push(chunk) {
      if (chunk?.length) this.buffer.push(...chunk);
      const records = [];
      while (this.buffer.length >= HEADER_LENGTH + CHECKSUM_LENGTH) {
        const index = this.buffer.findIndex((value, i) => value === FRAME_HEADER && this.buffer[i + 1] === 0x01 && this.buffer[i + 2] === 0x01 && this.buffer[i + 3] === 0x13);
        if (index < 0) { this.buffer = this.buffer.slice(-3); break; }
        if (index > 0) this.buffer.splice(0, index);
        if (this.buffer.length < HEADER_LENGTH) break;
        const payloadLength = this.buffer[5];
        if (payloadLength % 5 !== 0) { this.buffer.shift(); continue; }
        const length = HEADER_LENGTH + payloadLength + CHECKSUM_LENGTH;
        if (this.buffer.length < length) break;
        const frame = new Uint8Array(this.buffer.slice(0, length));
        if (sumChecksum(frame, length - 1) !== frame[length - 1]) { this.buffer.shift(); continue; }
        this.buffer.splice(0, length);
        records.push(decodeBaseStationSnFrame(frame, this.littleEndian));
      }
      return records;
    }
  }

  function decodeRoverParameterFrame(frame, littleEndian = true) {
    if (!(frame instanceof Uint8Array)) frame = new Uint8Array(frame);
    if (frame.length !== HEADER_LENGTH + ROVER_PARAMETER_PAYLOAD_LENGTH + CHECKSUM_LENGTH) throw new Error("Rover parameter frame length mismatch");
    if (frame[0] !== FRAME_HEADER || frame[1] !== 0x02 || frame[2] !== 0x01 || frame[3] !== 0x11) throw new Error("Not a rover parameter frame");
    if (frame[5] !== ROVER_PARAMETER_PAYLOAD_LENGTH) throw new Error("Rover parameter payload length mismatch");
    if (sumChecksum(frame, frame.length - 1) !== frame[frame.length - 1]) throw new Error("RTK checksum mismatch");
    const payload = frame.subarray(HEADER_LENGTH, HEADER_LENGTH + ROVER_PARAMETER_PAYLOAD_LENGTH);
    const view = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
    return {
      sequence: frame[4],
      heartbeat: frame[4],
      roverSn: view.getUint32(0, littleEndian).toString(16).padStart(8, "0").toUpperCase(),
      baseSn: view.getUint32(4, littleEndian).toString(16).padStart(8, "0").toUpperCase(),
      firmware: payload[8] + "." + payload[9] + "." + payload[10],
      firmwareParts: [payload[8], payload[9], payload[10]],
      workMode: payload[11],
      autoHopping: payload[12] === 1,
      country: payload[13],
      frequency: view.getUint16(14, littleEndian),
      power: payload[16],
      reserved: payload[17],
      baselineLength: view.getUint16(18, littleEndian),
      littleEndian,
      frame: frame.slice(),
    };
  }

  class RoverParameterParser {
    constructor(options = {}) { this.buffer = []; this.littleEndian = options.littleEndian !== false; }
    reset() { this.buffer = []; }
    push(chunk) {
      if (chunk?.length) this.buffer.push(...chunk);
      const records = [];
      while (this.buffer.length >= HEADER_LENGTH + CHECKSUM_LENGTH) {
        const index = this.buffer.findIndex((value, i) => value === FRAME_HEADER && this.buffer[i + 1] === 0x02 && this.buffer[i + 2] === 0x01 && this.buffer[i + 3] === 0x11);
        if (index < 0) { this.buffer = this.buffer.slice(-3); break; }
        if (index > 0) this.buffer.splice(0, index);
        if (this.buffer.length < HEADER_LENGTH) break;
        if (this.buffer[5] !== ROVER_PARAMETER_PAYLOAD_LENGTH) { this.buffer.shift(); continue; }
        const length = HEADER_LENGTH + ROVER_PARAMETER_PAYLOAD_LENGTH + CHECKSUM_LENGTH;
        if (this.buffer.length < length) break;
        const frame = new Uint8Array(this.buffer.slice(0, length));
        if (sumChecksum(frame, length - 1) !== frame[length - 1]) { this.buffer.shift(); continue; }
        this.buffer.splice(0, length);
        records.push(decodeRoverParameterFrame(frame, this.littleEndian));
      }
      return records;
    }
  }

  function decodeCommandResponseFrame(frame) {
    if (!(frame instanceof Uint8Array)) frame = new Uint8Array(frame);
    if (frame.length !== HEADER_LENGTH + COMMAND_RESPONSE_PAYLOAD_LENGTH + CHECKSUM_LENGTH) throw new Error("Command response frame length mismatch");
    if (frame[0] !== FRAME_HEADER || (frame[1] !== 0x01 && frame[1] !== 0x02) || frame[2] !== 0x01 || frame[3] !== 0x10) throw new Error("Not a command response frame");
    if (frame[5] !== COMMAND_RESPONSE_PAYLOAD_LENGTH) throw new Error("Command response payload length mismatch");
    if (sumChecksum(frame, frame.length - 1) !== frame[frame.length - 1]) throw new Error("RTK checksum mismatch");
    return {
      deviceId: frame[1],
      sequence: frame[4],
      heartbeat: frame[4],
      commandId: frame[6],
      status: frame[7],
      success: frame[7] === 0x00,
      frame: frame.slice(),
    };
  }

  class CommandResponseParser {
    constructor() { this.buffer = []; }
    reset() { this.buffer = []; }
    push(chunk) {
      if (chunk?.length) this.buffer.push(...chunk);
      const records = [];
      while (this.buffer.length >= HEADER_LENGTH + CHECKSUM_LENGTH) {
        const index = this.buffer.findIndex((value, i) => value === FRAME_HEADER && (this.buffer[i + 1] === 0x01 || this.buffer[i + 1] === 0x02) && this.buffer[i + 2] === 0x01 && this.buffer[i + 3] === 0x10);
        if (index < 0) { this.buffer = this.buffer.slice(-3); break; }
        if (index > 0) this.buffer.splice(0, index);
        if (this.buffer.length < HEADER_LENGTH) break;
        if (this.buffer[5] !== COMMAND_RESPONSE_PAYLOAD_LENGTH) { this.buffer.shift(); continue; }
        const length = HEADER_LENGTH + COMMAND_RESPONSE_PAYLOAD_LENGTH + CHECKSUM_LENGTH;
        if (this.buffer.length < length) break;
        const frame = new Uint8Array(this.buffer.slice(0, length));
        if (sumChecksum(frame, length - 1) !== frame[length - 1]) { this.buffer.shift(); continue; }
        this.buffer.splice(0, length);
        records.push(decodeCommandResponseFrame(frame));
      }
      return records;
    }
  }

  function buildProtocolFrame(deviceId, messageId, sequence, payload) {
    const frame = new Uint8Array(HEADER_LENGTH + payload.length + CHECKSUM_LENGTH);
    frame.set([FRAME_HEADER, deviceId, 0x01, messageId, sequence & 0xff, payload.length], 0);
    frame.set(payload, HEADER_LENGTH);
    frame[frame.length - 1] = sumChecksum(frame, frame.length - 1);
    return frame;
  }

  function buildBaseQuery(commandId, sequence = 0) {
    if (commandId !== 0x01 && commandId !== 0x02) throw new Error("Invalid base query command");
    return buildProtocolFrame(0x01, 0x01, sequence, new Uint8Array([commandId, 0x00]));
  }

  function buildBaseParameterQuery(sequence = 0) {
    return buildBaseQuery(0x01, sequence);
  }

  function buildBaseStationSnQuery(sequence = 0) {
    return buildBaseQuery(0x02, sequence);
  }

  function buildRoverParameterQuery(sequence = 0) {
    return buildProtocolFrame(0x02, 0x01, sequence, new Uint8Array([0x01, 0x00]));
  }

  function buildParameterWrite(deviceId, commandId, data, sequence = 0) {
    if (!Number.isInteger(commandId) || commandId < 0x01 || commandId > 0xff) throw new Error("Invalid parameter command");
    const commandData = data instanceof Uint8Array ? data : new Uint8Array(data || []);
    if (commandData.length > 254) throw new Error("Parameter data is too long");
    const payload = new Uint8Array(1 + commandData.length);
    payload[0] = commandId;
    payload.set(commandData, 1);
    return buildProtocolFrame(deviceId, 0x02, sequence, payload);
  }

  function buildRoverParameterWrite(commandId, data, sequence = 0) {
    return buildParameterWrite(0x02, commandId, data, sequence);
  }

  function buildBaseParameterWrite(commandId, data, sequence = 0) {
    return buildParameterWrite(0x01, commandId, data, sequence);
  }

  function buildBaseStationMembershipWrite(sn, status, sequence = 0, littleEndian = true) {
    if (!/^[0-9A-Fa-f]{8}$/.test(String(sn))) throw new Error("Invalid rover serial number");
    if (status !== 1 && status !== 2) throw new Error("Invalid rover membership status");
    const payload = new Uint8Array(6);
    payload[0] = 0x02;
    new DataView(payload.buffer).setUint32(1, parseInt(sn, 16), littleEndian);
    payload[5] = status;
    return buildProtocolFrame(0x01, 0x02, sequence, payload);
  }

  function buildBaseStationSnPollingWrite(stations, sequence = 0, littleEndian = true) {
    if (!Array.isArray(stations) || !stations.length || stations.length > 50) throw new Error("Invalid rover SN information");
    const payload = new Uint8Array(1 + stations.length * 5);
    payload[0] = 0x07;
    stations.forEach((station, index) => {
      const [sn, enabled] = Array.isArray(station) ? station : [station?.sn, station?.enabled];
      if (!/^[0-9A-Fa-f]{8}$/.test(String(sn))) throw new Error("Invalid rover serial number");
      const offset = 1 + index * 5;
      new DataView(payload.buffer, offset, 4).setUint32(0, parseInt(sn, 16), littleEndian);
      payload[offset + 4] = enabled ? 1 : 2;
    });
    return buildProtocolFrame(0x01, 0x02, sequence, payload);
  }

  class RtkFrameParser {
    constructor(options = {}) {
      this.messageId = options.messageId ?? POSITION_MESSAGE_ID;
      this.buffer = [];
      this.littleEndian = typeof options.littleEndian === "boolean" ? options.littleEndian : null;
      this.invalidFrames = 0;
      this.discardedBytes = 0;
    }

    reset() {
      this.buffer = [];
      this.littleEndian = null;
      this.invalidFrames = 0;
      this.discardedBytes = 0;
    }

    push(chunk) {
      if (chunk?.length) this.buffer.push(...chunk);
      const records = [];
      while (this.buffer.length >= HEADER_LENGTH + CHECKSUM_LENGTH) {
        const headerIndex = findSignature(this.buffer, this.messageId);
        if (headerIndex < 0) {
          const keepCount = Math.min(3, this.buffer.length);
          this.discardedBytes += this.buffer.length - keepCount;
          this.buffer = this.buffer.slice(-keepCount);
          break;
        }
        if (headerIndex > 0) {
          this.discardedBytes += headerIndex;
          this.buffer.splice(0, headerIndex);
        }
        if (this.buffer.length < HEADER_LENGTH + CHECKSUM_LENGTH) break;

        const payloadLength = this.buffer[5];
        if (payloadLength !== POSITION_PAYLOAD_LENGTH) {
          this.invalidFrames += 1;
          this.discardedBytes += 1;
          this.buffer.shift();
          continue;
        }
        const frameLength = HEADER_LENGTH + payloadLength + CHECKSUM_LENGTH;
        if (this.buffer.length < frameLength) break;
        const frame = new Uint8Array(this.buffer.slice(0, frameLength));
        if (sumChecksum(frame, frame.length - 1) !== frame[frame.length - 1]) {
          this.invalidFrames += 1;
          this.discardedBytes += 1;
          this.buffer.shift();
          continue;
        }
        this.buffer.splice(0, frameLength);
        const record = decodePositionFrame(frame, this.littleEndian, this.messageId);
        if (this.littleEndian === null && record.endianConfidence >= 2 && record.positionValid) {
          this.littleEndian = record.littleEndian;
        }
        records.push(record);
      }
      return records;
    }
  }

  class BasePositionParser extends RtkFrameParser {
    constructor(options = {}) { super({ ...options, messageId: 0x14 }); }
  }

  function decodeBasePositionFrame(frame, littleEndian = null) {
    return decodePositionFrame(frame, littleEndian, 0x14);
  }

  function findSignature(buffer, messageId = POSITION_MESSAGE_ID) {
    for (let i = 0; i <= buffer.length - 4; i += 1) {
      if (buffer[i] === FRAME_HEADER && buffer[i + 1] === 0x01 && buffer[i + 2] === 0x01 && buffer[i + 3] === messageId) return i;
    }
    return -1;
  }

  function containsValidPositionFrame(bytes) {
    const parser = new RtkFrameParser();
    return parser.push(bytes).length > 0;
  }

  const api = {
    FRAME_HEADER,
    HEADER_LENGTH,
    POSITION_PAYLOAD_LENGTH,
    POSITION_MESSAGE_ID,
    BASE_PARAMETER_PAYLOAD_LENGTH,
    ROVER_PARAMETER_PAYLOAD_LENGTH,
    COMMAND_RESPONSE_PAYLOAD_LENGTH,
    BaseParameterParser,
    BaseStationSnParser,
    RoverParameterParser,
    CommandResponseParser,
    RtkFrameParser,
    BasePositionParser,
    decodeBasePositionFrame,
    containsValidPositionFrame,
    decodePositionFrame,
    decodeBaseParameterFrame,
    decodeBaseStationSnFrame,
    decodeRoverParameterFrame,
    decodeCommandResponseFrame,
    buildBaseParameterQuery,
    buildBaseStationSnQuery,
    buildBaseParameterWrite,
    buildRoverParameterQuery,
    buildRoverParameterWrite,
    buildBaseStationMembershipWrite,
    buildBaseStationSnPollingWrite,
    isCoordinatePairValid,
    sumChecksum,
  };

  global.RtkProtocol = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);

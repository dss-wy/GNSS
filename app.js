const SYSTEMS = {
  GPS: { name: "GPS", color: "#27c857" },
  GLC: { name: "GLC", color: "#2b92e5" },
  GAI: { name: "GAI", color: "#a34bd5" },
  BDS: { name: "BDS", color: "#ff6230" },
  IRN: { name: "IRN", color: "#c4762e" },
};

const TALKER_SYSTEM = {
  GP: "GPS",
  GL: "GLC",
  GA: "GAI",
  GB: "BDS",
  BD: "BDS",
  GI: "IRN",
  IR: "IRN",
};

const MESSAGE_TYPES = ["GGA", "GLL", "GSA", "GSV", "RMC", "VTG"];

const state = {
  nmeaLines: [],
  messageCount: Object.fromEntries(MESSAGE_TYPES.map((type) => [type, 0])),
  satellites: new Map(),
  usedPrns: new Set(),
  scatterPoints: [],
  scatterCenter: null,
  mapMode: "road",
  mapZoom: 1,
  source: "示例",
  running: false,
  reader: null,
  port: null,
  replayTimer: null,
  replayIndex: 0,
  startTime: Date.now(),
  epochs: 0,
  fix: {
    utc: "00:00:00.000",
    lat: 40,
    lon: 116,
    altitude: 110,
    speedKmh: 0,
    course: 0,
    satelliteCount: 0,
    hdop: 0,
    vdop: 0,
    mode: "--",
    fixType: 0,
    quality: "0",
  },
};

const els = {};
const canvasIds = ["skyCanvas", "signalCanvas", "scatterCanvas", "mapCanvas"];

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  bindEvents();
  seedInitialData();
  setInterval(updateRuntime, 1000);
  new ResizeObserver(renderAll).observe(document.querySelector(".workspace"));
  renderAll();
});

function bindElements() {
  [
    "connectButton",
    "disconnectButton",
    "baudRate",
    "replayButton",
    "pauseButton",
    "loadFileButton",
    "fileInput",
    "clearButton",
    "nmeaLog",
    "commandMode",
    "commandInput",
    "sendButton",
    "inViewOnly",
    "signalLegend",
    "visibleSatelliteCount",
    "satelliteRows",
    "centerLon",
    "centerLat",
    "applyCenterButton",
    "saveScatterButton",
    "clearScatterButton",
    "zoomInButton",
    "zoomOutButton",
    "connectionState",
    "logState",
    "sourceState",
    "debugState",
    "statusLed",
    "fixState",
    "idleState",
    "epochState",
    "runtimeState",
    "utcValue",
    "lonValue",
    "latValue",
    "altValue",
    "speedValue",
    "courseValue",
    "satCountValue",
    "hdopValue",
    "vdopValue",
    "modeValue",
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });

  canvasIds.forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function bindEvents() {
  els.connectButton.addEventListener("click", connectSerial);
  els.disconnectButton.addEventListener("click", disconnectSerial);
  els.replayButton.addEventListener("click", startReplay);
  els.pauseButton.addEventListener("click", pauseReplay);
  els.clearButton.addEventListener("click", clearData);
  els.loadFileButton.addEventListener("click", () => els.fileInput.click());
  els.fileInput.addEventListener("change", loadFile);
  els.sendButton.addEventListener("click", sendCommand);
  els.inViewOnly.addEventListener("change", renderAll);
  els.clearScatterButton.addEventListener("click", () => {
    state.scatterPoints = [];
    renderAll();
    setStatus("散点已清除");
  });
  els.saveScatterButton.addEventListener("click", downloadScatterCsv);
  els.zoomInButton.addEventListener("click", () => {
    state.mapZoom = Math.min(3, state.mapZoom + 0.2);
    renderMap();
  });
  els.zoomOutButton.addEventListener("click", () => {
    state.mapZoom = Math.max(0.6, state.mapZoom - 0.2);
    renderMap();
  });

  document.querySelectorAll("[data-system]").forEach((checkbox) => {
    checkbox.addEventListener("change", renderAll);
  });

  document.querySelectorAll('input[name="mapMode"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
      state.mapMode = event.target.value;
      renderMap();
    });
  });
}

function seedInitialData() {
  const lines = buildSampleNmea();
  lines.forEach((line) => ingestLine(line, { render: false }));
  setStatus("示例数据已加载");
}

function buildSampleNmea() {
  const epochs = [
    { time: "020314.000", lat: 40.000000, lon: 116.000000, alt: 110.0, speed: 0.0, course: 0.0 },
    { time: "020315.000", lat: 40.000012, lon: 116.000018, alt: 110.2, speed: 0.2, course: 32.0 },
    { time: "020316.000", lat: 40.000021, lon: 116.000034, alt: 110.1, speed: 0.3, course: 45.0 },
    { time: "020317.000", lat: 40.000028, lon: 116.000040, alt: 110.4, speed: 0.1, course: 54.0 },
  ];

  return epochs.flatMap((epoch) => {
    const lat = decimalToNmeaCoord(epoch.lat, "lat");
    const lon = decimalToNmeaCoord(epoch.lon, "lon");
    return [
      `$GNRMC,${epoch.time},A,${lat.value},${lat.hemi},${lon.value},${lon.hemi},${(epoch.speed / 1.852).toFixed(2)},${epoch.course.toFixed(1)},290626,,,A*00`,
      `$GNGGA,${epoch.time},${lat.value},${lat.hemi},${lon.value},${lon.hemi},1,14,0.8,${epoch.alt.toFixed(1)},M,0.0,M,,*00`,
      "$GNGSA,A,3,03,07,12,16,22,29,65,72,201,203,302,305,1.6,0.8,1.1*00",
      "$GPGSV,3,1,10,03,62,043,45,07,51,182,42,12,38,260,40,16,24,318,35*00",
      "$GPGSV,3,2,10,22,72,112,47,29,18,058,30,31,14,304,26,32,08,145,22*00",
      "$GPGSV,3,3,10,01,11,215,21,11,05,021,18*00",
      "$GLGSV,2,1,07,65,48,074,39,72,34,155,36,78,21,246,31,80,12,320,28*00",
      "$GLGSV,2,2,07,81,64,010,44,82,28,110,33,88,07,278,20*00",
      "$GAGSV,1,1,04,301,54,125,41,302,45,221,38,305,30,045,34,309,18,310,29*00",
      "$GBGSV,1,1,04,201,58,098,43,203,36,174,37,209,23,276,32,214,12,330,24*00",
      `$GNGLL,${lat.value},${lat.hemi},${lon.value},${lon.hemi},${epoch.time},A,A*00`,
      `$GNVTG,${epoch.course.toFixed(1)},T,,M,${(epoch.speed / 1.852).toFixed(2)},N,${epoch.speed.toFixed(2)},K,A*00`,
    ];
  });
}

function decimalToNmeaCoord(value, kind) {
  const abs = Math.abs(value);
  const degrees = Math.floor(abs);
  const minutes = (abs - degrees) * 60;
  const degreeWidth = kind === "lat" ? 2 : 3;
  return {
    value: `${String(degrees).padStart(degreeWidth, "0")}${minutes.toFixed(4).padStart(7, "0")}`,
    hemi: kind === "lat" ? (value >= 0 ? "N" : "S") : value >= 0 ? "E" : "W",
  };
}

function startReplay() {
  pauseReplay();
  state.source = "示例回放";
  state.replayIndex = 0;
  const lines = buildSampleNmea();
  state.replayTimer = setInterval(() => {
    ingestLine(lines[state.replayIndex % lines.length]);
    state.replayIndex += 1;
  }, 260);
  setRunning(true, "示例回放中");
}

function pauseReplay() {
  if (state.replayTimer) {
    clearInterval(state.replayTimer);
    state.replayTimer = null;
  }
  if (!state.port) {
    setRunning(false, "空闲");
  }
}

async function connectSerial() {
  if (!("serial" in navigator)) {
    setStatus("当前浏览器不支持Web Serial，请使用Chrome或Edge");
    return;
  }

  pauseReplay();
  try {
    const baudRate = Number(els.baudRate.value);
    state.port = await navigator.serial.requestPort();
    await state.port.open({ baudRate, dataBits: 8, stopBits: 1, parity: "none", flowControl: "none" });
    state.source = `串口 ${baudRate}`;
    setRunning(true, "串口读取中");
    readSerialLoop();
  } catch (error) {
    state.port = null;
    setRunning(false, "串口打开失败");
    setStatus(error.message || "串口打开失败");
  }
}

async function readSerialLoop() {
  const decoder = new TextDecoder();
  let buffer = "";
  try {
    while (state.port && state.port.readable) {
      state.reader = state.port.readable.getReader();
      try {
        while (true) {
          const { value, done } = await state.reader.read();
          if (done) {
            break;
          }
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split(/\r?\n/);
          buffer = lines.pop() || "";
          lines.forEach((line) => ingestLine(line));
        }
      } finally {
        state.reader.releaseLock();
        state.reader = null;
      }
    }
  } catch (error) {
    if (state.port) {
      setStatus(error.message || "串口读取中断");
    }
  } finally {
    if (state.port) {
      await disconnectSerial();
    }
  }
}

async function disconnectSerial() {
  pauseReplay();
  try {
    if (state.reader) {
      await state.reader.cancel();
      state.reader.releaseLock();
      state.reader = null;
    }
    if (state.port) {
      await state.port.close();
      state.port = null;
    }
  } catch (error) {
    setStatus(error.message || "串口关闭异常");
  }
  setRunning(false, "已断开");
}

async function sendCommand() {
  const text = els.commandInput.value.trim();
  if (!text) {
    return;
  }

  if (!state.port || !state.port.writable) {
    setStatus("串口未连接，发送内容仅保留在输入框");
    return;
  }

  const writer = state.port.writable.getWriter();
  try {
    const payload = els.commandMode.value === "hex" ? parseHex(text) : new TextEncoder().encode(`${text}\r\n`);
    await writer.write(payload);
    setStatus("命令已发送");
  } catch (error) {
    setStatus(error.message || "命令发送失败");
  } finally {
    writer.releaseLock();
  }
}

function parseHex(text) {
  const bytes = text
    .replace(/0x/gi, "")
    .split(/[\s,]+/)
    .filter(Boolean)
    .map((part) => Number.parseInt(part, 16));
  if (bytes.some((byte) => !Number.isFinite(byte) || byte < 0 || byte > 255)) {
    throw new Error("hex格式不正确");
  }
  return new Uint8Array(bytes);
}

function loadFile(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    pauseReplay();
    clearData({ keepStatus: true });
    const text = String(reader.result || "");
    const lines = text.split(/\r?\n/).filter((line) => line.includes("$"));
    lines.forEach((line) => ingestLine(line, { render: false }));
    state.source = file.name;
    setRunning(false, "日志已加载");
    renderAll();
  };
  reader.readAsText(file);
  event.target.value = "";
}

function clearData(options = {}) {
  pauseReplay();
  state.nmeaLines = [];
  state.messageCount = Object.fromEntries(MESSAGE_TYPES.map((type) => [type, 0]));
  state.satellites.clear();
  state.usedPrns.clear();
  state.scatterPoints = [];
  state.scatterCenter = null;
  state.epochs = 0;
  state.fix = {
    utc: "00:00:00.000",
    lat: 0,
    lon: 0,
    altitude: 0,
    speedKmh: 0,
    course: 0,
    satelliteCount: 0,
    hdop: 0,
    vdop: 0,
    mode: "--",
    fixType: 0,
    quality: "0",
  };
  if (!options.keepStatus) {
    setStatus("已清空");
  }
  renderAll();
}

function ingestLine(input, options = {}) {
  const raw = String(input || "").trim();
  if (!raw) {
    return;
  }

  const index = raw.indexOf("$");
  if (index < 0) {
    return;
  }

  const line = raw.slice(index);
  state.nmeaLines.push(line);
  if (state.nmeaLines.length > 500) {
    state.nmeaLines.splice(0, state.nmeaLines.length - 500);
  }

  parseNmea(line);
  if (options.render !== false) {
    renderAll();
  }
}

function parseNmea(line) {
  const sentence = line.split("*")[0].replace("$", "");
  const parts = sentence.split(",");
  const id = parts[0] || "";
  const type = id.slice(2);
  const talker = id.slice(0, 2);

  if (state.messageCount[type] !== undefined) {
    state.messageCount[type] += 1;
  }

  switch (type) {
    case "GGA":
      parseGga(parts);
      break;
    case "RMC":
      parseRmc(parts);
      break;
    case "GLL":
      parseGll(parts);
      break;
    case "GSA":
      parseGsa(parts);
      break;
    case "GSV":
      parseGsv(parts, talker);
      break;
    case "VTG":
      parseVtg(parts);
      break;
    default:
      break;
  }
}

function parseGga(parts) {
  state.fix.utc = parseUtc(parts[1]) || state.fix.utc;
  const lat = parseCoord(parts[2], parts[3]);
  const lon = parseCoord(parts[4], parts[5]);
  if (Number.isFinite(lat) && Number.isFinite(lon)) {
    updatePosition(lat, lon);
  }
  state.fix.quality = parts[6] || "0";
  state.fix.satelliteCount = parseNumber(parts[7], state.fix.satelliteCount);
  state.fix.hdop = parseNumber(parts[8], state.fix.hdop);
  state.fix.altitude = parseNumber(parts[9], state.fix.altitude);
  state.fix.mode = fixModeLabel(state.fix.fixType, state.fix.quality);
  state.epochs += 1;
}

function parseRmc(parts) {
  state.fix.utc = parseUtc(parts[1]) || state.fix.utc;
  const lat = parseCoord(parts[3], parts[4]);
  const lon = parseCoord(parts[5], parts[6]);
  if (parts[2] === "A" && Number.isFinite(lat) && Number.isFinite(lon)) {
    updatePosition(lat, lon);
  }
  state.fix.speedKmh = parseNumber(parts[7], 0) * 1.852;
  state.fix.course = parseNumber(parts[8], state.fix.course);
  state.fix.mode = parts[12] ? parts[12] : state.fix.mode;
}

function parseGll(parts) {
  const lat = parseCoord(parts[1], parts[2]);
  const lon = parseCoord(parts[3], parts[4]);
  if (parts[6] === "A" && Number.isFinite(lat) && Number.isFinite(lon)) {
    updatePosition(lat, lon);
  }
  state.fix.utc = parseUtc(parts[5]) || state.fix.utc;
}

function parseGsa(parts) {
  state.fix.fixType = Number.parseInt(parts[2] || "0", 10) || 0;
  state.usedPrns = new Set(parts.slice(3, 15).filter(Boolean));
  state.fix.hdop = parseNumber(parts[16], state.fix.hdop);
  state.fix.vdop = parseNumber(parts[17], state.fix.vdop);
  state.fix.mode = fixModeLabel(state.fix.fixType, state.fix.quality);
}

function parseGsv(parts, talker) {
  const system = TALKER_SYSTEM[talker] || "GPS";
  state.fix.satelliteCount = Math.max(state.fix.satelliteCount, parseNumber(parts[3], 0));
  for (let index = 4; index + 3 < parts.length; index += 4) {
    const prn = parts[index];
    if (!prn) {
      continue;
    }
    const satellite = {
      id: `${system}-${prn}`,
      system,
      prn,
      elevation: parseNumber(parts[index + 1], 0),
      azimuth: parseNumber(parts[index + 2], 0),
      snr: parseNumber(parts[index + 3], 0),
      lastSeen: Date.now(),
    };
    state.satellites.set(satellite.id, satellite);
  }
}

function parseVtg(parts) {
  state.fix.course = parseNumber(parts[1], state.fix.course);
  state.fix.speedKmh = parseNumber(parts[7], state.fix.speedKmh);
}

function parseUtc(value) {
  if (!value || value.length < 6) {
    return "";
  }
  const hour = value.slice(0, 2);
  const minute = value.slice(2, 4);
  const second = value.slice(4, 6);
  const ms = value.includes(".") ? value.split(".")[1].padEnd(3, "0").slice(0, 3) : "000";
  return `${hour}:${minute}:${second}.${ms}`;
}

function parseCoord(value, hemi) {
  if (!value || !hemi) {
    return NaN;
  }
  const degreeLength = hemi === "N" || hemi === "S" ? 2 : 3;
  const degrees = Number.parseFloat(value.slice(0, degreeLength));
  const minutes = Number.parseFloat(value.slice(degreeLength));
  if (!Number.isFinite(degrees) || !Number.isFinite(minutes)) {
    return NaN;
  }
  const decimal = degrees + minutes / 60;
  return hemi === "S" || hemi === "W" ? -decimal : decimal;
}

function parseNumber(value, fallback) {
  const number = Number.parseFloat(value);
  return Number.isFinite(number) ? number : fallback;
}

function updatePosition(lat, lon) {
  state.fix.lat = lat;
  state.fix.lon = lon;
  if (!state.scatterCenter) {
    state.scatterCenter = { lat, lon };
  }
  state.scatterPoints.push({ lat, lon, time: Date.now() });
  if (state.scatterPoints.length > 600) {
    state.scatterPoints.splice(0, state.scatterPoints.length - 600);
  }
}

function fixModeLabel(fixType, quality) {
  if (fixType >= 3 || Number(quality) > 0) {
    return fixType >= 3 ? "3D" : "2D";
  }
  return "--";
}

function renderAll() {
  renderNmea();
  renderMessageCounts();
  renderInfo();
  renderLegend();
  renderSatelliteTable();
  renderSky();
  renderSignal();
  renderScatter();
  renderMap();
  updateRuntime();
}

function renderNmea() {
  els.nmeaLog.textContent = state.nmeaLines.slice(-180).join("\n");
  els.nmeaLog.scrollTop = els.nmeaLog.scrollHeight;
}

function renderMessageCounts() {
  MESSAGE_TYPES.forEach((type) => {
    const el = document.getElementById(`count${type}`);
    if (el) {
      el.textContent = state.messageCount[type];
    }
  });
}

function renderInfo() {
  setValue("utcValue", state.fix.utc);
  setValue("lonValue", formatNumber(state.fix.lon, 5));
  setValue("latValue", formatNumber(state.fix.lat, 5));
  setValue("altValue", formatNumber(state.fix.altitude, 5));
  setValue("speedValue", formatNumber(state.fix.speedKmh, 3));
  setValue("courseValue", formatNumber(state.fix.course, 3));
  setValue("satCountValue", String(state.fix.satelliteCount || 0));
  setValue("hdopValue", formatNumber(state.fix.hdop, 3));
  setValue("vdopValue", formatNumber(state.fix.vdop, 3));
  setValue("modeValue", state.fix.mode);
  els.fixState.textContent = state.fix.mode === "--" ? "未定位" : "已定位";
  els.sourceState.textContent = state.source || "观测量未输出";
  els.epochState.textContent = `${state.epochs}/${state.nmeaLines.length}`;
}

function setValue(id, value) {
  if (els[id]) {
    els[id].value = value;
  }
}

function renderLegend() {
  const satellites = getFilteredSatellites();
  const summary = Object.keys(SYSTEMS).map((system) => {
    const list = satellites.filter((sat) => sat.system === system);
    const avg = list.length ? list.reduce((sum, sat) => sum + sat.snr, 0) / list.length : 0;
    return `<span><i class="dot ${system.toLowerCase()}"></i>${system}${avg.toFixed(1)}</span>`;
  });
  els.signalLegend.innerHTML = summary.join("");
}

function renderSatelliteTable() {
  const satellites = getFilteredSatellites().sort((a, b) => a.system.localeCompare(b.system) || Number(a.prn) - Number(b.prn));
  els.visibleSatelliteCount.textContent = satellites.length;
  if (!satellites.length) {
    els.satelliteRows.innerHTML = '<tr><td colspan="5">暂无卫星数据</td></tr>';
    return;
  }

  els.satelliteRows.innerHTML = satellites
    .map(
      (sat) => `
        <tr>
          <td>${sat.system}</td>
          <td>${sat.prn}</td>
          <td>${formatNumber(sat.elevation, 0)}</td>
          <td>${formatNumber(sat.azimuth, 0)}</td>
          <td>${formatNumber(sat.snr, 0)}</td>
        </tr>
      `,
    )
    .join("");
}

function getFilteredSatellites() {
  const enabled = new Set(
    [...document.querySelectorAll("[data-system]")]
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.dataset.system),
  );
  const now = Date.now();
  return [...state.satellites.values()].filter((sat) => {
    if (!enabled.has(sat.system)) {
      return false;
    }
    if (els.inViewOnly.checked && now - sat.lastSeen > 12000) {
      return false;
    }
    return true;
  });
}

function prepareCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const width = Math.max(10, Math.floor(rect.width * ratio));
  const height = Math.max(10, Math.floor(rect.height * ratio));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);
  return { ctx, width: rect.width, height: rect.height };
}

function renderSky() {
  const { ctx, width, height } = prepareCanvas(els.skyCanvas);
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.max(20, Math.min(width, height) * 0.43);

  ctx.fillStyle = "#c9f5cf";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "rgba(71, 93, 135, 0.55)";
  ctx.lineWidth = 1;
  ctx.font = "16px Consolas, monospace";
  ctx.fillStyle = "#8a2be2";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (let elevation = 15; elevation <= 75; elevation += 15) {
    const ring = ((90 - elevation) / 90) * radius;
    ctx.beginPath();
    ctx.arc(cx, cy, ring, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillText(String(elevation), cx + 36, cy - ring + 10);
  }

  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();
  drawLine(ctx, cx - radius, cy, cx + radius, cy, "rgba(71, 93, 135, 0.55)", [8, 5]);
  drawLine(ctx, cx, cy - radius, cx, cy + radius, "rgba(71, 93, 135, 0.55)", [8, 5]);

  [
    ["N", cx, cy - radius - 14],
    ["E", cx + radius + 14, cy],
    ["S", cx, cy + radius + 14],
    ["W", cx - radius - 14, cy],
  ].forEach(([label, x, y]) => ctx.fillText(label, x, y));

  for (let az = 30; az < 360; az += 30) {
    const angle = ((az - 90) * Math.PI) / 180;
    const x = cx + Math.cos(angle) * (radius + 18);
    const y = cy + Math.sin(angle) * (radius + 18);
    ctx.fillText(String(az), x, y);
  }

  getFilteredSatellites().forEach((sat) => {
    const satRadius = ((90 - clamp(sat.elevation, 0, 90)) / 90) * radius;
    const angle = ((sat.azimuth - 90) * Math.PI) / 180;
    const x = cx + Math.cos(angle) * satRadius;
    const y = cy + Math.sin(angle) * satRadius;
    const color = SYSTEMS[sat.system]?.color || "#333";
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#101010";
    ctx.font = "12px Arial";
    ctx.fillText(sat.prn, x, y + 18);
  });
}

function renderSignal() {
  const { ctx, width, height } = prepareCanvas(els.signalCanvas);
  ctx.fillStyle = "#c9f5cf";
  ctx.fillRect(0, 0, width, height);

  const left = 48;
  const right = 16;
  const top = 20;
  const bottom = 44;
  const chartWidth = width - left - right;
  const chartHeight = height - top - bottom;

  ctx.font = "14px Consolas, monospace";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (let value = 10; value <= 50; value += 10) {
    const y = top + chartHeight - (value / 60) * chartHeight;
    drawLine(ctx, left, y, width - right, y, "rgba(74, 112, 83, 0.55)", value === 40 ? [] : [7, 6]);
    ctx.fillStyle = "#111";
    ctx.fillText(String(value), left - 8, y);
  }
  drawLine(ctx, left, top + chartHeight, width - right, top + chartHeight, "rgba(74, 112, 83, 0.7)", []);

  const satellites = getFilteredSatellites().sort((a, b) => a.system.localeCompare(b.system) || Number(a.prn) - Number(b.prn));
  if (!satellites.length) {
    ctx.fillStyle = "#59625f";
    ctx.textAlign = "center";
    ctx.fillText("暂无信号数据", width / 2, height / 2);
    return;
  }

  const barWidth = Math.max(10, Math.min(28, chartWidth / satellites.length - 6));
  const gap = Math.max(4, (chartWidth - satellites.length * barWidth) / Math.max(1, satellites.length + 1));
  satellites.forEach((sat, index) => {
    const x = left + gap + index * (barWidth + gap);
    const barHeight = clamp(sat.snr, 0, 60) / 60 * chartHeight;
    const y = top + chartHeight - barHeight;
    ctx.fillStyle = SYSTEMS[sat.system]?.color || "#333";
    ctx.fillRect(x, y, barWidth, barHeight);
    ctx.fillStyle = "#111";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.font = "12px Consolas, monospace";
    ctx.fillText(sat.prn, x + barWidth / 2, top + chartHeight + 8);
  });
}

function renderScatter() {
  const { ctx, width, height } = prepareCanvas(els.scatterCanvas);
  ctx.fillStyle = "#c9f5cf";
  ctx.fillRect(0, 0, width, height);

  const pad = 30;
  const plotWidth = width - pad * 2;
  const plotHeight = height - pad * 2;
  const cx = width / 2;
  const cy = height / 2;
  const center = state.scatterCenter || { lat: state.fix.lat, lon: state.fix.lon };
  const localPoints = state.scatterPoints.map((point) => toLocalMeters(point, center));
  const maxDistance = Math.max(1, ...localPoints.map((point) => Math.hypot(point.x, point.y)));
  const range = Math.max(1, Math.ceil(maxDistance * 1.2 * 1000) / 1000);
  const scale = Math.min(plotWidth, plotHeight) / 2 / range;

  ctx.strokeStyle = "rgba(208, 145, 188, 0.42)";
  ctx.lineWidth = 1;
  ctx.setLineDash([2, 8]);
  for (let i = -4; i <= 4; i += 1) {
    const x = cx + (i * plotWidth) / 8;
    const y = cy + (i * plotHeight) / 8;
    drawLine(ctx, x, pad, x, height - pad, "rgba(208, 145, 188, 0.42)", [2, 8]);
    drawLine(ctx, pad, y, width - pad, y, "rgba(208, 145, 188, 0.42)", [2, 8]);
  }
  drawLine(ctx, pad, cy, width - pad, cy, "#6f7f72", []);
  drawLine(ctx, cx, pad, cx, height - pad, "#6f7f72", []);
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.arc(cx, cy, Math.min(plotWidth, plotHeight) * 0.24, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(88, 105, 86, 0.6)";
  ctx.stroke();

  localPoints.forEach((point, index) => {
    const x = cx + point.x * scale;
    const y = cy - point.y * scale;
    ctx.fillStyle = index === localPoints.length - 1 ? "#ff0000" : "#1c8f37";
    ctx.beginPath();
    ctx.arc(x, y, index === localPoints.length - 1 ? 8 : 3, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "#111";
  ctx.font = "16px Consolas, monospace";
  ctx.textAlign = "left";
  ctx.fillText(`Horizontal Error: Min=0.000m, Max=${range.toFixed(3)}m`, pad, 20);
  ctx.fillText(`Lon:${formatNumber(state.fix.lon, 7)} Lat:${formatNumber(state.fix.lat, 7)}`, pad, 40);
  ctx.textAlign = "right";
  ctx.fillText(`R = ${range.toFixed(3)} m`, width - pad, height - 24);
}

function renderMap() {
  const { ctx, width, height } = prepareCanvas(els.mapCanvas);
  const satellite = state.mapMode === "satellite";
  const bg = satellite ? "#2f4338" : "#f5eddf";
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  if (satellite) {
    drawSatelliteMap(ctx, width, height);
  } else {
    drawRoadMap(ctx, width, height);
  }

  const zoom = state.mapZoom;
  const x = width / 2 + Math.sin(state.fix.lon * 12) * 18 * zoom;
  const y = height / 2 - Math.sin(state.fix.lat * 12) * 18 * zoom;
  ctx.fillStyle = "#d72828";
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y, 9, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#111";
  ctx.font = "14px Microsoft YaHei";
  ctx.textAlign = "center";
  ctx.fillText("GNSS", x, y - 18);
}

function drawRoadMap(ctx, width, height) {
  ctx.fillStyle = "#e2f0d1";
  ctx.fillRect(width * 0.68, 0, width * 0.32, height);
  ctx.fillStyle = "#fbf6e9";
  ctx.fillRect(0, 0, width * 0.72, height);
  drawWideLine(ctx, -30, height * 0.78, width * 0.72, height * 0.28, "#f7d33b", 22);
  drawWideLine(ctx, -40, height * 0.78, width * 0.73, height * 0.28, "#fff9d8", 13);
  drawWideLine(ctx, width * 0.2, -20, width * 0.98, height * 0.95, "#ffffff", 22);
  drawWideLine(ctx, width * 0.2, -20, width * 0.98, height * 0.95, "#d9bcbc", 3);
  drawWideLine(ctx, -10, height * 0.32, width * 0.88, height * 0.42, "#ffffff", 16);
  drawWideLine(ctx, -10, height * 0.32, width * 0.88, height * 0.42, "#e1d8c4", 2);
  ctx.fillStyle = "#6b7280";
  ctx.font = "18px Microsoft YaHei";
  ctx.fillText("本地地图", width * 0.18, height * 0.18);
  ctx.fillText("定位轨迹", width * 0.72, height * 0.7);
}

function drawSatelliteMap(ctx, width, height) {
  for (let y = 0; y < height; y += 18) {
    for (let x = 0; x < width; x += 18) {
      const shade = (Math.sin(x * 0.06) + Math.cos(y * 0.05)) * 12;
      ctx.fillStyle = `rgb(${54 + shade}, ${83 + shade}, ${63 + shade})`;
      ctx.fillRect(x, y, 18, 18);
    }
  }
  drawWideLine(ctx, -20, height * 0.62, width, height * 0.45, "rgba(202, 214, 188, 0.55)", 8);
  drawWideLine(ctx, width * 0.12, -10, width * 0.84, height, "rgba(202, 214, 188, 0.45)", 7);
}

function drawWideLine(ctx, x1, y1, x2, y2, color, width) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

function drawLine(ctx, x1, y1, x2, y2, color, dash) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.setLineDash(dash || []);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

function toLocalMeters(point, center) {
  const latRad = (center.lat * Math.PI) / 180;
  return {
    x: (point.lon - center.lon) * 111320 * Math.cos(latRad),
    y: (point.lat - center.lat) * 110540,
  };
}

function formatNumber(value, digits) {
  return Number.isFinite(value) ? value.toFixed(digits) : "--";
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function setRunning(active, text) {
  state.running = active;
  els.connectionState.textContent = active ? "连接" : "断开";
  els.idleState.textContent = text || (active ? "运行中" : "空闲");
  els.statusLed.classList.toggle("active", active);
}

function setStatus(text) {
  els.idleState.textContent = text;
}

function updateRuntime() {
  const seconds = Math.floor((Date.now() - state.startTime) / 1000);
  const hour = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minute = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const second = String(seconds % 60).padStart(2, "0");
  els.runtimeState.textContent = `运行时间${hour}:${minute}:${second}`;
}

function downloadScatterCsv() {
  if (!state.scatterPoints.length) {
    setStatus("暂无散点可保存");
    return;
  }
  const rows = ["lat,lon,time", ...state.scatterPoints.map((point) => `${point.lat},${point.lon},${new Date(point.time).toISOString()}`)];
  const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `gnss-scatter-${Date.now()}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
  setStatus("散点已保存");
}

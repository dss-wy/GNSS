const SYSTEMS = {
  GPS: { name: "GPS", color: "#27c857" },
  GLC: { name: "GLC", color: "#2b92e5" },
  GAI: { name: "GAI", color: "#a34bd5" },
  BDS: { name: "BDS", color: "#ff6230" },
  IRN: { name: "IRN", color: "#c4762e" },
  QZS: { name: "QZS", color: "#6b8f00" },
};

const TALKER_SYSTEM = {
  GP: "GPS", GL: "GLC", GA: "GAI", GB: "BDS", BD: "BDS", GI: "IRN", IR: "IRN",
};

const MESSAGE_TYPES = ["GGA", "GLL", "GSA", "GSV", "RMC", "VTG"];
const STORAGE_KEYS = {
  language: "gnss-web-language",
  theme: "gnss-web-theme",
};
const I18N = {
  zh: {
    "app.title": "GNSS网页版上位机",
    "nav.main": "主菜单",
    "nav.connection": "连接",
    "nav.view": "视图",
    "nav.tools": "工具",
    "nav.replay": "回放",
    "nav.settings": "设置",
    "nav.help": "帮助",
    "help.manual": "CORVON GNSS Tool手册",
    "toolbar.openSerial": "打开串口",
    "toolbar.closeSerial": "关闭串口",
    "toolbar.baudRate": "波特率",
    "toolbar.autoDetect": "自动识别",
    "toolbar.restoreDefault": "恢复默认输出",
    "toolbar.pause": "暂停",
    "toolbar.start": "开始",
    "toolbar.loadLog": "加载日志",
    "toolbar.clear": "清空",
    "panel.nmea": "NMEA视图",
    "panel.ubx": "UBX视图",
    "panel.signal": "信号视图",
    "panel.message": "消息视图",
    "panel.scatter": "散点图",
    "panel.map": "地图视图",
    "nmea.sendMode": "发送格式",
    "nmea.sendContent": "发送内容",
    "common.send": "发送",
    "common.retry": "重试",
    "common.apply": "Apply",
    "common.save": "保存",
    "common.clear": "清除",
    "common.close": "关闭",
    "common.window": "窗口",
    "message.type.gga": "GGA（全球定位系统定位信息）",
    "message.type.gll": "GLL（地理定位-纬度/经度）",
    "message.type.gsa": "GSA（当前卫星信息）",
    "message.type.gsv": "GSV（可见卫星信息）",
    "message.type.rmc": "RMC（推荐定位信息）",
    "message.type.vtg": "VTG（地面航向和地面速度）",
    "message.visibleSatellites": "可视卫星数：",
    "message.emptyType": "暂无该类报文",
    "table.system": "卫星系统",
    "table.prn": "卫星号",
    "table.elevation": "高度角",
    "table.azimuth": "方位角",
    "table.snr": "信噪比",
    "map.utc": "UTC",
    "map.lon": "经度",
    "map.lat": "纬度",
    "map.altitude": "高程",
    "map.speed": "速度",
    "map.course": "朝向",
    "map.satellites": "卫星",
    "map.hdop": "HDOP",
    "map.vdop": "VDOP",
    "map.mode": "模式",
    "map.road": "Road Map",
    "map.satellite": "Satellite",
    "map.waitingFix": "等待GNSS定位",
    "map.autoCenterAfterFix": "收到有效GGA/RMC/GLL后自动居中",
    "side.tools": "扩展工具",
    "side.reset": "Reset",
    "side.resetTitle": "恢复默认界面",
    "side.resetTip": "恢复所有视图到默认布局",
    "status.layoutReset": "界面已恢复默认布局",
    "settings.title": "设置",
    "settings.language": "语言",
    "settings.languageZh": "中文",
    "settings.languageEn": "English",
    "settings.theme": "背景",
    "settings.light": "浅色",
    "settings.dark": "深色",
    "status.logUnsaved": "日志未保存",
    "status.noObservation": "观测量未输出",
    "status.noDebugLog": "调试log未输出",
    "status.noFix": "未定位",
    "status.disconnected": "断开",
    "status.idle": "空闲",
    "status.running": "运行中",
    "status.live": "实时",
    "status.runtime": "运行时间",
    "status.detecting": "正在识别",
    "status.detectingRetry": "正在识别 {baud} (重试)",
    "status.detectingBaud": "正在识别 {baud}",
    "status.detectingModule": "正在识别模块",
    "status.moduleUnknown": "模块未识别",
    "status.closeSerialError": "串口关闭异常",
    "status.autoDetectFailed": "自动识别失败：未发现NMEA或UBX数据",
    "status.baudNoData": "{baud} 无有效数据，正在自动识别",
    "status.dataInterrupted": "数据中断，正在重新扫描模块",
    "status.reidentifyModule": "正在重新识别模块",
    "status.detectedDevice": "识别成功",
    "status.reidentifyFailed": "重新识别失败，将继续尝试",
    "status.webSerialUnsupported": "当前浏览器不支持Web Serial，请使用Chrome或Edge",
    "status.openSerialFailed": "串口打开失败",
    "status.portOccupied": "串口被占用，请关闭其他程序后重试",
    "status.noPortSelected": "未选择串口",
    "status.serialError": "串口错误",
    "status.serialReadError": "串口读取错误",
    "status.deviceDetached": "模块已拔出，等待接入",
    "status.deviceDetachedBanner": "模块已拔出，请接入新模块",
    "status.deviceInsertedReidentify": "检测到模块插入，正在重新识别",
    "status.deviceInsertedOpenSerial": "检测到模块插入，请打开串口",
    "status.portFoundReidentify": "发现串口，正在重新识别",
    "status.openAndIdentifyFirst": "请先打开串口并识别模块",
    "status.moduleUnknownRestore": "模块型号未识别，无法恢复默认输出",
    "status.restoreSent": "恢复默认输出",
    "status.restoreFailed": "恢复默认输出失败",
    "status.paused": "已暂停",
    "status.started": "已开始",
    "status.scatterCleared": "散点已清除",
    "status.hexFormatError": "HEX格式错误",
    "status.loadedFile": "已加载 {file} ({lines} 行)",
    "status.noScatterToSave": "暂无散点可保存",
    "status.scatterSaved": "散点已保存",
    "window.minimize": "最小化",
    "window.maximize": "最大化",
    "window.restore": "还原",
    "window.close": "关闭",
    "window.minimized": "已最小化",
    "window.closed": "已关闭",
    "summary.frequency": "频率：{value} Hz",
    "signal.empty": "暂无卫星数据",
    "scatter.empty": "暂无散点数据",
    "scatter.east": "东向(m)",
    "scatter.north": "北向(m)",
    "nmea.utcTime": "UTC时间",
    "nmea.latitude": "纬度",
    "nmea.longitude": "经度",
    "nmea.fixQuality": "定位质量",
    "nmea.satelliteCount": "卫星数",
    "nmea.altitudeM": "高度(m)",
    "nmea.status": "状态",
    "nmea.speedKmh": "速率(km/h)",
    "nmea.courseDegree": "航向(度)",
    "nmea.mode": "模式",
    "nmea.fix": "定位",
    "nmea.usedSatellites": "使用卫星",
    "nmea.sentence": "语句",
    "nmea.visibleSatellites": "可见卫星",
    "nmea.satelliteDetails": "卫星详情",
    "nmea.trueCourse": "真北航向(度)",
    "nmea.magneticCourse": "磁北航向(度)",
    "nmea.speedKn": "速率(kn)",
    "nmea.field": "字段",
    "nmea.invalid": "无效",
    "nmea.single": "单点",
    "nmea.differential": "差分",
    "nmea.pps": "PPS",
    "nmea.rtkFixed": "RTK固定",
    "nmea.rtkFloat": "RTK浮点",
    "nmea.deadReckoning": "推算",
    "nmea.manual": "手动",
    "nmea.simulation": "仿真",
    "nmea.unknown": "未知",
    "nmea.valid": "有效",
    "nmea.auto": "自动",
    "nmea.none": "无",
    "nmea.prnDetail": "PRN {prn} 仰角{elevation} 方位{azimuth} SNR{snr}dBHz",
    "source.serial": "串口",
    "source.file": "文件: {file}",
    "map.attribution.road": "© 高德地图",
    "map.attribution.satellite": "影像 © 高德地图",
    "error.prefix": "错误: {message}",
  },
  en: {
    "app.title": "GNSS Web Console",
    "nav.main": "Main menu",
    "nav.connection": "Connection",
    "nav.view": "View",
    "nav.tools": "Tools",
    "nav.replay": "Replay",
    "nav.settings": "Settings",
    "nav.help": "Help",
    "help.manual": "CORVON GNSS Tool Manual",
    "toolbar.openSerial": "Open Serial",
    "toolbar.closeSerial": "Close Serial",
    "toolbar.baudRate": "Baud Rate",
    "toolbar.autoDetect": "Auto Detect",
    "toolbar.restoreDefault": "Restore Default",
    "toolbar.pause": "Pause",
    "toolbar.start": "Start",
    "toolbar.loadLog": "Load Log",
    "toolbar.clear": "Clear",
    "panel.nmea": "NMEA View",
    "panel.ubx": "UBX View",
    "panel.signal": "Signal View",
    "panel.message": "Message View",
    "panel.scatter": "Scatter View",
    "panel.map": "Map View",
    "nmea.sendMode": "Send format",
    "nmea.sendContent": "Send content",
    "common.send": "Send",
    "common.retry": "Retry",
    "common.apply": "Apply",
    "common.save": "Save",
    "common.clear": "Clear",
    "common.close": "Close",
    "common.window": "Window",
    "message.type.gga": "GGA (Global Positioning System Fix Data)",
    "message.type.gll": "GLL (Geographic Position, Latitude/Longitude)",
    "message.type.gsa": "GSA (Current Satellite Information)",
    "message.type.gsv": "GSV (Satellites in View)",
    "message.type.rmc": "RMC (Recommended Minimum Data)",
    "message.type.vtg": "VTG (Course Over Ground and Speed)",
    "message.visibleSatellites": "Visible satellites:",
    "message.emptyType": "No messages of this type",
    "table.system": "System",
    "table.prn": "PRN",
    "table.elevation": "Elevation",
    "table.azimuth": "Azimuth",
    "table.snr": "SNR",
    "map.utc": "UTC",
    "map.lon": "Lon",
    "map.lat": "Lat",
    "map.altitude": "Altitude",
    "map.speed": "Speed",
    "map.course": "Heading",
    "map.satellites": "Satellites",
    "map.hdop": "HDOP",
    "map.vdop": "VDOP",
    "map.mode": "Mode",
    "map.road": "Road Map",
    "map.satellite": "Satellite",
    "map.waitingFix": "Waiting for GNSS fix",
    "map.autoCenterAfterFix": "Auto-center after valid GGA/RMC/GLL",
    "side.tools": "Extra tools",
    "side.reset": "Reset",
    "side.resetTitle": "Restore Default Layout",
    "side.resetTip": "Restore all views to the default layout",
    "status.layoutReset": "Layout restored",
    "settings.title": "Settings",
    "settings.language": "Language",
    "settings.languageZh": "Chinese",
    "settings.languageEn": "English",
    "settings.theme": "Background",
    "settings.light": "Light",
    "settings.dark": "Dark",
    "status.logUnsaved": "Log not saved",
    "status.noObservation": "No observations",
    "status.noDebugLog": "No debug log",
    "status.noFix": "No fix",
    "status.disconnected": "Disconnected",
    "status.idle": "Idle",
    "status.running": "Running",
    "status.live": "Live",
    "status.runtime": "Runtime ",
    "status.detecting": "Detecting",
    "status.detectingRetry": "Detecting {baud} (retry)",
    "status.detectingBaud": "Detecting {baud}",
    "status.detectingModule": "Detecting module",
    "status.moduleUnknown": "Module not identified",
    "status.closeSerialError": "Failed to close serial port",
    "status.autoDetectFailed": "Auto detection failed: no NMEA or UBX data found",
    "status.baudNoData": "{baud} has no valid data, auto detecting",
    "status.dataInterrupted": "Data interrupted, rescanning module",
    "status.reidentifyModule": "Reidentifying module",
    "status.detectedDevice": "Detected",
    "status.reidentifyFailed": "Reidentification failed, will keep trying",
    "status.webSerialUnsupported": "This browser does not support Web Serial. Use Chrome or Edge.",
    "status.openSerialFailed": "Failed to open serial port",
    "status.portOccupied": "Serial port is in use. Close other programs and retry.",
    "status.noPortSelected": "No serial port selected",
    "status.serialError": "Serial error",
    "status.serialReadError": "Serial read error",
    "status.deviceDetached": "Module unplugged, waiting for reconnect",
    "status.deviceDetachedBanner": "Module unplugged. Please connect a module.",
    "status.deviceInsertedReidentify": "Module inserted, reidentifying",
    "status.deviceInsertedOpenSerial": "Module inserted, open serial port",
    "status.portFoundReidentify": "Serial port found, reidentifying",
    "status.openAndIdentifyFirst": "Open the serial port and identify the module first",
    "status.moduleUnknownRestore": "Module model is unknown, cannot restore defaults",
    "status.restoreSent": "Restore Default",
    "status.restoreFailed": "Failed to restore default output",
    "status.paused": "Paused",
    "status.started": "Started",
    "status.scatterCleared": "Scatter points cleared",
    "status.hexFormatError": "Invalid HEX format",
    "status.loadedFile": "Loaded {file} ({lines} lines)",
    "status.noScatterToSave": "No scatter points to save",
    "status.scatterSaved": "Scatter points saved",
    "window.minimize": "Minimize",
    "window.maximize": "Maximize",
    "window.restore": "Restore",
    "window.close": "Close",
    "window.minimized": "Minimized",
    "window.closed": "Closed",
    "summary.frequency": "Rate: {value} Hz",
    "signal.empty": "No satellite data",
    "scatter.empty": "No scatter data",
    "scatter.east": "East (m)",
    "scatter.north": "North (m)",
    "nmea.utcTime": "UTC Time",
    "nmea.latitude": "Latitude",
    "nmea.longitude": "Longitude",
    "nmea.fixQuality": "Fix Quality",
    "nmea.satelliteCount": "Satellites",
    "nmea.altitudeM": "Altitude (m)",
    "nmea.status": "Status",
    "nmea.speedKmh": "Speed (km/h)",
    "nmea.courseDegree": "Course (deg)",
    "nmea.mode": "Mode",
    "nmea.fix": "Fix",
    "nmea.usedSatellites": "Used Satellites",
    "nmea.sentence": "Sentence",
    "nmea.visibleSatellites": "Visible Satellites",
    "nmea.satelliteDetails": "Satellite Details",
    "nmea.trueCourse": "True Course (deg)",
    "nmea.magneticCourse": "Magnetic Course (deg)",
    "nmea.speedKn": "Speed (kn)",
    "nmea.field": "Field",
    "nmea.invalid": "Invalid",
    "nmea.single": "Single",
    "nmea.differential": "Differential",
    "nmea.pps": "PPS",
    "nmea.rtkFixed": "RTK Fixed",
    "nmea.rtkFloat": "RTK Float",
    "nmea.deadReckoning": "Dead Reckoning",
    "nmea.manual": "Manual",
    "nmea.simulation": "Simulation",
    "nmea.unknown": "Unknown",
    "nmea.valid": "Valid",
    "nmea.auto": "Auto",
    "nmea.none": "None",
    "nmea.prnDetail": "PRN {prn} Elev {elevation} Az {azimuth} SNR {snr} dBHz",
    "source.serial": "Serial",
    "source.file": "File: {file}",
    "map.attribution.road": "© Amap",
    "map.attribution.satellite": "Imagery © Amap",
    "error.prefix": "Error: {message}",
  },
};
const MAP_TILE_SIZE = 256;
const MAP_MIN_ZOOM = 3;
const MAP_MAX_ZOOM = 21;
const MAP_DEFAULT_ZOOM = 18;
const MAP_MAX_TRACK_POINTS = 500;
const MAP_DRAG_THRESHOLD = 3;
const MAP_TILE_SOURCES = {
  road: {
    labelKey: "map.attribution.road",
    coord: "gcj02",
    maxNativeZoom: 18,
    url(z, x, y) {
      const s = Math.abs((x * 31 + y) % 4) + 1;
      return "https://webrd0" + s + ".is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=" + x + "&y=" + y + "&z=" + z;
    },
  },
  satellite: {
    labelKey: "map.attribution.satellite",
    coord: "gcj02",
    maxNativeZoom: 18,
    url(z, x, y) {
      const s = Math.abs((x * 31 + y) % 4) + 1;
      return "https://webst0" + s + ".is.autonavi.com/appmaptile?style=6&x=" + x + "&y=" + y + "&z=" + z;
    },
  },
};

const state = {
  language: loadStoredLanguage(),
  theme: loadStoredTheme(),
  nmeaLines: [],
  nmeaEpochTimes: [],
  ubxMessages: [],
  ubxLines: [],
  ubxEpochTimes: [],
  ubxRateTimes: [],
  selectedUbxIndex: 0,
  ubxBuffer: [],
  messageLatest: Object.fromEntries(MESSAGE_TYPES.map((type) => [type, null])),
  messageHistory: Object.fromEntries(MESSAGE_TYPES.map((type) => [type, []])),
  selectedMessageType: "GSV",
  satellites: new Map(),
  usedPrns: new Set(),
  scatterPoints: [],
  scatterCenter: null,
  mapMode: "road",
  mapZoom: MAP_DEFAULT_ZOOM,
  mapCenter: null,
  mapFollowFix: true,
  isDraggingMap: false,
  mapDragStart: null,
  mapDragMoved: false,
  source: "",
  portLabel: "串口",
  portDetail: "",
  detectedBaudRate: null,
  detectedModule: "",
  outputMode: "--",
  isDetecting: false,
  detectingBaudRate: null,
  currentBaudRate: null,
  lastSuccessfulBaudRate: null,
  serialSessionId: 0,
  awaitingReconnect: false,
  running: false,
  paused: false,
  reader: null,
  port: null,
  pausedPort: null,
  replayTimer: null,
  replayIndex: 0,
  startTime: Date.now(),
  epochs: 0,
  renderQueued: false,
  lastRenderAt: 0,
  lastNmeaEpochAt: 0,
  userPanelLayout: false,
  lastByteAt: 0,
  lastValidDataAt: 0,
  isReprobing: false,
  _leafletFirstFix: false,
  lastRunningTextKey: "status.idle",
  lastRunningTextParams: {},
  lastStatusTextKey: "",
  lastStatusTextParams: {},
  lastPlainStatusText: "",
  fix: {
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
  },
};

const els = {};
const canvasIds = ["signalCanvas", "scatterCanvas", "mapCanvas"];
const portNames = new WeakMap();
let nextPortIndex = 1;
let topPanelZIndex = 10;
let portStatusTimer = null;
let mapRenderQueued = false;
const mapTileCache = new Map();
const UI_CANVAS_WIDTH = 1920;
const UI_CANVAS_HEIGHT = 1080;
const BASE_DEVICE_PIXEL_RATIO = Math.max(0.1, window.devicePixelRatio || 1);
const VIEW_TOOL_ITEMS = [
  { panelClass: "nmea-panel", labelKey: "panel.nmea", icon: "nmea" },
  { panelClass: "satellite-panel", labelKey: "panel.ubx", icon: "ubx" },
  { panelClass: "signal-panel", labelKey: "panel.signal", icon: "signal" },
  { panelClass: "message-panel", labelKey: "panel.message", icon: "message" },
  { panelClass: "scatter-panel", labelKey: "panel.scatter", icon: "scatter" },
  { panelClass: "map-panel", labelKey: "panel.map", icon: "map" },
];

function loadStoredLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.language);
    return saved === "en" ? "en" : "zh";
  } catch(e) {
    return "zh";
  }
}

function loadStoredTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.theme);
    return saved === "dark" ? "dark" : "light";
  } catch(e) {
    return "light";
  }
}

function t(key, params = {}) {
  const dict = I18N[state?.language] || I18N.zh;
  const template = dict[key] ?? I18N.zh[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_, name) => params[name] ?? "");
}

function applyLanguage() {
  document.documentElement.lang = state.language === "en" ? "en" : "zh-CN";
  document.body.classList.toggle("lang-en", state.language === "en");
  document.title = t("app.title");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    node.dataset.i18nAttr.split(";").forEach((entry) => {
      const [attr, key] = entry.split(":");
      if (attr && key) node.setAttribute(attr.trim(), t(key.trim()));
    });
  });
  updateSettingsButtons();
  updateConnectButton();
  updatePauseButton();
  updateDeviceModeState();
  updateWindowChrome();
  updateViewTools();
  refreshStatusTexts();
  updateRuntime();
  renderAll();
}

function applyTheme() {
  document.body.classList.toggle("theme-dark", state.theme === "dark");
  document.body.dataset.theme = state.theme;
  updateSettingsButtons();
  scheduleRender();
}

function setLanguage(language) {
  state.language = language === "en" ? "en" : "zh";
  try { localStorage.setItem(STORAGE_KEYS.language, state.language); } catch(e) {}
  applyLanguage();
}

function setTheme(theme) {
  state.theme = theme === "dark" ? "dark" : "light";
  try { localStorage.setItem(STORAGE_KEYS.theme, state.theme); } catch(e) {}
  applyTheme();
}

function updateSettingsButtons() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === state.language);
  });
  document.querySelectorAll("[data-theme-value]").forEach((button) => {
    button.classList.toggle("active", button.dataset.themeValue === state.theme);
  });
}

function setActiveMenuTab(activeTab) {
  document.querySelectorAll(".menu-tab").forEach((tab, index) => {
    tab.classList.toggle("active", activeTab ? tab === activeTab : index === 0);
  });
}

function setToolbarMode(mode) {
  const isView = mode === "view";
  const isHelp = mode === "help";
  if (els.connectionTools) els.connectionTools.hidden = isView || isHelp;
  if (els.viewTools) els.viewTools.hidden = !isView;
  if (els.helpTools) els.helpTools.hidden = !isHelp;
  if (els.viewTab) els.viewTab.setAttribute("aria-expanded", isView ? "true" : "false");
  if (els.helpTab) els.helpTab.setAttribute("aria-expanded", isHelp ? "true" : "false");
  if (isView) updateViewTools();
}

function showConnectionTools() {
  closeSettings();
  setToolbarMode("connection");
  setActiveMenuTab(els.connectionTab);
}

function showViewTools() {
  closeSettings();
  setToolbarMode("view");
  setActiveMenuTab(els.viewTab);
}

function showHelpTools() {
  closeSettings();
  setToolbarMode("help");
  setActiveMenuTab(els.helpTab);
}

function openManual() {
  window.open("./CORVON%20GNSS%20Tool%E6%93%8D%E4%BD%9C%E8%AF%B4%E6%98%8E%E4%B9%A6v1.0.pdf", "_blank", "noopener");
}

function openSettings() {
  setToolbarMode("connection");
  if (els.settingsBackdrop) els.settingsBackdrop.hidden = false;
  if (els.settingsDialog) {
    els.settingsDialog.hidden = false;
    els.settingsDialog.querySelector("button")?.focus();
  }
  setActiveMenuTab(els.settingsTab);
}

function closeSettings() {
  if (els.settingsBackdrop) els.settingsBackdrop.hidden = true;
  if (els.settingsDialog) els.settingsDialog.hidden = true;
  setToolbarMode("connection");
  setActiveMenuTab();
}

function updateViewTools() {
  if (!els.viewTools) return;
  els.viewTools.innerHTML = "";
  VIEW_TOOL_ITEMS.forEach((item) => {
    const panel = document.querySelector("." + item.panelClass);
    if (!panel) return;
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.panelClass = item.panelClass;
    button.dataset.icon = item.icon;
    button.textContent = t(item.labelKey);
    const visible = panel.style.display !== "none" && !panel.classList.contains("is-minimized") && !panel.classList.contains("is-closed");
    button.classList.toggle("active", visible);
    button.addEventListener("click", () => togglePanelFromViewTools(panel));
    els.viewTools.appendChild(button);
  });
}

function togglePanelFromViewTools(panel) {
  if (!panel) return;
  const visible = panel.style.display !== "none" && !panel.classList.contains("is-minimized") && !panel.classList.contains("is-closed");
  if (visible) {
    minimizePanel(panel);
  } else {
    restorePanel(panel);
  }
  updateViewTools();
}

function showResetTooltip() {
  if (!els.resetTooltip || !els.sideResetButton) return;
  const rect = els.sideResetButton.getBoundingClientRect();
  els.resetTooltip.hidden = false;
  els.resetTooltip.style.left = Math.max(8, rect.left - els.resetTooltip.offsetWidth - 10) + "px";
  els.resetTooltip.style.top = Math.max(8, rect.top + rect.height / 2 - els.resetTooltip.offsetHeight / 2) + "px";
}

function hideResetTooltip() {
  if (els.resetTooltip) els.resetTooltip.hidden = true;
}

function formatMessage(key, params = {}) {
  return t(key, params);
}

function statusText(key, params = {}, fallback = "") {
  return key ? t(key, params) : fallback;
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    bindElements();
    applyTheme();
    applyLanguage();
    bindEvents();
    updateConnectButton();
    updateUiScale();
    bindSerialDeviceEvents();
    bindWindowControls();
    bindPanelDrag();
    bindPanelResize();
    bindMessageSplitter();
    updateWindowChrome();
    layoutPanels();
    setInterval(updateRuntime, 1000);
    setInterval(serialWatchdogTick, 1000);
    window.addEventListener("resize", handleViewportResize);
    const workspace = document.querySelector(".workspace");
    if (workspace && typeof ResizeObserver !== "undefined") {
      new ResizeObserver(() => {
        layoutPanels({ preserveUserLayout: state.userPanelLayout });
        syncMaximizedPanel();
        scheduleRender();
      }).observe(workspace);
    }
    renderAll();
  } catch (e) {
    if (els.idleState) els.idleState.textContent = t("error.prefix", { message: e.message || "" });
  }
});

function bindElements() {
  [
    "connectButton","baudRate","deviceModeState","restoreDefaultButton",
    "pauseButton","loadFileButton","fileInput","clearButton",
    "nmeaLog","nmeaSummary","commandMode","commandInput","sendButton",
    "ubxClearButton","ubxSummary","ubxLog",
    "signalLegend","visibleSatelliteCount","messageDetail","satelliteRows","messageSplitHandle",
    "centerLon","centerLat","applyCenterButton","saveScatterButton","clearScatterButton",
    "zoomInButton","zoomOutButton",
    "connectionState","logState","sourceState","debugState","statusLed","fixState","idleState","epochState","runtimeState",
    "utcValue","lonValue","latValue","altValue","speedValue","courseValue","satCountValue","hdopValue","vdopValue","modeValue",
    "portStatusBanner","portStatusMessage","portStatusAction",
    "connectionTab","viewTab","helpTab","connectionTools","viewTools","helpTools","manualButton","settingsTab","settingsBackdrop","settingsDialog","settingsCloseButton",
    "languageZhButton","languageEnButton","themeLightButton","themeDarkButton",
    "sideResetButton","resetTooltip",
  ].forEach((id) => { els[id] = document.getElementById(id); });
  canvasIds.forEach((id) => { els[id] = document.getElementById(id); });
}

function bindEvents() {
  els.connectButton.addEventListener("click", toggleSerialConnection);
  els.connectionTab?.addEventListener("click", showConnectionTools);
  els.viewTab?.addEventListener("click", showViewTools);
  els.helpTab?.addEventListener("click", showHelpTools);
  els.manualButton?.addEventListener("click", openManual);
  els.settingsTab?.addEventListener("click", openSettings);
  els.settingsBackdrop?.addEventListener("click", closeSettings);
  els.settingsCloseButton?.addEventListener("click", closeSettings);
  els.languageZhButton?.addEventListener("click", () => setLanguage("zh"));
  els.languageEnButton?.addEventListener("click", () => setLanguage("en"));
  els.themeLightButton?.addEventListener("click", () => setTheme("light"));
  els.themeDarkButton?.addEventListener("click", () => setTheme("dark"));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (els.settingsDialog && !els.settingsDialog.hidden) closeSettings();
    }
  });
  els.restoreDefaultButton.addEventListener("click", restoreDefaultOutput);
  els.sideResetButton?.addEventListener("click", resetDefaultLayout);
  els.sideResetButton?.addEventListener("mouseenter", showResetTooltip);
  els.sideResetButton?.addEventListener("focus", showResetTooltip);
  els.sideResetButton?.addEventListener("mouseleave", hideResetTooltip);
  els.sideResetButton?.addEventListener("blur", hideResetTooltip);
  els.pauseButton.addEventListener("click", togglePauseTesting);
  els.clearButton.addEventListener("click", () => clearData({ keepConnection: !!state.port, keepStatus: !!state.port }));
  els.loadFileButton.addEventListener("click", () => els.fileInput.click());
  els.fileInput.addEventListener("change", loadFile);
  els.sendButton.addEventListener("click", sendCommand);
  els.ubxClearButton.addEventListener("click", () => {
    state.ubxMessages = []; state.ubxLines = []; state.ubxEpochTimes = []; state.ubxRateTimes = [];
    state.selectedUbxIndex = 0; renderAll();
  });
  els.clearScatterButton.addEventListener("click", () => { state.scatterPoints = []; renderAll(); setStatusKey("status.scatterCleared"); });
  els.saveScatterButton.addEventListener("click", downloadScatterCsv);
  els.zoomInButton.addEventListener("click", () => zoomMap(1));
  els.zoomOutButton.addEventListener("click", () => zoomMap(-1));
  bindMapInteraction();
  document.querySelectorAll("[data-type]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedMessageType = button.dataset.type;
      renderMessageDetail();
    });
  });
  document.querySelectorAll("[data-system]").forEach((checkbox) => { checkbox.addEventListener("change", renderAll); });
  document.querySelectorAll('input[name="mapMode"]').forEach((radio) => {
    radio.addEventListener("change", (event) => { state.mapMode = event.target.value; renderMap(); });
  });
  els.portStatusAction.addEventListener("click", (event) => {
    event.stopPropagation(); hidePortStatus(); connectSerial();
  });
}

function bindMapInteraction() {
  const canvas = els.mapCanvas;
  if (!canvas) return;
  canvas.addEventListener("pointerdown", startMapDrag);
  canvas.addEventListener("pointermove", handleMapPointerMove);
  canvas.addEventListener("pointerup", stopMapDrag);
  canvas.addEventListener("pointercancel", stopMapDrag);
  canvas.addEventListener("wheel", handleMapWheel, { passive: false });
  canvas.addEventListener("dblclick", (event) => {
    event.preventDefault();
    zoomMap(1, event.offsetX, event.offsetY);
  });
}

function startMapDrag(event) {
  if (event.button !== 0) return;
  const canvas = els.mapCanvas;
  const rect = getElementLogicalSize(canvas?.parentElement,300,200);
  const center = getVisibleMapCenter(rect.width, rect.height);
  if (!center) return;
  const zoom = clamp(Math.round(state.mapZoom || MAP_DEFAULT_ZOOM), MAP_MIN_ZOOM, MAP_MAX_ZOOM);
  state.isDraggingMap = true;
  state.mapDragMoved = false;
  state.mapDragStart = {
    pointerId: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    center,
    zoom,
  };
  canvas.setPointerCapture?.(event.pointerId);
  canvas.classList.add("is-panning");
  event.preventDefault();
}

function handleMapPointerMove(event) {
  if (!state.isDraggingMap || !state.mapDragStart) return;
  const start = state.mapDragStart;
  const dx = event.clientX - start.x;
  const dy = event.clientY - start.y;
  if (Math.hypot(dx, dy) > MAP_DRAG_THRESHOLD) state.mapDragMoved = true;
  const centerPx = lonLatToWorldPixel(start.center.lon, start.center.lat, start.zoom);
  const nextCenter = worldPixelToLonLat(centerPx.x - dx, centerPx.y - dy, start.zoom);
  state.mapCenter = nextCenter;
  state.mapFollowFix = false;
  renderMap();
  event.preventDefault();
}

function stopMapDrag(event) {
  if (!state.isDraggingMap) return;
  els.mapCanvas?.releasePointerCapture?.(state.mapDragStart?.pointerId);
  els.mapCanvas?.classList.remove("is-panning");
  state.isDraggingMap = false;
  state.mapDragStart = null;
  event?.preventDefault?.();
}

function handleMapWheel(event) {
  event.preventDefault();
  zoomMap(event.deltaY < 0 ? 1 : -1, event.offsetX, event.offsetY);
}

function zoomMap(delta, anchorX, anchorY) {
  const oldZoom = clamp(Math.round(state.mapZoom || MAP_DEFAULT_ZOOM), MAP_MIN_ZOOM, MAP_MAX_ZOOM);
  const newZoom = clamp(oldZoom + delta, MAP_MIN_ZOOM, MAP_MAX_ZOOM);
  if (newZoom === oldZoom) return;
  const rect = getElementLogicalSize(els.mapCanvas?.parentElement,300,200);
  const center = getVisibleMapCenter(rect.width, rect.height);
  const anchor = {
    x: Number.isFinite(anchorX) ? anchorX : rect.width / 2,
    y: Number.isFinite(anchorY) ? anchorY : rect.height / 2,
  };
  const oldCenterPx = lonLatToWorldPixel(center.lon, center.lat, oldZoom);
  const cursorWorld = {x:oldCenterPx.x + anchor.x - rect.width / 2,y:oldCenterPx.y + anchor.y - rect.height / 2};
  const cursorLonLat = worldPixelToLonLat(cursorWorld.x, cursorWorld.y, oldZoom);
  const newCursorPx = lonLatToWorldPixel(cursorLonLat.lon, cursorLonLat.lat, newZoom);
  const newCenterPx = {x:newCursorPx.x - anchor.x + rect.width / 2,y:newCursorPx.y - anchor.y + rect.height / 2};
  state.mapZoom = newZoom;
  state.mapCenter = worldPixelToLonLat(newCenterPx.x, newCenterPx.y, newZoom);
  state.mapFollowFix = false;
  renderMap();
}

function isSerialConnected() {
  return !!(state.port || state.reader || state.running || state.isDetecting || state.isReprobing);
}

async function toggleSerialConnection() {
  if (isSerialConnected()) {
    await disconnectSerial();
    return;
  }
  await connectSerial();
}

function updateConnectButton() {
  if (!els.connectButton) return;
  const active = isSerialConnected();
  els.connectButton.textContent = active ? t("toolbar.closeSerial") : t("toolbar.openSerial");
  els.connectButton.classList.toggle("is-disconnect", active);
  els.connectButton.disabled = !active && !!(state.isDetecting || state.isReprobing);
}

function updatePauseButton() {
  if (!els.pauseButton) return;
  els.pauseButton.textContent = state.paused ? t("toolbar.start") : t("toolbar.pause");
}

async function closeSerialResources(reader, port, options = {}) {
  try {
    if (reader) {
      await reader.cancel().catch(() => {});
      try { reader.releaseLock(); } catch(e) {}
    }
    if (port) await port.close().catch(() => {});
  } catch(e) {
    if (!options.silent) setStatus(e.message || t("status.closeSerialError"));
  }
}

// ========== UBX Protocol ==========
function ubxChecksum(bytes) {
  let ckA = 0, ckB = 0;
  bytes.forEach((b) => { ckA = (ckA + b) & 0xff; ckB = (ckB + ckA) & 0xff; });
  return { ckA, ckB };
}
function makeUbxFrame(classId, messageId, payload) {
  const frame = new Uint8Array(8 + payload.length);
  frame[0] = 0xb5; frame[1] = 0x62; frame[2] = classId; frame[3] = messageId;
  frame[4] = payload.length & 0xff; frame[5] = (payload.length >> 8) & 0xff;
  frame.set(payload, 6);
  const ck = ubxChecksum(frame.slice(2, 6 + payload.length));
  frame[6 + payload.length] = ck.ckA; frame[7 + payload.length] = ck.ckB;
  return frame;
}
function writeU2(target, offset, value) { target[offset] = value & 0xff; target[offset + 1] = (value >> 8) & 0xff; }
function writeU4(target, offset, value) { target[offset] = value & 0xff; target[offset + 1] = (value >> 8) & 0xff; target[offset + 2] = (value >> 16) & 0xff; target[offset + 3] = (value >> 24) & 0xff; }
function readU4(target, offset) { return target[offset] | (target[offset+1]<<8) | (target[offset+2]<<16) | (target[offset+3]<<24); }
function readI4(target, offset) { let v = readU4(target, offset); return v > 0x7fffffff ? v - 0x100000000 : v; }
function readU2(target, offset) { return target[offset] | (target[offset+1]<<8); }
function serialOpenOptions(baudRate) { return { baudRate, dataBits: 8, stopBits: 1, parity: "none", flowControl: "none" }; }

function makeCfgPrtUart1Frame(baudRate, outputProtocol) {
  const payload = new Uint8Array(20);
  payload[0] = 1; payload[1] = 0;
  writeU2(payload, 2, 0); writeU4(payload, 4, 0x000008d0);
  writeU4(payload, 8, baudRate);
  writeU2(payload, 12, 1); // FIX: always enable UBX input
  writeU2(payload, 14, outputProtocol === "UBX" ? 1 : 2);
  writeU2(payload, 16, 0); writeU2(payload, 18, 0);
  return makeUbxFrame(0x06, 0x00, payload);
}
function makeCfgMsgFrame(classId, messageId, rate) {
  return makeUbxFrame(0x06, 0x01, new Uint8Array([classId, messageId, rate, rate, rate, rate, rate, rate]));
}
function makeCfgRateFrame(hz) {
  const payload = new Uint8Array(6);
  writeU2(payload, 0, Math.round(1000 / hz)); writeU2(payload, 2, 1); writeU2(payload, 4, 1);
  return makeUbxFrame(0x06, 0x08, payload);
}
function makeCfgSaveFrame() {
  return makeUbxFrame(0x06, 0x09, new Uint8Array([0,0,0,0,0xff,0xff,0,0,0,0,0,0,3]));
}
function buildDefaultOutputCommands(profile) {
  const nmeaMsgs = [[0xf0,0],[0xf0,1],[0xf0,2],[0xf0,3],[0xf0,4],[0xf0,5]];
  const ubxMsgs = [[1,3],[1,7],[1,0x35]];
  return [
    makeCfgPrtUart1Frame(profile.defaultBaudRate, "NMEA"),
    makeCfgRateFrame(1),
    ...nmeaMsgs.map(([c,m]) => makeCfgMsgFrame(c, m, 1)),
    ...ubxMsgs.map(([c,m]) => makeCfgMsgFrame(c, m, 0)),
    makeCfgSaveFrame(),
  ];
}

function hasUbxSync(bytes) { for (let i = 0; i < bytes.length - 1; i++) { if (bytes[i] === 0xb5 && bytes[i+1] === 0x62) return true; } return false; }
function hasValidUbxFrame(bytes) {
  for (let i = 0; i <= bytes.length - 8; i++) {
    if (bytes[i] !== 0xb5 || bytes[i+1] !== 0x62) continue;
    const plen = bytes[i+4] | (bytes[i+5]<<8);
    if (plen > 1024 || i + plen + 8 > bytes.length) continue;
    const frame = bytes.slice(i, i + plen + 8);
    const ck = ubxChecksum(frame.slice(2, 6 + plen));
    if (ck.ckA === frame[6+plen] && ck.ckB === frame[7+plen]) return true;
  }
  return false;
}
function bytesToHex(bytes) { return Array.from(bytes).map(b => b.toString(16).padStart(2,'0').toUpperCase()).join(' '); }
function decodeUbxFrame(frame, hints = {}) {
  const plen = frame[4] | (frame[5]<<8);
  const payload = frame.slice(6, 6+plen);
  const ck = ubxChecksum(frame.slice(2, 6+plen));
  return { classId: frame[2], messageId: frame[3], name: hints.name || ('UBX-'+frame[2].toString(16)+'-'+frame[3].toString(16)), length: plen, payload, frame, valid: ck.ckA === frame[6+plen] && ck.ckB === frame[7+plen], timestamp: new Date() };
}
function addUbxMessage(msg) {
  state.ubxMessages.push(msg);
  if (msg.valid) { markValidSerialData(); markUbxRateSample(msg); }
  appendUbxLog(msg);
  if (state.ubxMessages.length > 100) state.ubxMessages.splice(0, state.ubxMessages.length - 100);
  state.selectedUbxIndex = state.ubxMessages.length - 1;
  scheduleRender();
}
function appendUbxLog(msg) {
  state.ubxLines.push(bytesToHex(msg.frame));
  state.ubxLines.push(msg.timestamp.toTimeString().slice(0,8) + ' ' + msg.name + ' Len=' + msg.length + ' CRC=' + (msg.valid?'OK':'ERR'));
  if (state.ubxLines.length > 400) state.ubxLines.splice(0, state.ubxLines.length - 400);
}
function parseUbxBytes(bytes) {
  state.ubxBuffer.push(...bytes);
  while (state.ubxBuffer.length >= 8) {
    const si = state.ubxBuffer.findIndex((b,i,a) => b===0xb5 && a[i+1]===0x62);
    if (si < 0) { state.ubxBuffer = state.ubxBuffer.slice(-1); return; }
    if (si > 0) state.ubxBuffer.splice(0, si);
    if (state.ubxBuffer.length < 6) return;
    const plen = state.ubxBuffer[4] | (state.ubxBuffer[5]<<8);
    if (state.ubxBuffer.length < plen + 8) return;
    const frame = new Uint8Array(state.ubxBuffer.slice(0, plen+8));
    state.ubxBuffer.splice(0, plen+8);
    const msg = decodeUbxFrame(frame);
    addUbxMessage(msg);
    if (msg.valid) markValidSerialData();
  }
}

// ========== Serial Detection ==========
function hasValidNmeaSentence(text) {
  // Require at least one complete NMEA sentence with valid talker ID and checksum.
  // Splitting by line and validating checksums prevents garbled data at wrong
  // baud rates from being falsely detected as NMEA.
  const lines = text.split(/\r?\n/);
  for (const line of lines) {
    if (!line.startsWith('$')) continue;
    if (!/^\$(GP|GN|GL|GA|GB|GQ|GI|BD|PQ)/.test(line)) continue;
    if (isNmeaChecksumValid(line)) return true;
  }
  return false;
}
function detectOutputMode(bytes, text) { if (hasValidUbxFrame(bytes)) return "UBX"; if (hasValidNmeaSentence(text)) return "NMEA"; return "UNKNOWN"; }
function detectModuleByBaudRate(baudRate, outputMode) { if (baudRate === 38400) return "FK-A1/FK-A3"; if (baudRate === 9600 || baudRate === 115200) return "FK-C1/FK-D1"; return ""; }
function expectedOutputModeByBaudRate(baudRate) { return baudRate === 9600 ? "NMEA" : "UNKNOWN"; }
function getAutoDetectBaudRates(preferred) {
  // Fixed order: 38400 (FK-A1/A3), then 9600 (FK-C1/D1 default), then 115200 (FK-C1/D1 UBX)
  const rates = [38400, 9600, 115200];
  return preferred && rates.includes(preferred) ? [preferred, ...rates.filter(r => r !== preferred)] : rates;
}
async function ensurePortClosed(port) {
  try { await port.close(); } catch(e) { /* ignore */ }
  await delay(60);
}
async function safeClosePort(port) { try { await port.close(); } catch(e) { /* ignore */ } }
function saveLastSuccessfulBaudRate(br) { state.lastSuccessfulBaudRate = br; }
function markValidSerialData() { state.lastValidDataAt = Date.now(); }
function makeSerialCancelledError() { const error = new Error("serial operation cancelled"); error.name = "AbortError"; error.cancelled = true; return error; }
function throwIfSerialSessionChanged(sessionId) { if (Number.isFinite(sessionId) && sessionId !== state.serialSessionId) throw makeSerialCancelledError(); }
function isSerialCancelledError(error) { return !!(error && (error.cancelled || error.name === "AbortError")); }

async function readSerialSample(port, timeoutMs) {
  const reader = port.readable.getReader(); const decoder = new TextDecoder(); const chunks = []; let text = '', timer = null;
  try {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
      const remaining = Math.max(50, deadline - Date.now());
      const result = await Promise.race([reader.read(), new Promise(r => { timer = setTimeout(() => r({timeout:true}), remaining); })]);
      if (timer) { clearTimeout(timer); timer = null; }
      if (result.done || result.timeout) break;
      if (result.value?.length) { chunks.push(...result.value); text += decoder.decode(result.value, {stream:true}); if (detectOutputMode(chunks, text) !== "UNKNOWN") break; }
    }
  } finally { if (timer) clearTimeout(timer); await reader.cancel().catch(()=>{}); reader.releaseLock(); }
  return { bytes: new Uint8Array(chunks), text };
}

async function openAndProbeSerial(port, baudRate, options={}) {
  throwIfSerialSessionChanged(options.sessionId);
  // Always close first to ensure clean state, then open at requested rate
  await ensurePortClosed(port);
  throwIfSerialSessionChanged(options.sessionId);
  await port.open(serialOpenOptions(baudRate));
  state.currentBaudRate = baudRate;
  try {
    const sample = await readSerialSample(port, options.timeoutMs || 1000);
    throwIfSerialSessionChanged(options.sessionId);
    const outputMode = detectOutputMode(sample.bytes, sample.text);
    return { baudRate, outputMode };
  } finally {
    if (!options.keepOpen) await safeClosePort(port);
  }
}

async function autoDetectSerial(port, options={}) {
  const sessionId = options.sessionId;
  state.isDetecting = true; updateDeviceModeState();
  const baudRates = getAutoDetectBaudRates(options.preferredBaudRate);
  try {
    for (let attempt = 0; attempt < 2; attempt++) {
      let lastError = null;
      for (const br of baudRates) {
        try {
          throwIfSerialSessionChanged(sessionId);
          state.detectingBaudRate = br;
          setStatusKey(attempt > 0 ? "status.detectingRetry" : "status.detectingBaud", { baud: br });
          updateDeviceModeState();
          // Timeout must be >1s for 1Hz NMEA at 38400/9600, shorter for 115200 UBX
          const timeoutMs = br === 115200 ? 800 : 1400;
          const result = await openAndProbeSerial(port, br, { keepOpen: false, timeoutMs, sessionId });
          throwIfSerialSessionChanged(sessionId);
          if (result.outputMode !== "UNKNOWN") {
            await ensurePortClosed(port); await delay(50);
            throwIfSerialSessionChanged(sessionId);
            await port.open(serialOpenOptions(br)); state.currentBaudRate = br;
            saveLastSuccessfulBaudRate(br);
            return { ...result, module: detectModuleByBaudRate(br, result.outputMode), port };
          }
        } catch(e) { if (isSerialCancelledError(e)) { await safeClosePort(port); throw e; } lastError = e; if (port.readable || port.writable) await safeClosePort(port); }
      }
      if (attempt === 0) { await delay(1000); throwIfSerialSessionChanged(sessionId); }
      else throw new Error(lastError?.message || t("status.autoDetectFailed"));
    }
  } finally { state.isDetecting = false; state.detectingBaudRate = null; updateDeviceModeState(); }
}

async function detectSerialWithPreferredBaudRate(port, preferredBaudRate, options = {}) {
  const sessionId = options.sessionId;
  const result = await openAndProbeSerial(port, preferredBaudRate, { keepOpen: false, timeoutMs: 1200, sessionId });
  throwIfSerialSessionChanged(sessionId);
  if (result.outputMode !== "UNKNOWN") {
    await ensurePortClosed(port); await delay(60);
    throwIfSerialSessionChanged(sessionId);
    await port.open(serialOpenOptions(preferredBaudRate)); state.currentBaudRate = preferredBaudRate;
    saveLastSuccessfulBaudRate(preferredBaudRate);
    return { ...result, module: detectModuleByBaudRate(preferredBaudRate, result.outputMode), port };
  }
  setStatusKey("status.baudNoData", { baud: preferredBaudRate });
  return autoDetectSerial(port, { preferredBaudRate, sessionId });
}

async function serialWatchdogTick() {
  if (!state.port || !state.running || state.isDetecting || state.isReprobing || !state.currentBaudRate) return;
  if (Date.now() - Math.max(state.lastValidDataAt||0, state.startTime||0) > 3000) {
    await reidentifyCurrentPort(t("status.dataInterrupted"));
  }
}

async function releaseActiveSerialReader() {
  const reader = state.reader;
  if (!reader) return;
  try { await reader.cancel(); } catch(e) {}
  try { reader.releaseLock(); } catch(e) {}
  if (state.reader === reader) state.reader = null;
  await delay(50);
}

async function reidentifyCurrentPort(reason) {
  if (!state.port || state.isDetecting || state.isReprobing) return;
  const port = state.port;
  const previousBaudRate = state.currentBaudRate || state.detectedBaudRate || state.lastSuccessfulBaudRate;
  state.isReprobing = true;
  state.serialSessionId += 1;
  const sessionId = state.serialSessionId;
  try {
    setStatus(reason || t("status.reidentifyModule"));
    await releaseActiveSerialReader();
    state.detectedBaudRate = null;
    state.detectedModule = '';
    state.outputMode = '--';
    state.currentBaudRate = previousBaudRate;
    updateDeviceModeState();

    const detection = await autoDetectSerial(port, { preferredBaudRate: previousBaudRate, sessionId });
    if (state.port !== port || sessionId !== state.serialSessionId) return;

    state.detectedBaudRate = detection.baudRate;
    state.currentBaudRate = detection.baudRate;
    state.outputMode = detection.outputMode;
    state.detectedModule = detection.module || detectModuleByBaudRate(detection.baudRate, detection.outputMode);
    state.source = (state.portDetail || state.portLabel) + ' ' + detection.baudRate + ' ' + detection.outputMode;
    state.lastByteAt = Date.now();
    state.lastValidDataAt = Date.now();
    state.ubxRateTimes = [];
    state.nmeaEpochTimes = [];
    state.lastNmeaEpochAt = 0;
    updateDeviceModeState();
    setRunningKey(true, "status.live");
    readSerialLoop(sessionId);
    setStatusKey("status.detectedDevice", { module: state.detectedModule, baud: state.currentBaudRate, mode: state.outputMode });
  } catch(e) {
    if (isSerialCancelledError(e)) return;
    state.currentBaudRate = previousBaudRate;
    state.detectedBaudRate = null;
    state.detectedModule = '';
    state.outputMode = '--';
    state.lastValidDataAt = 0;
    if (!state.port?.readable && !state.port?.writable) {
      state.awaitingReconnect = true;
      try { await safeClosePort(port); } catch(closeError) {}
      if (state.port === port) state.port = null;
      setTimeout(() => tryReconnectFromPorts(), 500);
    }
    updateDeviceModeState();
    setStatus((e && e.message) || t("status.reidentifyFailed"));
  } finally {
    state.isReprobing = false;
  }
}

// ========== Serial Connection ==========
async function connectSerial(options={}) {
  if (!("serial" in navigator)) { setStatusKey("status.webSerialUnsupported"); return; }
  pauseReplay();
  if (state.port || state.reader) await disconnectSerial({ keepData: true, silent: true });
  state.serialSessionId += 1; const sessionId = state.serialSessionId;
  hidePortStatus();
  try {
    state.port = options.port || await navigator.serial.requestPort();
    state.paused = false; state.pausedPort = null; updatePauseButton();
    state.portLabel = getPortLabel(state.port); if (!options.autoReconnect) state.awaitingReconnect = false;
    const selBaud = els.baudRate.value;
    const detection = selBaud === "auto"
      ? await autoDetectSerial(state.port, { sessionId })
      : await detectSerialWithPreferredBaudRate(state.port, Number(selBaud), { sessionId });
    if (sessionId !== state.serialSessionId) return;
    state.detectedBaudRate = detection.baudRate; state.currentBaudRate = detection.baudRate; state.outputMode = detection.outputMode;
    state.lastByteAt = state.lastValidDataAt = Date.now(); state.ubxRateTimes = [];
    state.detectedModule = detection.module || detectModuleByBaudRate(detection.baudRate, detection.outputMode);
    state.source = (state.portDetail || state.portLabel) + ' ' + detection.baudRate + ' ' + detection.outputMode;
    state.awaitingReconnect = false; updateDeviceModeState(); setRunningKey(true, "status.live"); readSerialLoop(sessionId);
  } catch(e) {
    if (isSerialCancelledError(e)) return;
    state.port = null; state.detectedBaudRate = null; state.currentBaudRate = null; state.detectedModule = ""; state.outputMode = "--"; state.portLabel = "串口"; state.portDetail = "";
    state.awaitingReconnect = !!options.autoReconnect;
    updateDeviceModeState(); setRunningKey(false, "status.openSerialFailed");
    if (isPortOccupiedError(e)) showPortStatus(t("status.portOccupied"), 'error', t("common.retry"));
    else if (e.name === "NotFoundError" || (e.message && e.message.includes("cancel"))) showPortStatus(t("status.noPortSelected"), 'warning', false);
    else showPortStatus(e.message || t("status.openSerialFailed"), 'error', t("common.retry"));
    setStatus(e.message || t("status.openSerialFailed"));
    // autoReconnect errors are handled by polling
  }
}

function getPortLabel(port) {
  if (!portNames.has(port)) { portNames.set(port, 'COM' + nextPortIndex); nextPortIndex++; }
  const info = port?.getInfo?.() || {};
  state.portDetail = portNames.get(port) + (info.usbVendorId ? ' USB ' + info.usbVendorId.toString(16).toUpperCase().padStart(4,'0') + ':' + info.usbProductId.toString(16).toUpperCase().padStart(4,'0') : '');
  return portNames.get(port);
}
function formatSerialConnectionLabel() {
  const br = state.currentBaudRate || state.detectedBaudRate;
  const mode = state.outputMode && state.outputMode !== '--' ? ' ' + state.outputMode : '';
  return br ? (state.portLabel||t("source.serial")) + ' ' + br + mode : (state.portLabel||t("source.serial"));
}

async function readSerialLoop(sessionId = state.serialSessionId) {
  const decoder = new TextDecoder(); let buffer = '';
  let reader;
  try {
    reader = state.port.readable.getReader();
    state.reader = reader;
    while (sessionId === state.serialSessionId) {
      const { value, done } = await reader.read();
      if (done) break;
      if (sessionId !== state.serialSessionId) break;
      state.lastByteAt = Date.now();
      parseUbxBytes(value);
      if (state.outputMode !== "UBX") {
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split(/\r?\n/); buffer = lines.pop() || '';
        lines.forEach(l => ingestLine(l));
      }
    }
  } catch(e) { if (sessionId === state.serialSessionId && !state.isReprobing && !state.isDetecting) { setRunningKey(false, "status.serialError"); setStatus(e.message||t("status.serialReadError")); } }
  finally { if (reader) { try { reader.releaseLock(); } catch(e) {} } if (state.reader === reader) state.reader = null; }
}

async function disconnectSerial(options={}) {
  pauseReplay(); state.serialSessionId += 1; if (!options.deviceDetached) state.awaitingReconnect = false;
  const reader = state.reader, port = state.port;
  if (!options.keepPaused) { state.paused = false; state.pausedPort = null; updatePauseButton(); }
  state.reader = null; state.port = null; state.running = false;
  state.detectedBaudRate = null; state.currentBaudRate = null; state.lastSuccessfulBaudRate = null;
  state.detectedModule = ""; state.outputMode = "--"; state.portLabel = "串口"; state.portDetail = "";
  updateDeviceModeState();
  if (!options.silent) { setRunningKey(false, "status.idle"); hidePortStatus(); }
  else updateConnectButton();
  await closeSerialResources(reader, port, options);
}

async function handleDeviceDetached() {
  state.serialSessionId += 1; state.awaitingReconnect = true;
  try { if (state.reader) { await state.reader.cancel().catch(()=>{}); state.reader.releaseLock(); state.reader = null; } } catch(e) {}
  state.port = null; state.detectedBaudRate = null; state.currentBaudRate = null; state.lastSuccessfulBaudRate = null;
  state.detectedModule = ""; state.outputMode = "--"; state.portLabel = "串口"; state.portDetail = "";
  state.isDetecting = false; state.detectingBaudRate = null;
  updateDeviceModeState();
  setRunningKey(false, "status.deviceDetached"); showPortStatus(t("status.deviceDetachedBanner"), 'warning', false);
  // Start polling for reconnection
  setTimeout(() => tryReconnectFromPorts(), 1000);
}

function bindSerialDeviceEvents() {
  if (!("serial" in navigator)) return;
  navigator.serial.addEventListener("disconnect", async (e) => {
    const port = e.port || e.target;
    if (state.port && (!port || port === state.port)) await handleDeviceDetached();
  });
  navigator.serial.addEventListener("connect", async (e) => {
    if (state.port) return;
    if (state.awaitingReconnect) {
      hidePortStatus();
      setStatusKey("status.deviceInsertedReidentify");
      const port = e.port || e.target;
      if (port) {
        try { await connectSerial({ port, autoReconnect: true }); return; } catch(err) {}
      }
      // Fallback: try getPorts
      tryReconnectFromPorts();
      return;
    }
    setStatusKey("status.deviceInsertedOpenSerial");
  });
}

async function tryReconnectFromPorts() {
  if (!state.awaitingReconnect) return;
  try {
    const ports = await navigator.serial.getPorts();
    if (ports.length > 0) {
      setStatusKey("status.portFoundReidentify");
      try {
        await connectSerial({ port: ports[0], autoReconnect: true });
        if (!state.awaitingReconnect) return;
      } catch(e) {}
    }
  } catch(e) {}
  // Retry after delay
  if (state.awaitingReconnect) {
    setTimeout(() => tryReconnectFromPorts(), 1500);
  }
}

// ========== Restore Default ==========
function getDefaultProfileForCurrentDevice() {
  const mod = state.detectedModule || "";
  if (mod.includes('FK-A1') || mod.includes('FK-A3')) return { module: 'FK-A1/FK-A3', defaultBaudRate: 38400, defaultMode: 'NMEA', defaultHz: 1 };
  if (mod.includes('FK-C1') || mod.includes('FK-D1')) return { module: 'FK-C1/FK-D1', defaultBaudRate: 9600, defaultMode: 'NMEA', defaultHz: 1 };
  if (state.detectedBaudRate === 38400) return { module: 'FK-A1/FK-A3', defaultBaudRate: 38400, defaultMode: 'NMEA', defaultHz: 1 };
  if (state.detectedBaudRate === 9600 || state.detectedBaudRate === 115200) return { module: 'FK-C1/FK-D1', defaultBaudRate: 9600, defaultMode: 'NMEA', defaultHz: 1 };
  return null;
}

async function restoreDefaultOutput() {
  if (!state.port?.writable) { setStatusKey("status.openAndIdentifyFirst"); return; }
  const profile = getDefaultProfileForCurrentDevice();
  if (!profile) { setStatusKey("status.moduleUnknownRestore"); return; }
  const prevBr = state.currentBaudRate; const needsBaudChange = prevBr && prevBr !== profile.defaultBaudRate;
  const commands = buildDefaultOutputCommands(profile); let writer;
  try {
    writer = state.port.writable.getWriter();
    await writer.write(commands[0]); addUbxMessage(decodeUbxFrame(commands[0], {name:'CFG-DEFAULT',description:t("toolbar.restoreDefault") + ': CFG-PRT'}));
    await delay(80); writer.releaseLock(); writer = null;
    if (needsBaudChange) {
      state.serialSessionId += 1;
      if (state.reader) { try { await state.reader.cancel(); } catch(e){} try { state.reader.releaseLock(); } catch(e){} state.reader = null; }
      await delay(50); await state.port.close();
      await state.port.open(serialOpenOptions(profile.defaultBaudRate)); state.currentBaudRate = profile.defaultBaudRate;
      readSerialLoop(state.serialSessionId); await delay(100);
    }
    writer = state.port.writable.getWriter();
    for (let i = 1; i < commands.length; i++) { await writer.write(commands[i]); addUbxMessage(decodeUbxFrame(commands[i], {name:'CFG-DEFAULT',description:t("toolbar.restoreDefault") + ' NMEA 1Hz'})); await delay(80); }
    state.detectedBaudRate = profile.defaultBaudRate; state.currentBaudRate = profile.defaultBaudRate; state.outputMode = 'NMEA'; state.detectedModule = profile.module;
    state.source = (state.portDetail||state.portLabel||t("source.serial")) + ' ' + profile.defaultBaudRate + ' NMEA 1Hz';
    updateDeviceModeState(); setRunningKey(true, "status.live"); renderAll();
    setStatusKey("status.restoreSent", { module: profile.module, baud: profile.defaultBaudRate });
  } catch(e) { setStatus(e.message||t("status.restoreFailed")); }
  finally { if (writer) writer.releaseLock(); }
}

// ========== Device Mode State ==========
function updateDeviceModeState() {
  if (!els.deviceModeState) return;
  updateConnectButton();
  if (state.isDetecting) { els.deviceModeState.textContent = state.detectingBaudRate ? t("status.detectingBaud", { baud: state.detectingBaudRate }) : t("status.detectingModule"); return; }
  if (!state.detectedBaudRate) { els.deviceModeState.textContent = t("status.moduleUnknown"); return; }
  els.deviceModeState.textContent = state.detectedModule + ' | ' + state.detectedBaudRate + ' | ' + state.outputMode;
}
function markOutputMode(mode) { if (state.outputMode !== mode) { state.outputMode = mode; updateDeviceModeState(); } }

// ========== NMEA Parsing ==========
function getNmeaType(line) { const s = line.split('*')[0].replace('$',''); return (s.split(',')[0]||'').slice(2); }

function ingestLine(line, options={}) {
  const trimmed = (line||'').trim(); if (!trimmed || !trimmed.startsWith('$')) return;
  if (isNmeaChecksumValid(trimmed)) {
    markValidSerialData();
    const type = getNmeaType(trimmed);
    if (type === 'GGA' || type === 'RMC') markNmeaEpoch();
    state.nmeaLines.push(formatLogTime(new Date()) + ' ' + trimmed);
    if (state.nmeaLines.length > 500) state.nmeaLines.splice(0, state.nmeaLines.length - 500);
  }
  parseNmea(trimmed);
  if (options.render !== false) scheduleRender();
}

function parseNmea(line) {
  const sentence = line.split('*')[0].replace('$',''); const parts = sentence.split(',');
  const id = parts[0]||''; const type = id.slice(2); const talker = id.slice(0,2);
  if (MESSAGE_TYPES.includes(type)) {
    const entry = { line, parts, timestamp: new Date() };
    state.messageLatest[type] = entry;
    state.messageHistory[type].push(entry);
    if (state.messageHistory[type].length > 100) state.messageHistory[type].splice(0, state.messageHistory[type].length - 100);
  }
  switch(type) { case 'GGA': parseGga(parts); break; case 'RMC': parseRmc(parts); break; case 'GLL': parseGll(parts); break; case 'GSA': parseGsa(parts); break; case 'GSV': parseGsv(parts, talker); break; case 'VTG': parseVtg(parts); break; }
}

function parseGga(parts) {
  state.fix.utc = parseUtc(parts[1]) || state.fix.utc;
  const lat = parseCoord(parts[2], parts[3]), lon = parseCoord(parts[4], parts[5]);
  if (Number.isFinite(lat) && Number.isFinite(lon)) updatePosition(lat, lon);
  state.fix.quality = parts[6] || '0'; state.fix.satelliteCount = parseNumber(parts[7], state.fix.satelliteCount);
  state.fix.hdop = parseNumber(parts[8], state.fix.hdop); state.fix.altitude = parseNumber(parts[9], state.fix.altitude);
}
function parseRmc(parts) {
  const lat = parseCoord(parts[3], parts[4]), lon = parseCoord(parts[5], parts[6]);
  if (parts[2] === 'A' && Number.isFinite(lat) && Number.isFinite(lon)) updatePosition(lat, lon);
  state.fix.speedKmh = parseNumber(parts[7], 0) * 1.852; state.fix.course = parseNumber(parts[8], state.fix.course);
}
function parseGll(parts) {
  const lat = parseCoord(parts[1], parts[2]), lon = parseCoord(parts[3], parts[4]);
  if (parts[6] === 'A' && Number.isFinite(lat) && Number.isFinite(lon)) updatePosition(lat, lon);
  state.fix.utc = parseUtc(parts[5]) || state.fix.utc;
}
function parseGsa(parts) {
  state.fix.mode = parts[1] || '--'; state.fix.fixType = parseInt(parts[2]) || 0;
  state.fix.hdop = parseNumber(parts[16], state.fix.hdop); state.fix.vdop = parseNumber(parts[17], state.fix.vdop);
  state.usedPrns = new Set(parts.slice(3,15).filter(Boolean));
}
function parseGsv(parts, talker) {
  const system = TALKER_SYSTEM[talker] || talker;
  for (let i = 4; i + 3 < parts.length; i += 4) {
    const prn = parts[i]; if (!prn || prn === '00') continue;
    const key = system + '-' + prn; const sat = state.satellites.get(key) || {};
    sat.system = system; sat.prn = prn; sat.elevation = parts[i+1]; sat.azimuth = parts[i+2]; sat.snr = parts[i+3];
    state.satellites.set(key, sat);
  }
}
function parseVtg(parts) { state.fix.course = parseNumber(parts[1], state.fix.course); state.fix.speedKmh = parseNumber(parts[7], state.fix.speedKmh); }

// ========== NMEA Frequency ==========
function markNmeaEpoch() { markValidSerialData(); const now = Date.now(); if (now - state.lastNmeaEpochAt < 500) return; state.lastNmeaEpochAt = now; state.nmeaEpochTimes.push(now); trimNmeaEpochTimes(); }
function trimNmeaEpochTimes() { const cutoff = Date.now() - 1000; state.nmeaEpochTimes = state.nmeaEpochTimes.filter(t => t >= cutoff); }

// ========== UBX Frequency ==========
function markUbxRateSample(msg) { if (msg.classId === 1 && (msg.messageId === 7 || msg.messageId === 3)) { state.ubxEpochTimes.push(Date.now()); trimUbxEpochTimes(); } state.ubxRateTimes.push(Date.now()); trimUbxRateTimes(); }
function trimUbxEpochTimes() { const cutoff = Date.now() - 10000; state.ubxEpochTimes = state.ubxEpochTimes.filter(t => t >= cutoff); }
function trimUbxRateTimes() { const cutoff = Date.now() - 5000; state.ubxRateTimes = state.ubxRateTimes.filter(t => t >= cutoff); }
function calculateUbxRateHz() { trimUbxRateTimes(); if (state.ubxRateTimes.length < 2) return 0; const span = (state.ubxRateTimes[state.ubxRateTimes.length-1] - state.ubxRateTimes[0]) / 1000; return span > 0 ? (state.ubxRateTimes.length - 1) / span : 0; }

// ========== Panel Management ==========
function bindWindowControls() {
  const workspace = document.querySelector('.workspace'); const dock = document.createElement('div'); dock.className = 'window-dock'; dock.hidden = true;
  if (workspace) workspace.insertBefore(dock, workspace.firstChild);
  els.windowDock = dock;
  document.querySelectorAll('.panel').forEach(panel => {
    panel.addEventListener('pointerdown', () => bringPanelToFront(panel));
    const btns = panel.querySelectorAll('.window-tools button'); if (btns.length < 3) return;
    btns[0].type='button'; btns[0].dataset.titleKey='window.minimize'; btns[0].title=t('window.minimize'); btns[0].addEventListener('click', () => minimizePanel(panel));
    btns[1].type='button'; btns[1].dataset.titleKey='window.maximize'; btns[1].title=t('window.maximize'); btns[1].addEventListener('click', () => toggleMaximizePanel(panel));
    btns[2].type='button'; btns[2].dataset.titleKey='window.close'; btns[2].title=t('window.close'); btns[2].addEventListener('click', () => closePanel(panel));
  });
}
function bindPanelDrag() {
  document.querySelectorAll('.panel').forEach(panel => {
    const tb = panel.querySelector('.panel-title'); if (!tb) return;
    tb.style.cursor = 'grab'; tb.addEventListener('pointerdown', e => startPanelDrag(e, panel));
  });
}
function bindPanelResize() {
  document.querySelectorAll('.panel').forEach(panel => {
    ['top','right','bottom','left','top-left','top-right','bottom-right','bottom-left'].forEach(side => {
      const h = document.createElement('div'); h.className = 'panel-resize-handle resize-'+side; h.dataset.side = side;
      panel.appendChild(h); h.addEventListener('pointerdown', e => startPanelResize(e, panel, side));
    });
  });
}
function bindMessageSplitter() {
  if (!els.messageSplitHandle) return;
  els.messageSplitHandle.addEventListener('pointerdown', startMessageSplitDrag);
  els.messageSplitHandle.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    const layout = els.messageSplitHandle.closest('.message-layout');
    const tree = layout?.querySelector('.message-tree');
    if (!layout || !tree) return;
    event.preventDefault();
    const step = event.shiftKey ? 40 : 12;
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    setMessageTreeWidth(layout, tree.clientWidth + direction * step);
  });
}
function updateUiScale() {
  const shell = document.querySelector('.app-shell');
  if (!shell) return;
  const dpr = Math.max(0.1, window.devicePixelRatio || BASE_DEVICE_PIXEL_RATIO);
  const browserZoomRatio = dpr / BASE_DEVICE_PIXEL_RATIO;
  const viewportWidth = Math.max(1, (window.innerWidth || document.documentElement.clientWidth || UI_CANVAS_WIDTH) * browserZoomRatio);
  const viewportHeight = Math.max(1, (window.innerHeight || document.documentElement.clientHeight || UI_CANVAS_HEIGHT) * browserZoomRatio);
  const scale = Math.max(0.1, Math.min(viewportWidth / UI_CANVAS_WIDTH, viewportHeight / UI_CANVAS_HEIGHT));
  document.documentElement.style.setProperty('--ui-scale', scale.toFixed(4));
  document.documentElement.style.setProperty('--app-width', UI_CANVAS_WIDTH + 'px');
  document.documentElement.style.setProperty('--app-height', UI_CANVAS_HEIGHT + 'px');
}
function getUiScale() {
  return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--ui-scale')) || 1;
}
function getLogicalDelta(startEvent, moveEvent) {
  const scale = getUiScale();
  return { dx: (moveEvent.clientX - startEvent.clientX) / scale, dy: (moveEvent.clientY - startEvent.clientY) / scale };
}
function getElementLogicalSize(element, fallbackWidth, fallbackHeight) {
  if (!element) return { width: fallbackWidth, height: fallbackHeight };
  return {
    width: Math.max(1, element.clientWidth || fallbackWidth),
    height: Math.max(1, element.clientHeight || fallbackHeight),
  };
}
function setMessageTreeWidth(layout, width) {
  if (!layout) return;
  const handleWidth = els.messageSplitHandle?.offsetWidth || 8;
  const minLeft = 150;
  const minRight = 180;
  const maxLeft = Math.max(minLeft, layout.clientWidth - minRight - handleWidth);
  layout.style.setProperty('--message-tree-width', Math.round(clamp(width, minLeft, maxLeft)) + 'px');
}
function startMessageSplitDrag(event) {
  const handle = event.currentTarget;
  const layout = handle.closest('.message-layout');
  const tree = layout?.querySelector('.message-tree');
  if (!layout || !tree) return;
  event.preventDefault();
  event.stopPropagation();
  const startWidth = tree.clientWidth;
  handle.classList.add('is-dragging');
  handle.setPointerCapture?.(event.pointerId);
  const move = me => {
    me.preventDefault();
    const delta = getLogicalDelta(event, me);
    setMessageTreeWidth(layout, startWidth + delta.dx);
  };
  const stop = () => {
    handle.classList.remove('is-dragging');
    handle.removeEventListener('pointermove', move);
    handle.removeEventListener('pointerup', stop);
    handle.removeEventListener('pointercancel', stop);
    handle.releasePointerCapture?.(event.pointerId);
  };
  handle.addEventListener('pointermove', move);
  handle.addEventListener('pointerup', stop);
  handle.addEventListener('pointercancel', stop);
}
function handleViewportResize() {
  updateUiScale();
  layoutPanels({ preserveUserLayout: state.userPanelLayout });
  syncMaximizedPanel();
  scheduleRender();
}
function bringPanelToFront(panel) {
  if (panel.classList.contains('is-maximized')) return;
  const maxZ = Math.max(topPanelZIndex, ...[...document.querySelectorAll('.panel')].map(p => parseInt(p.style.zIndex, 10) || 0));
  topPanelZIndex = maxZ + 1;
  panel.style.zIndex = String(topPanelZIndex);
}
function savePanelRestoreRect(panel) {
  const rect = getPanelRect(panel);
  panel.dataset.restoreLeft = String(rect.left);
  panel.dataset.restoreTop = String(rect.top);
  panel.dataset.restoreWidth = String(rect.width);
  panel.dataset.restoreHeight = String(rect.height);
}
function restorePanelRect(panel) {
  if (!('restoreLeft' in panel.dataset)) return;
  setPanelRect(panel, {
    left: parseFloat(panel.dataset.restoreLeft) || 4,
    top: parseFloat(panel.dataset.restoreTop) || 4,
    width: parseFloat(panel.dataset.restoreWidth) || getPanelMinWidth(panel),
    height: parseFloat(panel.dataset.restoreHeight) || getPanelMinHeight(panel),
  });
  delete panel.dataset.restoreLeft;
  delete panel.dataset.restoreTop;
  delete panel.dataset.restoreWidth;
  delete panel.dataset.restoreHeight;
}
function minimizePanel(panel) {
  if (panel.classList.contains('is-maximized')) restorePanelRect(panel);
  panel.classList.remove('is-maximized');
  panel.classList.add('is-minimized');
  panel.style.display = 'none';
  updateWindowChrome();
  scheduleRender();
}
function toggleMaximizePanel(panel) {
  if (panel.classList.contains('is-maximized')) {
    panel.classList.remove('is-maximized');
    restorePanelRect(panel);
    keepPanelInWorkspace(panel);
  } else {
    document.querySelectorAll('.panel.is-maximized').forEach(p => {
      p.classList.remove('is-maximized');
      restorePanelRect(p);
      keepPanelInWorkspace(p);
    });
    savePanelRestoreRect(panel);
    panel.style.display = '';
    panel.classList.remove('is-minimized');
    panel.classList.add('is-maximized');
    topPanelZIndex++;
    panel.style.zIndex = String(topPanelZIndex);
    syncMaximizedPanel();
  }
  updateWindowChrome(); scheduleRender();
}
function closePanel(panel) { panel.style.display = 'none'; panel.classList.add('is-closed'); panel.classList.remove('is-maximized','is-minimized'); updateWindowChrome(); if(!state.userPanelLayout) layoutPanels(); scheduleRender(); }
function restorePanel(panel) {
  panel.style.display = '';
  panel.classList.remove('is-closed','is-minimized','is-maximized');
  restorePanelRect(panel);
  if(state.userPanelLayout) keepPanelInWorkspace(panel); else layoutPanels();
  updateWindowChrome(); scheduleRender();
}
function updateWindowChrome() {
  document.querySelectorAll('.panel').forEach(p => {
    p.dataset.minimizedLabel = t('window.minimized');
    const buttons = p.querySelectorAll('.window-tools button');
    if (buttons[0]) buttons[0].title = t('window.minimize');
    if (buttons[1]) {
      buttons[1].classList.toggle('is-restore', p.classList.contains('is-maximized'));
      buttons[1].title = p.classList.contains('is-maximized') ? t('window.restore') : t('window.maximize');
    }
    if (buttons[2]) buttons[2].title = t('window.close');
  });
  const hidden = [...document.querySelectorAll('.panel')].filter(p => p.classList.contains('is-minimized') || p.classList.contains('is-closed'));
  if (els.windowDock) { els.windowDock.hidden = hidden.length === 0; els.windowDock.innerHTML = ''; hidden.forEach(p => { const title = p.querySelector('.panel-title span')?.textContent?.trim() || t('common.window'); const b = document.createElement('button'); b.type='button'; b.textContent = p.classList.contains('is-minimized') ? title+' - '+t('window.minimized') : title+' - '+t('window.closed'); b.addEventListener('click', () => restorePanel(p)); els.windowDock.appendChild(b); }); }
  updateViewTools();
}
function layoutPanels(options={}) {
  const ws = document.querySelector('.workspace'); if (!ws) return;
  const panels = [...ws.querySelectorAll('.panel')].filter(p => !p.classList.contains('is-closed') && p.style.display !== 'none');
  const ww = ws.clientWidth, wh = ws.clientHeight; if (!ww || !wh || !panels.length) return;
  if (options.preserveUserLayout) { panels.forEach(p => keepPanelInWorkspace(p, ws)); return; }
  const gap=4, pad=4;
  let cols = Math.min(3, panels.length);
  const rows=Math.ceil(panels.length/cols);
  const availableW = ww - pad * 2 - gap * (cols - 1);
  const availableH = wh - pad * 2 - gap * (rows - 1);
  const colLefts = Array.from({length: cols}, (_, c) => pad + Math.floor((availableW * c) / cols) + c * gap);
  const colRights = Array.from({length: cols}, (_, c) => pad + Math.floor((availableW * (c + 1)) / cols) + c * gap);
  const rowTops = Array.from({length: rows}, (_, r) => pad + Math.floor((availableH * r) / rows) + r * gap);
  const rowBottoms = Array.from({length: rows}, (_, r) => pad + Math.floor((availableH * (r + 1)) / rows) + r * gap);
  panels.forEach((p,i) => {
    const c=i%cols,r=Math.floor(i/cols);
    const left=colLefts[c],top=rowTops[r];
    const width=Math.max(120,colRights[c]-left);
    const height=Math.max(160,rowBottoms[r]-top);
    setPanelRect(p,{left,top,width,height});
    p.dataset.layoutReady='true';
  });
}
function keepPanelInWorkspace(panel, ws) { ws=ws||document.querySelector('.workspace'); if(!ws||panel.classList.contains('is-maximized'))return; const r=getPanelRect(panel); const width=clamp(r.width,Math.min(getPanelMinWidth(panel),Math.max(120,ws.clientWidth-8)),Math.max(120,ws.clientWidth-8)); const height=clamp(r.height,Math.min(getPanelMinHeight(panel),Math.max(160,ws.clientHeight-8)),Math.max(160,ws.clientHeight-8)); setPanelRect(panel,{left:clamp(r.left,4,Math.max(4,ws.clientWidth-width-4)),top:clamp(r.top,4,Math.max(4,ws.clientHeight-height-4)),width,height}); }
function syncMaximizedPanel() { const ws=document.querySelector('.workspace'),p=document.querySelector('.panel.is-maximized'); if(!ws||!p)return; setPanelRect(p,{left:4,top:4,width:Math.max(getPanelMinWidth(p),ws.clientWidth-8),height:Math.max(getPanelMinHeight(p),ws.clientHeight-8)}); }
function getPanelRect(panel) { return { left:parseFloat(panel.style.left)||panel.offsetLeft||0, top:parseFloat(panel.style.top)||panel.offsetTop||0, width:parseFloat(panel.style.width)||panel.offsetWidth||300, height:parseFloat(panel.style.height)||panel.offsetHeight||200 }; }
function setPanelRect(panel,r) { panel.style.left=Math.round(r.left)+'px'; panel.style.top=Math.round(r.top)+'px'; panel.style.width=Math.round(r.width)+'px'; panel.style.height=Math.round(r.height)+'px'; }
function getPanelMinWidth(panel) { return panel.classList.contains('message-panel')?340:280; }
function getPanelMinHeight(panel) { return panel.classList.contains('nmea-panel')?250:220; }

function resetDefaultLayout() {
  hideResetTooltip();
  state.userPanelLayout = false;
  topPanelZIndex = 10;
  const panels = [...document.querySelectorAll('.panel')];
  panels.forEach((panel, index) => {
    panel.style.display = '';
    panel.style.zIndex = String(10 + index);
    panel.classList.remove('is-closed', 'is-minimized', 'is-maximized', 'is-dragging', 'is-resizing');
    delete panel.dataset.restoreLeft;
    delete panel.dataset.restoreTop;
    delete panel.dataset.restoreWidth;
    delete panel.dataset.restoreHeight;
    panel.dataset.layoutReady = 'false';
  });
  topPanelZIndex = 10 + panels.length;
  layoutPanels();
  updateWindowChrome();
  scheduleRender();
  setStatusKey('status.layoutReset');
}

function startPanelDrag(event, panel) {
  if (panel.classList.contains('is-maximized') || event.target.closest('.window-tools')) return;
  event.preventDefault(); event.stopPropagation(); bringPanelToFront(panel); panel.classList.add('is-dragging'); panel.classList.remove('is-minimized');
  state.userPanelLayout = true;
  const tb = panel.querySelector('.panel-title'); if(tb)tb.style.cursor='grabbing';
  const sl=parseFloat(panel.style.left)||panel.offsetLeft||0,st=parseFloat(panel.style.top)||panel.offsetTop||0;
  const ws=panel.closest('.workspace'),ww=ws?.clientWidth||innerWidth,wh=ws?.clientHeight||innerHeight;
  const pw=parseFloat(panel.style.width)||300,ph=parseFloat(panel.style.height)||200,mx=Math.max(4,ww-pw-4),my=Math.max(4,wh-ph-4);
  const h=event.currentTarget; h.setPointerCapture?.(event.pointerId);
  const move=me=>{me.preventDefault();const delta=getLogicalDelta(event,me);panel.style.left=Math.round(clamp(sl+delta.dx,4,mx))+'px';panel.style.top=Math.round(clamp(st+delta.dy,4,my))+'px';};
  const stop=()=>{h.removeEventListener('pointermove',move);h.removeEventListener('pointerup',stop);h.removeEventListener('pointercancel',stop);panel.classList.remove('is-dragging');if(tb)tb.style.cursor='grab';h.releasePointerCapture?.(event.pointerId);renderAll();};
  h.addEventListener('pointermove',move);h.addEventListener('pointerup',stop);h.addEventListener('pointercancel',stop);
}

function startPanelResize(event, panel, side) {
  if(panel.classList.contains('is-maximized'))return;
  event.preventDefault();event.stopPropagation();bringPanelToFront(panel);panel.classList.add('is-resizing');panel.classList.remove('is-minimized');
  state.userPanelLayout = true;
  const ws=panel.closest('.workspace'),ww=ws?.clientWidth||innerWidth,wh=ws?.clientHeight||innerHeight;
  const rect=getPanelRect(panel),mw=getPanelMinWidth(panel),mh=getPanelMinHeight(panel);
  const h=event.currentTarget;h.setPointerCapture?.(event.pointerId);let pending=null,frame=0;
  const move=me=>{me.preventDefault();let l=rect.left,t=rect.top,r=rect.left+rect.width,b=rect.top+rect.height;const {dx,dy}=getLogicalDelta(event,me);if(side.includes('right'))r=clamp(rect.left+rect.width+dx,rect.left+mw,ww-4);if(side.includes('left'))l=clamp(rect.left+dx,4,rect.left+rect.width-mw);if(side.includes('bottom'))b=clamp(rect.top+rect.height+dy,rect.top+mh,wh-4);if(side.includes('top'))t=clamp(rect.top+dy,4,rect.top+rect.height-mh);pending={left:l,top:t,width:r-l,height:b-t};if(!frame)frame=requestAnimationFrame(()=>{frame=0;if(pending)setPanelRect(panel,pending);});};
  const stop=()=>{if(frame){cancelAnimationFrame(frame);frame=0;}if(pending)setPanelRect(panel,pending);panel.classList.remove('is-resizing');h.removeEventListener('pointermove',move);h.removeEventListener('pointerup',stop);h.removeEventListener('pointercancel',stop);h.releasePointerCapture?.(event.pointerId);updateWindowChrome();renderAll();};
  h.addEventListener('pointermove',move);h.addEventListener('pointerup',stop);h.addEventListener('pointercancel',stop);
}

// ========== Views ==========
function renderAll() { state.renderQueued=false;state.lastRenderAt=Date.now();renderNmea();renderUbx();renderMessageDetail();renderInfo();renderLegend();renderSatelliteTable();renderSignal();renderScatter();renderMap(); }
function scheduleRender() { if(!state.renderQueued){state.renderQueued=true;requestAnimationFrame(renderAll);} }

function renderNmea() { trimNmeaEpochTimes(); els.nmeaSummary.textContent=t('summary.frequency',{value:state.outputMode==='UBX'?0:state.nmeaEpochTimes.length}); els.nmeaLog.textContent=state.outputMode==='UBX'?'':state.nmeaLines.slice(-180).join('\n'); els.nmeaLog.scrollTop=els.nmeaLog.scrollHeight; }
function renderUbx() { trimUbxRateTimes(); els.ubxSummary.textContent=t('summary.frequency',{value:calculateUbxRateHz().toFixed(1)}); els.ubxLog.textContent=state.ubxLines.join('\n'); els.ubxLog.scrollTop=els.ubxLog.scrollHeight; }

function renderMessageDetail() {
  if(!els.messageDetail)return; const type=state.selectedMessageType||'GSV';
  document.querySelectorAll('[data-type]').forEach(b=>{
    const hasData = !!state.messageLatest[b.dataset.type];
    b.classList.toggle('active',b.dataset.type===type && hasData);
    b.classList.toggle('has-data',hasData);
    b.classList.toggle('no-data',!hasData);
  });
  const latest=state.messageLatest[type];
  if(!latest){els.messageDetail.innerHTML='<div class="message-detail-title">'+type+'</div><div class="empty-detail">'+escapeHtml(t('message.emptyType'))+'</div>';return;}
  const fields=getNmeaFields(type,latest.parts);
  els.messageDetail.innerHTML='<div class="message-detail-title">'+type+' <small>'+formatLogTime(latest.timestamp)+'</small></div><table class="message-param-table"><tbody>'+fields.map(([l,v])=>'<tr><td class="param-label">'+escapeHtml(l)+'</td><td class="param-value">'+escapeHtml(v)+'</td></tr>').join('')+'</tbody></table>';
}

function getNmeaFields(type,parts){
  const quality = {'0':'nmea.invalid','1':'nmea.single','2':'nmea.differential','3':'nmea.pps','4':'nmea.rtkFixed','5':'nmea.rtkFloat','6':'nmea.deadReckoning','7':'nmea.manual','8':'nmea.simulation'};
  if(type==='GGA')return[[t('nmea.utcTime'),parseUtc(parts[1])||'--'],[t('nmea.latitude'),formatNmeaCoord(parts[2],parts[3])],[t('nmea.longitude'),formatNmeaCoord(parts[4],parts[5])],[t('nmea.fixQuality'),(parts[6]||'--')+' ('+t(quality[parts[6]]||'nmea.unknown')+')'],[t('nmea.satelliteCount'),parts[7]||'0'],['HDOP',parts[8]||'--'],[t('nmea.altitudeM'),parts[9]||'--']];
  if(type==='RMC')return[[t('nmea.utcTime'),parseUtc(parts[1])||'--'],[t('nmea.status'),parts[2]==='A'?t('nmea.valid'):t('nmea.invalid')],[t('nmea.latitude'),formatNmeaCoord(parts[3],parts[4])],[t('nmea.longitude'),formatNmeaCoord(parts[5],parts[6])],[t('nmea.speedKmh'),parts[7]?(parseNumber(parts[7],0)*1.852).toFixed(3):'--'],[t('nmea.courseDegree'),parts[8]||'--']];
  if(type==='GSA')return[[t('nmea.mode'),parts[1]==='M'?t('nmea.manual'):t('nmea.auto')],[t('nmea.fix'),({'1':t('nmea.invalid'),'2':'2D','3':'3D'}[parts[2]]||parts[2]||'--')],[t('nmea.usedSatellites'),parts.slice(3,15).filter(Boolean).join(', ')||t('nmea.none')],['PDOP',parts[15]||'--'],['HDOP',parts[16]||'--'],['VDOP',parts[17]||'--']];
  if(type==='GSV'){const s=extractGsvSatellites(parts);return[[t('nmea.sentence'),(parts[1]||'?')+'/'+(parts[2]||'?')],[t('nmea.visibleSatellites'),parts[3]||'0'],[t('nmea.satelliteDetails'),s.map(x=>t('nmea.prnDetail',{prn:x.prn,elevation:x.elevation,azimuth:x.azimuth,snr:x.snr})).join('; ')||'--']];}
  if(type==='VTG')return[[t('nmea.trueCourse'),parts[1]||'--'],[t('nmea.magneticCourse'),parts[3]||'--'],[t('nmea.speedKn'),parts[5]||'--'],[t('nmea.speedKmh'),parts[7]||'--']];
  if(type==='GLL')return[[t('nmea.latitude'),formatNmeaCoord(parts[1],parts[2])],[t('nmea.longitude'),formatNmeaCoord(parts[3],parts[4])],[t('nmea.utcTime'),parseUtc(parts[5])||'--'],[t('nmea.status'),parts[6]==='A'?t('nmea.valid'):t('nmea.invalid')]];
  return parts.map((v,i)=>[t('nmea.field')+i,v||'--']);
}
function renderInfo() { setValue('utcValue',state.fix.utc);setValue('lonValue',state.fix.lon?state.fix.lon.toFixed(5):'--');setValue('latValue',state.fix.lat?state.fix.lat.toFixed(5):'--');setValue('altValue',state.fix.altitude?state.fix.altitude.toFixed(3):'--');setValue('speedValue',state.fix.speedKmh?state.fix.speedKmh.toFixed(3):'--');setValue('courseValue',state.fix.course?state.fix.course.toFixed(1):'--');setValue('satCountValue',String(state.fix.satelliteCount||0));setValue('hdopValue',state.fix.hdop?state.fix.hdop.toFixed(1):'--');setValue('vdopValue',state.fix.vdop?state.fix.vdop.toFixed(1):'--');setValue('modeValue',state.fix.mode||'--'); }
function renderLegend() { const sats=getFilteredSatellites(); els.signalLegend.innerHTML=Object.keys(SYSTEMS).map(sys=>{const list=sats.filter(s=>s.system===sys);const avg=list.length?list.reduce((sum,s)=>sum+(parseFloat(s.snr)||0),0)/list.length:0;return'<span><i class="dot '+sys.toLowerCase()+'"></i>'+sys+' '+avg.toFixed(1)+'</span>';}).join(''); }
function renderSatelliteTable() { const sats=getFilteredSatellites(); els.visibleSatelliteCount.textContent=sats.length; els.satelliteRows.innerHTML=sats.map(s=>'<tr><td>'+escapeHtml(s.system)+'</td><td>'+escapeHtml(s.prn)+'</td><td>'+escapeHtml(s.elevation||'--')+'</td><td>'+escapeHtml(s.azimuth||'--')+'</td><td>'+escapeHtml(s.snr||'--')+'</td></tr>').join(''); }
function getFilteredSatellites() { return [...state.satellites.values()].filter(s=>{const box=document.querySelector('[data-system="'+s.system+'"]');return!(box&&!box.checked);}); }

function renderSignal() {
  const canvas=els.signalCanvas;if(!canvas)return;const rect=getElementLogicalSize(canvas.parentElement,400,300);
  const dpr=devicePixelRatio||1;canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;canvas.style.width=rect.width+'px';canvas.style.height=rect.height+'px';
  const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
  const sats=getFilteredSatellites().sort((a,b)=>(a.system||'').localeCompare(b.system||'')||(parseFloat(b.snr)||0)-(parseFloat(a.snr)||0));
  if(!sats.length){ctx.fillStyle='#999';ctx.font='18px "Microsoft YaHei", Arial';ctx.textAlign='center';ctx.fillText(t('signal.empty'),w/2,h/2);return;}
  const padL=50,padR=10,padT=30,padB=40;
  const barW=Math.max(8,Math.min(24,(w-padL-padR)/Math.max(sats.length,1)));
  const barArea=h-padT-padB;
  // SNR scale lines
  ctx.strokeStyle='#e0e0e0';ctx.lineWidth=1;
  for(let snr=10;snr<=50;snr+=10){const y=padT+barArea-(snr/50)*barArea;ctx.beginPath();ctx.moveTo(padL,y);ctx.lineTo(w-padR,y);ctx.stroke();}
  ctx.fillStyle='#888';ctx.font='11px Consolas';ctx.textAlign='right';
  for(let snr=10;snr<=50;snr+=10){ctx.fillText(snr,padL-4,padT+barArea-(snr/50)*barArea+4);}
  ctx.fillText('dBHz',padL-4,padT-8);
  // Draw vertical bars
  sats.forEach((sat,i)=>{
    const snr=parseFloat(sat.snr)||0;const sys=SYSTEMS[sat.system]||{color:'#999'};
    const x=padL+i*barW,bh=Math.max(2,(snr/50)*barArea);
    ctx.fillStyle=sys.color;ctx.fillRect(x,padT+barArea-bh,barW-2,bh);
    // PRN label below bar
    ctx.fillStyle='#333';ctx.font=(barW>16?'12px':'9px')+' Consolas';ctx.textAlign='center';
    ctx.fillText(sat.prn,x+barW/2,h-padB+14);
    // SNR above bar
    ctx.fillText(snr,x+barW/2,padT+barArea-bh-4);
  });
}

function renderScatter() {
  const canvas=els.scatterCanvas;if(!canvas)return;const rect=getElementLogicalSize(canvas.parentElement,400,300);
  const dpr=devicePixelRatio||1;canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;canvas.style.width=rect.width+'px';canvas.style.height=rect.height+'px';
  const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
  if(!state.scatterPoints.length){ctx.fillStyle='#999';ctx.font='18px "Microsoft YaHei", Arial';ctx.textAlign='center';ctx.fillText(t('scatter.empty'),w/2,h/2);return;}
  // Center on first point or current fix
  const center=state.scatterCenter||{lat:state.fix.lat,lon:state.fix.lon};
  const pad=40,cx=w/2,cy=h/2;
  // Convert to meters
  const cosLat=Math.cos(center.lat*Math.PI/180);
  const pts=state.scatterPoints.map(p=>({x:(p.lon-center.lon)*111320*cosLat,y:(p.lat-center.lat)*110540}));
  const maxR=Math.max(0.5,...pts.map(p=>Math.hypot(p.x,p.y)));
  const scale=Math.min(w-pad*2,h-pad*2)/(maxR*2.4);
  // Grid
  ctx.strokeStyle='#e8e8e8';ctx.lineWidth=1;
  for(let i=-5;i<=5;i++){ctx.beginPath();ctx.moveTo(cx+i*50,pad);ctx.lineTo(cx+i*50,h-pad);ctx.stroke();ctx.beginPath();ctx.moveTo(pad,cy+i*50);ctx.lineTo(w-pad,cy+i*50);ctx.stroke();}
  // Center cross
  ctx.strokeStyle='#bbb';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(cx,pad);ctx.lineTo(cx,h-pad);ctx.moveTo(pad,cy);ctx.lineTo(w-pad,cy);ctx.stroke();
  // Distance ring
  ctx.strokeStyle='#ccc';ctx.setLineDash([6,4]);ctx.beginPath();ctx.arc(cx,cy,maxR*scale,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);
  // Draw points
  pts.forEach((p,i)=>{
    const sx=cx+p.x*scale,sy=cy-p.y*scale;
    const isLast=i===pts.length-1;
    ctx.fillStyle=isLast?'#e02020':'#3a7bd5';ctx.beginPath();ctx.arc(sx,sy,isLast?5:2.5,0,Math.PI*2);ctx.fill();
    if(isLast){ctx.strokeStyle='rgba(224,32,32,0.3)';ctx.lineWidth=1;ctx.beginPath();ctx.arc(sx,sy,8,0,Math.PI*2);ctx.stroke();}
  });
  // Labels
  ctx.fillStyle='#666';ctx.font='13px "Microsoft YaHei", Arial';ctx.textAlign='center';
  ctx.fillText(t('scatter.east'),w-pad,cy+16);ctx.fillText(t('scatter.north'),cx,h-pad+14);
  ctx.fillText('R='+maxR.toFixed(2)+'m',cx+maxR*scale+20,cy-8);
  // Lon/Lat display
  ctx.fillStyle='#333';ctx.font='14px Consolas';ctx.textAlign='left';
  ctx.fillText('Lon:'+center.lon.toFixed(7),pad,pad-10);
  ctx.fillText('Lat:'+center.lat.toFixed(7),pad,pad+10);
}

function renderMap() {
  const canvas=els.mapCanvas;if(!canvas)return;const rect=getElementLogicalSize(canvas.parentElement,300,200);
  const dpr=devicePixelRatio||1;canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;canvas.style.width=rect.width+'px';canvas.style.height=rect.height+'px';
  const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
  ctx.save();ctx.scale(dpr,dpr);
  drawMap(ctx,rect.width,rect.height);
  ctx.restore();
}

function drawMap(ctx,w,h) {
  const hasFix = Number.isFinite(state.fix.lat) && Number.isFinite(state.fix.lon) && (state.fix.lat !== 0 || state.fix.lon !== 0);
  const zoom = clamp(Math.round(state.mapZoom || MAP_DEFAULT_ZOOM), MAP_MIN_ZOOM, MAP_MAX_ZOOM);
  state.mapZoom = zoom;
  const fixPoint = hasFix ? mapDisplayPoint({lat:state.fix.lat,lon:state.fix.lon}) : null;
  if (hasFix && (state.mapFollowFix || !state.mapCenter)) state.mapCenter = fixPoint;
  const following = hasFix && state.mapFollowFix;
  const anchor = following ? getMapMarkerAnchor(w,h) : {x:w/2,y:h/2};
  const focus = following ? fixPoint : getCurrentMapCenter();
  const marker = hasFix ? getMapPointScreenPosition(fixPoint, focus, zoom, anchor) : getMapMarkerAnchor(w,h);
  ctx.clearRect(0,0,w,h);
  drawMapTiles(ctx,w,h,focus,zoom,anchor);
  if (hasFix) {
    drawMapTrack(ctx,w,h,focus,zoom,anchor);
    drawGnssMarker(ctx,marker.x,marker.y,state.fix.course);
  } else {
    drawMapEmptyState(ctx,w,h);
  }
  drawMapAttribution(ctx,w,h);
}

function getCurrentMapCenter() {
  if (state.mapCenter && Number.isFinite(state.mapCenter.lat) && Number.isFinite(state.mapCenter.lon)) return state.mapCenter;
  const hasFix = Number.isFinite(state.fix.lat) && Number.isFinite(state.fix.lon) && (state.fix.lat !== 0 || state.fix.lon !== 0);
  return mapDisplayPoint(hasFix ? {lat:state.fix.lat,lon:state.fix.lon} : {lat:22.58,lon:113.91});
}

function getVisibleMapCenter(w,h) {
  const centerAnchor = {x:w/2,y:h/2};
  const hasFix = Number.isFinite(state.fix.lat) && Number.isFinite(state.fix.lon) && (state.fix.lat !== 0 || state.fix.lon !== 0);
  if (!(hasFix && state.mapFollowFix)) return getCurrentMapCenter();
  const zoom = clamp(Math.round(state.mapZoom || MAP_DEFAULT_ZOOM), MAP_MIN_ZOOM, MAP_MAX_ZOOM);
  const fixPoint = mapDisplayPoint({lat:state.fix.lat,lon:state.fix.lon});
  const fixPx = lonLatToWorldPixel(fixPoint.lon, fixPoint.lat, zoom);
  const markerAnchor = getMapMarkerAnchor(w,h);
  return worldPixelToLonLat(fixPx.x + centerAnchor.x - markerAnchor.x, fixPx.y + centerAnchor.y - markerAnchor.y, zoom);
}

function drawMapTiles(ctx,w,h,center,zoom,anchor) {
  const source = MAP_TILE_SOURCES[state.mapMode] || MAP_TILE_SOURCES.road;
  const centerPx = lonLatToWorldPixel(center.lon, center.lat, zoom);
  const ax = anchor?.x ?? w / 2, ay = anchor?.y ?? h / 2;
  const nativeZoom = Math.min(zoom, source.maxNativeZoom || zoom);
  const overScale = 2 ** (zoom - nativeZoom);
  const nativeTileSize = MAP_TILE_SIZE * overScale;
  const startX = Math.floor((centerPx.x - ax) / nativeTileSize);
  const endX = Math.floor((centerPx.x + (w - ax)) / nativeTileSize);
  const startY = Math.floor((centerPx.y - ay) / nativeTileSize);
  const endY = Math.floor((centerPx.y + (h - ay)) / nativeTileSize);
  ctx.fillStyle = state.mapMode === "satellite" ? "#22352f" : "#f4efe3";
  ctx.fillRect(0,0,w,h);
  const tileCount = 2 ** nativeZoom;
  for (let ty = startY; ty <= endY; ty++) {
    if (ty < 0 || ty >= tileCount) continue;
    for (let tx = startX; tx <= endX; tx++) {
      const wrappedX = ((tx % tileCount) + tileCount) % tileCount;
      const dx = Math.round(tx * nativeTileSize - centerPx.x + ax);
      const dy = Math.round(ty * nativeTileSize - centerPx.y + ay);
      const img = getMapTile(source, nativeZoom, wrappedX, ty);
      if (img.complete && img.naturalWidth > 0) ctx.drawImage(img, dx, dy, nativeTileSize, nativeTileSize);
      else drawTilePlaceholder(ctx, dx, dy, nativeTileSize);
    }
  }
}

function getMapTile(source, zoom, x, y) {
  const key = state.mapMode + ":" + zoom + ":" + x + ":" + y;
  let img = mapTileCache.get(key);
  if (!img) {
    img = new Image();
    img.onload = scheduleMapRender;
    img.onerror = scheduleMapRender;
    img.src = source.url(zoom, x, y);
    mapTileCache.set(key, img);
    pruneMapTileCache();
  }
  return img;
}

function pruneMapTileCache() {
  if (mapTileCache.size <= 260) return;
  let removeCount = mapTileCache.size - 220;
  for (const key of mapTileCache.keys()) {
    mapTileCache.delete(key);
    if (mapTileCache.size <= 220 || --removeCount <= 0) break;
  }
}

function scheduleMapRender() {
  if (mapRenderQueued) return;
  mapRenderQueued = true;
  requestAnimationFrame(() => { mapRenderQueued = false; renderMap(); });
}

function drawTilePlaceholder(ctx,x,y,size=MAP_TILE_SIZE) {
  ctx.fillStyle = state.mapMode === "satellite" ? "#2c423b" : "#f7f2e7";
  ctx.fillRect(x,y,size,size);
  ctx.strokeStyle = state.mapMode === "satellite" ? "rgba(255,255,255,0.08)" : "rgba(160,150,130,0.18)";
  ctx.strokeRect(x,y,size,size);
}

function drawMapTrack(ctx,w,h,center,zoom,anchor) {
  const centerPx = lonLatToWorldPixel(center.lon, center.lat, zoom);
  const ax = anchor?.x ?? w / 2, ay = anchor?.y ?? h / 2;
  const points = state.scatterPoints.slice(-MAP_MAX_TRACK_POINTS)
    .filter(p => Number.isFinite(p.lat) && Number.isFinite(p.lon))
    .map(p => {
      const displayPoint = mapDisplayPoint(p);
      const px = lonLatToWorldPixel(displayPoint.lon, displayPoint.lat, zoom);
      return {x:px.x-centerPx.x+ax,y:px.y-centerPx.y+ay};
    });
  if (points.length > 1) {
    ctx.strokeStyle = "rgba(34, 111, 214, 0.9)";
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    points.forEach((p,i)=>{ if(i===0)ctx.moveTo(p.x,p.y); else ctx.lineTo(p.x,p.y); });
    ctx.stroke();
  }
  ctx.fillStyle = "rgba(34, 111, 214, 0.8)";
  points.slice(-80,-1).forEach((p,i)=>{ctx.globalAlpha=0.2+i/100;ctx.beginPath();ctx.arc(p.x,p.y,2,0,Math.PI*2);ctx.fill();});
  ctx.globalAlpha = 1;
}

function drawGnssMarker(ctx,x,y,course) {
  const angle = Number.isFinite(course) ? course * Math.PI / 180 : 0;
  ctx.save();
  ctx.translate(x,y);
  ctx.rotate(angle);
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetY = 2;
  ctx.fillStyle = "#e60012";
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0,-30);
  ctx.lineTo(16,17);
  ctx.lineTo(0,10);
  ctx.lineTo(-16,17);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawMapEmptyState(ctx,w,h) {
  ctx.fillStyle = "rgba(255,255,255,0.78)";
  ctx.fillRect(0,0,w,h);
  ctx.fillStyle = "#666";
  ctx.font = '18px "Microsoft YaHei", Arial';
  ctx.textAlign = "center";
  ctx.fillText(t("map.waitingFix"),w/2,h/2-8);
  ctx.font = '13px "Microsoft YaHei", Arial';
  ctx.fillText(t("map.autoCenterAfterFix"),w/2,h/2+18);
}

function drawMapAttribution(ctx,w,h) {
  const source = MAP_TILE_SOURCES[state.mapMode] || MAP_TILE_SOURCES.road;
  ctx.fillStyle = "rgba(255,255,255,0.82)";
  ctx.fillRect(8,h-24,140,18);
  ctx.fillStyle = "#555";
  ctx.font = "11px Arial";
  ctx.textAlign = "left";
  ctx.fillText(t(source.labelKey),14,h-11);
}

function getMapMarkerAnchor(w,h) {
  return {x:w/2,y:h*0.58};
}

function getMapPointScreenPosition(point, center, zoom, anchor) {
  const centerPx = lonLatToWorldPixel(center.lon, center.lat, zoom);
  const pointPx = lonLatToWorldPixel(point.lon, point.lat, zoom);
  return {x:pointPx.x-centerPx.x+anchor.x,y:pointPx.y-centerPx.y+anchor.y};
}

function mapDisplayPoint(point) {
  const source = MAP_TILE_SOURCES[state.mapMode] || MAP_TILE_SOURCES.road;
  if (source.coord === "gcj02") return wgs84ToGcj02(point.lat, point.lon);
  return {lat:point.lat,lon:point.lon};
}

function wgs84ToGcj02(lat,lon) {
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || isOutsideChina(lat,lon)) return {lat,lon};
  const a = 6378245.0;
  const ee = 0.00669342162296594323;
  let dLat = transformLat(lon - 105.0, lat - 35.0);
  let dLon = transformLon(lon - 105.0, lat - 35.0);
  const radLat = lat / 180.0 * Math.PI;
  let magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * Math.PI);
  dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * Math.PI);
  return {lat:lat + dLat,lon:lon + dLon};
}

function isOutsideChina(lat,lon) {
  return lon < 72.004 || lon > 137.8347 || lat < 0.8293 || lat > 55.8271;
}

function transformLat(x,y) {
  let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
  ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;
  ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;
  return ret;
}

function transformLon(x,y) {
  let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
  ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
  ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 30.0 * Math.PI)) * 2.0 / 3.0;
  return ret;
}

function lonLatToWorldPixel(lon,lat,zoom) {
  const scale = MAP_TILE_SIZE * 2 ** zoom;
  const clampedLat = clamp(lat, -85.05112878, 85.05112878);
  const sinLat = Math.sin(clampedLat * Math.PI / 180);
  return {
    x: (lon + 180) / 360 * scale,
    y: (0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)) * scale,
  };
}

function worldPixelToLonLat(x,y,zoom) {
  const scale = MAP_TILE_SIZE * 2 ** zoom;
  const lon = x / scale * 360 - 180;
  const n = Math.PI - 2 * Math.PI * y / scale;
  const lat = 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
  return {lat:clamp(lat,-85.05112878,85.05112878),lon};
}

// ========== Utilities ==========
function parseUtc(v){if(!v||v.length<6)return'';return v.slice(0,2)+':'+v.slice(2,4)+':'+v.slice(4,6)+(v.includes('.')?'.'+v.split('.')[1].padEnd(3,'0').slice(0,3):'.000');}
function parseCoord(v,h){if(!v||!h)return NaN;const raw=parseFloat(v);if(!Number.isFinite(raw))return NaN;const degrees=Math.floor(raw/100);const minutes=raw-degrees*100;if(minutes<0||minutes>=60)return NaN;const sign=h==='S'||h==='W'?-1:1;return sign*(degrees+minutes/60);}
function parseNumber(v,fb){const n=parseFloat(v);return Number.isFinite(n)?n:fb;}
function formatNmeaCoord(v,h){const c=parseCoord(v,h);return Number.isFinite(c)?c.toFixed(7)+' '+h:'--';}
function formatLogTime(d){return d.toTimeString().slice(0,8)+'.'+String(d.getMilliseconds()).padStart(3,'0');}
function escapeHtml(v){return String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function setValue(id,v){if(els[id])els[id].value=v;}
function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
function updatePosition(lat,lon){state.fix.lat=lat;state.fix.lon=lon;if(state.mapFollowFix)state.mapCenter=mapDisplayPoint({lat,lon});if(!state.scatterCenter)state.scatterCenter={lat,lon};state.scatterPoints.push({lat,lon,time:Date.now()});if(state.scatterPoints.length>500)state.scatterPoints.splice(0,state.scatterPoints.length-500);}
function extractGsvSatellites(parts){const sats=[];for(let i=4;i+3<parts.length;i+=4){if(!parts[i]||parts[i]==='00')continue;sats.push({prn:parts[i],elevation:parts[i+1],azimuth:parts[i+2],snr:parts[i+3]});}return sats;}
function isNmeaChecksumValid(line){const si=line.lastIndexOf('*');if(si<0)return true;const expected=parseInt(line.slice(si+1),16);let ck=0;for(let i=line[0]==='$'?1:0;i<si;i++)ck^=line.charCodeAt(i);return ck===expected;}
function delay(ms){return new Promise(r=>setTimeout(r,ms));}

// ========== Port Status ==========
function isPortOccupiedError(error){if(!error?.message)return false;const m=error.message.toLowerCase();return['in use','occupied','already','access denied','being used','failed to open','正在使用','被占用','拒绝访问'].some(k=>m.includes(k));}
function showPortStatus(msg,type,actionText){if(!els.portStatusBanner)return;if(portStatusTimer){clearTimeout(portStatusTimer);portStatusTimer=null;}els.portStatusBanner.className='port-status-banner port-'+(type||'info');const icon=els.portStatusBanner.querySelector('.port-status-icon');if(icon)icon.textContent={error:'!',warning:'!',info:'i',success:'v'}[type]||'i';els.portStatusMessage.textContent=msg;els.portStatusAction.textContent=actionText||t('common.retry');els.portStatusAction.style.display=actionText===false?'none':'';els.portStatusBanner.style.display='flex';els.portStatusBanner.onclick=()=>hidePortStatus();if(type==='info'||type==='warning')portStatusTimer=setTimeout(()=>{hidePortStatus();portStatusTimer=null;},5000);}
function hidePortStatus(){if(portStatusTimer){clearTimeout(portStatusTimer);portStatusTimer=null;}if(els.portStatusBanner)els.portStatusBanner.style.display='none';}

// ========== Commands / File ==========
function sendCommand(){const raw=els.commandInput.value.trim();if(!raw)return;if(els.commandMode.value==='hex'){try{parseHex(raw);state.nmeaLines.push(formatLogTime(new Date())+' [HEX] '+raw);scheduleRender();}catch(e){setStatusKey('status.hexFormatError');return;}}else{state.nmeaLines.push(formatLogTime(new Date())+' '+raw);scheduleRender();}els.commandInput.value='';}
function parseHex(text){const bytes=text.replace(/0x/gi,'').split(/[\s,]+/).filter(Boolean).map(p=>parseInt(p,16));if(bytes.some(b=>!Number.isFinite(b)||b<0||b>255))throw new Error(t('status.hexFormatError'));return new Uint8Array(bytes);}
function loadFile(event){const file=event.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{clearData({silent:true});state.source=t('source.file',{file:file.name});const lines=reader.result.split(/\r?\n/);lines.forEach((l,i)=>{ingestLine(l,{render:i===lines.length-1});});setStatusKey('status.loadedFile',{file:file.name,lines:lines.length});renderAll();};reader.readAsText(file);}
function clearData(options={}){const keepConnection=!!options.keepConnection;const keepStatus=!!options.keepStatus;const wasRunning=state.running;state.nmeaLines=[];state.ubxMessages=[];state.ubxLines=[];state.ubxEpochTimes=[];state.ubxRateTimes=[];state.nmeaEpochTimes=[];state.lastNmeaEpochAt=0;state.selectedUbxIndex=0;state.ubxBuffer=[];if(!keepConnection){state.detectedBaudRate=null;state.currentBaudRate=null;state.detectedModule='';state.outputMode='--';state.portLabel='串口';state.portDetail='';state.source='';state.paused=false;state.pausedPort=null;updatePauseButton();}state.messageLatest=Object.fromEntries(MESSAGE_TYPES.map(t=>[t,null]));state.messageHistory=Object.fromEntries(MESSAGE_TYPES.map(t=>[t,[]]));state.satellites.clear();state.usedPrns.clear();state.scatterPoints=[];state.scatterCenter=null;state._leafletFirstFix=false;state.epochs=0;state.fix={utc:'00:00:00.000',lat:0,lon:0,altitude:0,speedKmh:0,course:0,satelliteCount:0,hdop:0,vdop:0,mode:'--',fixType:0,quality:'0'};updateDeviceModeState();if(!options.silent&&!keepStatus){if(keepConnection){setRunningKey(wasRunning||!!state.port,'status.live');}else{setRunningKey(false,'status.idle');}hidePortStatus();}renderAll();}

function pauseReplay(){if(state.replayTimer){clearInterval(state.replayTimer);state.replayTimer=null;}if(!state.port)setRunningKey(false,'status.idle');}
async function togglePauseTesting(){if(state.paused){await resumeTesting();return;}await pauseTesting();}
async function resumeTesting(){const port=state.pausedPort;state.paused=false;state.pausedPort=null;updatePauseButton();setStatusKey('status.started');await connectSerial(port?{port}:{});if(state.running)setStatusKey('status.started');}
async function pauseTesting(){const hasActiveTest=!!(state.port||state.reader||state.running||state.isDetecting||state.isReprobing);pauseReplay();state.serialSessionId+=1;state.awaitingReconnect=false;state.isDetecting=false;state.isReprobing=false;state.detectingBaudRate=null;const reader=state.reader,port=state.port;state.reader=null;state.port=null;state.running=false;state.paused=hasActiveTest;state.pausedPort=hasActiveTest?port:null;updatePauseButton();updateDeviceModeState();updateConnectButton();hidePortStatus();if(reader){try{await reader.cancel();}catch(e){}try{reader.releaseLock();}catch(e){}}if(port){try{await port.close();}catch(e){}}setRunningKey(false,hasActiveTest?'status.paused':'status.idle');state.lastStatusTextKey='';state.lastStatusTextParams={};if(els.debugState&&hasActiveTest)els.debugState.textContent=t('status.paused');}
function setRunning(active,text){state.running=active;state.lastRunningTextKey='';state.lastRunningTextParams={};state.lastPlainStatusText=text||'';els.connectionState.textContent=active?formatSerialConnectionLabel():t('status.disconnected');els.idleState.textContent=text||(active?t('status.running'):t('status.idle'));els.statusLed.classList.toggle('active',active);updateConnectButton();if(active)hidePortStatus();}
function setRunningKey(active,key,params={}){state.running=active;state.lastRunningTextKey=key;state.lastRunningTextParams=params;state.lastPlainStatusText='';els.connectionState.textContent=active?formatSerialConnectionLabel():t('status.disconnected');els.idleState.textContent=t(key,params);els.statusLed.classList.toggle('active',active);updateConnectButton();if(active)hidePortStatus();}
function setStatus(text){state.lastStatusTextKey='';state.lastStatusTextParams={};state.lastPlainStatusText=text;if(state.running&&els.debugState)els.debugState.textContent=text;else els.idleState.textContent=text;}
function setStatusKey(key,params={}){state.lastStatusTextKey=key;state.lastStatusTextParams=params;const text=t(key,params);if(state.running&&els.debugState)els.debugState.textContent=text;else els.idleState.textContent=text;}
function refreshStatusTexts(){if(!els.connectionState)return;els.connectionState.textContent=state.running?formatSerialConnectionLabel():t('status.disconnected');const runningText=state.lastRunningTextKey?t(state.lastRunningTextKey,state.lastRunningTextParams):(state.running?t('status.running'):t('status.idle'));if(state.running){els.idleState.textContent=runningText;if(state.lastStatusTextKey&&els.debugState)els.debugState.textContent=t(state.lastStatusTextKey,state.lastStatusTextParams);else if(state.lastPlainStatusText&&els.debugState)els.debugState.textContent=state.lastPlainStatusText;return;}if(state.lastStatusTextKey){els.idleState.textContent=t(state.lastStatusTextKey,state.lastStatusTextParams);}else if(state.lastPlainStatusText){els.idleState.textContent=state.lastPlainStatusText;}else{els.idleState.textContent=runningText;}}
function resetLiveData(options={}){clearData({...options,silent:true,keepConnection:options.keepConnection});}
function updateRuntime(){const s=Math.floor((Date.now()-state.startTime)/1000);els.runtimeState.textContent=t('status.runtime')+String(Math.floor(s/3600)).padStart(2,'0')+':'+String(Math.floor(s%3600/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');}
function downloadScatterCsv(){if(!state.scatterPoints.length){setStatusKey('status.noScatterToSave');return;}const rows=['lat,lon,time',...state.scatterPoints.map(p=>p.lat+','+p.lon+','+new Date(p.time).toISOString())];const blob=new Blob([rows.join('\n')],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='gnss-scatter-'+Date.now()+'.csv';a.click();URL.revokeObjectURL(a.href);setStatusKey('status.scatterSaved');}

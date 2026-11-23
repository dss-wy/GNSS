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
const RTK_PROTOCOL = window.RtkProtocol;
const RTK_STATION_QUERY_TIMEOUT_PER_SN_MS = 2000;
const RTK_STATION_QUERY_GROUP_DURATION_MS = 4000;
const RTK_STATION_QUERY_EXTRA_TIMEOUT_PER_GROUP_MS = 1500;
const RTK_STATION_QUERY_MIN_TIMEOUT_MS = 5000;
const RTK_SERIAL_RECOVERY_MAX_ATTEMPTS = 3;
const RTK_SERIAL_RECOVERY_DELAYS_MS = [0, 5000, 15000];
const PARAMETER_QUERY_RESPONSE_TIMEOUT_MS = 1000;
const PARAMETER_WRITE_RESPONSE_TIMEOUT_MS = 5000;
const STATION_OPERATION_RESPONSE_TIMEOUT_MS = 3000;
const STATION_OPERATION_VERIFY_INTERVAL_MS = 500;
const SERIAL_PORT_DIALOG_REFRESH_MS = 1000;
const ADMIN_ACCESS_PASSWORD = "RJ2026";
const SERIAL_PORT_FILTERS = [
  { usbVendorId: 0x1a86, usbProductId: 0x7523 }, // WCH CH340/CH341
  { usbVendorId: 0x10c4 }, // Silicon Labs CP210x
  { usbVendorId: 0x0403 }, // FTDI
];
const STORAGE_KEYS = {
  language: "gnss-web-language",
  theme: "gnss-web-theme",
};
const SITE_HOME_URL = "./index.html";
const MANUAL_URL = "./CORVON%20GNSS%20Tool%E6%93%8D%E4%BD%9C%E8%AF%B4%E6%98%8E%E4%B9%A6v1.0.pdf";
const I18N = {
  zh: {
    "guide.connect": "连接",
    "app.title": "CORVON RTK Tool",
    "guide.title": "连接一个 RTK 设备", "guide.description": "通过USB-TTL接入RTK设备，然后点击连接", "guide.hint": "请使用顶部“打开串口”开始连接", "guide.steps": "连接步骤", "guide.step1": "连接 USB 转串口适配器", "guide.step2": "选择对应 COM 端口", "guide.step3": "等待模块自动识别", "guide.waiting": "等待设备接入", "guide.baseStation": "RTK 基站", "guide.rover": "RTK 移动站", "guide.dualRover": "双天线移动站",
    "summary.ariaLabel": "实时状态摘要", "summary.realtime": "实时状态", "summary.identifiedDevice": "已识别设备", "summary.rovers": "移动站", "summary.online": "在线", "summary.telemetry": "当前定位数据", "summary.defaultDevice": "GNSS 模块",
    "diagnostics.title": "移动站查询测试", "diagnostics.selected": "已勾选：", "diagnostics.unit": "个", "diagnostics.offlineTimeout": "离线超时：", "diagnostics.formula": "计算规则：max(5秒，勾选数量 × 2秒 + max(1，向上取整(勾选数量 × 2秒 ÷ 4秒)) × 1.5秒)", "diagnostics.empty": "请勾选左侧查询按钮", "diagnostics.serial": "序列号", "diagnostics.lastResponse": "最后响应", "diagnostics.waited": "已等待", "diagnostics.remaining": "剩余/状态", "diagnostics.offlineCount": "离线次数", "diagnostics.timedOut": "已超时", "diagnostics.duration": "{value} 秒",
    "app.subtitle": "基站监控",
    "nav.main": "主菜单",
    "nav.connection": "连接",
    "nav.view": "视图",
    "nav.tools": "工具",
    "nav.replay": "回放",
    "nav.settings": "设置",
    "nav.save": "保存",
    "nav.monitor": "监控",
    "nav.help": "帮助",
    "help.website": "CORVON GNSS网站",
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
    "replay.loadData": "加载数据",
    "replay.play": "播放",
    "replay.pause": "暂停",
    "replay.backward": "快退",
    "replay.forward": "快进",
    "replay.speed": "速度",
    "replay.utc": "UTC",
    "replay.jump": "跳转",
    "replay.connection": "回放",
    "replay.ready": "回放数据已加载",
    "replay.playing": "回放中",
    "replay.paused": "回放已暂停",
    "replay.finished": "回放完成",
    "replay.noData": "未发现可回放的NMEA数据",
    "replay.loaded": "已加载回放数据 {file} ({lines} 行)",
    "replay.jumpInvalid": "UTC格式需为HH:MM:SS.mmm，毫秒必须与日志一致",
    "replay.jumpNotFound": "未找到精确匹配的UTC {utc}",
    "replay.progress": "{current}/{total} UTC {utc}",
    "panel.nmea": "原始数据",
    "panel.ubx": "协议帧",
    "panel.signal": "卫星数量",
    "panel.message": "基站",
    "panel.scatter": "散点图",
    "panel.map": "地图视图",
    "nmea.sendMode": "发送格式",
    "nmea.sendContent": "发送内容",
    "common.send": "发送",
    "common.retry": "重试",
    "common.reidentify": "重新识别",
    "common.apply": "Apply",
    "common.save": "保存",
    "common.clear": "清除",
    "common.close": "关闭",
    "common.confirm": "确定",
    "common.cancel": "取消",
    "common.window": "窗口",
    "common.actions": "操作",
    "message.type.gga": "GGA（全球定位系统定位信息）",
    "message.type.gll": "GLL（地理定位-纬度/经度）",
    "message.type.gsa": "GSA（当前卫星信息）",
    "message.type.gsv": "GSV（可见卫星信息）",
    "message.type.rmc": "RMC（推荐定位信息）",
    "message.type.vtg": "VTG（地面航向和地面速度）",
    "message.visibleSatellites": "可视卫星数：",
    "message.emptyType": "暂无该类报文",
    "station.listTitle": "移动站列表",
    "station.empty": "等待移动站信息",
    "station.total": "移动站数量：",
    "station.positionedCount": "可定位移动站数 / 移动站总数",
    "station.track": "显示移动站 {sn} 的轨迹",
    "station.pollAll": "全选",
    "station.poll": "查询移动站 {sn}",
    "station.resizeList": "调整移动站列表宽度",
    "station.sn": "SN",
    "station.serialNumber": "移动站序列号",
    "station.baseInfo": "移动站信息",
    "station.status": "定位状态",
    "station.satellites": "卫星数",
    "station.online": "在线状态",
    "station.onlineValue": "在线",
    "station.offlineValue": "离线",
    "station.updatedAt": "更新时间",
    "station.receivedCount": "接收帧数",
    "station.deviceId": "设备 ID",
    "station.systemId": "系统 ID",
    "station.messageId": "消息 ID",
    "station.endian": "字节序",
    "station.littleEndian": "小端",
    "station.bigEndian": "大端",
    "station.positionUnavailable": "暂无有效坐标",
    "station.summary": "移动站 {online}/{total} 在线",
    "station.fix.0": "未定位",
    "station.fix.1": "3D定位",
    "station.fix.2": "差分定位",
    "station.fix.4": "RTK固定解",
    "station.fix.5": "RTK浮点解",
    "station.fix.7": "基站",
    "station.fix.unknown": "未知状态({status})",
    "table.system": "卫星系统",
    "table.prn": "卫星号",
    "table.elevation": "高度角",
    "table.azimuth": "方位角",
    "table.snr": "信噪比",
    "map.utc": "UTC",
    "map.lon": "经度",
    "map.lat": "纬度",
    "map.altitude": "高度",
    "map.speed": "速度",
    "map.course": "朝向",
    "map.satellites": "卫星",
    "map.hdop": "HDOP",
    "map.vdop": "VDOP",
    "map.mode": "模式",
    "map.road": "Road Map",
    "map.satellite": "Satellite",
    "map.waitingFix": "等待有效定位",
    "map.autoCenterAfterFix": "收到有效定位后自动显示位置",
    "map.baseStation": "{sn}",
    "side.tools": "扩展工具",
    "status.stationRemoved": "已删除移动站 {sn}",
    "status.stationAdded": "已添加移动站 {sn}",
    "station.message.addPending": "正在添加移动站 {sn}，等待模块确认。",
    "station.message.addSucceeded": "添加移动站 {sn} 成功！",
    "station.message.addFailed": "添加移动站 {sn} 失败！",
    "station.message.removePending": "正在删除移动站 {sn}，等待模块确认。",
    "station.message.removeSucceeded": "删除移动站 {sn} 成功！",
    "station.message.removeFailed": "删除移动站 {sn} 失败！",
    "station.message.refreshPending": "正在刷新移动站列表。",
    "station.message.refreshSucceeded": "刷新移动站列表成功，共 {count} 个移动站！",
    "station.message.refreshFailed": "刷新移动站列表失败！",
    "status.stationExists": "移动站 {sn} 已存在",
    "settings.invalidStationSn": "序列号必须是8位十六进制字符（0-9、A-F）",
    "settings.invalidStationSnValue": "该序列号是无效的占位值，请输入有效序列号",
    "save.title": "轨迹数据保存",
    "save.selectStation": "移动站序列号",
    "save.exportCsv": "导出 CSV",
    "save.exportSelected": "导出所选",
    "save.trackCount": "轨迹点数",
    "save.noData": "暂无已追踪的移动站数据",
    "save.recordCount": "轨迹记录：{count}",
    "save.selectPlaceholder": "请选择移动站",
    "status.trackExported": "已导出移动站 {sn} 的 {count} 条轨迹数据",
    "base.title": "基站参数", "base.query": "查询", "base.apply": "设置参数",
    "base.sn": "基站 SN", "base.firmware": "固件版本", "base.autoHopping": "LoRa 自动跳频",
    "base.country": "LoRa 国家/地区", "base.frequency": "LoRa 频段 (MHz)", "base.power": "LoRa 功率",
    "base.europe": "欧洲", "base.usa": "美国", "base.australia": "澳洲",
    "base.invalidSn": "基站 SN 必须是8位十六进制字符，且不能为 00000000 或 FFFFFFFF",
    "base.invalidFrequency": "当前国家/地区允许的频段为 {min}~{max} MHz",
    "base.invalidPower": "LoRa 功率只能选择 25、50 或 100 mW",
    "status.baseQuerySent": "已发送基站参数查询指令",
    "status.baseParametersReceived": "已读取基站参数",
    "status.baseParametersWritten": "基站参数设置指令已发送，正在等待模块确认",
    "status.parametersUnchanged": "参数未修改，无需发送指令",
    "status.queryParametersFirst": "请先查询参数后再修改",
    "status.baseCommandFailed": "基站参数指令发送失败：{message}",
    "base.commandLog": "通信指令", "base.noCommands": "暂无发送指令",
    "parameter.messageLog": "消息栏", "parameter.noMessages": "暂无消息", "parameter.noChanges": "当前无参数修改！", "parameter.settingSucceeded": "{parameter} 设置为“{value}”成功！", "parameter.loraSettingSucceeded": "LoRa参数设置为“{value}”成功！", "parameter.settingRejected": "{parameter} 设置失败！", "parameter.settingUnconfirmed": "{parameter} 设置失败，未收到模块确认响应。", "parameter.enabled": "开启", "parameter.disabled": "关闭",
    "parameter.baseQuerySucceeded": "基站参数查询成功！", "parameter.roverQuerySucceeded": "移动站参数查询成功！", "parameter.baseQueryFailed": "未查询到参数。", "parameter.roverQueryFailed": "未查询到参数。", "parameter.queryFailed": "参数查询失败！",
    "admin.title": "管理员验证", "admin.password": "管理员密码", "admin.confirm": "进入", "admin.invalidPassword": "密码错误",
    "rover.title": "移动站参数", "rover.sn": "移动站 SN", "rover.baseSn": "基站 SN",
    "product.baseStation": "{model} 基站", "product.rover": "{model} 移动站",
    "rover.workMode": "RTK 工作模式", "rover.mode.rover": "移动站", "rover.mode.convergence": "基站-收敛模式", "rover.mode.fixed": "基站-固定模式",
    "rover.baselineLength": "基线长度", "rover.invalidSn": "移动站 SN 和基站 SN 必须是有效的8位十六进制字符",
    "rover.invalidMode": "RTK 工作模式无效", "rover.invalidBaseline": "基线长度必须是 0~65535 的整数",
    "status.roverQuerySent": "已发送移动站参数查询指令", "status.roverParametersReceived": "已读取移动站参数", "status.roverParametersWritten": "移动站参数设置指令已发送，正在等待模块确认",
    "status.stationsRefreshed": "移动站列表已刷新，共 {count} 个",
    "status.stationSnQuerySent": "已发送移动站 SN 列表查询指令",
    "settings.title": "设置",
    "settings.refresh": "刷新",
    "settings.stationManagement": "移动站管理",
    "settings.stationCount": "移动站数量：{count}",
    "settings.noStations": "暂无移动站信息",
    "settings.pagination": "移动站分页", "settings.previousPage": "上一页", "settings.nextPage": "下一页", "settings.page": "第 {page} 页", "settings.totalPages": "共 {count} 页", "settings.pageSize": "每页显示", "settings.pageSizeUnit": "条",
    "settings.addStation": "添加",
    "settings.addStationTitle": "添加移动站",
    "settings.addStationPrompt": "请输入移动站序列号：",
    "settings.removeStation": "删除",
    "settings.removeStationTitle": "删除移动站",
    "settings.confirmRemoveStation": "确定删除移动站：{sn}？",
    "settings.language": "语言",
    "settings.languageZh": "中文",
    "settings.languageEn": "English",
    "settings.theme": "背景",
    "settings.light": "浅色",
    "settings.dark": "深色",
    "toolbar.switchToChinese": "切换到中文",
    "toolbar.switchToEnglish": "Switch to English",
    "toolbar.switchLanguage": "切换语言",
    "toolbar.switchToLightTheme": "切换到浅色主题",
    "toolbar.switchToDarkTheme": "切换到深色主题",
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
    "status.autoDetectFailed": "自动识别失败：未发现有效私有协议数据",
    "status.baudNoData": "{baud} 无有效数据，正在自动识别",
    "status.dataInterrupted": "数据中断，正在重新扫描模块",
    "parameter.moduleNotDetected": "未检测到模块，正在等待模块接入。",
    "status.reidentifyModule": "正在重新识别模块",
    "status.detectedDevice": "识别成功",
    "status.reidentifyFailed": "重新识别失败，将继续尝试",
    "status.reidentifyStopped": "自动重识别失败，已停止自动发送查询指令。",
    "status.webSerialUnsupported": "当前浏览器不支持Web Serial，请使用桌面版Chrome或Edge",
    "status.secureContextRequired": "串口功能需要HTTPS或本地127.0.0.1环境，请通过GitHub Pages或本地服务打开",
    "status.openSerialFailed": "串口打开失败",
    "status.portOccupied": "串口被占用，请关闭其他程序后重试",
    "status.noPortSelected": "未选择串口",
    "status.serialError": "串口错误",
    "status.serialReadError": "串口读取错误",
    "status.deviceDetached": "设备已拔出，请重新连接设备",
    "status.deviceDetachedBanner": "设备已拔出，请重新连接设备",
    "status.deviceInsertedOpenSerial": "检测到模块插入，请打开串口",
    "status.openAndIdentifyFirst": "请先打开串口并识别模块",
    "status.moduleUnknownRestore": "模块型号未识别，无法恢复默认输出",
    "status.restoreSent": "恢复默认输出",
    "status.restoreFailed": "恢复默认输出失败",
    "status.paused": "已暂停",
    "status.started": "已开始",
    "status.scatterCleared": "散点已清除",
    "status.hexFormatError": "HEX格式错误",
    "status.loadedFile": "已加载 {file} ({lines} 行)",
    "status.loadedPrivateFile": "已加载 {file}，解析出 {frames} 帧移动站数据",
    "status.noScatterToSave": "暂无散点可保存",
    "status.scatterSaved": "散点已保存",
    "window.minimize": "最小化",
    "window.maximize": "最大化",
    "window.restore": "还原",
    "window.close": "关闭",
    "window.minimized": "已最小化",
    "window.closed": "已关闭",
    "summary.frequency": "频率：{value} Hz",
    "signal.empty": "暂无移动站卫星数据",
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
    "guide.connect": "Connect",
    "app.title": "CORVON RTK Tool",
    "guide.title": "Connect an RTK device", "guide.description": "Connect the RTK device via USB-TTL, then click Connect.", "guide.hint": "Use the Open Serial button above to connect", "guide.steps": "Connection steps", "guide.step1": "Connect the USB-to-serial adapter", "guide.step2": "Select the correct COM port", "guide.step3": "Wait for automatic module detection", "guide.waiting": "Waiting for device", "guide.baseStation": "RTK Base Station", "guide.rover": "RTK Rover", "guide.dualRover": "Dual-antenna Rover",
    "summary.ariaLabel": "Real-time status summary", "summary.realtime": "Real-time status", "summary.identifiedDevice": "Detected device", "summary.rovers": "Rovers", "summary.online": "Online", "summary.telemetry": "Current positioning data", "summary.defaultDevice": "GNSS Module",
    "diagnostics.title": "Rover query test", "diagnostics.selected": "Selected: ", "diagnostics.unit": "", "diagnostics.offlineTimeout": "Offline timeout: ", "diagnostics.formula": "Rule: max(5 s, selected count × 2 s + max(1, ceil(selected count × 2 s ÷ 4 s)) × 1.5 s)", "diagnostics.empty": "Select a query checkbox on the left", "diagnostics.serial": "Serial number", "diagnostics.lastResponse": "Last response", "diagnostics.waited": "Elapsed", "diagnostics.remaining": "Remaining/status", "diagnostics.offlineCount": "Offline count", "diagnostics.timedOut": "Timed out", "diagnostics.duration": "{value} s",
    "app.subtitle": "Base Station Monitor",
    "nav.main": "Main menu",
    "nav.connection": "Connection",
    "nav.view": "View",
    "nav.tools": "Tools",
    "nav.replay": "Replay",
    "nav.settings": "Settings",
    "nav.save": "Save",
    "nav.monitor": "Monitor",
    "nav.help": "Help",
    "help.website": "CORVON GNSS Website",
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
    "replay.loadData": "Load Data",
    "replay.play": "Play",
    "replay.pause": "Pause",
    "replay.backward": "Back",
    "replay.forward": "Forward",
    "replay.speed": "Speed",
    "replay.utc": "UTC",
    "replay.jump": "Jump",
    "replay.connection": "Replay",
    "replay.ready": "Replay data loaded",
    "replay.playing": "Replaying",
    "replay.paused": "Replay paused",
    "replay.finished": "Replay finished",
    "replay.noData": "No replayable NMEA data found",
    "replay.loaded": "Loaded replay data {file} ({lines} lines)",
    "replay.jumpInvalid": "UTC format must be HH:MM:SS.mmm and milliseconds must match the log",
    "replay.jumpNotFound": "No exact UTC match found: {utc}",
    "replay.progress": "{current}/{total} UTC {utc}",
    "panel.nmea": "Raw Data",
    "panel.ubx": "Protocol Frames",
    "panel.signal": "Satellite Count",
    "panel.message": "Base Station",
    "panel.scatter": "Scatter View",
    "panel.map": "Map View",
    "nmea.sendMode": "Send format",
    "nmea.sendContent": "Send content",
    "common.send": "Send",
    "common.retry": "Retry",
    "common.reidentify": "Reidentify",
    "common.apply": "Apply",
    "common.save": "Save",
    "common.clear": "Clear",
    "common.close": "Close",
    "common.confirm": "Confirm",
    "common.cancel": "Cancel",
    "common.window": "Window",
    "common.actions": "Actions",
    "message.type.gga": "GGA (Global Positioning System Fix Data)",
    "message.type.gll": "GLL (Geographic Position, Latitude/Longitude)",
    "message.type.gsa": "GSA (Current Satellite Information)",
    "message.type.gsv": "GSV (Satellites in View)",
    "message.type.rmc": "RMC (Recommended Minimum Data)",
    "message.type.vtg": "VTG (Course Over Ground and Speed)",
    "message.visibleSatellites": "Visible satellites:",
    "message.emptyType": "No messages of this type",
    "station.listTitle": "Rover List",
    "station.empty": "Waiting for rover data",
    "station.total": "Rovers:",
    "station.positionedCount": "Locatable rovers / total rovers",
    "station.track": "Show track for rover {sn}",
    "station.pollAll": "Select all",
    "station.poll": "Query rover {sn}",
    "station.resizeList": "Resize rover list",
    "station.sn": "SN",
    "station.serialNumber": "Rover Serial Number",
    "station.baseInfo": "Rover Information",
    "station.status": "Fix Status",
    "station.satellites": "Satellites",
    "station.online": "Connection",
    "station.onlineValue": "Online",
    "station.offlineValue": "Offline",
    "station.updatedAt": "Updated",
    "station.receivedCount": "Frames",
    "station.deviceId": "Device ID",
    "station.systemId": "System ID",
    "station.messageId": "Message ID",
    "station.endian": "Byte Order",
    "station.littleEndian": "Little-endian",
    "station.bigEndian": "Big-endian",
    "station.positionUnavailable": "No valid coordinates",
    "station.summary": "Rovers {online}/{total} online",
    "station.fix.0": "No Fix",
    "station.fix.1": "3D Fix",
    "station.fix.2": "Differential",
    "station.fix.4": "RTK Fixed",
    "station.fix.5": "RTK Float",
    "station.fix.7": "Base Station",
    "station.fix.unknown": "Unknown ({status})",
    "table.system": "System",
    "table.prn": "PRN",
    "table.elevation": "Elevation",
    "table.azimuth": "Azimuth",
    "table.snr": "SNR",
    "map.utc": "UTC",
    "map.lon": "Lon",
    "map.lat": "Lat",
    "map.altitude": "Height",
    "map.speed": "Speed",
    "map.course": "Heading",
    "map.satellites": "Satellites",
    "map.hdop": "HDOP",
    "map.vdop": "VDOP",
    "map.mode": "Mode",
    "map.road": "Road Map",
    "map.satellite": "Satellite",
    "map.waitingFix": "Waiting for a valid position",
    "map.autoCenterAfterFix": "Rovers appear after a valid private-protocol frame",
    "map.baseStation": "{sn}",
    "side.tools": "Extra tools",
    "status.stationRemoved": "Removed rover {sn}",
    "status.stationAdded": "Added rover {sn}",
    "station.message.addPending": "Adding rover {sn}; waiting for module confirmation.",
    "station.message.addSucceeded": "Rover {sn} added successfully.",
    "station.message.addFailed": "Failed to add rover {sn}.",
    "station.message.removePending": "Removing rover {sn}; waiting for module confirmation.",
    "station.message.removeSucceeded": "Rover {sn} removed successfully.",
    "station.message.removeFailed": "Failed to remove rover {sn}.",
    "station.message.refreshPending": "Refreshing the rover list.",
    "station.message.refreshSucceeded": "Rover list refreshed successfully: {count} rover(s).",
    "station.message.refreshFailed": "Failed to refresh the rover list.",
    "status.stationExists": "Rover {sn} already exists",
    "settings.invalidStationSn": "The serial number must contain exactly 8 hexadecimal characters (0-9, A-F)",
    "settings.invalidStationSnValue": "This serial number is a reserved invalid value",
    "save.title": "Track Data Export",
    "save.selectStation": "Rover Serial Number",
    "save.exportCsv": "Export CSV",
    "save.exportSelected": "Export Selected",
    "save.trackCount": "Track Points",
    "save.noData": "No tracked rover data",
    "save.recordCount": "Track records: {count}",
    "save.selectPlaceholder": "Select a rover",
    "status.trackExported": "Exported {count} track records for rover {sn}",
    "base.title": "Base Station Parameters", "base.query": "Query", "base.apply": "Set Parameters",
    "base.sn": "Base Station SN", "base.firmware": "Firmware Version", "base.autoHopping": "LoRa Auto Hopping",
    "base.country": "LoRa Region", "base.frequency": "LoRa Frequency (MHz)", "base.power": "LoRa Power",
    "base.europe": "Europe", "base.usa": "USA", "base.australia": "Australia",
    "base.invalidSn": "Base SN must be 8 hexadecimal characters and cannot be 00000000 or FFFFFFFF",
    "base.invalidFrequency": "The allowed range for this region is {min}-{max} MHz",
    "base.invalidPower": "LoRa power must be 25, 50, or 100 mW",
    "status.baseQuerySent": "Base parameter query sent",
    "status.baseParametersReceived": "Base parameters received",
    "status.baseParametersWritten": "Base parameter changes sent; waiting for module confirmation",
    "status.parametersUnchanged": "No parameter changes to send",
    "status.queryParametersFirst": "Query parameters before making changes",
    "status.baseCommandFailed": "Failed to send base parameter command: {message}",
    "base.commandLog": "Command Log", "base.noCommands": "No commands sent",
    "parameter.messageLog": "Messages", "parameter.noMessages": "No messages", "parameter.noChanges": "No parameter changes", "parameter.settingSucceeded": "{parameter} set to \"{value}\" successfully.", "parameter.loraSettingSucceeded": "LoRa parameters set to \"{value}\" successfully.", "parameter.settingRejected": "Failed to set {parameter}.", "parameter.settingUnconfirmed": "Failed to set {parameter}; no module confirmation was received.", "parameter.enabled": "Enabled", "parameter.disabled": "Disabled",
    "parameter.baseQuerySucceeded": "Base parameter query succeeded.", "parameter.roverQuerySucceeded": "Rover parameter query succeeded.", "parameter.baseQueryFailed": "No parameters were found.", "parameter.roverQueryFailed": "No parameters were found.", "parameter.queryFailed": "Parameter query failed.",
    "admin.title": "Administrator Verification", "admin.password": "Administrator Password", "admin.confirm": "Enter", "admin.invalidPassword": "Incorrect password",
    "rover.title": "Rover Parameters", "rover.sn": "Rover SN", "rover.baseSn": "Base SN",
    "product.baseStation": "{model} Base Station", "product.rover": "{model} Rover",
    "rover.workMode": "RTK Work Mode", "rover.mode.rover": "Rover", "rover.mode.convergence": "Base - Convergence", "rover.mode.fixed": "Base - Fixed",
    "rover.baselineLength": "Baseline Length", "rover.invalidSn": "Rover SN and base SN must be valid 8-character hexadecimal values",
    "rover.invalidMode": "Invalid RTK work mode", "rover.invalidBaseline": "Baseline length must be an integer from 0 to 65535",
    "status.roverQuerySent": "Rover parameter query sent", "status.roverParametersReceived": "Rover parameters received", "status.roverParametersWritten": "Rover parameter changes sent; waiting for module confirmation",
    "status.stationsRefreshed": "Rover list refreshed: {count}",
    "status.stationSnQuerySent": "Rover SN list query sent",
    "settings.title": "Settings",
    "settings.refresh": "Refresh",
    "settings.stationManagement": "Rover Management",
    "settings.stationCount": "Rovers: {count}",
    "settings.noStations": "No rover information",
    "settings.pagination": "Rover pagination", "settings.previousPage": "Previous page", "settings.nextPage": "Next page", "settings.page": "Page {page}", "settings.totalPages": "{count} pages", "settings.pageSize": "Rows per page", "settings.pageSizeUnit": "",
    "settings.addStation": "Add",
    "settings.addStationTitle": "Add Rover",
    "settings.addStationPrompt": "Enter the rover serial number:",
    "settings.removeStation": "Remove",
    "settings.removeStationTitle": "Remove rover",
    "settings.confirmRemoveStation": "Confirm removing rover: {sn}?",
    "settings.language": "Language",
    "settings.languageZh": "Chinese",
    "settings.languageEn": "English",
    "settings.theme": "Background",
    "settings.light": "Light",
    "settings.dark": "Dark",
    "toolbar.switchToChinese": "Switch to Chinese",
    "toolbar.switchToEnglish": "Switch to English",
    "toolbar.switchLanguage": "Switch language",
    "toolbar.switchToLightTheme": "Switch to light theme",
    "toolbar.switchToDarkTheme": "Switch to dark theme",
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
    "status.autoDetectFailed": "Auto detection failed: no valid private-protocol frame found",
    "status.baudNoData": "{baud} has no valid data, auto detecting",
    "status.dataInterrupted": "Data interrupted, rescanning module",
    "parameter.moduleNotDetected": "No module detected. Waiting for a module to be connected.",
    "status.reidentifyModule": "Reidentifying module",
    "status.detectedDevice": "Detected",
    "status.reidentifyFailed": "Reidentification failed, will keep trying",
    "status.reidentifyStopped": "Automatic reidentification failed. Automatic query transmission has stopped.",
    "status.webSerialUnsupported": "This browser does not support Web Serial. Use desktop Chrome or Edge.",
    "status.secureContextRequired": "Serial access requires HTTPS or local 127.0.0.1. Open the tool through GitHub Pages or the local server.",
    "status.openSerialFailed": "Failed to open serial port",
    "status.portOccupied": "Serial port is in use. Close other programs and retry.",
    "status.noPortSelected": "No serial port selected",
    "status.serialError": "Serial error",
    "status.serialReadError": "Serial read error",
    "status.deviceDetached": "Device unplugged. Please reconnect the device.",
    "status.deviceDetachedBanner": "Device unplugged. Please reconnect the device.",
    "status.deviceInsertedOpenSerial": "Module inserted, open serial port",
    "status.openAndIdentifyFirst": "Open the serial port and identify the module first",
    "status.moduleUnknownRestore": "Module model is unknown, cannot restore defaults",
    "status.restoreSent": "Restore Default",
    "status.restoreFailed": "Failed to restore default output",
    "status.paused": "Paused",
    "status.started": "Started",
    "status.scatterCleared": "Scatter points cleared",
    "status.hexFormatError": "Invalid HEX format",
    "status.loadedFile": "Loaded {file} ({lines} lines)",
    "status.loadedPrivateFile": "Loaded {file}: {frames} rover frames parsed",
    "status.noScatterToSave": "No scatter points to save",
    "status.scatterSaved": "Scatter points saved",
    "window.minimize": "Minimize",
    "window.maximize": "Maximize",
    "window.restore": "Restore",
    "window.close": "Close",
    "window.minimized": "Minimized",
    "window.closed": "Closed",
    "summary.frequency": "Rate: {value} Hz",
    "signal.empty": "No rover satellite data",
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
const NMEA_RATE_WINDOW_MS = 5000;
const NMEA_RATE_INTEGER_EPSILON = 0.08;
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
  isAdministrator: false,
  nmeaLines: [],
  nmeaEpochTimes: [],
  privateRawLines: [],
  privateFrameLines: [],
  privateRateTimes: [],
  privateParser: new RTK_PROTOCOL.RtkFrameParser(),
  basePositionParser: new RTK_PROTOCOL.BasePositionParser(),
  basePosition: null,
  baseParameterParser: new RTK_PROTOCOL.BaseParameterParser(),
  baseStationSnParser: new RTK_PROTOCOL.BaseStationSnParser(),
  roverParameterParser: new RTK_PROTOCOL.RoverParameterParser(),
  commandResponseParser: new RTK_PROTOCOL.CommandResponseParser(),
  activeParameterPanel: "base",
  baseCommandSequence: 0,
  baseCommandLines: [],
  parameterMessages: [],
  parameterQueryMessage: null,
  parameterConfirmationQueryType: "",
  pendingParameterChanges: { base: new Map(), rover: new Map() },
  parameterWriteTimers: { base: null, rover: null },
  pendingStationOperation: null,
  pendingStationRefresh: null,
  baseParameterSnapshot: null,
  roverParameterSnapshot: null,
  mobileStations: new Map(),
  removedStationSns: new Set(),
  stationPollingSns: new Set(),
  trackedStationSns: new Set(),
  saveSelectedTrackSns: new Set(),
  trackExportParentDirectory: null,
  trackExportDirectory: null,
  saveExportToastTimer: null,
  stationTrackRecords: new Map(),
  selectedStationSn: "",
  settingsStationPage: 1,
  settingsStationPageSize: 10,
  mapMarkers: [],
  stationFreshnessSignature: "",
  stationListRenderSignature: "",
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
  mapUserControlled: false,
  isDraggingMap: false,
  mapDragStart: null,
  mapDragMoved: false,
  signalBars: [],
  source: "",
  portLabel: "串口",
  portDetail: "",
  detectedBaudRate: null,
  detectedModule: "",
  connectedDeviceType: "",
  outputMode: "--",
  isDetecting: false,
  detectingBaudRate: null,
  currentBaudRate: null,
  lastSuccessfulBaudRate: null,
  serialSessionId: 0,
  autoParameterQuerySessionId: null,
  autoParameterQueryRequestSessionId: null,
  autoParameterQueryCompleted: false,
  autoParameterQueryReceived: false,
  autoPollingSuspendedByManualQuery: false,
  autoStationRefreshSessionId: null,
  autoStationRefreshCompletedSessionId: null,
  autoStationRefreshReceived: false,
  serialEnvironmentIssueKey: "",
  running: false,
  paused: false,
  reader: null,
  port: null,
  pausedPort: null,
  replayTimer: null,
  replayRecords: [],
  replayUtcMap: new Map(),
  replayUtcGroups: [],
  replayFileName: "",
  replayIndex: 0,
  replayPlaying: false,
  replaySpeed: 1,
  replayCurrentUtc: "--",
  startTime: Date.now(),
  epochs: 0,
  renderQueued: false,
  lastRenderAt: 0,
  lastNmeaEpochAt: 0,
  userPanelLayout: false,
  lastByteAt: 0,
  lastValidDataAt: 0,
  serialRecoveryPending: false,
  serialRecoveryAttempts: 0,
  serialRecoveryNextAt: 0,
  serialRecoveryStopped: false,
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
const canvasIds = ["mapCanvas"];
const portNames = new WeakMap();
let nextPortIndex = 1;
let topPanelZIndex = 10;
let portStatusTimer = null;
let mapRenderQueued = false;
let serialPortDialogResolve = null;
let serialPortChoices = [];
let serialPortRefreshTimer = null;
let serialPortRefreshInFlight = false;
let confirmDialogResolve = null;
const mapTileCache = new Map();
const INITIAL_DEVICE_PIXEL_RATIO = Math.max(0.1, window.devicePixelRatio || 1);
const DESKTOP_MIN_VIEWPORT_WIDTH = 1500;
const DESKTOP_MIN_VIEWPORT_HEIGHT = 720;
const MONITOR_MESSAGE_PANEL_WIDTH = 640;
const BASE_RTK_IMAGES_BY_FIRMWARE_MIDDLE = {
  "1": { model: "RTK-11", labelKey: "product.baseStation", src: "./assets/rtk-products/RTK-11.png" },
  "2": { model: "RTK-13", labelKey: "product.baseStation", src: "./assets/rtk-products/RTK-13.png" },
  "3": { model: "RTK-12", labelKey: "product.baseStation", src: "./assets/rtk-products/RTK-12.png" },
};
const ROVER_RTK_IMAGES_BY_FIRMWARE_MIDDLE = {
  "1": { model: "RTK-11", labelKey: "product.rover", src: "./assets/rtk-products/单天线.png" },
  "2": { model: "RTK-13", labelKey: "product.rover", src: "./assets/rtk-products/单天线-3.png" },
  "3": { model: "RTK-12", labelKey: "product.rover", src: "./assets/rtk-products/双天线.png" },
};
let appViewportWidth = 0;
let appViewportHeight = 0;
const VIEW_TOOL_ITEMS = [
  { panelClass: "message-panel", labelKey: "panel.message", icon: "message" },
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
  updateReplayControls();
  updateAdministratorUi();
  refreshStatusTexts();
  refreshSerialEnvironmentNotice();
  updateBaseRtkImage(els.baseFirmwareInput?.value);
  updateRoverRtkImage(els.roverFirmwareInput?.value);
  updateRuntime();
  renderAll();
  renderStationQueryDiagnostics();
  updateConnectionGuide();
  updateDeviceSummary();
  updateMonitorSummary();
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
    const active = button.dataset.language === state.language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-theme-value]").forEach((button) => {
    button.classList.toggle("active", button.dataset.themeValue === state.theme);
  });
  if (els.languageToggleButton) {
    const switchToEnglish = state.language === "zh";
    els.languageToggleButton.textContent = switchToEnglish ? "CN" : "EN";
    els.languageToggleButton.title = t("toolbar.switchLanguage");
    els.languageToggleButton.setAttribute("aria-label", els.languageToggleButton.title);
  }
  if (els.themeToggleButton) {
    const switchToLight = state.theme === "dark";
    const label = t(switchToLight ? "toolbar.switchToLightTheme" : "toolbar.switchToDarkTheme");
    els.themeToggleButton.setAttribute("aria-pressed", String(state.theme === "dark"));
    els.themeToggleButton.title = label;
    els.themeToggleButton.setAttribute("aria-label", label);
  }
}

function setActiveMenuTab(activeTab) {
  document.querySelectorAll(".menu-tab").forEach((tab, index) => {
    tab.classList.toggle("active", activeTab ? tab === activeTab : index === 0);
  });
}

function setToolbarMode(mode) {
  const isView = mode === "view";
  const isReplay = mode === "replay";
  const isHelp = mode === "help";
  if (els.connectionTools) els.connectionTools.hidden = isView || isReplay || isHelp;
  if (els.viewTools) els.viewTools.hidden = !isView;
  if (els.replayTools) els.replayTools.hidden = !isReplay;
  if (els.helpTools) els.helpTools.hidden = !isHelp;
  if (els.viewTab) els.viewTab.setAttribute("aria-expanded", isView ? "true" : "false");
  if (els.replayTab) els.replayTab.setAttribute("aria-expanded", isReplay ? "true" : "false");
  if (els.helpTab) els.helpTab.setAttribute("aria-expanded", isHelp ? "true" : "false");
  if (isView) updateViewTools();
}

function showConnectionTools() {
  closeSettings();
  setToolbarMode("connection");
  setActiveMenuTab(els.connectionTab);
  restoreDefaultDebugState();
}

function showViewTools() {
  closeSettings();
  setToolbarMode("view");
  setActiveMenuTab(els.viewTab);
  restoreDefaultDebugState();
}

function showReplayTools() {
  closeSettings();
  setToolbarMode("replay");
  setActiveMenuTab(els.replayTab);
  setDebugStateNoLog();
  updateReplayControls();
}

function showHelpTools() {
  closeSettings();
  setToolbarMode("help");
  setActiveMenuTab(els.helpTab);
  restoreDefaultDebugState();
}

function openHome() {
  window.open(SITE_HOME_URL, "_blank", "noopener");
}

function openManual() {
  window.open(MANUAL_URL, "_blank", "noopener");
}

function getSerialEnvironmentIssue() {
  if (!window.isSecureContext) return "status.secureContextRequired";
  return "";
}

function refreshSerialEnvironmentNotice() {
  const issueKey = getSerialEnvironmentIssue();
  state.serialEnvironmentIssueKey = issueKey;
  updateConnectButton();
  if (!issueKey) {
    if (
      state.lastStatusTextKey === "status.secureContextRequired" ||
      state.lastStatusTextKey === "status.webSerialUnsupported"
    ) {
      state.lastStatusTextKey = "";
      state.lastStatusTextParams = {};
      refreshStatusTexts();
    }
    return;
  }
  showPortStatus(t(issueKey), "warning", false, { sticky: true });
  if (!state.running) setStatusKey(issueKey);
}

function setActivePageMenu(page) {
  const settingsActive = page === "settings";
  const saveActive = page === "save";
  els.settingsMenuButton?.classList.toggle("active", settingsActive);
  els.saveMenuButton?.classList.toggle("active", saveActive);
  els.monitorMenuButton?.classList.toggle("active", !settingsActive && !saveActive);
  [els.monitorMenuButton, els.settingsMenuButton, els.saveMenuButton].forEach((button) => button?.removeAttribute("aria-current"));
  (saveActive ? els.saveMenuButton : settingsActive ? els.settingsMenuButton : els.monitorMenuButton)?.setAttribute("aria-current", "page");
}

function openSettings() {
  setToolbarMode("connection");
  if (els.settingsPage && els.mainWorkspace) {
    els.mainWorkspace.hidden = true;
    els.settingsPage.hidden = false;
    if (els.savePage) els.savePage.hidden = true;
    setActivePageMenu("settings");
    document.body.classList.add("is-settings-page");
    renderStationSettings();
    els.settingsPageTitle?.focus();
    restoreDefaultDebugState();
    return;
  }
  if (els.settingsBackdrop) els.settingsBackdrop.hidden = false;
  if (els.settingsDialog) {
    els.settingsDialog.hidden = false;
    els.settingsDialog.querySelector("button")?.focus();
  }
  setActiveMenuTab(els.settingsTab);
  restoreDefaultDebugState();
}

function openSavePage() {
  setToolbarMode("connection");
  if (els.mainWorkspace) els.mainWorkspace.hidden = true;
  if (els.settingsPage) els.settingsPage.hidden = true;
  if (els.savePage) els.savePage.hidden = false;
  setActivePageMenu("save");
  document.body.classList.remove("is-settings-page");
  renderSavePage();
  els.savePageTitle?.focus();
}

function closeSettings(options = {}) {
  const settingsPageWasOpen = !!els.settingsPage && !els.settingsPage.hidden;
  if (els.settingsPage) els.settingsPage.hidden = true;
  if (els.savePage) els.savePage.hidden = true;
  if (els.mainWorkspace) els.mainWorkspace.hidden = false;
  setActivePageMenu("monitor");
  document.body.classList.remove("is-settings-page");
  if (els.settingsBackdrop) els.settingsBackdrop.hidden = true;
  if (els.settingsDialog) els.settingsDialog.hidden = true;
  setToolbarMode("connection");
  setActiveMenuTab();
  restoreDefaultDebugState();
  if (settingsPageWasOpen) {
    requestAnimationFrame(() => {
      layoutPanels({ preserveUserLayout: state.userPanelLayout });
      syncMaximizedPanel();
      renderAll();
    });
    if (options.restoreFocus !== false) (options.focusMonitor ? els.monitorMenuButton : els.settingsMenuButton)?.focus();
  }
}

function restoreDefaultDebugState() {
  if (els.debugState && !state.running) els.debugState.textContent = t("status.noDebugLog");
}

function setDebugStateNoLog() {
  if (els.debugState) els.debugState.textContent = t("status.noDebugLog");
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
    document.getElementById('guideConnectButton')?.addEventListener('click', toggleSerialConnection);
    refreshSerialEnvironmentNotice();
    updateConnectButton();
    updateConnectionGuide();
    updateMonitorSummary();
    updateParameterSettingsAvailability();
    updateAdministratorUi();
    updateUiScale();
    bindSerialDeviceEvents();
    bindMessageSplitter();
    updateWindowChrome();
    layoutPanels();
    setInterval(() => { updateRuntime(); refreshStationFreshness(); renderStationQueryDiagnostics(); updateMonitorSummary(); updateDeviceSummary(); }, 1000);
    setInterval(serialWatchdogTick, 1000);
    window.addEventListener("resize", handleViewportResize);
    const workspace = document.querySelector(".workspace");
    if (workspace && typeof ResizeObserver !== "undefined") {
      new ResizeObserver(() => {
        if (workspace.hidden) return;
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
    "loadFileButton","fileInput",
    "nmeaLog","nmeaSummary","commandMode","commandInput","sendButton",
    "ubxClearButton","ubxSummary","ubxLog",
    "signalLegend","signalTooltip","messageDetail","stationQueryDiagnostics","messageSplitHandle","mobileStationList","mobileStationCount","mobileStationRows","stationPositionCount",
    "centerLon","centerLat","applyCenterButton","saveScatterButton","clearScatterButton",
    "zoomInButton","zoomOutButton","mapStationTooltip",
    "connectionState","logState","sourceState","debugState","statusLed","fixState","idleState","runtimeState",
    "portStatusBanner","portStatusMessage","portStatusAction",
    "connectionTab","viewTab","replayTab","helpTab","connectionTools","viewTools","replayTools","helpTools","homeButton","manualButton","settingsTab","settingsBackdrop","settingsDialog","settingsCloseButton",
    "replayLoadButton","replayFileInput","replayBackButton","replayPlayButton","replayForwardButton","replaySpeedSelect","replayProgress","replayProgressText","replayUtcInput","replayJumpButton",
    "languageZhButton","languageEnButton","languageToggleButton","themeLightButton","themeDarkButton","themeToggleButton",
    "mainWorkspace","settingsMenuButton","monitorMenuButton","saveMenuButton","settingsPage","settingsPageTitle","settingsRefreshButton","settingsAddStationButton","settingsStationCount","settingsStationRows","settingsStationEmpty","settingsStationPagination",
    "savePage","savePageTitle","saveRecordCount","saveStationSelect","exportTrackCsvButton","exportSelectedTracksButton","saveSelectAll","saveNoTrackData","savePreviewRows","saveExportToast",
    "parameterSettingsPane","baseParameterTabButton","roverParameterTabButton","queryParametersButton","baseParametersForm","baseRtkImagePanel","baseRtkImage","baseRtkImageCaption","baseSnInput","baseFirmwareInput","baseWorkModeSelect","baseAutoHoppingInput","baseCountrySelect","baseFrequencyInput","basePowerSelect","baseParameterError","writeBaseParametersButton","parameterMessageLog","clearParameterMessageLogButton","baseCommandLogWrap","baseCommandLog","clearBaseCommandLogButton",
    "roverRtkImagePanel","roverRtkImage","roverRtkImageCaption",
    "roverParametersForm","roverSnInput","roverBaseSnInput","roverFirmwareInput","roverWorkModeSelect","roverAutoHoppingInput","roverCountrySelect","roverFrequencyInput","roverPowerSelect","roverBaselineInput","roverParameterError","writeRoverParametersButton",
    "addStationBackdrop","addStationDialog","addStationForm","addStationSnInput","addStationSnError","addStationCancelButton",
    "serialPortBackdrop","serialPortDialog","serialPortForm","serialPortSelect","serialPortRefreshButton","serialPortCancelButton",
    "adminAccessBackdrop","adminAccessDialog","adminAccessForm","adminPasswordInput","adminAccessError","adminAccessCancelButton",
    "confirmDialogBackdrop","confirmDialog","confirmDialogTitle","confirmDialogMessage","confirmDialogConfirmButton","confirmDialogCancelButton",
  ].forEach((id) => { els[id] = document.getElementById(id); });
  canvasIds.forEach((id) => { els[id] = document.getElementById(id); });
}

function bindEvents() {
  els.connectButton.addEventListener("click", toggleSerialConnection);
  document.getElementById('summaryDeviceImage')?.addEventListener('error', (event) => { event.currentTarget.hidden = true; });
  els.connectionTab?.addEventListener("click", showConnectionTools);
  els.viewTab?.addEventListener("click", showViewTools);
  els.replayTab?.addEventListener("click", showReplayTools);
  els.helpTab?.addEventListener("click", showHelpTools);
  els.homeButton?.addEventListener("click", openHome);
  els.manualButton?.addEventListener("click", openManual);
  els.settingsTab?.addEventListener("click", openSettings);
  els.settingsMenuButton?.addEventListener("click", openSettings);
  els.saveMenuButton?.addEventListener("click", openSavePage);
  els.monitorMenuButton?.addEventListener("click", () => closeSettings({ focusMonitor: true }));
  els.settingsRefreshButton?.addEventListener("click", refreshStationSettings);
  els.settingsStationPagination?.addEventListener("click", handleSettingsStationPagination);
  els.settingsStationPagination?.addEventListener("change", handleSettingsStationPagination);
  els.settingsAddStationButton?.addEventListener("click", openAddStationDialog);
  els.addStationForm?.addEventListener("submit", submitAddStationDialog);
  els.addStationSnInput?.addEventListener("input", handleAddStationSnInput);
  els.addStationCancelButton?.addEventListener("click", closeAddStationDialog);
  els.addStationBackdrop?.addEventListener("click", closeAddStationDialog);
  els.serialPortForm?.addEventListener("submit", submitSerialPortDialog);
  els.serialPortRefreshButton?.addEventListener("click", refreshSerialPortDialog);
  els.serialPortCancelButton?.addEventListener("click", () => closeSerialPortDialog(null));
  els.serialPortBackdrop?.addEventListener("click", () => closeSerialPortDialog(null));
  els.adminAccessForm?.addEventListener("submit", submitAdministratorAccess);
  els.adminAccessCancelButton?.addEventListener("click", closeAdministratorAccess);
  els.adminAccessBackdrop?.addEventListener("click", closeAdministratorAccess);
  els.confirmDialogConfirmButton?.addEventListener("click", () => closeConfirmDialog(true));
  els.confirmDialogCancelButton?.addEventListener("click", () => closeConfirmDialog(false));
  els.confirmDialogBackdrop?.addEventListener("click", () => closeConfirmDialog(false));
  els.settingsStationRows?.addEventListener("click", handleSettingsStationAction);
  els.baseParameterTabButton?.addEventListener("click", () => showParameterPanel("base"));
  els.roverParameterTabButton?.addEventListener("click", () => showParameterPanel("rover"));
  els.queryParametersButton?.addEventListener("click", queryActiveParameters);
  els.baseParametersForm?.addEventListener("submit", writeBaseParameters);
  els.roverParametersForm?.addEventListener("submit", writeRoverParameters);
  els.baseCountrySelect?.addEventListener("change", updateBaseFrequencyLimits);
  els.roverCountrySelect?.addEventListener("change", updateRoverFrequencyLimits);
  els.clearParameterMessageLogButton?.addEventListener("click", clearDisplayedParameterMessages);
  els.clearBaseCommandLogButton?.addEventListener("click", clearBaseCommandLog);
  els.saveStationSelect?.addEventListener("change", renderSavePage);
  els.exportTrackCsvButton?.addEventListener("click", exportSelectedStationTrackCsv);
  els.exportSelectedTracksButton?.addEventListener("click", () => exportTrackCsv(getSelectedSaveTrackSns()));
  els.saveSelectAll?.addEventListener("change", (event) => {
    const stationSns = getTrackStationSns();
    state.saveSelectedTrackSns = event.target.checked ? new Set(stationSns) : new Set();
    document.querySelectorAll("#savePreviewRows [data-save-track-sn]").forEach((input) => { input.checked = event.target.checked; });
    updateSaveExportState();
  });
  els.savePreviewRows?.addEventListener("change", (event) => {
    const input = event.target.closest("[data-save-track-sn]");
    if (input) input.checked ? state.saveSelectedTrackSns.add(input.dataset.saveTrackSn) : state.saveSelectedTrackSns.delete(input.dataset.saveTrackSn);
    updateSaveExportState();
  });
  els.settingsBackdrop?.addEventListener("click", closeSettings);
  els.settingsCloseButton?.addEventListener("click", closeSettings);
  els.languageZhButton?.addEventListener("click", () => setLanguage("zh"));
  els.languageEnButton?.addEventListener("click", () => setLanguage("en"));
  els.languageToggleButton?.addEventListener("click", () => setLanguage(state.language === "zh" ? "en" : "zh"));
  els.themeLightButton?.addEventListener("click", () => setTheme("light"));
  els.themeDarkButton?.addEventListener("click", () => setTheme("dark"));
  els.themeToggleButton?.addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "p") {
      event.preventDefault();
      openAdministratorAccess();
      return;
    }
    if (event.key === "Escape") {
      if (els.confirmDialog && !els.confirmDialog.hidden) {
        closeConfirmDialog(false);
        return;
      }
      if (els.adminAccessDialog && !els.adminAccessDialog.hidden) {
        closeAdministratorAccess();
        return;
      }
      if (els.addStationDialog && !els.addStationDialog.hidden) {
        closeAddStationDialog();
        return;
      }
      if (els.serialPortDialog && !els.serialPortDialog.hidden) {
        closeSerialPortDialog(null);
        return;
      }
      if ((els.settingsDialog && !els.settingsDialog.hidden) || (els.settingsPage && !els.settingsPage.hidden)) closeSettings();
    }
  });
  window.addEventListener("pagehide", closeNativeSerialOnPageHide);
  els.restoreDefaultButton?.addEventListener("click", restoreDefaultOutput);
  els.loadFileButton.addEventListener("click", () => els.fileInput.click());
  els.fileInput.addEventListener("change", loadFile);
  els.replayLoadButton?.addEventListener("click", () => els.replayFileInput?.click());
  els.replayFileInput?.addEventListener("change", loadReplayFile);
  els.replayPlayButton?.addEventListener("click", toggleReplayPlayback);
  els.replayBackButton?.addEventListener("click", () => seekReplayRelative(-1));
  els.replayForwardButton?.addEventListener("click", () => seekReplayRelative(1));
  els.replaySpeedSelect?.addEventListener("change", updateReplaySpeed);
  els.replayProgress?.addEventListener("input", handleReplayProgressInput);
  els.replayJumpButton?.addEventListener("click", jumpReplayToUtc);
  els.replayUtcInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") jumpReplayToUtc();
  });
  els.sendButton?.addEventListener("click", sendCommand);
  els.ubxClearButton?.addEventListener("click", () => {
    state.privateFrameLines = []; state.privateRateTimes = [];
    renderAll();
  });
  els.clearScatterButton?.addEventListener("click", () => { state.scatterPoints = []; renderAll(); setStatusKey("status.scatterCleared"); });
  els.saveScatterButton?.addEventListener("click", downloadScatterCsv);
  els.zoomInButton?.addEventListener("click", () => zoomMap(1));
  els.zoomOutButton?.addEventListener("click", () => zoomMap(-1));
  bindMapInteraction();
  bindSignalTooltip();
  els.mobileStationList?.addEventListener("pointerdown", handleStationPointerSelection);
  els.mobileStationList?.addEventListener("click", handleStationKeyboardSelection);
  els.mobileStationList?.addEventListener("change", handleStationTrackChange);
  els.mobileStationRows?.addEventListener("click", handleStationSelection);
  document.querySelectorAll("[data-system]").forEach((checkbox) => { checkbox.addEventListener("change", renderAll); });
  document.querySelectorAll('input[name="mapMode"]').forEach((radio) => {
    radio.addEventListener("change", (event) => { state.mapMode = event.target.value; renderMap(); });
  });
  els.portStatusAction?.addEventListener("click", (event) => {
    event.stopPropagation();
    const action = els.portStatusAction.dataset.action;
    hidePortStatus();
    if (action === "reidentify") void manuallyReidentifySerial();
    else void connectSerial();
  });
}

function bindMapInteraction() {
  const canvas = els.mapCanvas;
  if (!canvas) return;
  canvas.addEventListener("pointerdown", startMapDrag);
  canvas.addEventListener("pointermove", handleMapPointerMove);
  canvas.addEventListener("pointerup", stopMapDrag);
  canvas.addEventListener("pointercancel", stopMapDrag);
  canvas.addEventListener("pointercancel", hideMapStationTooltip);
  canvas.addEventListener("pointerleave", hideMapStationTooltip);
  canvas.addEventListener("wheel", handleMapWheel, { passive: false });
  canvas.addEventListener("dblclick", (event) => {
    event.preventDefault();
    const marker = getMapMarkerHit(event);
    const station = marker && (marker.isBase ? state.basePosition : state.mobileStations.get(marker.sn));
    if (hasStationPosition(station)) {
      state.mapCenter = mapDisplayPoint(station);
      state.mapFollowFix = false;
      state.mapUserControlled = true;
      state.mapZoom = clamp(state.mapZoom + 2, MAP_MIN_ZOOM, MAP_MAX_ZOOM);
      hideMapStationTooltip();
      renderMap();
      return;
    }
    zoomMap(1, event.offsetX, event.offsetY);
  });
  canvas.addEventListener("click", handleMapStationClick);
}

function handleMapStationClick(event) {
  if (state.mapDragMoved) {
    state.mapDragMoved = false;
    return;
  }
  const hit = getMapMarkerHit(event);
  if (hit && !hit.isBase) selectStation(hit.sn, { center: false });
}

function getMapMarkerHit(event) {
  const canvas = els.mapCanvas;
  const rect = canvas?.getBoundingClientRect();
  if (!canvas || !rect) return null;
  const x = (event.clientX - rect.left) * canvas.clientWidth / Math.max(1, rect.width);
  const y = (event.clientY - rect.top) * canvas.clientHeight / Math.max(1, rect.height);
  return [...state.mapMarkers].reverse().find((marker) => Math.hypot(x - marker.x, y - marker.y) <= marker.radius) || null;
}

function handleMapStationHover(event) {
  const marker = getMapMarkerHit(event);
  const station = marker ? (marker.isBase ? state.basePosition : state.mobileStations.get(marker.sn)) : null;
  if (!station || !hasStationPosition(station)) {
    hideMapStationTooltip();
    return;
  }
  showMapStationTooltip(event, station);
}

function showMapStationTooltip(event, station) {
  const canvas = els.mapCanvas;
  const tooltip = els.mapStationTooltip;
  const stage = canvas?.parentElement;
  if (!canvas || !tooltip || !stage) return;
  tooltip.innerHTML = (station === state.basePosition ? '<span>' + escapeHtml(t('guide.baseStation')) + '</span><span>' + escapeHtml(t('map.altitude') + ': ' + (Number.isFinite(station.altitude) ? station.altitude.toFixed(2) + ' m' : '--')) + '</span>' : '') + '<span>' + escapeHtml(t('map.lon') + ': ' + formatCoordinate(station.lon)) + '</span>' +
    '<span>' + escapeHtml(t('map.lat') + ': ' + formatCoordinate(station.lat)) + '</span>';
  tooltip.hidden = false;
  canvas.style.cursor = 'pointer';

  const stageRect = stage.getBoundingClientRect();
  const scaleX = stage.clientWidth / Math.max(1, stageRect.width);
  const scaleY = stage.clientHeight / Math.max(1, stageRect.height);
  const pointerX = (event.clientX - stageRect.left) * scaleX;
  const pointerY = (event.clientY - stageRect.top) * scaleY;
  const tooltipWidth = tooltip.offsetWidth || 190;
  const tooltipHeight = tooltip.offsetHeight || 58;
  let left = pointerX + 14;
  let top = pointerY + 14;
  if (left + tooltipWidth > stage.clientWidth - 4) left = pointerX - tooltipWidth - 14;
  if (top + tooltipHeight > stage.clientHeight - 4) top = pointerY - tooltipHeight - 14;
  tooltip.style.left = Math.max(4, left) + 'px';
  tooltip.style.top = Math.max(4, top) + 'px';
}

function hideMapStationTooltip() {
  if (els.mapStationTooltip) els.mapStationTooltip.hidden = true;
  if (els.mapCanvas && !state.isDraggingMap) els.mapCanvas.style.cursor = '';
}

function bindSignalTooltip() {
  const canvas = els.signalCanvas;
  if (!canvas) return;
  canvas.addEventListener("pointermove", handleSignalPointerMove);
  canvas.addEventListener("pointerleave", hideSignalTooltip);
  canvas.addEventListener("pointercancel", hideSignalTooltip);
}

function handleSignalPointerMove(event) {
  const canvas = els.signalCanvas;
  const tooltip = els.signalTooltip;
  if (!canvas || !tooltip || !state.signalBars?.length) {
    hideSignalTooltip();
    return;
  }
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.clientWidth / Math.max(1, rect.width);
  const scaleY = canvas.clientHeight / Math.max(1, rect.height);
  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;
  const hit = state.signalBars.find((bar) => x >= bar.x && x <= bar.x + bar.width && y >= bar.y && y <= bar.y + bar.height);
  if (!hit) {
    hideSignalTooltip();
    canvas.style.cursor = "";
    return;
  }
  if (hit.stationSn) {
    tooltip.innerHTML = escapeHtml(t('station.sn') + ': ' + hit.stationSn) + '<br />' +
      escapeHtml(t('station.satellites') + ': ' + hit.satelliteCount);
  } else {
    const systemName = hit.systemName || hit.system || "";
    tooltip.innerHTML = escapeHtml(systemName) + "<br />" + escapeHtml(hit.label + ": " + hit.snr + "dBHz");
  }
  tooltip.hidden = false;
  canvas.style.cursor = "default";

  const wrap = canvas.parentElement;
  const wrapRect = wrap.getBoundingClientRect();
  const tooltipWidth = tooltip.offsetWidth || 110;
  const tooltipHeight = tooltip.offsetHeight || 52;
  const wrapScaleX = wrap.clientWidth / Math.max(1, wrapRect.width);
  const wrapScaleY = wrap.clientHeight / Math.max(1, wrapRect.height);
  const pointerX = (event.clientX - wrapRect.left) * wrapScaleX;
  const pointerY = (event.clientY - wrapRect.top) * wrapScaleY;
  let left = pointerX + 12;
  let top = pointerY + 12;
  if (left + tooltipWidth > wrap.clientWidth - 4) left = pointerX - tooltipWidth - 12;
  if (top + tooltipHeight > wrap.clientHeight - 4) top = pointerY - tooltipHeight - 12;
  tooltip.style.left = Math.max(4, left) + "px";
  tooltip.style.top = Math.max(4, top) + "px";
}

function hideSignalTooltip() {
  if (els.signalTooltip) els.signalTooltip.hidden = true;
  if (els.signalCanvas) els.signalCanvas.style.cursor = "";
}

function startMapDrag(event) {
  if (event.button !== 0) return;
  hideMapStationTooltip();
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
  if (!state.isDraggingMap || !state.mapDragStart) {
    handleMapStationHover(event);
    return;
  }
  hideMapStationTooltip();
  const start = state.mapDragStart;
  const dx = event.clientX - start.x;
  const dy = event.clientY - start.y;
  if (Math.hypot(dx, dy) > MAP_DRAG_THRESHOLD) state.mapDragMoved = true;
  const centerPx = lonLatToWorldPixel(start.center.lon, start.center.lat, start.zoom);
  const nextCenter = worldPixelToLonLat(centerPx.x - dx, centerPx.y - dy, start.zoom);
  state.mapCenter = nextCenter;
  state.mapFollowFix = false;
  state.mapUserControlled = true;
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
  hideMapStationTooltip();
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
  state.mapUserControlled = true;
  renderMap();
}

function isSerialConnected() {
  return !!(state.port || state.reader || state.isDetecting || state.isReprobing);
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
  const issueKey = active ? "" : getSerialEnvironmentIssue();
  els.connectButton.textContent = active ? t("toolbar.closeSerial") : t("toolbar.openSerial");
  els.connectButton.classList.toggle("is-disconnect", active);
  if (els.queryParametersButton) els.queryParametersButton.disabled = !state.port?.writable;
  els.connectButton.disabled = !active && (!!(state.isDetecting || state.isReprobing) || !!issueKey);
  els.connectButton.title = issueKey ? t(issueKey) : "";
  if (els.baudRate) els.baudRate.disabled = active;
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

// ========== Private RTK Protocol ==========
function trimPrivateRateTimes() {
  const cutoff = Date.now() - 5000;
  state.privateRateTimes = state.privateRateTimes.filter((time) => time >= cutoff);
}

function calculatePrivateRateHz() {
  trimPrivateRateTimes();
  if (state.privateRateTimes.length < 2) return state.privateRateTimes.length;
  const span = (state.privateRateTimes[state.privateRateTimes.length - 1] - state.privateRateTimes[0]) / 1000;
  return span > 0 ? (state.privateRateTimes.length - 1) / span : 0;
}

function parsePrivateBytes(bytes, options = {}) {
  if (!bytes?.length) return [];
  if (options.logRaw !== false) {
    state.privateRawLines.push(formatLogTime(new Date()) + "  " + bytesToHex(bytes));
    if (state.privateRawLines.length > 400) state.privateRawLines.splice(0, state.privateRawLines.length - 400);
  }
  state.baseParameterParser.push(bytes).forEach(handleBaseParameterRecord);
  state.baseStationSnParser.push(bytes).forEach(handleBaseStationSnRecord);
  state.roverParameterParser.push(bytes).forEach(handleRoverParameterRecord);
  state.commandResponseParser.push(bytes).forEach(handleCommandResponseRecord);
  state.basePositionParser.push(bytes).forEach(handleBasePositionRecord);
  const invalidBefore = state.privateParser.invalidFrames;
  const records = state.privateParser.push(bytes);
  const invalidCount = state.privateParser.invalidFrames - invalidBefore;
  if (invalidCount > 0) {
    state.privateFrameLines.push(formatLogTime(new Date()) + "  CHECKSUM/FRAME ERROR x" + invalidCount);
  }
  records.forEach(handlePrivateRecord);
  if (state.privateFrameLines.length > 400) state.privateFrameLines.splice(0, state.privateFrameLines.length - 400);
  if (options.render !== false) scheduleRender();
  return records;
}

function handleBaseParameterRecord(record) {
  markValidSerialData();
  setConnectedDeviceType("base");
  showReceivedParameterPanel("base");
  completeAutomaticParameterQuery();
  const isSettingConfirmation = false;
  completeParameterQueryMessage("base");
  state.baseParameterSnapshot = {
    sn: record.sn, firmware: record.firmware, workMode: record.workMode, autoHopping: record.autoHopping,
    country: record.country, frequency: record.frequency, power: record.power,
  };
  updateParameterSettingsAvailability();
  addBaseCommandLog("RX", "BASE PARAM", record.frame, "OK");
  if (!isSettingConfirmation) {
    if (els.baseSnInput) els.baseSnInput.value = record.sn;
    if (els.baseFirmwareInput) els.baseFirmwareInput.value = record.firmware;
    updateBaseRtkImage(record.firmware);
    if (els.baseWorkModeSelect) els.baseWorkModeSelect.value = String(record.workMode);
    if (els.baseAutoHoppingInput) els.baseAutoHoppingInput.checked = record.autoHopping;
    if (els.baseCountrySelect) els.baseCountrySelect.value = String(record.country);
    if (els.baseFrequencyInput) els.baseFrequencyInput.value = String(record.frequency);
    if (els.basePowerSelect) els.basePowerSelect.value = String(record.power);
    updateBaseFrequencyLimits(false);
  }
  clearBaseParameterError();
  setStatusKey("status.baseParametersReceived");
}

function handleBaseStationSnRecord(record) {
  markValidSerialData();
  setConnectedDeviceType("base");
  const wasAutomaticStationRefresh = state.autoStationRefreshSessionId === state.serialSessionId;
  if (wasAutomaticStationRefresh) {
    state.autoStationRefreshReceived = true;
    state.autoStationRefreshCompletedSessionId = state.serialSessionId;
    state.autoStationRefreshSessionId = null;
  }
  addBaseCommandLog("RX", "ROVER SN LIST", record.frame, "OK");
  const stationRecords = (record.stations || []).filter((station) => station.sn !== "00000000" && station.sn !== "FFFFFFFF");
  const pendingAddSn = state.pendingStationOperation?.type === "add" ? state.pendingStationOperation.sn : "";
  const stationSns = [...new Set(stationRecords
    .filter((station) => !state.removedStationSns.has(station.sn) || station.sn === pendingAddSn)
    .map((station) => station.sn))];
  const stationPollingState = new Map((record.stations || []).map((station) => [station.sn, station.status === 1]));
  const receivedSns = new Set(stationSns);
  for (const sn of stationSns) {
    if (stationPollingState.get(sn)) state.stationPollingSns.add(sn);
    else state.stationPollingSns.delete(sn);
    if (!state.mobileStations.has(sn)) {
      state.mobileStations.set(sn, {
        sn, snRaw: sn, lat: null, lon: null, altitude: null, speed: null,
        fixStatus: 0, satelliteCount: 0, lastSeenAt: 0,
        lastValidPositionAt: 0, receivedCount: 0, offlineCount: 0, wasOnline: false,
      });
    }
  }
  for (const sn of [...state.mobileStations.keys()]) {
    if (receivedSns.has(sn)) continue;
    state.mobileStations.delete(sn);
    state.stationPollingSns.delete(sn);
    state.trackedStationSns.delete(sn);
  }
  if (!receivedSns.has(state.selectedStationSn)) state.selectedStationSn = "";
  syncSelectedOnlineStation();
  state.stationFreshnessSignature = "";
  state.stationListRenderSignature = "";
  renderAll();
  setStatusKey("status.stationsRefreshed", { count: state.mobileStations.size });
  completePendingStationOperationFromList(stationPollingState);
  completePendingStationRefresh(true);
}

function handleRoverParameterRecord(record) {
  markValidSerialData();
  setConnectedDeviceType("rover");
  showReceivedParameterPanel("rover");
  completeAutomaticParameterQuery();
  const isSettingConfirmation = false;
  completeParameterQueryMessage("rover");
  state.roverParameterSnapshot = {
    roverSn: record.roverSn, baseSn: record.baseSn, workMode: record.workMode,
    autoHopping: record.autoHopping, country: record.country,
    frequency: record.frequency, power: record.power, baselineLength: record.baselineLength,
  };
  updateParameterSettingsAvailability();
  addBaseCommandLog("RX", "ROVER PARAM", record.frame, "OK");
  if (!isSettingConfirmation) {
    if (els.roverSnInput) els.roverSnInput.value = record.roverSn;
    if (els.roverBaseSnInput) els.roverBaseSnInput.value = record.baseSn;
    if (els.roverFirmwareInput) els.roverFirmwareInput.value = record.firmware;
    updateRoverBaselineLengthAvailability(record.firmware);
    updateRoverRtkImage(record.firmware);
    if (els.roverWorkModeSelect) els.roverWorkModeSelect.value = String(record.workMode);
    if (els.roverAutoHoppingInput) els.roverAutoHoppingInput.checked = record.autoHopping;
    if (els.roverCountrySelect) els.roverCountrySelect.value = String(record.country);
    if (els.roverFrequencyInput) els.roverFrequencyInput.value = String(record.frequency);
    if (els.roverPowerSelect) els.roverPowerSelect.value = String(record.power);
    if (els.roverBaselineInput) els.roverBaselineInput.value = String(record.baselineLength);
    updateRoverFrequencyLimits(false);
  }
  clearRoverParameterError();
  setStatusKey("status.roverParametersReceived");
}

function handleBasePositionRecord(record) {
  markValidSerialData();
  setConnectedDeviceType("base");
  markOutputMode("PRIVATE");
  state.basePosition = { ...record, lastSeenAt: Date.now() };
  renderMap();
  updateMonitorSummary();
  state.privateFrameLines.push(formatLogTime(new Date()) + " BASE SN=" + record.sn +
    " STATUS=" + record.fixStatus + " SAT=" + record.satelliteCount +
    " LON=" + formatCoordinate(record.lon) + " LAT=" + formatCoordinate(record.lat) + " SUM=OK");
}

function handlePrivateRecord(record) {
  setConnectedDeviceType("base");
  const now = Date.now();
  markValidSerialData();
  markOutputMode("PRIVATE");
  state.privateRateTimes.push(now);
  trimPrivateRateTimes();
  if (state.removedStationSns.has(record.sn)) return;
  const previous = state.mobileStations.get(record.sn);
  const station = previous || {
    sn: record.sn,
    snRaw: record.snRaw || record.sn,
    lat: null,
    lon: null,
    altitude: null,
    speed: null,
    lastValidPositionAt: 0,
    receivedCount: 0,
    offlineCount: 0,
    wasOnline: false,
  };
  if (station.wasOnline && !isStationOnline(station, now)) {
    station.offlineCount = (station.offlineCount || 0) + 1;
  }
  station.deviceId = record.deviceId;
  station.systemId = record.systemId;
  station.messageId = record.messageId;
  station.sequence = record.sequence;
  station.fixStatus = record.fixStatus;
  station.satelliteCount = record.positionValid ? record.satelliteCount : null;
  station.reserved = record.reserved;
  station.signalStrength = record.signalStrength;
  station.reportedLat = record.lat;
  station.reportedLon = record.lon;
  station.reportedAltitude = record.altitude;
  station.reportedSpeed = record.speed;
  station.littleEndian = record.littleEndian;
  station.lastSeenAt = now;
  station.wasOnline = true;
  station.receivedCount += 1;
  if (record.positionValid) {
    station.lat = record.lat;
    station.lon = record.lon;
    station.altitude = record.altitude;
    station.speed = record.speed;
    station.lastValidPositionAt = now;
    state.scatterPoints.push({ sn: record.sn, lat: record.lat, lon: record.lon, time: now });
    if (state.scatterPoints.length > 2000) state.scatterPoints.splice(0, state.scatterPoints.length - 2000);
    if (state.trackedStationSns.has(record.sn)) appendStationTrackRecord(station, now);
  } else {
    station.lat = null;
    station.lon = null;
    station.altitude = null;
    station.speed = null;
    station.lastValidPositionAt = 0;
  }
  state.mobileStations.set(record.sn, station);
  if (!previous) state.stationPollingSns.add(record.sn);
  const previousSelectedSn = state.selectedStationSn;
  const selectedStation = syncSelectedOnlineStation(now);
  if (!state.mapUserControlled && selectedStation && selectedStation.sn !== previousSelectedSn) {
    if (hasStationPosition(selectedStation)) {
      state.mapFollowFix = true;
      state.mapCenter = mapDisplayPoint(selectedStation);
    }
  }
  if (!previous && record.positionValid && !state.mapUserControlled) fitMapToStations();
  state.privateFrameLines.push(
    formatLogTime(new Date(now)) +
    "  SEQ=" + record.sequence +
    " SN=" + record.sn +
    " STATUS=" + record.fixStatus +
    " SAT=" + record.satelliteCount +
    " SIGNAL=" + record.signalStrength +
    " LON=" + formatCoordinate(record.lon) +
    " LAT=" + formatCoordinate(record.lat) +
    " SUM=OK"
  );
}

function getStationFixText(status) {
  const key = "station.fix." + status;
  return I18N.zh[key] ? t(key) : t("station.fix.unknown", { status });
}

function hasStationPosition(station) {
  return !!station && RTK_PROTOCOL.isCoordinatePairValid(station.lat, station.lon);
}

function formatStationParameter(station, parameter) {
  if (!hasStationPosition(station)) return '--';
  if (parameter === 'satelliteCount') {
    return Number.isFinite(station.satelliteCount) ? String(station.satelliteCount) : '--';
  }
  if (parameter === 'lon' || parameter === 'lat') {
    return Number.isFinite(station[parameter]) ? formatCoordinate(station[parameter]) : '--';
  }
  return Number.isFinite(station[parameter]) ? station[parameter].toFixed(3) : '--';
}

function getStationQueryTimeoutMs() {
  const queryCount = [...state.mobileStations.keys()].filter((sn) => state.stationPollingSns.has(sn)).length;
  const baseTimeoutMs = queryCount * RTK_STATION_QUERY_TIMEOUT_PER_SN_MS;
  const groupCount = Math.max(1, Math.ceil(baseTimeoutMs / RTK_STATION_QUERY_GROUP_DURATION_MS));
  const extraTimeoutMs = groupCount * RTK_STATION_QUERY_EXTRA_TIMEOUT_PER_GROUP_MS;
  return Math.max(RTK_STATION_QUERY_MIN_TIMEOUT_MS, baseTimeoutMs + extraTimeoutMs);
}

function formatDurationSeconds(milliseconds) {
  return t('diagnostics.duration', { value: (Math.max(0, milliseconds) / 1000).toFixed(1) });
}

function renderStationQueryDiagnostics(now = Date.now()) {
  if (!state.isAdministrator || !els.stationQueryDiagnostics) return;
  const stations = getMonitorStations().filter((station) => state.stationPollingSns.has(station.sn));
  const timeoutMs = getStationQueryTimeoutMs();
  const rows = stations.map((station) => {
    const hasResponse = station.lastSeenAt > 0;
    const elapsedMs = hasResponse ? Math.max(0, now - station.lastSeenAt) : timeoutMs;
    const remainingMs = Math.max(0, timeoutMs - elapsedMs);
    const online = hasResponse && elapsedMs <= timeoutMs;
    return '<tr><td>' + escapeHtml(station.sn) + '</td>' +
      '<td>' + escapeHtml(hasResponse ? formatStationUpdatedTime(station.lastSeenAt) : '--') + '</td>' +
      '<td>' + escapeHtml(hasResponse ? formatDurationSeconds(elapsedMs) : '--') + '</td>' +
      '<td class="' + (online ? 'is-waiting' : 'is-timeout') + '">' +
      escapeHtml(online ? formatDurationSeconds(remainingMs) : t('diagnostics.timedOut')) + '</td>' +
      '<td>' + escapeHtml(String(station.offlineCount || 0)) + '</td></tr>';
  }).join('');
  els.stationQueryDiagnostics.innerHTML =
    '<div class="station-query-diagnostics-title">' + escapeHtml(t('diagnostics.title')) + '</div>' +
    '<div class="station-query-diagnostics-summary"><span>' + escapeHtml(t('diagnostics.selected')) + '<b>' + stations.length + '</b> ' + escapeHtml(t('diagnostics.unit')) + '</span>' +
    '<span>' + escapeHtml(t('diagnostics.offlineTimeout')) + '<b>' + escapeHtml(formatDurationSeconds(timeoutMs)) + '</b></span></div>' +
    '<div class="station-query-diagnostics-formula">' + escapeHtml(t('diagnostics.formula')) + '</div>' +
    (stations.length ? '<table><thead><tr><th>' + escapeHtml(t('diagnostics.serial')) + '</th><th>' + escapeHtml(t('diagnostics.lastResponse')) + '</th><th>' + escapeHtml(t('diagnostics.waited')) + '</th><th>' + escapeHtml(t('diagnostics.remaining')) + '</th><th>' + escapeHtml(t('diagnostics.offlineCount')) + '</th></tr></thead><tbody>' + rows + '</tbody></table>' :
      '<div class="station-query-diagnostics-empty">' + escapeHtml(t('diagnostics.empty')) + '</div>');
}

function isStationOnline(station, now = Date.now()) {
  return !!station && station.lastSeenAt > 0 && now - station.lastSeenAt <= getStationQueryTimeoutMs();
}

function updateStationOfflineCounts(now = Date.now()) {
  for (const station of state.mobileStations.values()) {
    const online = isStationOnline(station, now);
    if (station.wasOnline && !online) {
      station.offlineCount = (station.offlineCount || 0) + 1;
    }
    station.wasOnline = online;
  }
}

function getSelectedStation() {
  return state.mobileStations.get(state.selectedStationSn) || null;
}

function syncSelectedOnlineStation(now = Date.now()) {
  const selected = state.mobileStations.get(state.selectedStationSn);
  if (selected) return selected;
  const next = [...state.mobileStations.values()].find((station) => isStationOnline(station, now)) || null;
  state.selectedStationSn = next?.sn || "";
  return next;
}

function getPositionedBaseStation() {
  const base = state.basePosition;
  return base?.positionValid && hasStationPosition(base) ? base : null;
}

function getMapStations() {
  const stations = getPositionedStations();
  const base = getPositionedBaseStation();
  if (base) stations.unshift({ ...base, isBase: true });
  return stations;
}

function getPositionedStations() {
  return [...state.mobileStations.values()].filter(hasStationPosition);
}

function getLocatableStationCount() {
  return [...state.mobileStations.values()].filter((station) => isStationOnline(station) && hasStationPosition(station)).length;
}

function getMonitorStations(now = Date.now()) {
  const online = [];
  const offline = [];
  state.mobileStations.forEach((station) => {
    (isStationOnline(station, now) ? online : offline).push(station);
  });
  return online.concat(offline);
}

function selectStation(sn, options = {}) {
  const station = state.mobileStations.get(sn);
  if (!station) return;
  state.selectedStationSn = sn;
  if (!getPositionedBaseStation() && isStationOnline(station) && hasStationPosition(station) && options.center !== false) {
    state.mapFollowFix = true;
    state.mapUserControlled = false;
    state.mapCenter = mapDisplayPoint(station);
  }
  renderMessageDetail();
  renderInfo();
  renderMap();
}

function handleStationSelection(event) {
  const item = event.target.closest("[data-station-sn]");
  if (!item) return;
  selectStation(item.dataset.stationSn);
}

function handleStationPointerSelection(event) {
  if (event.button !== 0 || event.isPrimary === false) return;
  handleStationSelection(event);
}

function handleStationKeyboardSelection(event) {
  if (event.detail !== 0) return;
  handleStationSelection(event);
}

async function handleStationTrackChange(event) {
  const pollingControl = event.target.closest("[data-poll-station-sn], [data-poll-all]");
  if (pollingControl) {
    void handleStationPollingChange(pollingControl);
    return;
  }
  const checkbox = event.target.closest("[data-track-station-sn]");
  if (!checkbox) return;
  const sn = checkbox.dataset.trackStationSn;
  if (checkbox.checked && !isStationOnline(state.mobileStations.get(sn))) {
    checkbox.checked = false;
    state.stationListRenderSignature = "";
    renderMap();
    return;
  }
  if (checkbox.checked) {
    const exportReady = await ensureTrackExportDirectory();
    if (!exportReady) {
      checkbox.checked = false;
      state.stationListRenderSignature = "";
      return;
    }
    state.trackedStationSns.add(sn);
    state.stationTrackRecords.set(sn, []);
    const station = state.mobileStations.get(sn);
    if (hasStationPosition(station)) appendStationTrackRecord(station, Date.now());
  } else {
    await finishStationTrackSession(sn);
  }
  state.stationListRenderSignature = "";
  renderMap();
}

async function handleStationPollingChange(control) {
  const all = control.hasAttribute("data-poll-all");
  const changes = all
    ? [...state.mobileStations.keys()].filter((sn) => state.stationPollingSns.has(sn) !== control.checked).map((sn) => [sn, control.checked])
    : [[control.dataset.pollStationSn, control.checked]];
  for (const [sn, enabled] of changes) {
    if (!state.mobileStations.has(sn)) continue;
    if (enabled) state.stationPollingSns.add(sn);
    else state.stationPollingSns.delete(sn);
  }
  state.stationListRenderSignature = "";
  renderMessageDetail();
  renderMap();
  if (!state.port?.writable || state.connectedDeviceType === "rover") return;
  try {
    if (!changes.length) return;
    const frame = RTK_PROTOCOL.buildBaseStationSnPollingWrite(changes, state.baseCommandSequence++);
    await writeSerialFrame(frame, "ROVER SN INFO " + changes.map(([sn, enabled]) => sn + "=" + (enabled ? "ON" : "OFF")).join(", "));
  } catch (error) {
    setStatusKey("status.baseCommandFailed", { message: error.message || "" });
  }
}

function appendStationTrackRecord(station, time) {
  if (!station?.sn || !hasStationPosition(station)) return;
  const records = state.stationTrackRecords.get(station.sn) || [];
  const previous = records[records.length - 1];
  if (previous && previous.time === time && previous.lat === station.lat && previous.lon === station.lon) return;
  records.push({
    sn: station.sn,
    fixStatus: station.fixStatus,
    online: isStationOnline(station, time),
    satelliteCount: station.satelliteCount,
    lon: station.lon,
    lat: station.lat,
    altitude: station.altitude,
    speed: station.speed,
    time,
  });
  state.stationTrackRecords.set(station.sn, records);
}

function handleSettingsStationAction(event) {
  if (state.connectedDeviceType === "rover") return;
  const addButton = event.target.closest("[data-add-station]");
  if (addButton) {
    openAddStationDialog();
    return;
  }
  const button = event.target.closest("[data-remove-station-sn]");
  if (!button) return;
  removeMobileStation(button.dataset.removeStationSn);
}

async function refreshStationSettings(options = {}) {
  if (Number.isFinite(options.sessionId) && options.sessionId !== state.serialSessionId) return;
  if (state.connectedDeviceType === "rover") return;
  if (options.automatic) {
    state.autoStationRefreshSessionId = state.serialSessionId;
  } else {
    beginPendingStationRefresh();
  }
  state.stationFreshnessSignature = "";
  state.stationListRenderSignature = "";
  renderAll();
  try {
    await writeSerialFrame(RTK_PROTOCOL.buildBaseStationSnQuery(state.baseCommandSequence++), "ROVER SN QUERY");
    setStatusKey("status.stationSnQuerySent");
  } catch (error) {
    recoverLostNativeSerialSession(error);
    setStatusKey("status.baseCommandFailed", { message: error.message || "" });
    if (!options.automatic) completePendingStationRefresh(false);
  }
}

function showParameterPanel(panel) {
  state.activeParameterPanel = panel === "rover" ? "rover" : "base";
  const showBase = state.activeParameterPanel === "base";
  if (els.baseParametersForm) els.baseParametersForm.hidden = !showBase;
  if (els.baseRtkImagePanel) els.baseRtkImagePanel.hidden = !showBase || !getBaseRtkImage(els.baseFirmwareInput?.value);
  if (els.roverParametersForm) els.roverParametersForm.hidden = showBase;
  if (els.roverRtkImagePanel) els.roverRtkImagePanel.hidden = showBase || !getRoverRtkImage(els.roverFirmwareInput?.value);
  els.baseParameterTabButton?.classList.toggle("active", showBase);
  els.roverParameterTabButton?.classList.toggle("active", !showBase);
  els.baseParameterTabButton?.setAttribute("aria-selected", String(showBase));
  els.roverParameterTabButton?.setAttribute("aria-selected", String(!showBase));
}

function showReceivedParameterPanel(panel) {
  showParameterPanel(panel);
}

function updateParameterSettingsAvailability() {
  const hasParameters = !!state.port && !!(state.baseParameterSnapshot || state.roverParameterSnapshot);
  if (els.parameterSettingsPane) els.parameterSettingsPane.hidden = false;
  if (!hasParameters) clearParameterFormValues();
  if (els.queryParametersButton) els.queryParametersButton.disabled = !state.port?.writable;
}

function updateAdministratorUi() {
  const administrator = state.isAdministrator;
  [els.baseSnInput, els.roverSnInput, els.roverBaseSnInput].forEach((input) => {
    if (input) input.readOnly = !administrator;
  });
  updateRoverBaselineLengthAvailability(els.roverFirmwareInput?.value);
  if (els.baseCommandLogWrap) els.baseCommandLogWrap.hidden = !administrator;
  if (els.stationQueryDiagnostics) els.stationQueryDiagnostics.hidden = !administrator;
}

function openAdministratorAccess() {
  if (state.isAdministrator || !els.adminAccessDialog || !els.adminAccessBackdrop) return;
  if (els.adminAccessError) {
    els.adminAccessError.hidden = true;
    els.adminAccessError.textContent = "";
  }
  if (els.adminPasswordInput) els.adminPasswordInput.value = "";
  els.adminAccessBackdrop.hidden = false;
  els.adminAccessDialog.hidden = false;
  requestAnimationFrame(() => els.adminPasswordInput?.focus());
}

function closeAdministratorAccess() {
  if (els.adminAccessBackdrop) els.adminAccessBackdrop.hidden = true;
  if (els.adminAccessDialog) els.adminAccessDialog.hidden = true;
  if (els.adminPasswordInput) els.adminPasswordInput.value = "";
}

function showConfirmDialog(title, message) {
  if (!els.confirmDialog || !els.confirmDialogBackdrop) return Promise.resolve(false);
  if (confirmDialogResolve) closeConfirmDialog(false);
  if (els.confirmDialogTitle) els.confirmDialogTitle.textContent = title;
  if (els.confirmDialogMessage) els.confirmDialogMessage.textContent = message;
  els.confirmDialogBackdrop.hidden = false;
  els.confirmDialog.hidden = false;
  requestAnimationFrame(() => els.confirmDialogConfirmButton?.focus());
  return new Promise((resolve) => { confirmDialogResolve = resolve; });
}

function closeConfirmDialog(confirmed) {
  if (els.confirmDialogBackdrop) els.confirmDialogBackdrop.hidden = true;
  if (els.confirmDialog) els.confirmDialog.hidden = true;
  const resolve = confirmDialogResolve;
  confirmDialogResolve = null;
  if (resolve) resolve(!!confirmed);
}

function submitAdministratorAccess(event) {
  event.preventDefault();
  if ((els.adminPasswordInput?.value || "") !== ADMIN_ACCESS_PASSWORD) {
    if (els.adminAccessError) {
      els.adminAccessError.textContent = t("admin.invalidPassword");
      els.adminAccessError.hidden = false;
    }
    els.adminPasswordInput?.select();
    return;
  }
  state.isAdministrator = true;
  closeAdministratorAccess();
  updateAdministratorUi();
  renderStationQueryDiagnostics();
}

function clearParameterFormValues() {
  [els.baseSnInput, els.baseFirmwareInput, els.baseFrequencyInput, els.roverSnInput, els.roverBaseSnInput, els.roverFirmwareInput, els.roverFrequencyInput, els.roverBaselineInput].forEach((input) => {
    if (input) input.value = "";
  });
  [els.baseWorkModeSelect, els.baseCountrySelect, els.basePowerSelect, els.roverWorkModeSelect, els.roverCountrySelect, els.roverPowerSelect].forEach((select) => {
    if (select) select.value = "";
  });
  if (els.baseAutoHoppingInput) els.baseAutoHoppingInput.checked = false;
  if (els.roverAutoHoppingInput) els.roverAutoHoppingInput.checked = false;
  updateRoverBaselineLengthAvailability("");
  updateBaseRtkImage("");
  updateRoverRtkImage("");
}

function getFirmwareMiddle(firmware) {
  const match = String(firmware || "").trim().match(/^\d+\.(\d+)\./);
  return match?.[1] || "";
}

function isRoverDualAntennaFirmware(firmware) {
  return getFirmwareMiddle(firmware) === "2";
}

function updateRoverBaselineLengthAvailability(firmware) {
  if (!els.roverBaselineInput) return;
  const editable = isRoverDualAntennaFirmware(firmware);
  els.roverBaselineInput.readOnly = !editable;
  els.roverBaselineInput.setAttribute("aria-readonly", String(!editable));
}

function getBaseRtkImage(firmware) {
  return BASE_RTK_IMAGES_BY_FIRMWARE_MIDDLE[getFirmwareMiddle(firmware)] || null;
}

function getRoverRtkImage(firmware) {
  return ROVER_RTK_IMAGES_BY_FIRMWARE_MIDDLE[getFirmwareMiddle(firmware)] || null;
}

function updateBaseRtkImage(firmware) {
  const rtkImage = getBaseRtkImage(firmware);
  const showImage = state.activeParameterPanel !== "rover" && !!rtkImage;
  if (els.baseRtkImagePanel) els.baseRtkImagePanel.hidden = !showImage;
  if (!rtkImage) return;
  const label = t(rtkImage.labelKey, { model: rtkImage.model });
  if (els.baseRtkImage) {
    els.baseRtkImage.src = rtkImage.src;
    els.baseRtkImage.alt = label;
  }
  if (els.baseRtkImageCaption) els.baseRtkImageCaption.textContent = label;
}

function updateRoverRtkImage(firmware) {
  const rtkImage = getRoverRtkImage(firmware);
  const showImage = state.activeParameterPanel === "rover" && !!rtkImage;
  if (els.roverRtkImagePanel) els.roverRtkImagePanel.hidden = !showImage;
  if (!rtkImage) return;
  const label = t(rtkImage.labelKey, { model: rtkImage.model });
  if (els.roverRtkImage) {
    els.roverRtkImage.src = rtkImage.src;
    els.roverRtkImage.alt = label;
  }
  if (els.roverRtkImageCaption) els.roverRtkImageCaption.textContent = label;
}

function queryActiveParameters() {
  // Stop any empty-port polling before starting a user-initiated query.
  state.autoPollingSuspendedByManualQuery = true;
  state.autoParameterQuerySessionId = null;
  state.autoParameterQueryRequestSessionId = null;
  state.parameterConfirmationQueryType = "";
  if (state.connectedDeviceType === "base") return queryBaseParameters();
  if (state.connectedDeviceType === "rover") return queryRoverParameters();
  return state.activeParameterPanel === "rover" ? queryRoverParameters() : queryBaseParameters();
}

function clearBaseParameterError() {
  if (!els.baseParameterError) return;
  els.baseParameterError.hidden = true;
  els.baseParameterError.textContent = "";
}

function showBaseParameterError(key, params = {}) {
  if (!els.baseParameterError) return;
  els.baseParameterError.textContent = t(key, params);
  els.baseParameterError.hidden = false;
}

function getBaseFrequencyRange(country = Number(els.baseCountrySelect?.value)) {
  if (country === 0) return { min: 863, max: 870 };
  if (country === 1) return { min: 902, max: 928 };
  return { min: 915, max: 928 };
}

function updateRoverFrequencyLimits(clampValue = true) {
  const range = getBaseFrequencyRange(Number(els.roverCountrySelect?.value));
  if (!els.roverFrequencyInput) return;
  els.roverFrequencyInput.min = String(range.min);
  els.roverFrequencyInput.max = String(range.max);
  const value = Number(els.roverFrequencyInput.value);
  if (clampValue && (!Number.isFinite(value) || value < range.min || value > range.max)) els.roverFrequencyInput.value = String(range.min);
  clearRoverParameterError();
}

function clearRoverParameterError() {
  if (!els.roverParameterError) return;
  els.roverParameterError.hidden = true;
  els.roverParameterError.textContent = "";
}

function showRoverParameterError(key, params = {}) {
  if (!els.roverParameterError) return;
  els.roverParameterError.textContent = t(key, params);
  els.roverParameterError.hidden = false;
}

function updateBaseFrequencyLimits(clampValue = true) {
  const range = getBaseFrequencyRange();
  if (!els.baseFrequencyInput) return;
  els.baseFrequencyInput.min = String(range.min);
  els.baseFrequencyInput.max = String(range.max);
  const value = Number(els.baseFrequencyInput.value);
  if (clampValue && (!Number.isFinite(value) || value < range.min || value > range.max)) els.baseFrequencyInput.value = String(range.min);
  clearBaseParameterError();
}

function renderBaseCommandLog() {
  if (!els.baseCommandLog) return;
  els.baseCommandLog.textContent = state.baseCommandLines.length ? state.baseCommandLines.join("\n") : t("base.noCommands");
  els.baseCommandLog.scrollTop = els.baseCommandLog.scrollHeight;
}

function renderParameterMessageLog() {
  if (!els.parameterMessageLog) return;
  els.parameterMessageLog.replaceChildren();
  if (!state.parameterMessages.length) {
    els.parameterMessageLog.textContent = t("parameter.noMessages");
  } else {
    state.parameterMessages.forEach((entry) => {
      const line = document.createElement("div");
      line.className = "parameter-message-line" + (entry.level === "error" ? " is-error" : entry.level === "success" ? " is-success" : "");
      line.textContent = new Date(entry.time || Date.now()).toTimeString().slice(0, 8) + "  " + entry.text;
      els.parameterMessageLog.appendChild(line);
    });
  }
  els.parameterMessageLog.scrollTop = els.parameterMessageLog.scrollHeight;
}

function addParameterSettingMessage(parameter, value, commandId) {
  const messageKey = commandId === 0x05 ? "parameter.loraSettingSucceeded" : "parameter.settingSucceeded";
  enqueueParameterMessage(t(messageKey, { parameter, value }), { level: "success" });
}

function rememberPendingParameterChanges(deviceType, commands) {
  const changes = state.pendingParameterChanges[deviceType];
  if (!changes) return;
  for (const [, commandId, , parameter, value, updates] of commands) {
    changes.set(commandId, { parameter, value, updates });
  }
}

function beginPendingParameterChangeTimeout(deviceType) {
  const changes = state.pendingParameterChanges[deviceType];
  if (!changes?.size) return;
  if (state.parameterWriteTimers[deviceType]) clearTimeout(state.parameterWriteTimers[deviceType]);
  const sessionId = state.serialSessionId;
  state.parameterWriteTimers[deviceType] = setTimeout(() => {
    if (sessionId !== state.serialSessionId) return;
    failPendingParameterChanges(deviceType);
  }, PARAMETER_WRITE_RESPONSE_TIMEOUT_MS);
}

function clearPendingParameterChangeTimer(deviceType) {
  if (!state.parameterWriteTimers[deviceType]) return;
  clearTimeout(state.parameterWriteTimers[deviceType]);
  state.parameterWriteTimers[deviceType] = null;
}

function handleCommandResponseRecord(record) {
  markValidSerialData();
  const deviceType = record.deviceId === 0x01 ? "base" : record.deviceId === 0x02 ? "rover" : "";
  if (!deviceType) return;
  addBaseCommandLog("RX", "COMMAND RESPONSE CMD=0x" + record.commandId.toString(16).padStart(2, "0").toUpperCase(), record.frame, record.success ? "OK" : "FAILED");
  if (record.deviceId === 0x01 && record.commandId === 0x02 && completePendingStationOperation(record)) return;
  const changes = state.pendingParameterChanges[deviceType];
  const change = changes?.get(record.commandId);
  if (!change) return;
  changes.delete(record.commandId);
  if (record.success) {
    addParameterSettingMessage(change.parameter, change.value, record.commandId);
    const snapshot = deviceType === "base" ? state.baseParameterSnapshot : state.roverParameterSnapshot;
    if (snapshot) Object.assign(snapshot, change.updates);
  } else {
    enqueueParameterMessage(t("parameter.settingRejected", { parameter: change.parameter }));
  }
  if (!changes.size) clearPendingParameterChangeTimer(deviceType);
}

function failPendingParameterChanges(deviceType) {
  const changes = state.pendingParameterChanges[deviceType];
  if (!changes?.size) return;
  for (const change of changes.values()) {
    enqueueParameterMessage(t("parameter.settingUnconfirmed", { parameter: change.parameter }));
  }
  changes.clear();
  clearPendingParameterChangeTimer(deviceType);
}

function formatParameterResponseValue(key, value) {
  if (key === "workMode") return t(["rover.mode.rover", "rover.mode.convergence", "rover.mode.fixed"][value] || "rover.mode.rover");
  if (key === "autoHopping") return t(value ? "parameter.enabled" : "parameter.disabled");
  if (key === "country") return t(["base.europe", "base.usa", "base.australia"][value] || "base.europe");
  if (key === "frequency") return String(value) + " MHz";
  if (key === "power") return String(value) + " mW";
  return String(value ?? "--");
}

function enqueueParameterMessage(message, options = {}) {
  state.parameterMessages.push({ text: message, time: Date.now(), ...options });
  renderParameterMessageLog();
}

function beginPendingStationOperation(type, sn, options = {}) {
  clearPendingStationOperation(false);
  const sessionId = state.serialSessionId;
  state.pendingStationOperation = {
    type, sn, sessionId, verifyList: options.verifyList !== false,
    repeatVerification: options.repeatVerification !== false,
    phase: "waiting-command-response",
    timer: setTimeout(() => {
      const pending = state.pendingStationOperation;
      if (!pending || pending.sessionId !== sessionId || pending.type !== type || pending.sn !== sn) return;
      enqueueParameterMessage(t(`station.message.${type}Failed`, { sn }), { level: "error" });
      clearPendingStationOperation(false);
    }, STATION_OPERATION_RESPONSE_TIMEOUT_MS),
  };
}

function clearPendingStationOperation(reportFailure = false) {
  const pending = state.pendingStationOperation;
  if (!pending) return;
  clearTimeout(pending.timer);
  clearTimeout(pending.verifyTimer);
  state.pendingStationOperation = null;
  if (reportFailure) enqueueParameterMessage(t(`station.message.${pending.type}Failed`, { sn: pending.sn }), { level: "error" });
}

function completePendingStationOperation(record) {
  const pending = state.pendingStationOperation;
  // Command-response byte 4 is a heartbeat value, not the sequence from the
  // request frame. Membership operations are serialized, so device/command ID
  // plus the active serial session identify the pending add/remove operation.
  if (!pending || pending.sessionId !== state.serialSessionId || pending.phase !== "waiting-command-response") return false;
  if (!record.success) {
    if (pending.type === "remove") {
      state.removedStationSns.delete(pending.sn);
      void refreshStationSettings({ automatic: true });
    }
    clearTimeout(pending.timer);
    state.pendingStationOperation = null;
    enqueueParameterMessage(t(`station.message.${pending.type}Failed`, { sn: pending.sn }), { level: "error" });
    return true;
  }
  clearTimeout(pending.timer);
  if (pending.type === "add") {
    state.pendingStationOperation = null;
    state.removedStationSns.delete(pending.sn);
    state.stationPollingSns.add(pending.sn);
    state.mobileStations.set(pending.sn, {
      sn: pending.sn, snRaw: pending.sn, lat: null, lon: null,
      altitude: null, speed: null, fixStatus: 0, satelliteCount: 0,
      lastSeenAt: 0, lastValidPositionAt: 0, receivedCount: 0,
      offlineCount: 0, wasOnline: false,
    });
    state.stationFreshnessSignature = "";
    state.stationListRenderSignature = "";
    renderAll();
    enqueueParameterMessage(t("station.message.addSucceeded", { sn: pending.sn }), { level: "success" });
    return true;
  }
  if (pending.type === "remove") {
    state.pendingStationOperation = null;
    state.removedStationSns.add(pending.sn);
    state.mobileStations.delete(pending.sn);
    state.stationPollingSns.delete(pending.sn);
    state.trackedStationSns.delete(pending.sn);
    state.stationFreshnessSignature = "";
    state.stationListRenderSignature = "";
    renderAll();
    enqueueParameterMessage(t("station.message.removeSucceeded", { sn: pending.sn }), { level: "success" });
    return true;
  }
  return true;
}

async function queryStationListForOperationVerification() {
  const pending = state.pendingStationOperation;
  if (!pending || pending.sessionId !== state.serialSessionId || pending.verifyInFlight) return;
  pending.verifyInFlight = true;
  try {
    await writeSerialFrame(RTK_PROTOCOL.buildBaseStationSnQuery(state.baseCommandSequence++), "ROVER SN QUERY");
  } catch (error) {
    recoverLostNativeSerialSession(error);
    clearPendingStationOperation(true);
  } finally {
    if (state.pendingStationOperation === pending) pending.verifyInFlight = false;
  }
}

function completePendingStationOperationFromList(stationPollingState) {
  const pending = state.pendingStationOperation;
  if (!pending || pending.sessionId !== state.serialSessionId) return;
  const status = stationPollingState.get(pending.sn);
  const succeeded = pending.type === "add" ? status === true : status !== true;
  if (!succeeded) {
    if (!pending.repeatVerification) {
      clearTimeout(pending.timer);
      state.pendingStationOperation = null;
      enqueueParameterMessage(t(`station.message.${pending.type}Failed`, { sn: pending.sn }), { level: "error" });
      return;
    }
    clearTimeout(pending.verifyTimer);
    pending.verifyTimer = setTimeout(() => {
      if (state.pendingStationOperation === pending) void queryStationListForOperationVerification();
    }, STATION_OPERATION_VERIFY_INTERVAL_MS);
    return;
  }
  clearTimeout(pending.verifyTimer);
  clearTimeout(pending.timer);
  state.pendingStationOperation = null;
  if (pending.type === "add") state.removedStationSns.delete(pending.sn);
  enqueueParameterMessage(t(`station.message.${pending.type}Succeeded`, { sn: pending.sn }), { level: "success" });
}

function beginPendingStationRefresh() {
  completePendingStationRefresh(false, { silent: true });
  const sessionId = state.serialSessionId;
  state.pendingStationRefresh = {
    sessionId,
    timer: setTimeout(() => {
      if (state.pendingStationRefresh?.sessionId === sessionId) completePendingStationRefresh(false);
    }, STATION_OPERATION_RESPONSE_TIMEOUT_MS),
  };
}

function completePendingStationRefresh(succeeded, options = {}) {
  const pending = state.pendingStationRefresh;
  if (!pending) return;
  clearTimeout(pending.timer);
  state.pendingStationRefresh = null;
  if (options.silent) return;
  enqueueParameterMessage(t(succeeded ? "station.message.refreshSucceeded" : "station.message.refreshFailed", { count: state.mobileStations.size }), { level: succeeded ? "success" : "error" });
}

function clearDisplayedParameterMessages() {
  state.parameterMessages = [];
  renderParameterMessageLog();
}

function clearParameterMessages() {
  clearDisplayedParameterMessages();
  clearPendingStationOperation(false);
  completePendingStationRefresh(false, { silent: true });
  if (state.parameterQueryMessage?.timer) clearTimeout(state.parameterQueryMessage.timer);
  state.parameterQueryMessage = null;
  state.parameterConfirmationQueryType = "";
  clearPendingParameterChangeTimer("base");
  clearPendingParameterChangeTimer("rover");
  state.pendingParameterChanges.base.clear();
  state.pendingParameterChanges.rover.clear();
}

function beginParameterQueryMessage(type, confirmation = false) {
  if (state.parameterQueryMessage?.timer) clearTimeout(state.parameterQueryMessage.timer);
  const sessionId = state.serialSessionId;
  state.parameterQueryMessage = {
    type,
    sessionId,
    confirmation,
    timer: setTimeout(() => {
      if (state.parameterQueryMessage?.type !== type || state.parameterQueryMessage.sessionId !== sessionId) return;
      state.parameterQueryMessage = null;
      if (!confirmation) enqueueParameterMessage(t("parameter.queryFailed"), { level: "error" });
    }, PARAMETER_QUERY_RESPONSE_TIMEOUT_MS),
  };
}

function isParameterSettingConfirmationResponse(type) {
  const pending = state.parameterQueryMessage;
  return !!(pending?.confirmation && pending.type === type && pending.sessionId === state.serialSessionId);
}

function completeParameterQueryMessage(type) {
  const pending = state.parameterQueryMessage;
  if (!pending || pending.type !== type || pending.sessionId !== state.serialSessionId) return;
  clearTimeout(pending.timer);
  state.parameterQueryMessage = null;
  if (!pending.confirmation) enqueueParameterMessage(t(type === "base" ? "parameter.baseQuerySucceeded" : "parameter.roverQuerySucceeded"), { level: "success" });
}

function clearBaseCommandLog() {
  state.baseCommandLines = [];
  renderBaseCommandLog();
}

function addBaseCommandLog(direction, label, frame, suffix = "") {
  const line = formatLogTime(new Date()) + "  " + direction + " " + label + "  " + bytesToHex(frame) + (suffix ? "  " + suffix : "");
  state.baseCommandLines.push(line);
  if (state.baseCommandLines.length > 100) state.baseCommandLines.splice(0, state.baseCommandLines.length - 100);
  renderBaseCommandLog();
}

async function writeSerialFrame(frame, label) {
  if (!state.port?.writable) {
    const error = new Error(t("status.openAndIdentifyFirst"));
    addBaseCommandLog("TX", label, frame, "ERROR: " + error.message);
    throw error;
  }
  let writer = null;
  try {
    writer = state.port.writable.getWriter();
    await writer.write(frame);
    addBaseCommandLog("TX", label, frame, "OK");
  }
  catch (error) {
    addBaseCommandLog("TX", label, frame, "ERROR: " + (error.message || ""));
    throw error;
  }
  finally { writer?.releaseLock(); }
}

async function queryBaseParameters() {
  const automatic = state.autoParameterQuerySessionId === state.serialSessionId;
  const confirmation = state.parameterConfirmationQueryType === "base";
  if (confirmation) state.parameterConfirmationQueryType = "";
  try {
    await writeSerialFrame(RTK_PROTOCOL.buildBaseParameterQuery(state.baseCommandSequence++), "BASE QUERY");
    setStatusKey("status.baseQuerySent");
    if (!automatic) beginParameterQueryMessage("base", confirmation);
  } catch (error) {
    recoverLostNativeSerialSession(error);
    setStatusKey("status.baseCommandFailed", { message: error.message || "" });
    if (!automatic && !confirmation) enqueueParameterMessage(t("parameter.queryFailed"), { level: "error" });
    if (confirmation) failPendingParameterChanges("base");
  }
}

async function queryRoverParameters() {
  const automatic = state.autoParameterQuerySessionId === state.serialSessionId;
  const confirmation = state.parameterConfirmationQueryType === "rover";
  if (confirmation) state.parameterConfirmationQueryType = "";
  try {
    await writeSerialFrame(RTK_PROTOCOL.buildRoverParameterQuery(state.baseCommandSequence++), "ROVER QUERY");
    setStatusKey("status.roverQuerySent");
    if (!automatic) beginParameterQueryMessage("rover", confirmation);
  } catch (error) {
    recoverLostNativeSerialSession(error);
    setStatusKey("status.baseCommandFailed", { message: error.message || "" });
    if (!automatic && !confirmation) enqueueParameterMessage(t("parameter.queryFailed"), { level: "error" });
    if (confirmation) failPendingParameterChanges("rover");
  }
}

function completeAutomaticParameterQuery() {
  const wasAutomaticQuery = state.autoParameterQuerySessionId === state.serialSessionId;
  state.autoParameterQueryCompleted = true;
  if (wasAutomaticQuery) state.autoParameterQueryReceived = true;
  return wasAutomaticQuery;
}

async function queryParametersAfterSerialOpen(sessionId, detectedDeviceType) {
  if (sessionId !== state.serialSessionId || !state.port?.writable || state.autoPollingSuspendedByManualQuery) return;
  const queryBase = detectedDeviceType !== "rover";
  const queryRover = detectedDeviceType !== "base";
  const refreshStations = detectedDeviceType !== "rover";
  if (state.autoParameterQueryReceived && (!refreshStations || state.autoStationRefreshReceived)) return;
  state.autoParameterQuerySessionId = sessionId;
  state.autoParameterQueryRequestSessionId = sessionId;

  // Keep polling while the serial port is open so a module connected after the
  // port was opened is still discovered. A valid parameter response ends the
  // loop; changing the serial session or starting a manual query cancels it.
  while (!state.autoParameterQueryReceived && sessionId === state.serialSessionId && state.autoParameterQuerySessionId === sessionId && state.port?.writable) {
    if (!state.autoParameterQueryReceived && queryBase) await queryBaseParameters();
    if (state.autoParameterQuerySessionId !== sessionId) break;
    if (!state.autoParameterQueryReceived && queryRover) await queryRoverParameters();
    if (state.autoParameterQuerySessionId !== sessionId) break;
    if (refreshStations && !state.autoStationRefreshReceived) {
      await refreshStationSettings({ sessionId, automatic: true });
    }
    if (state.autoParameterQuerySessionId !== sessionId) break;
    if (state.autoParameterQueryReceived) break;
    await delay(1000);
  }
  if (state.autoParameterQuerySessionId === sessionId) {
    state.autoParameterQuerySessionId = null;
    state.autoParameterQueryRequestSessionId = null;
  }
}

function getValidatedBaseParameters() {
  const sn = (els.baseSnInput?.value || "").trim().toUpperCase();
  if (!/^[0-9A-F]{8}$/.test(sn) || sn === "00000000" || sn === "FFFFFFFF") {
    showBaseParameterError("base.invalidSn");
    return null;
  }
  const country = Number(els.baseCountrySelect?.value);
  const workMode = Number(els.baseWorkModeSelect?.value);
  if (![1, 2].includes(workMode)) {
    showBaseParameterError("rover.invalidMode");
    return null;
  }
  const frequency = Number(els.baseFrequencyInput?.value);
  const range = getBaseFrequencyRange(country);
  if (!Number.isInteger(frequency) || frequency < range.min || frequency > range.max) {
    showBaseParameterError("base.invalidFrequency", range);
    return null;
  }
  const power = Number(els.basePowerSelect?.value);
  if (![25, 50, 100].includes(power)) {
    showBaseParameterError("base.invalidPower");
    return null;
  }
  return { sn, workMode, autoHopping: !!els.baseAutoHoppingInput?.checked, country, frequency, power };
}

async function writeBaseParameters(event) {
  event.preventDefault();
  clearBaseParameterError();
  const values = getValidatedBaseParameters();
  if (!values) return;
  if (!state.baseParameterSnapshot) {
    setStatusKey("status.queryParametersFirst");
    return;
  }
  const snData = new Uint8Array(4);
  new DataView(snData.buffer).setUint32(0, parseInt(values.sn, 16), true);
  const frequencyData = new Uint8Array(2);
  new DataView(frequencyData.buffer).setUint16(0, values.frequency, true);
  const countryFrequencyData = new Uint8Array(3);
  countryFrequencyData[0] = values.country;
  countryFrequencyData.set(frequencyData, 1);
  const workModeText = t(values.workMode === 1 ? "rover.mode.convergence" : "rover.mode.fixed");
  const countryText = t(["base.europe", "base.usa", "base.australia"][values.country]);
  const autoHoppingText = t(values.autoHopping ? "parameter.enabled" : "parameter.disabled");
  const commands = [
    ["sn", 0x01, snData, t("base.sn"), values.sn, { sn: values.sn }],
    ["workMode", 0x03, new Uint8Array([values.workMode]), t("rover.workMode"), workModeText, { workMode: values.workMode }],
    ["autoHopping", 0x04, new Uint8Array([values.autoHopping ? 1 : 0]), t("base.autoHopping"), autoHoppingText, { autoHopping: values.autoHopping }],
    ["countryFrequency", 0x05, countryFrequencyData, t("base.country") + "、" + t("base.frequency"), countryText + "，" + values.frequency + " MHz", { country: values.country, frequency: values.frequency }],
    ["power", 0x06, new Uint8Array([values.power]), t("base.power"), values.power + " mW", { power: values.power }],
  ].filter(([key]) => key === "countryFrequency"
    ? values.country !== state.baseParameterSnapshot.country || values.frequency !== state.baseParameterSnapshot.frequency
    : values[key] !== state.baseParameterSnapshot[key]);
  if (!commands.length) {
    setStatusKey("status.parametersUnchanged");
    enqueueParameterMessage(t("parameter.noChanges"));
    return;
  }
  try {
    rememberPendingParameterChanges("base", commands);
    for (const [, commandId, data] of commands) {
      await writeSerialFrame(RTK_PROTOCOL.buildBaseParameterWrite(commandId, data, state.baseCommandSequence++), "WRITE CMD=0x" + commandId.toString(16).padStart(2, "0").toUpperCase());
      await delay(40);
    }
    beginPendingParameterChangeTimeout("base");
    setStatusKey("status.baseParametersWritten");
  } catch (error) {
    state.pendingParameterChanges.base.clear();
    clearPendingParameterChangeTimer("base");
    setStatusKey("status.baseCommandFailed", { message: error.message || "" });
  }
}

function isValidParameterSn(value) {
  return /^[0-9A-F]{8}$/.test(value) && value !== "00000000" && value !== "FFFFFFFF";
}

function getValidatedRoverParameters() {
  const roverSn = (els.roverSnInput?.value || "").trim().toUpperCase();
  const baseSn = (els.roverBaseSnInput?.value || "").trim().toUpperCase();
  if (!isValidParameterSn(roverSn) || !isValidParameterSn(baseSn)) {
    showRoverParameterError("rover.invalidSn");
    return null;
  }
  const workMode = Number(els.roverWorkModeSelect?.value);
  if (![0, 1, 2].includes(workMode)) {
    showRoverParameterError("rover.invalidMode");
    return null;
  }
  const country = Number(els.roverCountrySelect?.value);
  const frequency = Number(els.roverFrequencyInput?.value);
  const range = getBaseFrequencyRange(country);
  if (!Number.isInteger(frequency) || frequency < range.min || frequency > range.max) {
    showRoverParameterError("base.invalidFrequency", range);
    return null;
  }
  const power = Number(els.roverPowerSelect?.value);
  if (![25, 50, 100].includes(power)) {
    showRoverParameterError("base.invalidPower");
    return null;
  }
  const baselineLength = Number(els.roverBaselineInput?.value);
  if (!Number.isInteger(baselineLength) || baselineLength < 0 || baselineLength > 65535) {
    showRoverParameterError("rover.invalidBaseline");
    return null;
  }
  return { roverSn, baseSn, workMode, autoHopping: !!els.roverAutoHoppingInput?.checked, country, frequency, power, baselineLength };
}

async function writeRoverParameters(event) {
  event.preventDefault();
  clearRoverParameterError();
  const values = getValidatedRoverParameters();
  if (!values) return;
  if (!state.roverParameterSnapshot) {
    setStatusKey("status.queryParametersFirst");
    return;
  }
  const uint32Data = (value) => { const data = new Uint8Array(4); new DataView(data.buffer).setUint32(0, parseInt(value, 16), true); return data; };
  const uint16Data = (value) => { const data = new Uint8Array(2); new DataView(data.buffer).setUint16(0, value, true); return data; };
  const countryFrequencyData = new Uint8Array(3);
  countryFrequencyData[0] = values.country;
  countryFrequencyData.set(uint16Data(values.frequency), 1);
  const workModeText = t(["rover.mode.rover", "rover.mode.convergence", "rover.mode.fixed"][values.workMode]);
  const countryText = t(["base.europe", "base.usa", "base.australia"][values.country]);
  const autoHoppingText = t(values.autoHopping ? "parameter.enabled" : "parameter.disabled");
  const commands = [
    ["roverSn", 0x01, uint32Data(values.roverSn), t("rover.sn"), values.roverSn, { roverSn: values.roverSn }],
    ["baseSn", 0x02, uint32Data(values.baseSn), t("rover.baseSn"), values.baseSn, { baseSn: values.baseSn }],
    ["workMode", 0x03, new Uint8Array([values.workMode]), t("rover.workMode"), workModeText, { workMode: values.workMode }],
    ["autoHopping", 0x04, new Uint8Array([values.autoHopping ? 1 : 0]), t("base.autoHopping"), autoHoppingText, { autoHopping: values.autoHopping }],
    ["countryFrequency", 0x05, countryFrequencyData, t("base.country") + "、" + t("base.frequency"), countryText + "，" + values.frequency + " MHz", { country: values.country, frequency: values.frequency }],
    ["power", 0x06, new Uint8Array([values.power]), t("base.power"), values.power + " mW", { power: values.power }],
    ["baselineLength", 0x07, uint16Data(values.baselineLength), t("rover.baselineLength"), String(values.baselineLength), { baselineLength: values.baselineLength }],
  ].filter(([key]) => key === "countryFrequency"
    ? values.country !== state.roverParameterSnapshot.country || values.frequency !== state.roverParameterSnapshot.frequency
    : key === "baselineLength"
      ? isRoverDualAntennaFirmware(els.roverFirmwareInput?.value) && values.baselineLength !== state.roverParameterSnapshot.baselineLength
      : values[key] !== state.roverParameterSnapshot[key]);
  if (!commands.length) {
    setStatusKey("status.parametersUnchanged");
    enqueueParameterMessage(t("parameter.noChanges"));
    return;
  }
  try {
    rememberPendingParameterChanges("rover", commands);
    for (const [, commandId, data] of commands) {
      await writeSerialFrame(RTK_PROTOCOL.buildRoverParameterWrite(commandId, data, state.baseCommandSequence++), "ROVER WRITE CMD=0x" + commandId.toString(16).padStart(2, "0").toUpperCase());
      await delay(40);
    }
    beginPendingParameterChangeTimeout("rover");
    setStatusKey("status.roverParametersWritten");
  } catch (error) {
    state.pendingParameterChanges.rover.clear();
    clearPendingParameterChangeTimer("rover");
    setStatusKey("status.baseCommandFailed", { message: error.message || "" });
  }
}

function openAddStationDialog() {
  if (state.connectedDeviceType === "rover") return;
  if (!els.addStationDialog || !els.addStationBackdrop) return;
  els.addStationSnInput.value = "";
  clearAddStationError();
  els.addStationBackdrop.hidden = false;
  els.addStationDialog.hidden = false;
  requestAnimationFrame(() => els.addStationSnInput.focus());
}

function closeAddStationDialog() {
  if (els.addStationBackdrop) els.addStationBackdrop.hidden = true;
  if (els.addStationDialog) els.addStationDialog.hidden = true;
  els.settingsAddStationButton?.focus();
}

async function submitAddStationDialog(event) {
  event.preventDefault();
  const added = await addMobileStation(els.addStationSnInput?.value || "");
  if (added) closeAddStationDialog();
  else els.addStationSnInput?.focus();
}

function handleAddStationSnInput() {
  const normalized = els.addStationSnInput.value.toUpperCase().replace(/\s+/g, "");
  if (normalized !== els.addStationSnInput.value) els.addStationSnInput.value = normalized;
  clearAddStationError();
}

function clearAddStationError() {
  if (!els.addStationSnError) return;
  els.addStationSnError.hidden = true;
  els.addStationSnError.textContent = "";
  els.addStationSnInput?.removeAttribute("aria-invalid");
}

function showAddStationError(key, params = {}) {
  if (els.addStationSnError) {
    els.addStationSnError.textContent = t(key, params);
    els.addStationSnError.hidden = false;
  }
  els.addStationSnInput?.setAttribute("aria-invalid", "true");
}

async function addMobileStation(input) {
  const sn = input.trim().toUpperCase();
  if (!/^[0-9A-F]{8}$/.test(sn)) {
    showAddStationError("settings.invalidStationSn");
    return false;
  }
  if (sn === "00000000" || sn === "FFFFFFFF") {
    showAddStationError("settings.invalidStationSnValue");
    return false;
  }
  if (state.mobileStations.has(sn)) {
    setStatusKey("status.stationExists", { sn });
    showAddStationError("status.stationExists", { sn });
    return false;
  }
  const sequence = state.baseCommandSequence++;
  const frame = RTK_PROTOCOL.buildBaseStationMembershipWrite(sn, 1, sequence);
  try {
    await writeSerialFrame(frame, "ROVER ADD SN=" + sn);
    beginPendingStationOperation("add", sn);
  } catch (error) {
    setStatusKey("status.baseCommandFailed", { message: error.message || "" });
    enqueueParameterMessage(t("station.message.addFailed", { sn }), { level: "error" });
    return false;
  }
  // The command response only acknowledges the write. The next SN-list frame
  // is the source of truth, so do not show the rover before that confirmation.
  return true;
}

async function removeMobileStation(sn) {
  if (state.connectedDeviceType === "rover") return;
  const station = state.mobileStations.get(sn);
  if (!station) return;
  const confirmed = await showConfirmDialog(
    t("settings.removeStationTitle", { sn }),
    t("settings.confirmRemoveStation", { sn }),
  );
  if (!confirmed || !state.mobileStations.has(sn)) return;
  const sequence = state.baseCommandSequence++;
  const frame = RTK_PROTOCOL.buildBaseStationMembershipWrite(sn, 2, sequence);
  try {
    await writeSerialFrame(frame, "ROVER REMOVE SN=" + sn);
    beginPendingStationOperation("remove", sn, { repeatVerification: false });
  } catch (error) {
    setStatusKey("status.baseCommandFailed", { message: error.message || "" });
    enqueueParameterMessage(t("station.message.removeFailed", { sn }), { level: "error" });
    return;
  }
  const removedSelectedStation = state.selectedStationSn === sn;
  state.removedStationSns.add(sn);
  state.trackedStationSns.delete(sn);
  state.stationPollingSns.delete(sn);
  state.mobileStations.delete(sn);
  state.scatterPoints = state.scatterPoints.filter((point) => point.sn !== sn);
  state.mapMarkers = state.mapMarkers.filter((marker) => marker.sn !== sn);
  state.stationFreshnessSignature = "";
  state.stationListRenderSignature = "";
  hideMapStationTooltip();
  if (removedSelectedStation) {
    state.selectedStationSn = "";
    const nextStation = syncSelectedOnlineStation();
    if (!state.mapUserControlled && hasStationPosition(nextStation)) {
      state.mapCenter = mapDisplayPoint(nextStation);
      state.mapFollowFix = true;
    } else if (!state.mapUserControlled && !getPositionedStations().length) {
      state.mapCenter = null;
    }
  }
  setStatusKey("status.stationRemoved", { sn });
  renderAll();
}

function refreshStationFreshness() {
  const now = Date.now();
  updateStationOfflineCounts(now);
  const previousSelectedSn = state.selectedStationSn;
  syncSelectedOnlineStation(now);
  const signature = [...state.mobileStations.values()]
    .map((station) => station.sn + ":" + (isStationOnline(station, now) ? "1" : "0") + ":" + station.fixStatus)
    .sort()
    .join("|");
  if (signature === state.stationFreshnessSignature && previousSelectedSn === state.selectedStationSn) return;
  state.stationFreshnessSignature = signature;
  renderMessageDetail();
  renderInfo();
  renderLegend();
  renderSignal();
  renderMap();
  renderStationSettings();
}

function formatCoordinate(value) {
  return Number.isFinite(value) ? value.toFixed(7) : "--";
}

function fitMapToStations() {
  if (getPositionedBaseStation()) return;
  const stations = getMapStations();
  if (!stations.length) return;
  if (stations.length === 1) {
    state.mapZoom = MAP_DEFAULT_ZOOM;
    state.mapCenter = mapDisplayPoint(stations[0]);
    state.mapFollowFix = true;
    return;
  }
  const rect = getElementLogicalSize(els.mapCanvas?.parentElement, 600, 400);
  const points = stations.map(mapDisplayPoint);
  let zoom = Math.min(MAP_DEFAULT_ZOOM, MAP_MAX_ZOOM);
  let bounds = null;
  for (; zoom >= MAP_MIN_ZOOM; zoom -= 1) {
    const pixels = points.map((point) => lonLatToWorldPixel(point.lon, point.lat, zoom));
    const xs = pixels.map((point) => point.x);
    const ys = pixels.map((point) => point.y);
    bounds = { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) };
    if (bounds.maxX - bounds.minX <= Math.max(80, rect.width - 140) && bounds.maxY - bounds.minY <= Math.max(80, rect.height - 120)) break;
  }
  state.mapZoom = clamp(zoom, MAP_MIN_ZOOM, MAP_MAX_ZOOM);
  state.mapCenter = worldPixelToLonLat((bounds.minX + bounds.maxX) / 2, (bounds.minY + bounds.maxY) / 2, state.mapZoom);
  state.mapFollowFix = false;
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
function detectRtkDeviceType(bytes) {
  if (!bytes?.length) return "";
  if (RTK_PROTOCOL.containsValidPositionFrame(bytes) || new RTK_PROTOCOL.BasePositionParser().push(bytes).length) return "base";
  if (new RTK_PROTOCOL.BaseParameterParser().push(bytes).length || new RTK_PROTOCOL.BaseStationSnParser().push(bytes).length) return "base";
  if (new RTK_PROTOCOL.RoverParameterParser().push(bytes).length) return "rover";
  return "";
}
function detectOutputMode(bytes) { return detectRtkDeviceType(bytes) ? "PRIVATE" : "UNKNOWN"; }
function detectModuleByBaudRate(baudRate, outputMode, deviceType = "") { return deviceType === "rover" ? "ROVER" : deviceType === "base" ? "BASE" : "RTK"; }

async function writeSerialProbeQueries(port) {
  if (!port?.writable) return;
  const writer = port.writable.getWriter();
  try {
    await writer.write(RTK_PROTOCOL.buildBaseParameterQuery(0xfe));
    await writer.write(RTK_PROTOCOL.buildRoverParameterQuery(0xff));
  } finally {
    writer.releaseLock();
  }
}
function expectedOutputModeByBaudRate() { return "UNKNOWN"; }
function getAutoDetectBaudRates(preferred) {
  const rates = [115200, 921600, 460800, 230400, 76800, 57600, 38400, 28800, 19200, 9600];
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
function isNativeSerialSessionLostError(error) { return error instanceof Error && /serial session not found/i.test(error.message || ""); }
function recoverLostNativeSerialSession(error) {
  if (!isNativeSerialSessionLostError(error) || !(state.port instanceof NativeSerialPort) || state.isReprobing || state.isDetecting) return;
  void reidentifyCurrentPort(t("status.reidentifyModule"), { resetParameterState: true });
}

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
    await writeSerialProbeQueries(port);
    const sample = await readSerialSample(port, options.timeoutMs || 1000);
    throwIfSerialSessionChanged(options.sessionId);
    const deviceType = detectRtkDeviceType(sample.bytes);
    const outputMode = deviceType ? "PRIVATE" : detectOutputMode(sample.bytes, sample.text);
    return { baudRate, outputMode, deviceType };
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
            return { ...result, module: detectModuleByBaudRate(br, result.outputMode, result.deviceType), port };
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
  await ensurePortClosed(port); await delay(60);
  throwIfSerialSessionChanged(sessionId);
  await port.open(serialOpenOptions(preferredBaudRate)); state.currentBaudRate = preferredBaudRate;
  if (result.outputMode !== "UNKNOWN") saveLastSuccessfulBaudRate(preferredBaudRate);
  return { ...result, module: detectModuleByBaudRate(preferredBaudRate, result.outputMode, result.deviceType), port };
}

async function serialWatchdogTick() {
  if (!state.serialRecoveryPending || state.serialRecoveryStopped) return;
  if (!state.port || state.isDetecting || state.isReprobing || !state.currentBaudRate) return;
  if (Date.now() < state.serialRecoveryNextAt) return;
  if (state.serialRecoveryAttempts >= RTK_SERIAL_RECOVERY_MAX_ATTEMPTS) {
    stopAutomaticSerialRecovery();
    return;
  }
  const attempt = state.serialRecoveryAttempts++;
  state.serialRecoveryNextAt = Number.POSITIVE_INFINITY;
  const detection = await reidentifyCurrentPort(t("status.dataInterrupted"), { resetParameterState: true });
  if (detection?.outputMode && detection.outputMode !== "UNKNOWN") {
    resetSerialRecoveryState();
    return;
  }
  if (state.serialRecoveryAttempts >= RTK_SERIAL_RECOVERY_MAX_ATTEMPTS) {
    stopAutomaticSerialRecovery();
    return;
  }
  state.serialRecoveryPending = true;
  state.serialRecoveryNextAt = Date.now() + RTK_SERIAL_RECOVERY_DELAYS_MS[Math.min(attempt + 1, RTK_SERIAL_RECOVERY_DELAYS_MS.length - 1)];
}

function resetSerialRecoveryState() {
  state.serialRecoveryPending = false;
  state.serialRecoveryAttempts = 0;
  state.serialRecoveryNextAt = 0;
  state.serialRecoveryStopped = false;
}

function scheduleSerialRecovery() {
  if (state.serialRecoveryStopped || !state.port) return;
  state.serialRecoveryPending = true;
  if (!Number.isFinite(state.serialRecoveryNextAt) || state.serialRecoveryNextAt <= 0) {
    state.serialRecoveryNextAt = Date.now() + RTK_SERIAL_RECOVERY_DELAYS_MS[Math.min(state.serialRecoveryAttempts, RTK_SERIAL_RECOVERY_DELAYS_MS.length - 1)];
  }
}

function stopAutomaticSerialRecovery() {
  state.serialRecoveryPending = false;
  state.serialRecoveryStopped = true;
  state.serialRecoveryNextAt = 0;
  setRunningKey(false, "status.reidentifyStopped");
  showPortStatus(t("status.reidentifyStopped"), "error", t("common.reidentify"), { sticky: true, action: "reidentify" });
}

async function manuallyReidentifySerial() {
  if (!state.port) {
    await connectSerial();
    return;
  }
  resetSerialRecoveryState();
  state.serialRecoveryPending = true;
  state.serialRecoveryNextAt = Date.now();
  await serialWatchdogTick();
}

async function releaseActiveSerialReader() {
  const reader = state.reader;
  if (!reader) return;
  try { await reader.cancel(); } catch(e) {}
  try { reader.releaseLock(); } catch(e) {}
  if (state.reader === reader) state.reader = null;
  await delay(50);
}

async function reidentifyCurrentPort(reason, options = {}) {
  if (!state.port || state.isDetecting || state.isReprobing) return;
  const port = state.port;
  const previousBaudRate = state.currentBaudRate || state.detectedBaudRate || state.lastSuccessfulBaudRate;
  const preserveReceivedParameters = !!(state.baseParameterSnapshot || state.roverParameterSnapshot);
  state.isReprobing = true;
  state.serialSessionId += 1;
  const sessionId = state.serialSessionId;
  try {
    setStatus(reason || t("status.reidentifyModule"));
    await releaseActiveSerialReader();
    state.detectedBaudRate = null;
    state.detectedModule = '';
    if (!preserveReceivedParameters) {
      setConnectedDeviceType("");
      state.baseParameterSnapshot = null;
      state.roverParameterSnapshot = null;
      state.autoParameterQueryCompleted = false;
      state.autoParameterQuerySessionId = null;
      state.autoParameterQueryRequestSessionId = null;
    }
    state.autoStationRefreshSessionId = null;
    state.outputMode = '--';
    state.currentBaudRate = previousBaudRate;
    updateDeviceModeState();

    const selectedBaudRate = Number(els.baudRate?.value) || previousBaudRate;
    const detection = await detectSerialWithPreferredBaudRate(port, selectedBaudRate, { sessionId });
    if (state.port !== port || sessionId !== state.serialSessionId) return;

    state.detectedBaudRate = detection.baudRate;
    state.currentBaudRate = detection.baudRate;
    state.outputMode = detection.outputMode;
    state.detectedModule = detection.module || detectModuleByBaudRate(detection.baudRate, detection.outputMode, detection.deviceType);
    setConnectedDeviceType(detection.deviceType);
    state.autoParameterQuerySessionId = null;
    state.source = (state.portDetail || state.portLabel) + ' ' + detection.baudRate;
    state.lastByteAt = Date.now();
    state.lastValidDataAt = Date.now();
    state.privateParser.reset();
    state.privateRateTimes = [];
    state.ubxRateTimes = [];
    state.nmeaEpochTimes = [];
    state.lastNmeaEpochAt = 0;
    updateDeviceModeState();
    setRunningKey(true, "status.live");
    readSerialLoop(sessionId);
    void queryParametersAfterSerialOpen(sessionId, detection.deviceType);
    setStatusKey("status.detectedDevice", { module: state.detectedModule, baud: state.currentBaudRate, mode: state.outputMode });
    return detection;
  } catch(e) {
    if (isSerialCancelledError(e)) return;
    state.currentBaudRate = previousBaudRate;
    state.detectedBaudRate = null;
    state.detectedModule = '';
    setConnectedDeviceType("");
    state.outputMode = '--';
    state.lastValidDataAt = 0;
    if (!state.port?.readable && !state.port?.writable && state.port === port) {
      await handleDeviceDetached();
      return null;
    }
    updateDeviceModeState();
    setStatus((e && e.message) || t("status.reidentifyFailed"));
    return null;
  } finally {
    state.isReprobing = false;
  }
}

// ========== Serial Connection ==========
class NativeSerialPort {
  constructor(info) {
    this.info = info;
    this.readable = null;
    this.writable = null;
    this.readController = null;
    this.readTimer = null;
    this.sessionId = "";
  }

  getInfo() {
    return {
      usbVendorId: parseInt(this.info.vendorId || "", 16) || undefined,
      usbProductId: parseInt(this.info.productId || "", 16) || undefined,
    };
  }

  async open(options) {
    const response = await fetch("/api/serial/open", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ path: this.info.path, baudRate: options.baudRate }) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || t("status.openSerialFailed"));
    if (!result.sessionId) throw new Error(t("status.openSerialFailed"));
    this.sessionId = result.sessionId;
    this.readable = new ReadableStream({
      start: (controller) => { this.readController = controller; this.readTimer = setInterval(() => this.read(), 40); },
      cancel: () => this.stopReading(),
    });
    this.writable = new WritableStream({
      write: async (chunk) => {
        const bytes = chunk instanceof Uint8Array ? chunk : new Uint8Array(chunk);
        let binary = "";
        bytes.forEach((value) => { binary += String.fromCharCode(value); });
        const response = await fetch("/api/serial/write", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sessionId: this.sessionId, data: btoa(binary) }) });
        if (!response.ok) { const result = await response.json().catch(() => ({})); throw new Error(result.error || t("status.serialError")); }
      },
    });
  }

  async read() {
    if (!this.readController) return;
    try {
      const response = await fetch("/api/serial/read?sessionId=" + encodeURIComponent(this.sessionId), { cache: "no-store" });
      const result = await response.json();
      if (result.error) throw new Error(result.error);
      if (result.data) {
        const binary = atob(result.data);
        const bytes = new Uint8Array(binary.length);
        for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
        this.readController.enqueue(bytes);
      }
      if (!result.open) this.readController.close();
    } catch (error) {
      this.readController?.error(error);
      this.stopReading();
    }
  }

  stopReading() {
    if (this.readTimer) clearInterval(this.readTimer);
    this.readTimer = null;
    this.readController = null;
  }

  async close() {
    this.stopReading();
    this.readable = null;
    this.writable = null;
    const sessionId = this.sessionId;
    this.sessionId = "";
    if (sessionId) await fetch("/api/serial/close", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sessionId }) }).catch(() => {});
  }
}

function closeNativeSerialOnPageHide() {
  const sessionId = state.port instanceof NativeSerialPort ? state.port.sessionId : "";
  if (!sessionId) return;
  const body = JSON.stringify({ sessionId });
  navigator.sendBeacon?.("/api/serial/close", new Blob([body], { type: "application/json" }));
}

async function selectNativeSerialPort() {
  const response = await fetch("/api/serial/ports", { cache: "no-store" });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || t("status.openSerialFailed"));
  if (!result.ports?.length) throw new Error("未发现 Windows COM 口");
  const port = await showSerialPortDialog(result.ports);
  if (!port) throw makeSerialCancelledError();
  return new NativeSerialPort(port);
}

function formatSerialPortOption(port) {
  const description = [port.manufacturer, port.vendorId && port.productId ? `USB ${port.vendorId}:${port.productId}` : ""].filter(Boolean).join(" | ");
  return description ? `${port.path} - ${description}` : port.path;
}

function sortSerialPorts(ports) {
  return [...ports].sort((left, right) => {
    const leftMatch = String(left?.path || "").match(/^COM(\d+)$/i);
    const rightMatch = String(right?.path || "").match(/^COM(\d+)$/i);
    if (leftMatch && rightMatch) return Number(leftMatch[1]) - Number(rightMatch[1]);
    if (leftMatch) return -1;
    if (rightMatch) return 1;
    return String(left?.path || "").localeCompare(String(right?.path || ""), undefined, { numeric: true, sensitivity: "base" });
  });
}

function renderSerialPortChoices(ports, preferredPath = "") {
  const sortedPorts = sortSerialPorts(ports);
  serialPortChoices = sortedPorts;
  els.serialPortSelect.replaceChildren(...sortedPorts.map((port, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = formatSerialPortOption(port);
    return option;
  }));
  const selectedIndex = sortedPorts.findIndex((port) => port.path === preferredPath);
  if (sortedPorts.length) els.serialPortSelect.value = String(selectedIndex >= 0 ? selectedIndex : 0);
  const submitButton = els.serialPortForm?.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = !sortedPorts.length;
}

function showSerialPortDialog(ports) {
  if (!els.serialPortDialog || !els.serialPortBackdrop || !els.serialPortSelect) return Promise.resolve(ports[0]);
  renderSerialPortChoices(ports);
  els.serialPortBackdrop.hidden = false;
  els.serialPortDialog.hidden = false;
  if (serialPortRefreshTimer) clearInterval(serialPortRefreshTimer);
  serialPortRefreshTimer = setInterval(() => void refreshSerialPortDialog({ silent: true }), SERIAL_PORT_DIALOG_REFRESH_MS);
  requestAnimationFrame(() => els.serialPortSelect.focus());
  return new Promise((resolve) => { serialPortDialogResolve = resolve; });
}

async function refreshSerialPortDialog(options = {}) {
  if (!els.serialPortRefreshButton || serialPortRefreshInFlight || els.serialPortDialog?.hidden) return;
  serialPortRefreshInFlight = true;
  if (!options.silent) els.serialPortRefreshButton.disabled = true;
  try {
    const selectedPath = serialPortChoices[Number(els.serialPortSelect?.value)]?.path || "";
    const response = await fetch("/api/serial/ports", { cache: "no-store" });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || t("status.openSerialFailed"));
    if (!els.serialPortDialog?.hidden) renderSerialPortChoices(result.ports || [], selectedPath);
  } catch (error) {
    if (!options.silent) setStatus(error.message || t("status.openSerialFailed"));
  } finally {
    serialPortRefreshInFlight = false;
    if (!options.silent) els.serialPortRefreshButton.disabled = false;
  }
}

function submitSerialPortDialog(event) {
  event.preventDefault();
  const index = Number(els.serialPortSelect?.value);
  closeSerialPortDialog(serialPortChoices[index] || null);
}

function closeSerialPortDialog(port) {
  if (serialPortRefreshTimer) clearInterval(serialPortRefreshTimer);
  serialPortRefreshTimer = null;
  els.serialPortBackdrop && (els.serialPortBackdrop.hidden = true);
  els.serialPortDialog && (els.serialPortDialog.hidden = true);
  const resolve = serialPortDialogResolve;
  serialPortDialogResolve = null;
  if (resolve) resolve(port);
}

async function selectSerialPort(requestedPort) {
  if (requestedPort) return requestedPort;
  return selectNativeSerialPort();
}

async function connectSerial(options={}) {
  const environmentIssueKey = getSerialEnvironmentIssue();
  if (environmentIssueKey) {
    showPortStatus(t(environmentIssueKey), "warning", false, { sticky: true });
    setStatusKey(environmentIssueKey);
    updateConnectButton();
    return;
  }
  pauseReplay();
  if (state.port || state.reader) await disconnectSerial({ keepData: true, silent: true });
  clearData({ silent: true });
  state.serialSessionId += 1; const sessionId = state.serialSessionId;
  state.autoParameterQueryCompleted = false;
  state.autoParameterQueryReceived = false;
  state.autoStationRefreshReceived = false;
  resetSerialRecoveryState();
  state.autoPollingSuspendedByManualQuery = false;
  hidePortStatus();
  try {
    state.port = await selectSerialPort(options.port);
    state.paused = false; state.pausedPort = null; updatePauseButton();
    state.portLabel = getPortLabel(state.port);
    const selectedBaudRate = Number(els.baudRate?.value);
    if (!Number.isFinite(selectedBaudRate) || selectedBaudRate <= 0) throw new Error(t("status.openSerialFailed"));
    const detection = await detectSerialWithPreferredBaudRate(state.port, selectedBaudRate, { sessionId });
    if (sessionId !== state.serialSessionId) return;
    state.detectedBaudRate = detection.baudRate; state.currentBaudRate = detection.baudRate; state.outputMode = detection.outputMode;
    state.lastByteAt = state.lastValidDataAt = Date.now(); state.ubxRateTimes = [];
    state.privateParser.reset(); state.privateRateTimes = [];
    state.detectedModule = detection.module || detectModuleByBaudRate(detection.baudRate, detection.outputMode, detection.deviceType);
    setConnectedDeviceType(detection.deviceType);
    if (!detection.deviceType) enqueueParameterMessage(t("parameter.moduleNotDetected"));
    state.source = (state.portDetail || state.portLabel) + ' ' + detection.baudRate;
    updateDeviceModeState(); setRunningKey(true, "status.live"); readSerialLoop(sessionId);
    void queryParametersAfterSerialOpen(sessionId, detection.deviceType);
  } catch(e) {
    if (isSerialCancelledError(e)) return;
    state.port = null; state.detectedBaudRate = null; state.currentBaudRate = null; state.detectedModule = ""; state.outputMode = "--"; state.portLabel = "串口"; state.portDetail = "";
    setConnectedDeviceType("");
    updateDeviceModeState(); setRunningKey(false, "status.openSerialFailed");
    if (isPortOccupiedError(e)) showPortStatus(t("status.portOccupied"), 'error', t("common.retry"));
    else if (e.name === "NotFoundError" || (e.message && e.message.includes("cancel"))) showPortStatus(t("status.noPortSelected"), 'warning', false);
    else showPortStatus(e.message || t("status.openSerialFailed"), 'error', t("common.retry"));
    setStatus(e.message || t("status.openSerialFailed"));
  }
}

function getPortLabel(port) {
  if (!portNames.has(port)) { portNames.set(port, port?.info?.path || ('COM' + nextPortIndex)); nextPortIndex++; }
  const info = port?.getInfo?.() || {};
  state.portDetail = portNames.get(port) + (info.usbVendorId ? ' USB ' + info.usbVendorId.toString(16).toUpperCase().padStart(4,'0') + ':' + info.usbProductId.toString(16).toUpperCase().padStart(4,'0') : '');
  return portNames.get(port);
}
function formatSerialConnectionLabel() {
  if (!state.port && state.replayRecords.length) return t("replay.connection");
  const br = state.currentBaudRate || state.detectedBaudRate;
  const mode = state.outputMode && state.outputMode !== '--' ? ' ' + state.outputMode : '';
  return br ? (state.portLabel||t("source.serial")) + ' ' + br + mode : (state.portLabel||t("source.serial"));
}

async function readSerialLoop(sessionId = state.serialSessionId) {
  let reader;
  let interrupted = false;
  try {
    reader = state.port.readable.getReader();
    state.reader = reader;
    while (sessionId === state.serialSessionId) {
      const { value, done } = await reader.read();
      if (done) {
        interrupted = true;
        break;
      }
      if (sessionId !== state.serialSessionId) break;
      state.lastByteAt = Date.now();
      if (state.serialRecoveryPending || state.serialRecoveryAttempts || state.serialRecoveryStopped) resetSerialRecoveryState();
      parsePrivateBytes(value);
    }
  } catch(e) {
    if (sessionId === state.serialSessionId && !state.isReprobing && !state.isDetecting) {
      interrupted = true;
      setRunningKey(false, "status.serialError");
      setStatus(e.message||t("status.serialReadError"));
    }
  }
  finally {
    if (reader) { try { reader.releaseLock(); } catch(e) {} }
    if (state.reader === reader) state.reader = null;
    if (interrupted && sessionId === state.serialSessionId && !state.isReprobing && !state.isDetecting) {
      if (!state.port?.readable && !state.port?.writable) await handleDeviceDetached();
      else scheduleSerialRecovery();
    }
  }
}

async function disconnectSerial(options={}) {
  await finishAllStationTrackSessions();
  pauseReplay(); state.serialSessionId += 1;
  state.autoParameterQuerySessionId = null;
  state.autoParameterQueryCompleted = false;
  state.autoParameterQueryReceived = false;
  state.autoStationRefreshReceived = false;
  state.autoPollingSuspendedByManualQuery = false;
  state.autoStationRefreshSessionId = null;
  resetSerialRecoveryState();
  const reader = state.reader, port = state.port;
  if (!options.keepPaused) { state.paused = false; state.pausedPort = null; updatePauseButton(); }
  state.reader = null; state.port = null; state.running = false;
  state.detectedBaudRate = null; state.currentBaudRate = null; state.lastSuccessfulBaudRate = null;
  state.detectedModule = ""; state.outputMode = "--"; state.portLabel = "串口"; state.portDetail = "";
  setConnectedDeviceType("");
  updateDeviceModeState();
  if (!options.silent) { setRunningKey(false, "status.idle"); hidePortStatus(); }
  else updateConnectButton();
  await closeSerialResources(reader, port, options);
}

async function handleDeviceDetached() {
  await finishAllStationTrackSessions();
  state.serialSessionId += 1;
  state.autoParameterQuerySessionId = null;
  state.autoParameterQueryCompleted = false;
  state.autoParameterQueryReceived = false;
  state.autoStationRefreshReceived = false;
  state.autoStationRefreshSessionId = null;
  const reader = state.reader;
  state.reader = null; state.port = null; state.running = false;
  state.detectedBaudRate = null; state.currentBaudRate = null; state.lastSuccessfulBaudRate = null;
  state.detectedModule = ""; state.outputMode = "--"; state.portLabel = "串口"; state.portDetail = "";
  setConnectedDeviceType("");
  state.isDetecting = false; state.isReprobing = false; state.detectingBaudRate = null;
  updateDeviceModeState();
  setRunningKey(false, "status.deviceDetached"); showPortStatus(t("status.deviceDetachedBanner"), 'warning', false);
  if (reader) {
    try { await reader.cancel(); } catch(e) {}
    try { reader.releaseLock(); } catch(e) {}
  }
}

function bindSerialDeviceEvents() {
  if (!("serial" in navigator)) return;
  navigator.serial.addEventListener("disconnect", async (e) => {
    const port = e.port || e.target;
    if (state.port && (!port || port === state.port)) await handleDeviceDetached();
  });
  navigator.serial.addEventListener("connect", async (e) => {
    if (state.port) return;
    setStatusKey("status.deviceInsertedOpenSerial");
  });
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
    state.nmeaLines.push((options.logTime || formatLogTime(new Date())) + ' ' + trimmed);
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
function trimNmeaEpochTimes() { const cutoff = Date.now() - NMEA_RATE_WINDOW_MS; state.nmeaEpochTimes = state.nmeaEpochTimes.filter(t => t >= cutoff); }
function calculateNmeaRateHz() {
  trimNmeaEpochTimes();
  if (state.nmeaEpochTimes.length < 2) return state.nmeaEpochTimes.length;
  const span = (state.nmeaEpochTimes[state.nmeaEpochTimes.length - 1] - state.nmeaEpochTimes[0]) / 1000;
  return span > 0 ? (state.nmeaEpochTimes.length - 1) / span : 0;
}
function formatNmeaRateHz(rate) {
  if (!Number.isFinite(rate) || rate <= 0) return "0";
  const nearestInteger = Math.round(rate);
  return Math.abs(rate - nearestInteger) <= NMEA_RATE_INTEGER_EPSILON ? String(nearestInteger) : rate.toFixed(1);
}

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
  const layout = els.messageSplitHandle.closest('.message-layout');
  layout?.style.removeProperty('--message-tree-width');
  els.messageSplitHandle.tabIndex = 0;
  els.messageSplitHandle.removeAttribute('aria-hidden');
  els.messageSplitHandle.setAttribute('aria-label', t('station.resizeList'));
  els.messageSplitHandle.setAttribute('aria-valuemin', '170');
  els.messageSplitHandle.addEventListener('pointerdown', startMessageSplitDrag);
  els.messageSplitHandle.addEventListener('keydown', handleMessageSplitKeydown);
  els.messageSplitHandle.addEventListener('dblclick', () => {
    layout?.style.removeProperty('--message-tree-width');
    updateMessageSplitterAria(layout);
  });
  updateMessageSplitterAria(layout);
}
function updateUiScale() {
  const dpr = Math.max(0.1, window.devicePixelRatio || INITIAL_DEVICE_PIXEL_RATIO);
  const zoomUnchanged = Math.abs(dpr - INITIAL_DEVICE_PIXEL_RATIO) < 0.01;
  const viewportWidth = Math.max(1, window.innerWidth || document.documentElement.clientWidth || 1);
  const viewportHeight = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 1);
  if (!appViewportWidth || zoomUnchanged) appViewportWidth = viewportWidth;
  if (!appViewportHeight || zoomUnchanged) appViewportHeight = viewportHeight;
  document.documentElement.style.setProperty('--app-min-width', Math.max(DESKTOP_MIN_VIEWPORT_WIDTH, Math.round(appViewportWidth)) + 'px');
  document.documentElement.style.setProperty('--app-min-height', Math.max(DESKTOP_MIN_VIEWPORT_HEIGHT, Math.round(appViewportHeight)) + 'px');
}
function getUiScale() {
  return 1;
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
  const minLeft = 170;
  const minRight = 180;
  const maxLeft = Math.max(minLeft, layout.clientWidth - minRight - handleWidth);
  layout.style.setProperty('--message-tree-width', Math.round(clamp(width, minLeft, maxLeft)) + 'px');
  updateMessageSplitterAria(layout, maxLeft);
}
function updateMessageSplitterAria(layout, knownMax) {
  if (!layout || !els.messageSplitHandle) return;
  const handleWidth = els.messageSplitHandle.offsetWidth || 8;
  const maxLeft = knownMax ?? Math.max(170, layout.clientWidth - 180 - handleWidth);
  const width = layout.querySelector('.message-tree')?.clientWidth || 250;
  els.messageSplitHandle.setAttribute('aria-valuemax', String(Math.round(maxLeft)));
  els.messageSplitHandle.setAttribute('aria-valuenow', String(Math.round(width)));
}
function handleMessageSplitKeydown(event) {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  const layout = event.currentTarget.closest('.message-layout');
  const tree = layout?.querySelector('.message-tree');
  if (!layout || !tree) return;
  event.preventDefault();
  const handleWidth = els.messageSplitHandle?.offsetWidth || 8;
  const maxLeft = Math.max(170, layout.clientWidth - 180 - handleWidth);
  const nextWidth = event.key === 'Home'
    ? 170
    : event.key === 'End'
      ? maxLeft
      : tree.clientWidth + (event.key === 'ArrowLeft' ? -12 : 12);
  setMessageTreeWidth(layout, nextWidth);
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
  if (!els.mainWorkspace?.hidden) {
    layoutPanels({ preserveUserLayout: state.userPanelLayout });
    syncMaximizedPanel();
  }
  scheduleRender();
}
function syncMonitorPanelLayoutAfterStationListChange() {
  if (els.mainWorkspace?.hidden) return;
  state.userPanelLayout = false;
  requestAnimationFrame(() => {
    if (els.mainWorkspace?.hidden) return;
    layoutPanels();
    requestAnimationFrame(() => {
      if (els.mainWorkspace?.hidden) return;
      layoutPanels();
      renderMap();
    });
  });
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
  const messagePanel = panels.find((panel) => panel.classList.contains('message-panel'));
  const mapPanel = panels.find((panel) => panel.classList.contains('map-panel'));
  if (panels.length === 2 && messagePanel && mapPanel) {
    const gap = 6, pad = 6;
    const messageWidth = MONITOR_MESSAGE_PANEL_WIDTH;
    const summaryWidth = 0;
    const mapWidth = Math.max(280, ww - pad * 2 - gap * (summaryWidth ? 2 : 1) - messageWidth - summaryWidth);
    setPanelRect(messagePanel, { left: pad, top: pad, width: messageWidth, height: Math.max(220, wh - pad * 2) });
    setPanelRect(mapPanel, { left: pad + messageWidth + gap, top: pad, width: mapWidth, height: Math.max(220, wh - pad * 2) });
    const summary = document.getElementById('monitorSummary');
    if (summary) { ['left', 'top', 'right', 'width', 'height'].forEach((property) => summary.style.removeProperty(property)); }
    panels.forEach((panel) => { panel.dataset.layoutReady = 'true'; });
    return;
  }
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
function syncMaximizedPanel() { const ws=document.querySelector('.workspace'),p=document.querySelector('.panel.is-maximized'); if(!ws||!p||!ws.clientWidth||!ws.clientHeight)return; setPanelRect(p,{left:4,top:4,width:Math.max(getPanelMinWidth(p),ws.clientWidth-8),height:Math.max(getPanelMinHeight(p),ws.clientHeight-8)}); }
function getPanelRect(panel) { return { left:parseFloat(panel.style.left)||panel.offsetLeft||0, top:parseFloat(panel.style.top)||panel.offsetTop||0, width:parseFloat(panel.style.width)||panel.offsetWidth||300, height:parseFloat(panel.style.height)||panel.offsetHeight||200 }; }
function setPanelRect(panel,r) { panel.style.left=Math.round(r.left)+'px'; panel.style.top=Math.round(r.top)+'px'; panel.style.width=Math.round(r.width)+'px'; panel.style.height=Math.round(r.height)+'px'; }
function getPanelMinWidth(panel) { return panel.classList.contains('message-panel')?340:280; }
function getPanelMinHeight(panel) { return panel.classList.contains('nmea-panel')?250:220; }

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
function setConnectedDeviceType(deviceType) {
  const normalized = deviceType === "rover" ? "rover" : deviceType === "base" ? "base" : "";
  if (state.connectedDeviceType === normalized) return;
  state.connectedDeviceType = normalized;
  updateStationManagementAvailability();
  updateParameterSettingsAvailability();
}

function updateStationManagementAvailability() {
  const disabled = !state.port || state.connectedDeviceType === "rover";
  if (els.settingsRefreshButton) els.settingsRefreshButton.disabled = disabled;
  if (els.settingsAddStationButton) els.settingsAddStationButton.disabled = disabled;
  els.settingsStationRows?.querySelectorAll("[data-remove-station-sn]").forEach((button) => { button.disabled = disabled; });
}

function renderStationSettings() {
  const stations = state.port ? getMonitorStations() : [];
  const managementDisabled = !state.port || state.connectedDeviceType === "rover";
  const pageSize = Math.max(1, state.settingsStationPageSize || 10);
  const pageCount = Math.max(1, Math.ceil(stations.length / pageSize));
  state.settingsStationPage = clamp(state.settingsStationPage || 1, 1, pageCount);
  const pageStart = (state.settingsStationPage - 1) * pageSize;
  const pageStations = stations.slice(pageStart, pageStart + pageSize);
  if (els.settingsRefreshButton) els.settingsRefreshButton.disabled = managementDisabled;
  if (els.settingsAddStationButton) els.settingsAddStationButton.disabled = managementDisabled;
  if (els.settingsStationCount) {
    els.settingsStationCount.textContent = t("settings.stationCount", { count: stations.length });
  }
  if (els.settingsStationEmpty) els.settingsStationEmpty.hidden = stations.length > 0;
  renderSettingsStationPagination(pageCount, stations.length);
  if (!els.settingsStationRows) return;
  els.settingsStationRows.innerHTML = pageStations.map((station) => {
    const online = isStationOnline(station);
    const statusKey = online ? "station.onlineValue" : "station.offlineValue";
    const removeTitle = t("settings.removeStationTitle", { sn: station.sn });
    return '<tr class="' + (online ? 'is-online' : 'is-offline') + '">' +
      '<td class="settings-station-sn">' + escapeHtml(station.sn) + '</td>' +
      '<td>' + escapeHtml(getStationFixText(station.fixStatus)) + '</td>' +
      '<td><span class="settings-station-presence ' + (online ? 'is-online' : 'is-offline') + '">' +
      '<i></i>' + escapeHtml(t(statusKey)) + '</span></td>' +
      '<td>' + escapeHtml(formatStationParameter(station, 'satelliteCount')) + '</td>' +
      '<td>' + escapeHtml(formatStationParameter(station, 'lon')) + '</td>' +
      '<td>' + escapeHtml(formatStationParameter(station, 'lat')) + '</td>' +
      '<td>' + escapeHtml(formatStationParameter(station, 'altitude')) + '</td>' +
      '<td>' + escapeHtml(station.lastSeenAt ? formatStationUpdatedTime(station.lastSeenAt) : '--') + '</td>' +
      '<td><button type="button" class="settings-remove-station" data-remove-station-sn="' + escapeHtml(station.sn) +
      '" title="' + escapeHtml(removeTitle) + '" aria-label="' + escapeHtml(removeTitle) + '"' + (managementDisabled ? ' disabled' : '') + '>' +
      escapeHtml(t("settings.removeStation")) + '</button></td></tr>';
  }).join('');
}

function handleSettingsStationPagination(event) {
  const pageSizeInput = event.target.closest("[data-settings-station-page-size]");
  if (pageSizeInput && event.type === "change") {
    const pageSize = clamp(Number.parseInt(pageSizeInput.value, 10) || 10, 1, 1000);
    state.settingsStationPageSize = pageSize;
    state.settingsStationPage = 1;
    renderStationSettings();
    return;
  }
  const button = event.target.closest("[data-settings-station-page]");
  if (!button || button.disabled) return;
  const page = Number(button.dataset.settingsStationPage);
  if (!Number.isInteger(page) || page < 1 || page === state.settingsStationPage) return;
  state.settingsStationPage = page;
  renderStationSettings();
}

function renderSettingsStationPagination(pageCount, stationCount) {
  const pagination = els.settingsStationPagination;
  if (!pagination) return;
  pagination.replaceChildren();
  pagination.hidden = stationCount <= 0;
  if (pagination.hidden) return;

  const currentPage = state.settingsStationPage;
  const addButton = (label, page, disabled, options = {}) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.dataset.settingsStationPage = String(page);
    button.disabled = disabled;
    button.title = options.title || "";
    button.setAttribute("aria-label", options.title || label);
    if (options.active) {
      button.classList.add("active");
      button.setAttribute("aria-current", "page");
    }
    pagination.appendChild(button);
  };
  const addEllipsis = () => {
    const ellipsis = document.createElement("span");
    ellipsis.className = "pagination-ellipsis";
    ellipsis.textContent = "...";
    ellipsis.setAttribute("aria-hidden", "true");
    pagination.appendChild(ellipsis);
  };
  const pageSize = document.createElement("label");
  pageSize.className = "pagination-page-size";
  const pageSizeLabel = document.createElement("span");
  pageSizeLabel.textContent = t("settings.pageSize");
  const pageSizeInput = document.createElement("input");
  pageSizeInput.type = "number";
  pageSizeInput.min = "1";
  pageSizeInput.max = "1000";
  pageSizeInput.step = "1";
  pageSizeInput.inputMode = "numeric";
  pageSizeInput.value = String(state.settingsStationPageSize || 10);
  pageSizeInput.dataset.settingsStationPageSize = "true";
  pageSizeInput.setAttribute("aria-label", t("settings.pageSize"));
  const pageSizeUnit = document.createElement("span");
  pageSizeUnit.textContent = t("settings.pageSizeUnit");
  pageSize.append(pageSizeLabel, pageSizeInput, pageSizeUnit);
  if (pageCount <= 1) {
    const total = document.createElement("span");
    total.className = "pagination-total";
    total.textContent = t("settings.totalPages", { count: pageCount });
    pagination.append(total, pageSize);
    return;
  }
  const pages = pageCount <= 7
    ? Array.from({ length: pageCount }, (_, index) => index + 1)
    : currentPage <= 4
      ? [1, 2, 3, 4, 5, "ellipsis", pageCount - 1, pageCount]
      : currentPage >= pageCount - 3
        ? [1, 2, "ellipsis", pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount]
        : [1, 2, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", pageCount - 1, pageCount];
  addButton("\u2039", currentPage - 1, currentPage === 1, { title: t("settings.previousPage") });
  pages.forEach((page, index) => {
    if (page === "ellipsis") {
      if (pages[index - 1] !== "ellipsis") addEllipsis();
      return;
    }
    if (page !== pages[index - 1]) addButton(String(page), page, false, { active: page === currentPage, title: t("settings.page", { page }) });
  });
  addButton("\u203a", currentPage + 1, currentPage === pageCount, { title: t("settings.nextPage") });
  const total = document.createElement("span");
  total.className = "pagination-total";
  total.textContent = t("settings.totalPages", { count: pageCount });
  pagination.append(total, pageSize);
}

function getTrackStationSns() {
  return [...state.stationTrackRecords.entries()]
    .filter(([sn, records]) => records.length > 0 && isStationOnline(state.mobileStations.get(sn)))
    .map(([sn]) => sn)
    .sort((a, b) => a.localeCompare(b));
}

function renderSavePage() {
  if (!els.saveStationSelect) return;
  const stationSns = getTrackStationSns();
  state.saveSelectedTrackSns = new Set([...state.saveSelectedTrackSns].filter((sn) => stationSns.includes(sn)));
  const previousSn = els.saveStationSelect.value;
  const selectedSn = stationSns.includes(previousSn) ? previousSn : stationSns[0] || "";
  els.saveStationSelect.innerHTML = stationSns.length
    ? stationSns.map((sn) => '<option value="' + escapeHtml(sn) + '">' + escapeHtml(sn) + '</option>').join('')
    : '<option value="">' + escapeHtml(t("save.selectPlaceholder")) + '</option>';
  els.saveStationSelect.value = selectedSn;
  els.saveStationSelect.disabled = !stationSns.length;
  const records = selectedSn ? state.stationTrackRecords.get(selectedSn) || [] : [];
  const totalRecords = stationSns.reduce((sum, sn) => sum + (state.stationTrackRecords.get(sn)?.length || 0), 0);
  if (els.saveRecordCount) els.saveRecordCount.textContent = t("save.recordCount", { count: totalRecords });
  if (els.exportTrackCsvButton) els.exportTrackCsvButton.disabled = !records.length;
  if (els.saveNoTrackData) els.saveNoTrackData.hidden = stationSns.length > 0;
  if (!els.savePreviewRows) return;
  els.savePreviewRows.innerHTML = stationSns.map((sn) => {
    const stationRecords = state.stationTrackRecords.get(sn) || [];
    const last = stationRecords[stationRecords.length - 1];
    return '<tr><td><input type="checkbox" data-save-track-sn="' + escapeHtml(sn) + '" aria-label="选择 ' + escapeHtml(sn) + '"' + (state.saveSelectedTrackSns.has(sn) ? ' checked' : '') + '></td><td>' + escapeHtml(sn) + '</td>' +
    '<td>' + escapeHtml(getStationFixText(last.fixStatus)) + '</td>' +
    '<td>' + escapeHtml(t(last.online ? "station.onlineValue" : "station.offlineValue")) + '</td>' +
    '<td>' + escapeHtml(String(last.satelliteCount)) + '</td>' +
    '<td>' + escapeHtml(formatCoordinate(last.lon)) + '</td>' +
    '<td>' + escapeHtml(formatCoordinate(last.lat)) + '</td>' +
    '<td>' + escapeHtml(Number.isFinite(last.altitude) ? last.altitude.toFixed(3) : "--") + '</td>' +
    '<td>' + escapeHtml(Number.isFinite(last.speed) ? last.speed.toFixed(3) : "--") + '</td>' +
    '<td>' + escapeHtml(formatLocalCsvDateTime(last.time)) + '</td>' +
    '<td>' + escapeHtml(String(stationRecords.length)) + '</td></tr>';
  }).join('');
  updateSaveExportState();
}

function getSelectedSaveTrackSns() {
  return [...state.saveSelectedTrackSns];
}

function formatLocalCsvDateTime(value) {
  const date = new Date(value);
  const pad = (number) => String(number).padStart(2, "0");
  return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) + " " +
    pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds());
}

function formatCsvDateTimeCell(value) {
  return '="' + formatLocalCsvDateTime(value) + '"';
}

function formatLocalFileDateTime(value = Date.now()) {
  const date = new Date(value);
  const pad = (number, length = 2) => String(number).padStart(length, "0");
  return date.getFullYear() + pad(date.getMonth() + 1) + pad(date.getDate()) + "_" +
    pad(date.getHours()) + pad(date.getMinutes()) + pad(date.getSeconds()) + "_" + pad(date.getMilliseconds(), 3);
}

function updateSaveExportState() {
  const selected = getSelectedSaveTrackSns();
  const hasSelected = selected.some((sn) => (state.stationTrackRecords.get(sn) || []).length);
  if (els.exportSelectedTracksButton) els.exportSelectedTracksButton.disabled = !hasSelected;
  if (els.saveSelectAll) {
    const all = getTrackStationSns();
    els.saveSelectAll.checked = all.length > 0 && selected.length === all.length;
    els.saveSelectAll.indeterminate = selected.length > 0 && selected.length < all.length;
  }
}

async function saveTrackCsvFile(csv, fileName) {
  if (typeof window.showDirectoryPicker === "function") {
    try {
      const exportDirectory = await ensureTrackExportDirectory();
      if (!exportDirectory) return { saved: false };
      const selectedDirectory = state.trackExportParentDirectory;
      const fileHandle = await exportDirectory.getFileHandle(fileName, { create: true });
      const writable = await fileHandle.createWritable();
      await writable.write(csv);
      await writable.close();
      const selectedName = selectedDirectory.name || "所选目录";
      const directory = selectedName === "轨迹数据保存" ? selectedName : selectedName + "\\轨迹数据保存";
      return { saved: true, directory, fileName, fileHandle };
    } catch (error) {
      if (error?.name === "AbortError") return { saved: false };
      state.trackExportParentDirectory = null;
      state.trackExportDirectory = null;
    }
  }
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
  return { saved: true, directory: "浏览器默认下载文件夹", fileName, blob: new Blob([csv], { type: "text/csv;charset=utf-8" }) };
}

async function ensureTrackExportDirectory() {
  if (state.trackExportDirectory) return state.trackExportDirectory;
  if (typeof window.showDirectoryPicker !== "function") return null;
  try {
    if (!state.trackExportParentDirectory) {
      state.trackExportParentDirectory = await window.showDirectoryPicker({ mode: "readwrite", startIn: "downloads" });
    }
    state.trackExportDirectory = state.trackExportParentDirectory.name === "轨迹数据保存"
      ? state.trackExportParentDirectory
      : await state.trackExportParentDirectory.getDirectoryHandle("轨迹数据保存", { create: true });
    return state.trackExportDirectory;
  } catch (error) {
    if (error?.name !== "AbortError") {
      state.trackExportParentDirectory = null;
      state.trackExportDirectory = null;
    }
    return null;
  }
}

function buildStationTrackCsv(sn, records) {
  const header = ["移动站序列号", "定位状态", "在线状态", "卫星数", "经度", "纬度", "高度", "速度", "更新时间"];
  const rows = records.map((record) => [
    record.sn, getStationFixText(record.fixStatus), t(record.online ? "station.onlineValue" : "station.offlineValue"), record.satelliteCount,
    formatCoordinate(record.lon), formatCoordinate(record.lat), Number.isFinite(record.altitude) ? record.altitude.toFixed(3) : "",
    Number.isFinite(record.speed) ? record.speed.toFixed(3) : "", formatCsvDateTimeCell(record.time),
  ]);
  return "\uFEFF" + [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
}

async function finishStationTrackSession(sn) {
  const records = state.stationTrackRecords.get(sn) || [];
  if (records.length) {
    const fileName = "移动站轨迹_" + sn + "_" + formatLocalFileDateTime() + ".csv";
    const saved = await saveTrackCsvFile(buildStationTrackCsv(sn, records), fileName);
    if (!saved.saved) return false;
  }
  state.trackedStationSns.delete(sn);
  state.stationTrackRecords.delete(sn);
  state.saveSelectedTrackSns.delete(sn);
  return true;
}

async function finishAllStationTrackSessions() {
  for (const sn of [...state.trackedStationSns]) await finishStationTrackSession(sn);
  state.stationListRenderSignature = "";
}

function showSaveExportToast(result) {
  if (!result?.saved || !els.saveExportToast) return;
  if (state.saveExportToastTimer) clearTimeout(state.saveExportToastTimer);
  els.saveExportToast.textContent = "文件导出成功\n导出目录：" + result.directory;
  els.saveExportToast.hidden = false;
  state.saveExportToastTimer = window.setTimeout(() => {
    els.saveExportToast.hidden = true;
    state.saveExportToastTimer = null;
  }, 10000);
}

async function exportTrackCsv(stationSns) {
  const sns = stationSns.filter((sn) => (state.stationTrackRecords.get(sn) || []).length);
  if (!sns.length) return;
  const header = ["移动站序列号", "定位状态", "在线状态", "卫星数", "经度", "纬度", "高度", "速度", "更新时间"];
  const exportedAt = formatLocalFileDateTime();
  let lastSaved = null;
  let savedCount = 0;
  for (const sn of sns) {
    const records = state.stationTrackRecords.get(sn) || [];
    const rows = records.map((record) => [
      record.sn, getStationFixText(record.fixStatus), t(record.online ? "station.onlineValue" : "station.offlineValue"), record.satelliteCount,
      formatCoordinate(record.lon), formatCoordinate(record.lat), Number.isFinite(record.altitude) ? record.altitude.toFixed(3) : "",
      Number.isFinite(record.speed) ? record.speed.toFixed(3) : "", formatCsvDateTimeCell(record.time),
    ]);
    const csv = "\uFEFF" + [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
    const fileName = "移动站轨迹_" + sn + "_" + exportedAt + ".csv";
    const saved = await saveTrackCsvFile(csv, fileName);
    if (!saved.saved) break;
    lastSaved = saved;
    savedCount += 1;
  }
  if (lastSaved) showSaveExportToast({ ...lastSaved, fileCount: savedCount });
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
}

async function exportSelectedStationTrackCsv() {
  const sn = els.saveStationSelect?.value || "";
  const records = state.stationTrackRecords.get(sn) || [];
  if (!sn || !records.length) return;
  const header = ["移动站序列号", "定位状态", "在线状态", "卫星数", "经度", "纬度", "高度", "速度", "更新时间"];
  const rows = records.map((record) => [
    record.sn,
    getStationFixText(record.fixStatus),
    t(record.online ? "station.onlineValue" : "station.offlineValue"),
    record.satelliteCount,
    formatCoordinate(record.lon),
    formatCoordinate(record.lat),
    Number.isFinite(record.altitude) ? record.altitude.toFixed(3) : "",
    Number.isFinite(record.speed) ? record.speed.toFixed(3) : "",
    formatCsvDateTimeCell(record.time),
  ]);
  const csv = "\uFEFF" + [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
  const fileName = "移动站轨迹_" + sn + "_" + formatLocalFileDateTime() + ".csv";
  const saved = await saveTrackCsvFile(csv, fileName);
  if (!saved.saved) return;
  showSaveExportToast(saved);
  setStatusKey("status.trackExported", { sn, count: records.length });
}

function renderAll() {
  state.renderQueued = false;
  state.lastRenderAt = Date.now();
  renderParameterMessageLog();
  renderBaseCommandLog();
  renderMessageDetail();
  renderInfo();
  renderMap();
  renderStationSettings();
  if (els.savePage && !els.savePage.hidden) renderSavePage();
}
function scheduleRender() { if(!state.renderQueued){state.renderQueued=true;requestAnimationFrame(renderAll);} }

function renderNmea() {
  if (!els.nmeaLog || !els.nmeaSummary) return;
  els.nmeaSummary.textContent = t('summary.frequency', { value: calculatePrivateRateHz().toFixed(1) });
  els.nmeaLog.textContent = state.privateRawLines.slice(-180).join('\n');
  els.nmeaLog.scrollTop = els.nmeaLog.scrollHeight;
}
function renderUbx() {
  if (!els.ubxLog || !els.ubxSummary) return;
  els.ubxSummary.textContent = t('summary.frequency', { value: calculatePrivateRateHz().toFixed(1) });
  els.ubxLog.textContent = state.privateFrameLines.join('\n');
  els.ubxLog.scrollTop = els.ubxLog.scrollHeight;
}

function renderMessageDetail() {
  if (!els.messageDetail) return;
  syncSelectedOnlineStation();
  const stations = getMonitorStations();
  renderStationQueryDiagnostics();
  if (els.stationPositionCount) els.stationPositionCount.textContent = '(' + getLocatableStationCount() + '/' + stations.length + ')';
  if (els.mobileStationCount) els.mobileStationCount.textContent = String(stations.length);
  if (els.mobileStationList) {
    const listSignature = state.language + '|' + stations.map((station) => [
      station.sn,
      isStationOnline(station) ? 1 : 0,
      station.fixStatus,
      station.satelliteCount,
      station.sn === state.selectedStationSn ? 1 : 0,
      state.trackedStationSns.has(station.sn) ? 1 : 0,
      state.stationPollingSns.has(station.sn) ? 1 : 0,
    ].join(':')).join('|');
    if (listSignature !== state.stationListRenderSignature) {
      state.stationListRenderSignature = listSignature;
      els.mobileStationList.innerHTML = stations.length
        ? '<label class="station-poll-all"><input type="checkbox" data-poll-all' + (stations.every((station) => state.stationPollingSns.has(station.sn)) ? ' checked' : '') + '><span></span><b>' + escapeHtml(t('station.pollAll')) + '</b></label>' + stations.map((station) => {
            const online = isStationOnline(station);
            const tracked = state.trackedStationSns.has(station.sn);
            const trackTitle = t('station.track', { sn: station.sn });
            const trackControl = online || tracked
              ? '<label class="station-track-toggle" title="' + escapeHtml(trackTitle) + '"><input type="checkbox" data-track-station-sn="' +
                escapeHtml(station.sn) + '" aria-label="' + escapeHtml(trackTitle) + '"' +
                (tracked ? ' checked' : '') + '><span></span></label>'
              : '<span class="station-track-unavailable" aria-hidden="true"></span>';
            const pollTitle = t('station.poll', { sn: station.sn });
            const pollControl = '<label class="station-poll-toggle" title="' + escapeHtml(pollTitle) + '"><input type="checkbox" data-poll-station-sn="' + escapeHtml(station.sn) + '" aria-label="' + escapeHtml(pollTitle) + '"' + (state.stationPollingSns.has(station.sn) ? ' checked' : '') + '><span></span></label>';
            return '<div class="mobile-station-item ' +
              (station.sn === state.selectedStationSn ? 'active ' : '') + (online ? 'is-online' : 'is-offline') + '"' +
              '><button type="button" data-station-sn="' + escapeHtml(station.sn) + '" class="mobile-station-select"' +
              '>' +
              '<i class="station-state-dot"></i><span class="station-item-main">' + escapeHtml(station.sn) + '</span>' +
              '<small class="station-fix-status">' + escapeHtml(online ? getStationFixText(station.fixStatus) : t('station.offlineValue')) + '</small></button>' + pollControl +
              trackControl + '</div>';
          }).join('')
        : '<div class="station-list-empty">' + escapeHtml(t('station.empty')) + '</div>';
    }
  }
  if (els.mobileStationRows) {
    els.mobileStationRows.innerHTML = stations.map((station) => {
      const online = isStationOnline(station);
      return '<tr data-station-sn="' + escapeHtml(station.sn) + '" class="' +
        (station.sn === state.selectedStationSn ? 'is-selected ' : '') + (online ? 'is-online' : 'is-offline') + '"' +
        '>' +
        '<td>SN ' + escapeHtml(station.sn) + '</td><td>' + escapeHtml(getStationFixText(station.fixStatus)) + '</td>' +
        '<td>' + station.satelliteCount + '</td><td><span class="station-online-label">' +
        escapeHtml(t(online ? 'station.onlineValue' : 'station.offlineValue')) + '</span></td></tr>';
    }).join('');
  }
  const station = getSelectedStation();
  if (!station || !isStationOnline(station)) {
    els.messageDetail.innerHTML = '<div class="empty-detail">' + escapeHtml(t('station.empty')) + '</div>';
    return;
  }
  if (state.selectedStationSn !== station.sn) state.selectedStationSn = station.sn;
  const fields = [
    [t('station.satellites'), formatStationParameter(station, 'satelliteCount')],
    [state.language === 'en' ? 'Signal strength' : '信号强度', Number.isFinite(station.signalStrength) ? String(station.signalStrength) : '--'],
    [t('map.lon'), formatStationParameter(station, 'lon')],
    [t('map.lat'), formatStationParameter(station, 'lat')],
    [t('map.altitude'), formatStationParameter(station, 'altitude')],
    [t('map.speed'), formatStationParameter(station, 'speed')],
    [t('station.updatedAt'), station.lastSeenAt ? formatStationUpdatedTime(station.lastSeenAt) : '--'],
  ];
  els.messageDetail.innerHTML = '<section class="station-summary-card">' +
    '<div class="monitor-summary-heading"><span>' + escapeHtml(t('summary.realtime')) +
    '</span><span class="station-presence is-online">' + escapeHtml(t('station.onlineValue')) + '</span></div>' +
    '<div class="summary-state">' + escapeHtml(getStationFixText(station.fixStatus)) + '</div>' +
    '<div class="summary-device"><div><span>' + escapeHtml(t('station.serialNumber')) +
    '</span><b>' + escapeHtml(station.sn) + '</b></div></div>' +
    '<div class="summary-grid">' + fields.map(([label, value]) =>
      '<div><span>' + escapeHtml(label) + '</span><b>' + escapeHtml(value) + '</b></div>'
    ).join('') + '</div></section>';
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
function renderInfo() {
  if (els.fixState) {
    const stations = [...state.mobileStations.values()];
    const onlineCount = stations.filter((item) => isStationOnline(item)).length;
    els.fixState.textContent = stations.length ? t('station.summary', { online: onlineCount, total: stations.length }) : t('status.noFix');
  }
  if (els.sourceState) els.sourceState.textContent = '';
  if (els.logState) els.logState.textContent = state.replayRecords.length ? t('replay.ready') : t('status.logUnsaved');
}

function getFixStateText() {
  const qualityMap = {
    '1': 'nmea.single',
    '2': 'nmea.differential',
    '4': 'nmea.rtkFixed',
    '5': 'nmea.rtkFloat',
    '6': 'nmea.deadReckoning',
  };
  if (qualityMap[state.fix.quality]) return t(qualityMap[state.fix.quality]);
  if (state.fix.fixType === 2) return '2D';
  if (state.fix.fixType === 3) return '3D';
  return t('status.noFix');
}
function renderLegend() {
  if (!els.signalLegend) return;
  const stations = [...state.mobileStations.values()];
  const online = stations.filter((station) => isStationOnline(station)).length;
  els.signalLegend.innerHTML = '<span><i class="dot station-online-dot"></i>' + escapeHtml(t('station.onlineValue')) + ' ' + online + '</span>' +
    '<span><i class="dot station-offline-dot"></i>' + escapeHtml(t('station.offlineValue')) + ' ' + (stations.length - online) + '</span>';
}
function renderSatelliteTable() { /* Replaced by the mobile-station table. */ }
function getFilteredSatellites() { return [...state.satellites.values()].filter(s=>{const box=document.querySelector('[data-system="'+s.system+'"]');return!(box&&!box.checked);}); }

function renderSignal() {
  const canvas=els.signalCanvas;if(!canvas)return;const rect=getElementLogicalSize(canvas.parentElement,400,300);
  const dpr=devicePixelRatio||1;canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;canvas.style.width=rect.width+'px';canvas.style.height=rect.height+'px';
  const ctx=canvas.getContext('2d'),w=rect.width,h=rect.height;
  state.signalBars = [];
  ctx.save();ctx.scale(dpr,dpr);ctx.clearRect(0,0,w,h);ctx.fillStyle=state.theme==='dark'?'#0f151c':'#fff';ctx.fillRect(0,0,w,h);
  const stations=[...state.mobileStations.values()].sort((a,b)=>a.sn.localeCompare(b.sn));
  if(!stations.length){hideSignalTooltip();ctx.fillStyle='#999';ctx.font='18px "Microsoft YaHei", Arial';ctx.textAlign='center';ctx.fillText(t('signal.empty'),w/2,h/2);ctx.restore();return;}
  const padL=50,padR=10,padT=30,padB=40;
  const availableW=Math.max(1,w-padL-padR);
  const slotW=Math.min(64,availableW/Math.max(stations.length,1));
  const barW=Math.max(2,Math.min(46,slotW-2));
  const barArea=h-padT-padB;
  const maxSatellites=Math.max(20,Math.ceil(Math.max(...stations.map((station)=>station.satelliteCount||0))/10)*10);
  const gridStep=Math.max(5,Math.ceil(maxSatellites/4/5)*5);
  ctx.strokeStyle=state.theme==='dark'?'#2e3c48':'#e0e0e0';ctx.lineWidth=1;
  for(let count=gridStep;count<=maxSatellites;count+=gridStep){const y=padT+barArea-(count/maxSatellites)*barArea;ctx.beginPath();ctx.moveTo(padL,y);ctx.lineTo(w-padR,y);ctx.stroke();}
  ctx.fillStyle='#888';ctx.font='11px Consolas';ctx.textAlign='right';
  for(let count=gridStep;count<=maxSatellites;count+=gridStep){ctx.fillText(count,padL-4,padT+barArea-(count/maxSatellites)*barArea+4);}
  ctx.fillText(t('station.satellites'),padL-4,padT-8);
  stations.forEach((station,i)=>{
    const count=Number(station.satelliteCount)||0;
    const x=padL+i*slotW+(slotW-barW)/2,bh=Math.max(3,(count/maxSatellites)*barArea);
    const y=padT+barArea-bh;
    state.signalBars.push({
      x,
      y,
      width: barW,
      height: bh,
      stationSn: station.sn,
      satelliteCount: count,
    });
    ctx.fillStyle=getBaseStationColor(station);ctx.fillRect(x,padT+barArea-bh,barW,bh);
    ctx.fillStyle=state.theme==='dark'?'#d9e2e9':'#333';ctx.font=(slotW>28?'11px':'8px')+' Consolas';ctx.textAlign='center';
    if(slotW>12)ctx.fillText(station.sn.slice(-4),x+barW/2,h-padB+14);
    ctx.fillText(count,x+barW/2,padT+barArea-bh-4);
  });
  ctx.restore();
}

function renderScatter() {
  const canvas=els.scatterCanvas;if(!canvas)return;const rect=getElementLogicalSize(canvas.parentElement,400,300);
  const dpr=devicePixelRatio||1;canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;canvas.style.width=rect.width+'px';canvas.style.height=rect.height+'px';
  const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
  const stationPoints = state.scatterPoints.filter((point) => !state.selectedStationSn || point.sn === state.selectedStationSn);
  if(!stationPoints.length){ctx.fillStyle='#999';ctx.font='18px "Microsoft YaHei", Arial';ctx.textAlign='center';ctx.fillText(t('scatter.empty'),w/2,h/2);return;}
  const center=state.scatterCenter||stationPoints[0];
  const pad=40,cx=w/2,cy=h/2;
  // Convert to meters
  const cosLat=Math.cos(center.lat*Math.PI/180);
  const pts=stationPoints.map(p=>({x:(p.lon-center.lon)*111320*cosLat,y:(p.lat-center.lat)*110540}));
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
  const stations = getMapStations();
  const selected = hasStationPosition(getSelectedStation()) ? getSelectedStation() : stations[0] || null;
  const zoom = clamp(Math.round(state.mapZoom || MAP_DEFAULT_ZOOM), MAP_MIN_ZOOM, MAP_MAX_ZOOM);
  state.mapZoom = zoom;
  const baseCenter = state.mapUserControlled ? null : getPositionedBaseStation();
  const selectedPoint = selected ? mapDisplayPoint(selected) : null;
  if (!baseCenter && selectedPoint && (state.mapFollowFix || !state.mapCenter)) state.mapCenter = selectedPoint;
  const following = !baseCenter && !!selectedPoint && state.mapFollowFix;
  const anchor = following ? getMapMarkerAnchor(w,h) : {x:w/2,y:h/2};
  const focus = baseCenter ? mapDisplayPoint(baseCenter) : getCurrentMapCenter();
  ctx.clearRect(0,0,w,h);
  drawMapTiles(ctx,w,h,focus,zoom,anchor);
  drawTrackedStationPaths(ctx,w,h,focus,zoom,anchor);
  drawBaseRoverDistances(ctx,w,h,focus,zoom,anchor);
  state.mapMarkers = [];
  if (stations.length) {
    const occupiedLabels = [];
    stations.forEach((station) => {
      const point = mapDisplayPoint(station);
      const screen = getMapPointScreenPosition(point, focus, zoom, anchor);
      if (screen.x < -40 || screen.x > w + 40 || screen.y < -60 || screen.y > h + 40) return;
      const marker = { sn: station.sn, isBase: !!station.isBase, x: screen.x, y: screen.y, radius: station.isBase ? 42 : 24 };
      state.mapMarkers.push(marker);
      drawBaseStationMarker(ctx, marker, station, station.sn === state.selectedStationSn, occupiedLabels, w, h);
    });
  } else {
    drawMapEmptyState(ctx,w,h);
  }
  drawMapAttribution(ctx,w,h);
}

function getBaseRoverDistance(base, rover) {
  // Use original geographic coordinates, before map datum conversion.
  const radians = Math.PI / 180;
  const dLat = (rover.lat - base.lat) * radians;
  const dLon = (rover.lon - base.lon) * radians;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(base.lat * radians) * Math.cos(rover.lat * radians) * Math.sin(dLon / 2) ** 2;
  return 6371008.8 * 2 * Math.atan2(Math.sqrt(Math.min(1, a)), Math.sqrt(Math.max(0, 1 - a)));
}

function drawBaseRoverDistances(ctx, w, h, focus, zoom, anchor) {
  const base = state.basePosition;
  if (!base?.positionValid || !hasStationPosition(base)) return;
  const rovers = getPositionedStations();
  if (!rovers.length) return;
  const start = getMapPointScreenPosition(mapDisplayPoint(base), focus, zoom, anchor);
  ctx.save();
  ctx.beginPath(); ctx.rect(0, 0, w, h); ctx.clip();
  rovers.forEach((rover) => {
    const end = getMapPointScreenPosition(mapDisplayPoint(rover), focus, zoom, anchor);
    const distance = getBaseRoverDistance(base, rover);
    const label = distance >= 1000 ? (distance / 1000).toFixed(3) + ' km' : distance.toFixed(2) + ' m';
    ctx.strokeStyle = '#1677c8'; ctx.lineWidth = 2;
    ctx.setLineDash([7, 5]);
    ctx.beginPath(); ctx.moveTo(start.x, start.y); ctx.lineTo(end.x, end.y); ctx.stroke();
    ctx.setLineDash([]);
    ctx.font = 'bold 12px "Microsoft YaHei", Arial';
    const labelWidth = ctx.measureText(label).width + 16;
    const x = (start.x + end.x) / 2, y = (start.y + end.y) / 2;
    ctx.fillStyle = 'rgba(255,255,255,0.96)';
    ctx.beginPath(); ctx.roundRect(x - labelWidth / 2, y - 13, labelWidth, 26, 5); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#12578d'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y);
  });
  ctx.restore();
}

function getCurrentMapCenter() {
  if (state.mapCenter && Number.isFinite(state.mapCenter.lat) && Number.isFinite(state.mapCenter.lon)) return state.mapCenter;
  const station = hasStationPosition(getSelectedStation()) ? getSelectedStation() : getMapStations()[0];
  return mapDisplayPoint(station || {lat:22.58,lon:113.91});
}

function getVisibleMapCenter(w,h) {
  const base = state.mapUserControlled ? null : getPositionedBaseStation();
  if (base) return mapDisplayPoint(base);
  const centerAnchor = {x:w/2,y:h/2};
  const station = hasStationPosition(getSelectedStation()) ? getSelectedStation() : getMapStations()[0];
  if (!(station && state.mapFollowFix)) return getCurrentMapCenter();
  const zoom = clamp(Math.round(state.mapZoom || MAP_DEFAULT_ZOOM), MAP_MIN_ZOOM, MAP_MAX_ZOOM);
  const stationPoint = mapDisplayPoint(station);
  const fixPx = lonLatToWorldPixel(stationPoint.lon, stationPoint.lat, zoom);
  const markerAnchor = getMapMarkerAnchor(w,h);
  return worldPixelToLonLat(fixPx.x + centerAnchor.x - markerAnchor.x, fixPx.y + centerAnchor.y - markerAnchor.y, zoom);
}

function drawMapTiles(ctx,w,h,center,zoom,anchor) {
  const source = MAP_TILE_SOURCES[state.mapMode] || MAP_TILE_SOURCES.road;
  const darkRoadMap = state.theme === "dark" && state.mapMode === "road";
  const centerPx = lonLatToWorldPixel(center.lon, center.lat, zoom);
  const ax = anchor?.x ?? w / 2, ay = anchor?.y ?? h / 2;
  const nativeZoom = Math.min(zoom, source.maxNativeZoom || zoom);
  const overScale = 2 ** (zoom - nativeZoom);
  const nativeTileSize = MAP_TILE_SIZE * overScale;
  const startX = Math.floor((centerPx.x - ax) / nativeTileSize);
  const endX = Math.floor((centerPx.x + (w - ax)) / nativeTileSize);
  const startY = Math.floor((centerPx.y - ay) / nativeTileSize);
  const endY = Math.floor((centerPx.y + (h - ay)) / nativeTileSize);
  ctx.save();
  if (darkRoadMap) ctx.filter = "brightness(0.48) saturate(0.58) hue-rotate(150deg)";
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
  ctx.restore();
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

function getStationTrackColor(sn) {
  const colors = ["#1769d2", "#e04b32", "#159455", "#a14fc4", "#e08a16", "#008b9a"];
  let hash = 0;
  for (let i = 0; i < sn.length; i += 1) hash = ((hash * 31) + sn.charCodeAt(i)) >>> 0;
  return colors[hash % colors.length];
}

function drawTrackedStationPaths(ctx,w,h,center,zoom,anchor) {
  if (!state.trackedStationSns.size) return;
  const centerPx = lonLatToWorldPixel(center.lon, center.lat, zoom);
  const ax = anchor?.x ?? w / 2;
  const ay = anchor?.y ?? h / 2;
  state.trackedStationSns.forEach((sn) => {
    const points = (state.stationTrackRecords.get(sn) || [])
      .filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lon))
      .slice(-MAP_MAX_TRACK_POINTS)
      .map((point) => {
        const displayPoint = mapDisplayPoint(point);
        const pixel = lonLatToWorldPixel(displayPoint.lon, displayPoint.lat, zoom);
        return { x: pixel.x - centerPx.x + ax, y: pixel.y - centerPx.y + ay };
      });
    if (points.length < 2) return;
    ctx.save();
    ctx.strokeStyle = getStationTrackColor(sn);
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.shadowColor = "rgba(255,255,255,0.85)";
    ctx.shadowBlur = 2;
    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();
    ctx.restore();
  });
}

function getBaseStationColor(station) {
  // Base coordinate reports are not rover polling heartbeats.
  if (station.isBase || station === state.basePosition) return state.running ? "#2b71c8" : "#8a9299";
  if (!isStationOnline(station)) return "#8a9299";
  if (station.fixStatus === 4) return "#159455";
  if (station.fixStatus === 5) return "#e39a17";
  if (station.fixStatus === 2) return "#0796a8";
  return "#2b71c8";
}

let mapBaseStationIcon;

function drawBaseStationMarker(ctx, marker, station, selected, occupiedLabels, mapWidth, mapHeight) {
  const color = getBaseStationColor(station);
  ctx.save();
  ctx.translate(marker.x, marker.y);
  if (station.isBase) {
    if (!mapBaseStationIcon) {
      mapBaseStationIcon = new Image();
      mapBaseStationIcon.onload = scheduleMapRender;
      mapBaseStationIcon.src = "./assets/panel-icons/base-station.png?v=1";
    }
    if (mapBaseStationIcon.complete && mapBaseStationIcon.naturalWidth > 0) {
      const height = 32;
      const width = height * mapBaseStationIcon.naturalWidth / mapBaseStationIcon.naturalHeight;
      if (!state.running) ctx.filter = "grayscale(1)";
      ctx.drawImage(mapBaseStationIcon, -width / 2, -height, width, height);
    }
  }
  if (!station.isBase) {
  ctx.shadowColor = "rgba(0,0,0,0.28)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetY = 2;
  ctx.fillStyle = color;
  ctx.strokeStyle = selected ? "#111" : "#fff";
  ctx.lineWidth = selected ? 3 : 2.5;
  ctx.beginPath();
  ctx.arc(0, -13, 12, Math.PI * 0.15, Math.PI * 0.85, true);
  ctx.lineTo(0, 6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.shadowColor = "transparent";
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(0, -13, 4, 0, Math.PI * 2);
  ctx.fill();
  if (selected) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, -13, 17, 0, Math.PI * 2);
    ctx.stroke();
  }
  }
  ctx.restore();

  const label = station.isBase ? t("guide.baseStation") : station.sn;
  ctx.font = '12px "Microsoft YaHei", Arial';
  const labelWidth = Math.ceil(ctx.measureText(label).width) + 14;
  const labelHeight = 23;
  const candidates = [
    { x: marker.x - labelWidth / 2, y: marker.y - 57 },
    { x: marker.x + 17, y: marker.y - 31 },
    { x: marker.x - labelWidth - 17, y: marker.y - 31 },
    { x: marker.x - labelWidth / 2, y: marker.y + 10 },
  ];
  let labelRect = candidates.find((candidate) => {
    const rect = { ...candidate, width: labelWidth, height: labelHeight };
    const inBounds = rect.x >= 4 && rect.y >= 4 && rect.x + rect.width <= mapWidth - 4 && rect.y + rect.height <= mapHeight - 28;
    return inBounds && !occupiedLabels.some((used) => rectanglesOverlap(rect, used));
  });
  if (!labelRect) labelRect = candidates[0];
  labelRect = { ...labelRect, width: labelWidth, height: labelHeight };
  occupiedLabels.push(labelRect);
  ctx.fillStyle = selected ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.9)";
  ctx.strokeStyle = color;
  ctx.lineWidth = selected ? 2 : 1;
  ctx.beginPath();
  ctx.roundRect(labelRect.x, labelRect.y, labelRect.width, labelRect.height, 4);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#26323a";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, labelRect.x + labelRect.width / 2, labelRect.y + labelRect.height / 2 + 0.5);
}

function rectanglesOverlap(a, b) {
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

function drawMapEmptyState(ctx,w,h) {
  const dark = state.theme === "dark";
  ctx.fillStyle = dark ? "rgba(16,24,32,0.72)" : "rgba(255,255,255,0.78)";
  ctx.fillRect(0,0,w,h);
  ctx.fillStyle = dark ? "#d4e0ea" : "#666";
  ctx.font = '18px "Microsoft YaHei", Arial';
  ctx.textAlign = "center";
  ctx.fillText(t("map.waitingFix"),w/2,h/2-8);
  ctx.font = '13px "Microsoft YaHei", Arial';
  ctx.fillText(t("map.autoCenterAfterFix"),w/2,h/2+18);
}

function drawMapAttribution(ctx,w,h) {
  const source = MAP_TILE_SOURCES[state.mapMode] || MAP_TILE_SOURCES.road;
  const dark = state.theme === "dark";
  ctx.fillStyle = dark ? "rgba(18,28,37,0.84)" : "rgba(255,255,255,0.82)";
  ctx.fillRect(8,h-24,140,18);
  ctx.fillStyle = dark ? "#bdd0df" : "#555";
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
function formatSignalSatelliteLabel(sat) {
  const prefix = { GPS: "G", GLC: "R", GAI: "E", BDS: "C", IRN: "I", QZS: "J" }[sat.system] || "";
  return prefix + String(sat.prn || "--");
}
function formatSignalSnr(value) {
  const n = Number(value);
  return Number.isFinite(n) ? String(Math.round(n)) : "--";
}
function parseUtc(v){if(!v||v.length<6)return'';return v.slice(0,2)+':'+v.slice(2,4)+':'+v.slice(4,6)+(v.includes('.')?'.'+v.split('.')[1].padEnd(3,'0').slice(0,3):'.000');}
function parseCoord(v,h){if(!v||!h)return NaN;const raw=parseFloat(v);if(!Number.isFinite(raw))return NaN;const degrees=Math.floor(raw/100);const minutes=raw-degrees*100;if(minutes<0||minutes>=60)return NaN;const sign=h==='S'||h==='W'?-1:1;return sign*(degrees+minutes/60);}
function parseNumber(v,fb){const n=parseFloat(v);return Number.isFinite(n)?n:fb;}
function formatNmeaCoord(v,h){const c=parseCoord(v,h);return Number.isFinite(c)?c.toFixed(7)+' '+h:'--';}
function formatLogTime(d){return d.toTimeString().slice(0,8)+'.'+String(d.getMilliseconds()).padStart(3,'0');}
function formatStationUpdatedTime(value){return new Date(value).toTimeString().slice(0,8);}
function formatHexByte(value){return Number.isFinite(value)?'0x'+value.toString(16).padStart(2,'0').toUpperCase():'--';}
function escapeHtml(v){return String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
function updatePosition(lat,lon){state.fix.lat=lat;state.fix.lon=lon;if(state.mapFollowFix)state.mapCenter=mapDisplayPoint({lat,lon});if(!state.scatterCenter)state.scatterCenter={lat,lon};state.scatterPoints.push({lat,lon,time:Date.now()});if(state.scatterPoints.length>500)state.scatterPoints.splice(0,state.scatterPoints.length-500);}
function extractGsvSatellites(parts){const sats=[];for(let i=4;i+3<parts.length;i+=4){if(!parts[i]||parts[i]==='00')continue;sats.push({prn:parts[i],elevation:parts[i+1],azimuth:parts[i+2],snr:parts[i+3]});}return sats;}
function isNmeaChecksumValid(line){const si=line.lastIndexOf('*');if(si<0)return true;const expected=parseInt(line.slice(si+1),16);let ck=0;for(let i=line[0]==='$'?1:0;i<si;i++)ck^=line.charCodeAt(i);return ck===expected;}
function delay(ms){return new Promise(r=>setTimeout(r,ms));}

// ========== Port Status ==========
function isPortOccupiedError(error){if(!error?.message)return false;const m=error.message.toLowerCase();return['in use','occupied','already open in another page','access denied','being used','正在使用','被占用','拒绝访问'].some(k=>m.includes(k));}
function showPortStatus(msg, type, actionText, options = {}) {
  if (!els.portStatusBanner) return;
  if (portStatusTimer) {
    clearTimeout(portStatusTimer);
    portStatusTimer = null;
  }
  els.portStatusBanner.className = 'port-status-banner port-' + (type || 'info');
  const icon = els.portStatusBanner.querySelector('.port-status-icon');
  if (icon) icon.textContent = { error: '!', warning: '!', info: 'i', success: 'v' }[type] || 'i';
  els.portStatusMessage.textContent = msg;
  els.portStatusAction.textContent = actionText || t('common.retry');
  els.portStatusAction.dataset.action = options.action || 'connect';
  els.portStatusAction.style.display = actionText === false ? 'none' : '';
  els.portStatusBanner.style.display = 'flex';
  els.portStatusBanner.onclick = () => hidePortStatus();
  if (!options.sticky && (type === 'info' || type === 'warning')) {
    portStatusTimer = setTimeout(() => {
      hidePortStatus();
      portStatusTimer = null;
    }, 5000);
  }
}
function hidePortStatus(){if(portStatusTimer){clearTimeout(portStatusTimer);portStatusTimer=null;}if(els.portStatusBanner)els.portStatusBanner.style.display='none';}

// ========== Commands / File ==========
function sendCommand(){const raw=els.commandInput.value.trim();if(!raw)return;if(els.commandMode.value==='hex'){try{parseHex(raw);state.nmeaLines.push(formatLogTime(new Date())+' [HEX] '+raw);scheduleRender();}catch(e){setStatusKey('status.hexFormatError');return;}}else{state.nmeaLines.push(formatLogTime(new Date())+' '+raw);scheduleRender();}els.commandInput.value='';}
function parseHex(text){const bytes=text.replace(/0x/gi,'').split(/[\s,]+/).filter(Boolean).map(p=>parseInt(p,16));if(bytes.some(b=>!Number.isFinite(b)||b<0||b>255))throw new Error(t('status.hexFormatError'));return new Uint8Array(bytes);}
function loadFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    clearData({ silent: true });
    const buffer = reader.result;
    const isBinary = /\.bin$/i.test(file.name);
    let bytes = new Uint8Array(buffer);
    if (!isBinary) {
      const text = new TextDecoder().decode(bytes);
      const tokens = text.match(/(?:0x)?[0-9a-fA-F]{2}/g) || [];
      bytes = new Uint8Array(tokens.map((token) => parseInt(token.replace(/^0x/i, ''), 16)));
    }
    state.source = t('source.file', { file: file.name });
    for (let offset = 0; offset < bytes.length; offset += 48) {
      state.privateRawLines.push(bytesToHex(bytes.subarray(offset, offset + 48)));
    }
    if (state.privateRawLines.length > 400) state.privateRawLines.splice(0, state.privateRawLines.length - 400);
    const records = parsePrivateBytes(bytes, { logRaw: false, render: false });
    if (records.length) state.outputMode = 'PRIVATE';
    setStatusKey('status.loadedPrivateFile', { file: file.name, frames: records.length });
    renderAll();
    event.target.value = '';
  };
  reader.onerror = () => setStatus(reader.error?.message || t('status.loadedPrivateFile', { file: file.name, frames: 0 }));
  reader.readAsArrayBuffer(file);
}
function resetParsedData() {
  state.nmeaLines = [];
  state.ubxMessages = [];
  state.ubxLines = [];
  state.ubxEpochTimes = [];
  state.ubxRateTimes = [];
  state.nmeaEpochTimes = [];
  state.lastNmeaEpochAt = 0;
  state.selectedUbxIndex = 0;
  state.ubxBuffer = [];
  state.privateRawLines = [];
  state.privateFrameLines = [];
  state.privateRateTimes = [];
  state.privateParser.reset();
  state.basePositionParser.reset();
  state.basePosition = null;
  state.baseParameterParser.reset();
  state.baseStationSnParser.reset();
  state.roverParameterParser.reset();
  state.commandResponseParser.reset();
  state.baseCommandSequence = 0;
  state.baseCommandLines = [];
  clearParameterMessages();
  state.baseParameterSnapshot = null;
  state.roverParameterSnapshot = null;
  updateParameterSettingsAvailability();
  clearBaseParameterError();
  clearRoverParameterError();
  state.mobileStations.clear();
  state.removedStationSns.clear();
  state.stationPollingSns.clear();
  state.trackedStationSns.clear();
  state.stationTrackRecords.clear();
  state.selectedStationSn = '';
  state.mapMarkers = [];
  hideMapStationTooltip();
  state.stationFreshnessSignature = '';
  state.stationListRenderSignature = '';
  state.messageLatest = Object.fromEntries(MESSAGE_TYPES.map(t => [t, null]));
  state.messageHistory = Object.fromEntries(MESSAGE_TYPES.map(t => [t, []]));
  state.satellites.clear();
  state.usedPrns.clear();
  state.scatterPoints = [];
  state.scatterCenter = null;
  state.mapFollowFix = true;
  state.mapUserControlled = false;
  state.mapCenter = null;
  state._leafletFirstFix = false;
  state.epochs = 0;
  state.fix = {utc:'00:00:00.000',lat:0,lon:0,altitude:0,speedKmh:0,course:0,satelliteCount:0,hdop:0,vdop:0,mode:'--',fixType:0,quality:'0'};
}

function resetReplayStorage() {
  pauseReplay({ silent: true });
  state.replayRecords = [];
  state.replayUtcMap = new Map();
  state.replayUtcGroups = [];
  state.replayFileName = "";
  state.replayIndex = 0;
  state.replayCurrentUtc = "--";
  state.replayPlaying = false;
}

function clearData(options={}) {
  const keepConnection = !!options.keepConnection;
  const keepStatus = !!options.keepStatus;
  const wasRunning = state.running;
  if (!options.keepReplay) resetReplayStorage();
  resetParsedData();
  if (!keepConnection) {
    state.detectedBaudRate = null;
    state.currentBaudRate = null;
    state.detectedModule = '';
    state.outputMode = '--';
    state.portLabel = '串口';
    state.portDetail = '';
    state.source = '';
    state.paused = false;
    state.pausedPort = null;
    updatePauseButton();
  }
  updateDeviceModeState();
  updateReplayControls();
  if (!options.silent && !keepStatus) {
    if (keepConnection) {
      setRunningKey(wasRunning || !!state.port, 'status.live');
    } else {
      setRunningKey(false, 'status.idle');
    }
    hidePortStatus();
  }
  renderAll();
}

async function loadReplayFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    try {
      await startReplayFromText(String(reader.result || ""), file.name);
    } finally {
      if (els.replayFileInput) els.replayFileInput.value = "";
    }
  };
  reader.onerror = () => {
    setStatus(reader.error?.message || t("replay.noData"));
    if (els.replayFileInput) els.replayFileInput.value = "";
  };
  reader.readAsText(file);
}

async function startReplayFromText(text, fileName) {
  pauseReplay({ silent: true });
  const { records, utcMap, utcGroups } = buildReplayRecords(text);
  if (!records.length) {
    clearData({ silent: true });
    setStatusKey("replay.noData");
    updateReplayControls();
    return;
  }
  if (state.port || state.reader || state.isDetecting || state.isReprobing) {
    await disconnectSerial({ silent: true });
  }
  clearData({ silent: true, keepReplay: true });
  state.replayRecords = records;
  state.replayUtcMap = utcMap;
  state.replayUtcGroups = utcGroups;
  state.replayFileName = fileName || "";
  state.replayIndex = 0;
  state.replayCurrentUtc = records[0]?.utc || "--";
  state.source = t("source.file", { file: state.replayFileName || t("replay.connection") });
  state.outputMode = "NMEA";
  applyReplayToIndex(0, { rebuild: true, silent: true });
  setReplayStatusKey(false, "replay.loaded", { file: state.replayFileName || "", lines: records.length });
  startReplayPlayback();
}

function buildReplayRecords(text) {
  const records = [];
  let lastUtc = "";
  String(text || "").split(/\r?\n/).forEach((raw) => {
    const line = extractNmeaLine(raw);
    if (!line) return;
    const ownUtc = getReplayLineUtc(line);
    if (ownUtc) lastUtc = ownUtc;
    records.push({ line, utc: lastUtc || "" });
  });
  const utcGroups = [];
  const utcMap = new Map();
  let activeGroup = null;
  records.forEach((record, index) => {
    if (!record.utc) return;
    if (!activeGroup || activeGroup.utc !== record.utc) {
      activeGroup = { utc: record.utc, start: index, end: index };
      utcGroups.push(activeGroup);
      if (!utcMap.has(record.utc)) utcMap.set(record.utc, activeGroup);
      return;
    }
    activeGroup.end = index;
  });
  return { records, utcMap, utcGroups };
}

function extractNmeaLine(raw) {
  const text = String(raw || "");
  const start = text.indexOf("$");
  if (start < 0) return "";
  let line = text.slice(start).trim();
  const checksumIndex = line.indexOf("*");
  if (checksumIndex >= 0 && line.length > checksumIndex + 3) {
    line = line.slice(0, checksumIndex + 3);
  }
  return line.startsWith("$") ? line : "";
}

function getReplayLineUtc(line) {
  const sentence = line.split("*")[0].replace("$", "");
  const parts = sentence.split(",");
  const type = (parts[0] || "").slice(2);
  if (type === "GGA" || type === "RMC") return parseUtc(parts[1]) || "";
  if (type === "GLL") return parseUtc(parts[5]) || "";
  return "";
}

function setReplayStatusKey(active, key, params = {}) {
  setRunningKey(active, key, params);
  setDebugStateNoLog();
  if (!state.port && state.replayRecords.length && els.connectionState) {
    els.connectionState.textContent = t("replay.connection");
  }
}

function startReplayPlayback() {
  if (!state.replayRecords.length) {
    setStatusKey("replay.noData");
    return;
  }
  if (state.replayIndex >= state.replayRecords.length - 1) {
    applyReplayToIndex(0, { rebuild: true, silent: true });
  }
  if (state.replayTimer) clearInterval(state.replayTimer);
  state.replayPlaying = true;
  const interval = Math.max(25, Math.round(180 / Math.max(0.25, state.replaySpeed || 1)));
  state.replayTimer = setInterval(stepReplayPlayback, interval);
  setReplayStatusKey(true, "replay.playing");
  updateReplayControls();
}

function stepReplayPlayback() {
  if (!state.replayRecords.length) {
    pauseReplay({ silent: true });
    setReplayStatusKey(false, "replay.noData");
    return;
  }
  if (state.replayIndex >= state.replayRecords.length - 1) {
    pauseReplay({ silent: true });
    setReplayStatusKey(false, "replay.finished");
    updateReplayControls();
    return;
  }
  applyReplayToIndex(state.replayIndex + 1, { silent: true });
  if (state.replayIndex >= state.replayRecords.length - 1) {
    pauseReplay({ silent: true });
    setReplayStatusKey(false, "replay.finished");
  }
}

function toggleReplayPlayback() {
  if (state.replayPlaying) {
    pauseReplay();
    return;
  }
  startReplayPlayback();
}

function updateReplaySpeed() {
  state.replaySpeed = parseNumber(els.replaySpeedSelect?.value, 1) || 1;
  if (state.replayPlaying) startReplayPlayback();
  updateReplayControls();
}

function seekReplayRelative(direction) {
  if (!state.replayRecords.length) {
    setStatusKey("replay.noData");
    return;
  }
  const target = findRelativeReplayIndex(direction);
  const wasPlaying = state.replayPlaying;
  pauseReplay({ silent: true });
  applyReplayToIndex(target, { rebuild: target < state.replayIndex, silent: true });
  setReplayStatusKey(false, "replay.paused");
  if (wasPlaying) startReplayPlayback();
}

function findRelativeReplayIndex(direction) {
  const groups = state.replayUtcGroups || [];
  if (groups.length) {
    const current = state.replayIndex;
    let groupIndex = groups.findIndex(group => current >= group.start && current <= group.end);
    if (groupIndex < 0) {
      groupIndex = groups.findIndex(group => group.start > current);
      if (groupIndex < 0) groupIndex = groups.length - 1;
    }
    const targetGroup = clamp(groupIndex + direction * 5, 0, groups.length - 1);
    return groups[targetGroup].end;
  }
  return clamp(state.replayIndex + direction * 50, 0, state.replayRecords.length - 1);
}

function handleReplayProgressInput() {
  if (!state.replayRecords.length) return;
  const target = clamp(parseInt(els.replayProgress?.value || "0", 10) || 0, 0, state.replayRecords.length - 1);
  const wasPlaying = state.replayPlaying;
  pauseReplay({ silent: true });
  applyReplayToIndex(target, { rebuild: true, silent: true });
  setReplayStatusKey(false, "replay.paused");
  if (wasPlaying) startReplayPlayback();
}

function jumpReplayToUtc() {
  if (!state.replayRecords.length) {
    setStatusKey("replay.noData");
    return;
  }
  const utc = (els.replayUtcInput?.value || "").trim();
  if (!/^\d{2}:\d{2}:\d{2}\.\d{3}$/.test(utc)) {
    setStatusKey("replay.jumpInvalid");
    return;
  }
  const group = state.replayUtcMap.get(utc);
  if (!group) {
    setStatusKey("replay.jumpNotFound", { utc });
    return;
  }
  const wasPlaying = state.replayPlaying;
  pauseReplay({ silent: true });
  applyReplayToIndex(group.end, { rebuild: true, silent: true });
  setReplayStatusKey(false, "replay.paused");
  if (wasPlaying) startReplayPlayback();
}

function applyReplayToIndex(index, options = {}) {
  if (!state.replayRecords.length) {
    updateReplayControls();
    return;
  }
  const target = clamp(index, 0, state.replayRecords.length - 1);
  const needsRebuild = options.rebuild || target < state.replayIndex || target - state.replayIndex > 100;
  if (needsRebuild) {
    resetParsedData();
    for (let i = 0; i <= target; i++) ingestReplayRecord(state.replayRecords[i]);
  } else {
    for (let i = state.replayIndex + 1; i <= target; i++) ingestReplayRecord(state.replayRecords[i]);
  }
  state.replayIndex = target;
  state.replayCurrentUtc = state.replayRecords[target]?.utc || state.replayCurrentUtc || "--";
  updateReplayControls();
  if (!options.silent) setReplayStatusKey(false, "replay.paused");
  renderAll();
}

function ingestReplayRecord(record) {
  if (!record) return;
  if (record.utc) state.replayCurrentUtc = record.utc;
  ingestLine(record.line, { render: false, logTime: record.utc || state.replayCurrentUtc || formatLogTime(new Date()) });
}

function updateReplayControls() {
  const ready = !!state.replayRecords.length;
  const index = ready ? clamp(state.replayIndex, 0, state.replayRecords.length - 1) : 0;
  const utc = ready ? (state.replayRecords[index]?.utc || state.replayCurrentUtc || "--") : "--";
  els.replayTools?.classList.toggle("is-ready", ready);
  els.replayTools?.classList.toggle("is-playing", ready && state.replayPlaying);
  [els.replayBackButton, els.replayPlayButton, els.replayForwardButton, els.replaySpeedSelect, els.replayProgress, els.replayUtcInput, els.replayJumpButton].forEach((node) => {
    if (node) node.disabled = !ready;
  });
  if (els.replayBackButton) els.replayBackButton.disabled = !ready || index <= 0;
  if (els.replayForwardButton) els.replayForwardButton.disabled = !ready || index >= state.replayRecords.length - 1;
  if (els.replayPlayButton) els.replayPlayButton.textContent = t(state.replayPlaying ? "replay.pause" : "replay.play");
  if (els.replaySpeedSelect) els.replaySpeedSelect.value = String(state.replaySpeed || 1);
  if (els.replayProgress) {
    els.replayProgress.max = ready ? String(state.replayRecords.length - 1) : "0";
    els.replayProgress.value = String(index);
  }
  if (els.replayProgressText) {
    els.replayProgressText.textContent = ready ? t("replay.progress", { current: index + 1, total: state.replayRecords.length, utc }) : "0/0";
  }
  if (els.replayUtcInput && document.activeElement !== els.replayUtcInput) {
    els.replayUtcInput.value = ready && utc !== "--" ? utc : "";
  }
}

function pauseReplay(options={}) {
  if (state.replayTimer) {
    clearInterval(state.replayTimer);
    state.replayTimer = null;
  }
  state.replayPlaying = false;
  updateReplayControls();
  if (!state.port && !options.silent) {
    if (state.replayRecords.length) setReplayStatusKey(false, 'replay.paused');
    else setRunningKey(false, 'status.idle');
  }
}
async function togglePauseTesting(){if(state.paused){await resumeTesting();return;}await pauseTesting();}
async function resumeTesting(){const port=state.pausedPort;state.paused=false;state.pausedPort=null;updatePauseButton();setStatusKey('status.started');await connectSerial(port?{port}:{});if(state.running)setStatusKey('status.started');}
async function pauseTesting(){const hasActiveTest=!!(state.port||state.reader||state.isDetecting||state.isReprobing);pauseReplay();state.serialSessionId+=1;state.isDetecting=false;state.isReprobing=false;state.detectingBaudRate=null;const reader=state.reader,port=state.port;state.reader=null;state.port=null;state.running=false;state.paused=hasActiveTest;state.pausedPort=hasActiveTest?port:null;updatePauseButton();updateDeviceModeState();updateConnectButton();hidePortStatus();if(reader){try{await reader.cancel();}catch(e){}try{reader.releaseLock();}catch(e){}}if(port){try{await port.close();}catch(e){}}setRunningKey(false,hasActiveTest?'status.paused':'status.idle');state.lastStatusTextKey='';state.lastStatusTextParams={};if(els.debugState&&hasActiveTest)els.debugState.textContent=t('status.paused');}
function setRunning(active,text){state.running=active;state.lastRunningTextKey='';state.lastRunningTextParams={};state.lastPlainStatusText=text||'';els.connectionState.textContent=active?formatSerialConnectionLabel():t('status.disconnected');els.idleState.textContent=text||(active?t('status.running'):t('status.idle'));els.statusLed.classList.toggle('active',active);updateConnectButton();updateConnectionGuide();if(active)hidePortStatus();}
function updateDeviceSummary(){const name=document.getElementById('summaryDeviceName');const image=document.getElementById('summaryDeviceImage');if(!name||!image)return;const mod=String(state.detectedModule||'');const isBase=/base|基站|FK-A1|FK-A3/i.test(mod);const model=(mod.match(/RTK-?(11|12|13)/i)||[])[0];name.textContent=mod?`${mod} ${t(isBase?'guide.baseStation':'guide.rover').replace(/^RTK\s*/i,'')}`:t('summary.defaultDevice');let src='';if(model){const key=model.toUpperCase().replace('RTK','RTK-');const map={ 'RTK-11':isBase?'单天线.png':'移动站.png', 'RTK-12':isBase?'单天线-1.png':'双天线-1.png', 'RTK-13':isBase?'单天线.png':'移动站-1.png' };src=map[key]?`./资料/RTK/${map[key]}`:'';}else if(/FK-A1|FK-A3/i.test(mod))src='./资料/RTK/单天线.png';else if(/FK-C1|FK-D1/i.test(mod))src='./资料/RTK/移动站.png';image.src=src;image.hidden=!src;}
function updateConnectionGuide(){const guide=document.getElementById('connectionGuide');if(!guide)return;const connected=!!(state.running||state.port||state.reader||state.replayRecords.length);guide.classList.toggle('is-hidden',connected);document.body.classList.toggle('has-connection',connected);const status=document.getElementById('connectionGuideStatus');if(status)status.textContent=connected?t('status.running'):t('guide.waiting');if(typeof layoutPanels==='function')layoutPanels();}
function updateMonitorSummary() {
  if (!document.getElementById('monitorSummary')) return;
  const base = state.connectedDeviceType === 'base' ? state.basePosition : null;
  const fix = base ? {
    mode: getStationFixText(base.fixStatus),
    satelliteCount: base.satelliteCount,
    lon: base.positionValid ? base.lon : null,
    lat: base.positionValid ? base.lat : null,
    altitude: base.positionValid ? base.altitude : null,
  } : (state.fix || {});
  const stations = [...state.mobileStations.values()];
  const online = stations.filter(station => isStationOnline(station)).length;
  const set = (id, value) => { const node = document.getElementById(id); if (node) node.textContent = value; };
  const mode = fix.mode && fix.mode !== '--' ? fix.mode : t('status.noFix');
  const lon = Number.isFinite(fix.lon) ? fix.lon.toFixed(6) : '--';
  const lat = Number.isFinite(fix.lat) ? fix.lat.toFixed(6) : '--';
  set('summaryFixState', mode);
  set('summaryStationCount', stations.length);
  set('summaryOnlineCount', online);
  set('summarySatelliteCount', base ? base.satelliteCount : (fix.satelliteCount || state.satellites?.size || 0));
  const altitude = Number.isFinite(fix.altitude) ? fix.altitude.toFixed(2) + ' m' : '--';
  set('summaryAltitude', altitude);
  set('summaryLon', lon);
  set('summaryLat', lat);
  set('telemetryMode', mode);
  set('telemetryLon', lon);
  set('telemetryLat', lat);
  set('telemetryAltitude', Number.isFinite(fix.altitude) ? fix.altitude.toFixed(1) + ' m' : '--');
  set('telemetrySpeed', Number.isFinite(fix.speedKmh) ? fix.speedKmh.toFixed(1) + ' km/h' : '--');
  set('telemetryCourse', Number.isFinite(fix.course) ? fix.course.toFixed(1) + '°' : '--');
  document.getElementById('summaryConnectionDot')?.classList.toggle('active', !!state.running);
}

function setRunningKey(active,key,params={}){state.running=active;state.lastRunningTextKey=key;state.lastRunningTextParams=params;state.lastPlainStatusText='';els.connectionState.textContent=active?formatSerialConnectionLabel():t('status.disconnected');els.idleState.textContent=t(key,params);els.statusLed.classList.toggle('active',active);updateConnectButton();updateConnectionGuide();if(active)hidePortStatus();}
function isReplayStatusKey(key){return typeof key==='string'&&key.startsWith('replay.');}
function isReplayOnlyMode(){return !!state.replayRecords.length&&!state.port&&!state.reader;}
function setStatus(text){state.lastStatusTextKey='';state.lastStatusTextParams={};state.lastPlainStatusText=text;if(state.running&&els.debugState&&!isReplayOnlyMode())els.debugState.textContent=text;else{if(els.debugState&&isReplayOnlyMode())setDebugStateNoLog();els.idleState.textContent=text;}}
function setStatusKey(key,params={}){state.lastStatusTextKey=key;state.lastStatusTextParams=params;const text=t(key,params);if(state.running&&els.debugState&&!isReplayStatusKey(key)&&!isReplayOnlyMode())els.debugState.textContent=text;else{if(els.debugState&&(isReplayStatusKey(key)||isReplayOnlyMode()))setDebugStateNoLog();els.idleState.textContent=text;}}
function refreshStatusTexts(){if(!els.connectionState)return;els.connectionState.textContent=state.running?formatSerialConnectionLabel():(state.replayRecords.length?t('replay.connection'):t('status.disconnected'));const runningText=state.lastRunningTextKey?t(state.lastRunningTextKey,state.lastRunningTextParams):(state.running?t('status.running'):t('status.idle'));if(state.running){els.idleState.textContent=runningText;if(els.debugState&&(isReplayStatusKey(state.lastStatusTextKey)||isReplayOnlyMode()))setDebugStateNoLog();else if(state.lastStatusTextKey&&els.debugState)els.debugState.textContent=t(state.lastStatusTextKey,state.lastStatusTextParams);else if(state.lastPlainStatusText&&els.debugState)els.debugState.textContent=state.lastPlainStatusText;return;}if(state.lastStatusTextKey){els.idleState.textContent=t(state.lastStatusTextKey,state.lastStatusTextParams);}else if(state.lastPlainStatusText){els.idleState.textContent=state.lastPlainStatusText;}else{els.idleState.textContent=runningText;}}
function resetLiveData(options={}){clearData({...options,silent:true,keepConnection:options.keepConnection});}
function updateRuntime(){const s=Math.floor((Date.now()-state.startTime)/1000);els.runtimeState.textContent=t('status.runtime')+String(Math.floor(s/3600)).padStart(2,'0')+':'+String(Math.floor(s%3600/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');}
function downloadScatterCsv(){if(!state.scatterPoints.length){setStatusKey('status.noScatterToSave');return;}const rows=['lat,lon,time',...state.scatterPoints.map(p=>p.lat+','+p.lon+','+new Date(p.time).toISOString())];const blob=new Blob([rows.join('\n')],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='gnss-scatter-'+Date.now()+'.csv';a.click();URL.revokeObjectURL(a.href);setStatusKey('status.scatterSaved');}

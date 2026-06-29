# GNSS网页版上位机

这是参考 `iNavTool_V4284.exe` 工作台布局制作的本地网页版原型，当前包含：

- NMEA视图
- 卫星视图
- 信号视图
- 消息视图
- 散点图
- 地图视图

## 本地运行

```powershell
cd F:\dss\V4284\GNSS网页版上位机
npm run dev
```

启动后访问控制台输出的本地地址，通常是：

```text
http://127.0.0.1:5173
```

如果 PowerShell 提示 `npm.ps1` 被执行策略禁止，可以直接运行：

```powershell
node server.js
```

只查看界面和示例回放时，也可以直接用浏览器打开 `index.html`。真实串口建议用本地服务方式访问。

## 当前能力

- 内置示例NMEA数据，可直接查看六个视图联动。
- 支持加载本地 `.txt`、`.log`、`.nmea` 文件做回放解析。
- 支持浏览器 Web Serial API 打开串口，建议使用 Chrome 或 Edge。
- 支持解析 `GGA`、`RMC`、`GLL`、`GSA`、`GSV`、`VTG` 常用NMEA语句。

## 后续建议

1. 接入真实接收机串口，确认波特率和NMEA输出频率。
2. 用真实日志补充解析边界测试。
3. 增加设备配置、日志保存、地图瓦片源、回放进度条。

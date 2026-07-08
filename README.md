# CORVON TOF

CORVON TOF 是面向客户现场调试和模块验证的网页上位机网站。当前网站包含 GNSS/NMEA/UBX 数据查看、串口连接、卫星信号、消息解析、散点图、地图定位和在线说明书。

## 客户访问

GitHub Pages 发布后，客户可以打开：

```text
https://dss-wy.github.io/GNSS/
```

网站入口：

- `index.html`：客户网站首页
- `tool.html`：网页版上位机工具页
- `CORVON GNSS Tool操作说明书v1.0.pdf`：在线操作说明书

## 浏览器要求

真实串口连接依赖浏览器 Web Serial API，建议客户使用：

- Microsoft Edge
- Google Chrome

在线访问 GitHub Pages 时为 HTTPS；现场调试也可以通过本地服务 `http://127.0.0.1:5173/tool.html` 使用。

## 本地运行

```powershell
cd F:\dss\V4284\GNSS网页版上位机
npm run dev
```

启动后访问：

```text
http://127.0.0.1:5173/
```

也可以直接双击：

```text
打开GNSS网页版.bat
```

## GitHub Pages 首次设置

仓库地址：

```text
https://github.com/dss-wy/GNSS
```

首次发布时，在 GitHub 仓库里设置：

1. 打开 `Settings`
2. 进入 `Pages`
3. `Source` 选择 `GitHub Actions`
4. 保存后推送 `main` 分支
5. 在 `Actions` 页面等待 `Deploy CORVON TOF` 成功

发布流程只会上传客户网站需要的静态文件：`index.html`、`tool.html`、脚本、样式、图标、PDF 说明书和 `assets` 资源目录。

## 更新发布

以后更新网站只需要提交并推送：

```powershell
cd F:\dss\V4284\GNSS网页版上位机
git status
git add .
git commit -m "发布 CORVON TOF 网站更新"
git push origin main
```

推送成功后，GitHub Actions 会自动发布到：

```text
https://dss-wy.github.io/GNSS/
```

## 当前能力

- 支持浏览器串口打开和关闭
- 支持自动识别波特率
- 支持 NMEA、UBX、信号、消息、散点图和地图视图
- 支持视图最小化、恢复、拖动、拉伸和 Reset 恢复默认布局
- 支持中文/英文界面切换
- 支持浅色/深色背景
- 支持在线查看 PDF 操作说明书

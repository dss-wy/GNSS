@echo off
cd /d "%~dp0"
start "" cmd /k "node server.js"
timeout /t 1 >nul
start "" "http://127.0.0.1:5173/tool.html"

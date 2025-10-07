@echo off
taskkill /F /IM python.exe >nul 2>&1
cd /d %~dp0
start "" http://localhost:8893
python -m http.server 8893 --bind 127.0.0.1 --directory . --cgi
exit

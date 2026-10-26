@echo off
cd /d "%~dp0"
rem 8123 was taken by old servers serving an outdated copy; 127.0.0.1 (not localhost) so an IPv6 listener cannot answer instead
start "" http://127.0.0.1:8137/
python -m http.server 8137 --bind 127.0.0.1

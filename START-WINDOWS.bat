@echo off
cd /d "%~dp0"

where py >nul 2>nul
if %errorlevel%==0 (
  start "DHTA local server" cmd /k py -3 serve.py
  goto opened
)

where python >nul 2>nul
if %errorlevel%==0 (
  start "DHTA local server" cmd /k python serve.py
  goto opened
)

where wsl.exe >nul 2>nul
if %errorlevel%==0 (
  for /f "delims=" %%I in ('wsl.exe wslpath -a "%CD%"') do set "DHTA_WSL_DIR=%%I"
  start "DHTA local server" wsl.exe bash -lc "cd '%DHTA_WSL_DIR%' && python3 serve.py"
  goto opened
)

echo Nie znaleziono Pythona ani WSL. Zainstaluj Python 3 i uruchom plik ponownie.
pause
exit /b 1

:opened
timeout /t 2 /nobreak >nul
start "" http://localhost:8000/

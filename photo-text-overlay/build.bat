@echo off
cd /d "%~dp0"

echo [1/3] Installing packages...
python -m pip install pillow pyinstaller

echo [2/3] Building EXE...
python -m PyInstaller --onefile --windowed --name PhotoTextOverlay photo_text_overlay.py

echo.
echo Done! EXE file at: dist\PhotoTextOverlay.exe
pause

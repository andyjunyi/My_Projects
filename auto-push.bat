@echo off
cd /d E:\My_Projects
echo My_Projects - Auto Push
echo ======================
echo.
REM 檢查是否有變更
git status --porcelain >nul 2>&1
if %errorlevel% neq 0 (
    echo Git repository not found.
    pause
    exit /b
)

git status --porcelain > %temp%\git_status.txt
set /p HAS_CHANGES=<%temp%\git_status.txt
if "%HAS_CHANGES%"=="" (
    echo No changes to commit.
    pause
    exit /b
)

echo Changes detected:
git status --short
echo.

git add -A
git commit -m "Auto-update %date% %time%"
git push origin main

echo.
echo === Done! ===
pause

@echo off
cd /d %~dp0
python build_projects_data.py
echo.
echo Done! Refresh the GitHub Pages site to see changes.
pause

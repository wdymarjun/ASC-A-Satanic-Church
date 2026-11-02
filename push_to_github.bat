@echo off
echo ====================================================
echo ASC -- A Satanic Church Website -- GitHub Push Helper
echo ====================================================
echo.
echo Target: https://github.com/wdymarjun/ASC-A-Satanic-Church.git (Private Repository)
echo.
echo Pushing branch 'main' to GitHub...
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Pushed successfully to GitHub!
) else (
    echo [NOTE] If repository does not exist yet, create it as a PRIVATE repo at:
    echo        https://github.com/new?name=ASC-A-Satanic-Church
    echo.
    echo If GitHub CLI is needed to authenticate, run:
    echo        gh auth login
)
echo.
pause


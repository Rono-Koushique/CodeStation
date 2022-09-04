@echo off

set /p name=Enter folder name : 

md %name%

echo > %name%/%name%.jsx
echo > %name%/%name%.scss
pause
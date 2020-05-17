@echo off
echo Commit: 
set /p commit=
::echo %commit%
git add -A
git commit -m "%commit%"
git push -u origin site-sources -f
close
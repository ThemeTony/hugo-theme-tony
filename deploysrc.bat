@echo off
hugo --gc --minify --cleanDestinationDir
cd public
git add -A
echo Commit: 
set /p commit=
::echo %commit%
git commit -m "%commit%"
git push -u origin gh-pages -f
cd ../themes/tony
git add -A
echo Commit: 
git commit -m "%commit%"
git push -u origin master -f
close
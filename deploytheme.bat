@echo off
rm -rf resources
hugo
mkdir themes\tony\exampleSite\resources\_gen
cp -r resources/_gen/assets* themes/tony/exampleSite/resources/_gen/
cd themes/tony
git add -A
echo Commit: 
set /p commit=
::echo %commit%
git commit -m "%commit%"
git push -u origin master -f
close
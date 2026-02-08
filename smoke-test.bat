@echo off
set URL=http://localhost:3000

curl -o NUL -s -w "%%{http_code}" %URL% > status.txt

set /p STATUS=<status.txt

if "%STATUS%"=="200" (
  echo Smoke Test PASSED
  exit /b 0
) else (
  echo Smoke Test FAILED - Status = %STATUS%
  exit /b 1
)
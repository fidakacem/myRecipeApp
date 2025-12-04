#!/bin/sh

URL=http://localhost:3000

STATUS=$(curl -o /dev/null -s -w "%{http_code}" $URL)

if [ "$STATUS" -eq 200 ]; then
  echo "Smoke Test PASSED"
  exit 0
else
  echo "Smoke Test FAILED - Status = $STATUS"
  exit 1
fi
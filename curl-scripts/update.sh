#!/bin/bash

curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author": "'"${AUTHOR}"'"
    }
  }'

echo

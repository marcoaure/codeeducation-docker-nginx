#!/bin/bash

/usr/src/wait-for-it/wait-for-it.sh db:3306 --strict --timeout=300
node migration.js up
node index.js

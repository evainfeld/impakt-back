#!/bin/bash
DIR=$(pwd)
for var in "$@"
do
    cd ${DIR}/amplify/backend/function/$var/src && npm install
done
cd ${DIR} 
echo "node_modules for [$@] refreshed"

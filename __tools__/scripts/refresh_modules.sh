#!/bin/bash
DIR=$(pwd)
lambda="$(ls ${DIR}/amplify/backend/function)"
for var in $lambda
do
    echo "refresing module [$var]"
    cd ${DIR}/amplify/backend/function/$var/src && npm install
done
cd ${DIR} 
echo "node_modules for [$lambda] refreshed"


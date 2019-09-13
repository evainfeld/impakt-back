#!/bin/bash
DIR=$(pwd)
cd ${DIR}/amplify/backend/function/$1/src && mkdir tmp/ && cp -RL node_modules/ tmp/ && rm -rf node_modules/ && mv tmp node_modules
cd ${DIR} 
echo "symlinks replaced for [$1]"



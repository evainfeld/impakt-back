#!/bin/bash
DIR=$(pwd)
cd ${DIR}/amplify/backend/function/$1/src && mkdir tmp/ && cp -RL node_modules/ tmp/ && rm -rf node_modules/ && mv tmp node_modules
rm -rf node_modules/__test__ && rm -rf node_modules/__mock__
cd ${DIR} 
echo "symlinks replaced for [$1]"



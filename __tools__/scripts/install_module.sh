#!/bin/bash
DIR=$(pwd)
lambda="$(ls ${DIR}/amplify/backend/function)"
for var in $lambda
do
    echo "installing for [$var]"
    cd ${DIR}/amplify/backend/function/$var/src && npm install $1
done
cd ${DIR} 
echo "module installed for [$lambda]"

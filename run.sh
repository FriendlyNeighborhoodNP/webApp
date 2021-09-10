#! /bin/bash

cd client
yarn build
cd ..
APPENV=dev go run *.go
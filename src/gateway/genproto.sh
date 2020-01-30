#!/bin/bash -e

PATH=$PATH:$GOPATH/bin
protodir=../../pb

protoc --go_out=plugins=grpc:genproto -I $protodir -I $GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis $protodir/demo.proto

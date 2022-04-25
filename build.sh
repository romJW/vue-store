#!/bin/sh

VERSION=$1
TAG=registry.gitlab.com/croxware/ecom.client:$VERSION

docker build -t $TAG .
docker push $TAG

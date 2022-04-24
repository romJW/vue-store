#!/bin/sh

DOMAIN=$1
VERSION=$2
TAG=registry.gitlab.com/croxware/ecom.client/$DOMAIN:$VERSION

docker build -t $TAG .
docker push $TAG

#!/bin/sh

VERSION=$(git name-rev HEAD --tags | awk '{sub("tags/", ""); print $2}')
TAG=registry.gitlab.com/croxware/ecom.client:$VERSION

docker build -t $TAG .
docker push $TAG

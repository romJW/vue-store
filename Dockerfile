from node:14-alpine as builder
workdir /app
run apk add --no-cache curl
run mkdir /tmp/node-prune \
    && cd /tmp/node-prune \
    && curl -#L https://github.com/tj/node-prune/releases/download/v1.0.1/node-prune_1.0.1_linux_amd64.tar.gz \
    | tar -xvzf- \
    && mv --verbose ./node-prune /usr/local/bin/node-prune \
    && chmod +x /usr/local/bin/node-prune \
    && cd / \
    && rm -rvf /tmp/node-prune/
run echo "yarn cache clean && node-prune" > /usr/local/bin/node-clean \
    && chmod +x /usr/local/bin/node-clean
add package.json yarn.lock ./
run yarn --frozen-lockfile --non-interactive
run node-clean
add . ./
# Use for server
run yarn build
# Use for static
# run yarn generate

from node:14-alpine
workdir /app
# NOTE: important to have after install
# REF : https://github.com/nuxt-community/eslint-module/issues/37
#       NODE_ENV production in your Dockerfile makes it doesn't
#       install devDependencies
env NODE_ENV "production"
env PORT "8000"
add package.json ./
add nuxt.config.js ./
copy --from=builder ./app/node_modules ./node_modules/
# Use for server
copy --from=builder ./app/.nuxt ./.nuxt/
# Use for static
# copy --from=builder ./app/dist ./dist/
copy --from=builder ./app/static ./static/
expose 8000
cmd [ "yarn", "start" ]

#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT"

mkdir -p target public/cljs

npm install

./scripts/build-fennel.sh

npx shadow-cljs release client
npx shadow-cljs release server

npm run build:melange

if command -v openresty >/dev/null 2>&1; then
    openresty -t
fi

printf '%s\n' "SCROV build complete"

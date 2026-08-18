#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT"

npm run build

if command -v openresty >/dev/null 2>&1; then
    sudo openresty -t
    sudo openresty -s reload
fi

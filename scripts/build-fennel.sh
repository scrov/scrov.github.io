#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT"

mkdir -p lua

fennel --compile fennel/api.fnl > lua/api.lua
fennel --compile fennel/proxy.fnl > lua/proxy.lua
fennel --compile fennel/auth.fnl > lua/auth.lua

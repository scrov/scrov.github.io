#!/usr/bin/env bash

set -euo pipefail

PORT="${PORT:-3000}"

export PORT

exec sleep infinity

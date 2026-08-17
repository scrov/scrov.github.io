#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HOST="$ROOT/scrov-host.js"
MANIFEST="$ROOT/scrov-host.json"
TARGET="$HOME/.mozilla/native-messaging-hosts/scrov_host.json"

mkdir -p "$HOME/.mozilla/native-messaging-hosts"

chmod +x "$HOST"

node -e '
const fs = require("fs");
const path = process.argv[1];
const manifest = JSON.parse(fs.readFileSync(path, "utf8"));
manifest.path = process.argv[2];
fs.writeFileSync(path, JSON.stringify(manifest, null, 2));
' "$MANIFEST" "$HOST"

cp "$MANIFEST" "$TARGET"

echo "Installed SCROV native host:"
echo "$TARGET"

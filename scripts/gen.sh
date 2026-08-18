#!/usr/bin/env bash
set -euo pipefail

TREE_FILE="${1:?Usage: $0 <tree.txt>}"

declare -a STACK=()
ROOT=""

while IFS= read -r line || [[ -n "$line" ]]; do
    line="${line//$'\r'/}"

    [[ -z "${line//[[:space:]]/}" ]] && continue

    if [[ "$line" != *"├── "* && "$line" != *"└── "* ]]; then
        ROOT="${line#"${line%%[![:space:]]*}"}"
        STACK[0]="$ROOT"
        mkdir -p "$ROOT"
        continue
    fi

    prefix="${line%%├──*}"
    [[ "$line" == *"└── "* ]] && prefix="${line%%└──*}"

    name="${line#*├── }"
    [[ "$line" == "$prefix"* ]] || name="${line#*└── }"

    name="${name#"${name%%[![:space:]]*}"}"
    name="${name%"${name##*[![:space:]]}"}"

    depth=$(( ${#prefix} / 4 + 1 ))

    parent="$ROOT"

    if (( depth > 1 )); then
        parent="${STACK[depth-1]}"
    fi

    path="$parent/$name"

    if [[ "$name" == */ ]]; then
        dir="${path%/}"
        mkdir -p "$dir"
        STACK[$depth]="$dir"
    elif [[ "$name" == *.* ]]; then
        mkdir -p "$(dirname "$path")"
        touch "$path"
    else
        mkdir -p "$path"
        STACK[$depth]="$path"
    fi

done < "$TREE_FILE"

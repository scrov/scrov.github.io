#!/usr/bin/env bash
set -Eeuo pipefail
IFS=$'\n\t'

ROOT="${1:-.}"
ROOT="$(cd "$ROOT" && pwd)"
DUPE_FILE="$ROOT/dupes.txt"
ZIP_DIR="$ROOT/zip"

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

echo "Scanning: $ROOT"

printf '%s\n' "=== Empty directories removed ===" > "$DUPE_FILE"
find "$ROOT" -depth -type d -empty -not -path "$ZIP_DIR" -print -delete 2>/dev/null || true

printf '%s\n' "" >> "$DUPE_FILE"
printf '%s\n' "=== Duplicate files: identical filename + identical content ===" >> "$DUPE_FILE"

HASH_FILE="$TMP_DIR/files.tsv"

while IFS= read -r -d '' file; do
    name="${file##*/}"

    if [[ -r "$file" ]]; then
        hash="$(sha256sum -- "$file" | awk '{print $1}')"
        printf '%s\t%s\t%s\0' "$name" "$hash" "$file" >> "$HASH_FILE"
    fi
done < <(
    find "$ROOT" \
        -type f \
        -not -path "$ZIP_DIR/*" \
        -print0 2>/dev/null
)

python3 - "$HASH_FILE" "$DUPE_FILE" <<'PY'
import sys
from collections import defaultdict

source = sys.argv[1]
output = sys.argv[2]

groups = defaultdict(list)

with open(source, "rb") as f:
    data = f.read().split(b"\0")

for record in data:
    if not record:
        continue

    parts = record.split(b"\t", 2)
    if len(parts) != 3:
        continue

    name, digest, path = parts
    groups[(name, digest)].append(path.decode("utf-8", "surrogateescape"))

with open(output, "a", encoding="utf-8", errors="surrogateescape") as out:
    duplicate_groups = 0
    duplicate_files = 0

    for (name, digest), paths in sorted(
        groups.items(),
        key=lambda item: (item[0][0].decode("utf-8", "surrogateescape"),
                          item[0][1].decode())
    ):
        if len(paths) < 2:
            continue

        verified = True
        with open(paths[0], "rb") as first:
            first_data = first.read()

        for path in paths[1:]:
            with open(path, "rb") as other:
                if other.read() != first_data:
                    verified = False
                    break

        if not verified:
            continue

        duplicate_groups += 1
        duplicate_files += len(paths)

        out.write("\n")
        out.write(f"NAME: {name.decode('utf-8', 'surrogateescape')}\n")
        out.write(f"SHA256: {digest.decode()}\n")

        for path in paths:
            out.write(f"  {path}\n")

    out.write("\n")
    out.write(f"Duplicate groups: {duplicate_groups}\n")
    out.write(f"Files involved: {duplicate_files}\n")
PY

echo "Duplicate report written to: $DUPE_FILE"

echo "Searching for node_modules directories..."

while IFS= read -r -d '' node_dir; do
    printf 'Removing: %s\n' "$node_dir"
    rm -rf -- "$node_dir"
done < <(
    find "$ROOT" \
        -type d \
        -name node_modules \
        -prune \
        -print0 2>/dev/null
)

mkdir -p "$ZIP_DIR"

echo "Searching for ZIP files..."

while IFS= read -r -d '' zip_file; do
    base_name="${zip_file##*/}"
    destination="$ZIP_DIR/$base_name"

    if [[ "$zip_file" == "$destination" ]]; then
        continue
    fi

    if [[ -e "$destination" ]]; then
        stem="${base_name%.zip}"
        extension=".zip"
        counter=1

        while [[ -e "$ZIP_DIR/${stem}_${counter}${extension}" ]]; do
            ((counter++))
        done

        destination="$ZIP_DIR/${stem}_${counter}${extension}"
    fi

    printf 'Moving: %s -> %s\n' "$zip_file" "$destination"
    mv -- "$zip_file" "$destination"
done < <(
    find "$ROOT" \
        -type f \
        \( -iname '*.zip' \) \
        -not -path "$ZIP_DIR/*" \
        -print0 2>/dev/null
)

echo
echo "=== Scan complete ==="
echo "Duplicate report : $DUPE_FILE"
echo "ZIP directory    : $ZIP_DIR"

#!/usr/bin/env bash
set -euo pipefail

TREE_FILE="${1:-tree.txt}"
OUTPUT="${2:-generated-tree.sh}"

[[ -f "$TREE_FILE" ]] || {
    printf 'Error: missing %s\n' "$TREE_FILE" >&2
    exit 1
}

cat > "$OUTPUT" <<'SCRIPT'
#!/usr/bin/env bash
set -euo pipefail
SCRIPT

declare -a stack=()

cat "$TREE_FILE" |
while IFS= read -r line || [[ -n "$line" ]]; do

    [[ -z "${line//[[:space:]]/}" ]] && continue

    if [[ "$line" =~ ^([[:space:]│]*)(├──|└──)[[:space:]]*(.*)$ ]]; then

        prefix="${BASH_REMATCH[1]}"
        name="${BASH_REMATCH[3]}"

        depth=$(( ${#prefix} / 4 ))

        stack[$depth]="$name"

        for ((i=depth+1; i<${#stack[@]}; i++)); do
            unset 'stack[i]'
        done

        path=""

        for ((i=0; i<=depth; i++)); do
            [[ -z "${stack[i]:-}" ]] && continue

            if [[ -z "$path" ]]; then
                path="${stack[i]}"
            else
                path="$path/${stack[i]}"
            fi
        done

        if [[ "$name" == */ ]]; then
            printf 'mkdir -p -- %q\n' "${path%/}" >> "$OUTPUT"
        else
            printf 'mkdir -p -- %q\n' "$(dirname -- "$path")" >> "$OUTPUT"
            printf 'touch -- %q\n' "$path" >> "$OUTPUT"
        fi

    elif [[ "$line" =~ ^([^│├└[:space:]].*)$ ]]; then

        name="${BASH_REMATCH[1]}"

        if [[ "$name" == */ ]]; then
            printf 'mkdir -p -- %q\n' "${name%/}" >> "$OUTPUT"
        else
            printf 'mkdir -p -- %q\n' "$(dirname -- "$name")" >> "$OUTPUT"
            printf 'touch -- %q\n' "$name" >> "$OUTPUT"
        fi

    fi

done

chmod +x "$OUTPUT"

printf 'Generated: %s\n' "$OUTPUT"
printf 'Execute with:\n\n'
printf '  ./%s\n' "$OUTPUT"

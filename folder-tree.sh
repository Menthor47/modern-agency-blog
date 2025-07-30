#!/bin/bash

# Bash script to generate a folder structure tree
# Usage: ./folder-tree.sh [output_file] [max_depth]
# Example: ./folder-tree.sh structure.md 3

OUTPUT_FILE="${1:-folder_structure.md}"
MAX_DEPTH="${2:-}"

# Function to generate tree structure
generate_tree() {
    local dir="$1"
    local prefix="$2"
    local is_last="$3"
    local current_depth="$4"
    
    # Check if we've reached max depth
    if [[ -n "$MAX_DEPTH" && "$current_depth" -gt "$MAX_DEPTH" ]]; then
        return
    fi
    
    local items=()
    local item
    
    # Get all items in directory, sort them (directories first, then files)
    while IFS= read -r -d '' item; do
        items+=("$item")
    done < <(find "$dir" -maxdepth 1 -not -path "$dir" -print0 | sort -z)
    
    local total=${#items[@]}
    local count=0
    
    for item in "${items[@]}"; do
        ((count++))
        local basename_item=$(basename "$item")
        
        # Skip hidden files/folders if desired (uncomment next line)
        # [[ "$basename_item" =~ ^\. ]] && continue
        
        local is_item_last=$((count == total))
        local current_prefix
        local next_prefix
        
        if [[ $is_item_last -eq 1 ]]; then
            current_prefix="$prefix└── "
            next_prefix="$prefix    "
        else
            current_prefix="$prefix├── "
            next_prefix="$prefix│   "
        fi
        
        if [[ -d "$item" ]]; then
            echo "$current_prefix**$basename_item/**" >> "$OUTPUT_FILE"
            generate_tree "$item" "$next_prefix" "$is_item_last" $((current_depth + 1))
        else
            echo "$current_prefix$basename_item" >> "$OUTPUT_FILE"
        fi
    done
}

# Start generating the tree
echo "# Folder Structure" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "\`\`\`" >> "$OUTPUT_FILE"

# Get the current directory name
current_dir=$(basename "$(pwd)")
echo "**$current_dir/**" >> "$OUTPUT_FILE"

# Generate tree starting from current directory
generate_tree "." "" 1 1

echo "\`\`\`" >> "$OUTPUT_FILE"

echo "Folder structure saved to: $OUTPUT_FILE"

# Optional: Open the file (uncomment for auto-open)
# if command -v code &> /dev/null; then
#     code "$OUTPUT_FILE"
# elif command -v notepad &> /dev/null; then
#     notepad "$OUTPUT_FILE"
# fi
#!/bin/bash

# Find all HTML files in the services directory
find services -name "*.html" -type f | while read -r file; do
    echo "Updating $file..."
    
    # Remove existing footer if any
    sed -i "" "/<footer/,/<\/footer>/d" "$file"
    
    # Remove existing year script if any
    sed -i "" "/<script>\/\/ Footer year/d" "$file"
    
    # Add footer placeholder before closing body tag
    if ! grep -q "footer-placeholder" "$file"; then
        sed -i "" "s@</body>@<div id=\"footer-placeholder\"></div>\n    <script src=\"/assets/footer-loader.js\" defer></script>\n</body>@" "$file"
    fi
    
    echo "Updated $file"
done

echo "All service pages updated with the new footer component."

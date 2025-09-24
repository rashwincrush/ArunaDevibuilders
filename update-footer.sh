#!/bin/bash

# List of main pages to update
pages=("about.html" "contact.html" "projects.html" "payments.html")

for page in "${pages[@]}"; do
    if [ -f "$page" ]; then
        echo "Updating $page..."
        
        # Remove existing footer
        sed -i "" "/<footer/,/<\/footer>/d" "$page"
        
        # Remove existing year script
        sed -i "" "/<script>\/\/ Footer year/d" "$page"
        
        # Add footer placeholder before closing body tag
        sed -i "" "s@</body>@<div id=\"footer-placeholder\"></div>\n    <script src=\"/assets/footer-loader.js\" defer></script>\n</body>@" "$page"
        
        echo "Updated $page"
    fi
done

echo "All main pages updated with the new footer component."

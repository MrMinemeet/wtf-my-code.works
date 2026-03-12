#!/bin/bash

# Deployment script to run after pulling changes

# Minify HTML
if [ -f "index.html" ]; then
  pnpm exec minify index.html > index.min.html
  mv index.min.html index.html
  echo "Minified index.html"
fi

# Minify CSS
if [ -f "assets/css/critical.css" ]; then
  pnpm exec minify assets/css/critical.css > assets/css/critical.min.css
  mv assets/css/critical.min.css assets/css/critical.css
  echo "Minified critical.css"
fi

if [ -f "assets/css/non-critical.css" ]; then
  pnpm exec minify assets/css/non-critical.css > assets/css/non-critical.min.css
  mv assets/css/non-critical.min.css assets/css/non-critical.css
  echo "Minified non-critical.css"
fi

# Minify JS
if [ -f "assets/scripts/util.js" ]; then
  pnpm exec minify assets/scripts/util.js > assets/scripts/util.min.js
  mv assets/scripts/util.min.js assets/scripts/util.js
  echo "Minified util.js"
fi

# Add other operations here

echo "Deployment tasks completed."
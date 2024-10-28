#!/bin/bash

# Exit immediately if a command exits with a non-zero status
# Exit immediately if an undefined variable is encountered
set -eu

# Include functions from library
source '../../function-library.sh'

# Increase allocated memory to prevent wasm out of memory error
print "increasing allocated memory (wasm memory error prevention).\n"
ulimit -n 8192
ulimit -u 256
ulimit -v 67108864
ulimit -t 1200

# Remove node_modules and package-lock.json
print "removing package lock setup.\n"
rm -fr package-lock.json

# Install all necessary packages
print "installing component packages and dependencies.\n"
npm install

# Compile React components to static files
print "compiling components.\n"
#! moved to make.sh
#! npm run build
npx tsc
# Build to static/[parent directory]
npx vite build --base=./ --outDir=../../.static

# Finalization
print "component build step complete.\n"
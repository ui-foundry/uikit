#!/bin/bash
set -e

echo -n "🧹 Cleaning in progress"

# Spinner function
spin() {
  while :; do
    for s in / - \\ \|; do
      echo -ne "\r🧹 Cleaning in progress $s"
      sleep 0.1
    done
  done
}

# Start spinner in background
spin &
SPIN_PID=$!

# Trap script exit and kill spinner cleanly
trap "kill $SPIN_PID 2>/dev/null" EXIT

# Run cleanup
npx rimraf ./docs/node_modules
npx rimraf ./docs/.vitepress/cache
npx rimraf ./node_modules

# Wait a bit and finish
sleep 0.2
echo -e "\r✅ Cleanup complete        "

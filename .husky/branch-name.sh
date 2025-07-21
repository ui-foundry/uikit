#!/usr/bin/env bash

# Colors
RED='\033[0;31m'
YELLOW='\033[0;33m'
GREEN='\033[0;32m'
CLEARCOLOR='\033[0m'

# Get current branch name
local_branch_name="$(git rev-parse --abbrev-ref HEAD)"

# Allowed prefixes
allowed_branch_names="feature|bugfix|hotfix|release|chore"

# Regex pattern
branch_name_check="^(${allowed_branch_names})\/[a-zA-Z0-9._-]+$"

# Error message
message="❌ ${RED}Invalid branch name: '${local_branch_name}'${CLEARCOLOR}\n
Branch names in this project must follow the pattern:\n
  <prefix>/<descriptive-name>\n
Where <prefix> is one of:\n
  ${YELLOW}${allowed_branch_names//|/, }${CLEARCOLOR}\n
${YELLOW}Please rename your branch and try again.${CLEARCOLOR}"

# Validate branch name (skip main)
if [[ "$local_branch_name" != "main" && ! "$local_branch_name" =~ $branch_name_check ]]; then
  echo -e "$message"
  exit 1
fi

echo -e "✅ ${GREEN}Branch name '${local_branch_name}' is valid.${CLEARCOLOR}"
exit 0

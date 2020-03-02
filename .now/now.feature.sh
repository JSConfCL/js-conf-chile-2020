#!/bin/bash
set -e

CLEAN_BRANCH_NAME=${CIRCLE_BRANCH//\//-};

JSON=$(cat <<-EOF
{
    "name": "$CIRCLE_PROJECT_REPONAME-$CLEAN_BRANCH_NAME",
    "version": 2,
    "alias": [
        "$CLEAN_BRANCH_NAME-circleci-now.jsconfcl.now.sh"
    ]
}
EOF
)

echo $JSON > .now/now.feature.json
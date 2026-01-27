#!/usr/bin/env bash

set -e

libs=$(find dist -name 'package.json' -not -path "*/node_modules/*" -printf '%h\n' | sort -u)
for lib in ${libs[@]}; do
    lib_name=$(echo "${lib}" | sed -e "s/^dist\///g" | sed -e "s/\//-/g")

    echo "Publishing @saltoapis/${lib_name} package"
    npm publish --registry https://npm.pkg.github.com/ "${lib}/"
    echo "Package published"
    echo ""
done

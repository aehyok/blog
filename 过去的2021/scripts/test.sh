#!/usr/local/bin/bash

tags=$(git tag)
result=$(echo $tags | grep "2.0.0.005")

if [[ "$result" != "" ]]
then
    echo "$s1 include $s2"
else
    echo "$1 not include $s2"
fi

echo "$result"

declare -A map=(
    ["v2d1"]="/epg/100"
    ["v2d3"]="/epg/101"
)


# 更新 commons 代码
deploy() {
    for i in ${map[@]}
    do
        common=$EPG_HOME/$i/src/commons
        echo "->" $common
        cd $common
        (git checkout master && git pull) &
    done
}

name="100.1.0.0.001"
newname=${name#*.}
echo $newname


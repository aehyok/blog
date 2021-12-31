#!/usr/local/bin/bash
source $EPG_NC_HOME/scripts/color.sh
www="/Library/WebServer/Documents"
epg_www_dir=""

error() {
    echo_font_red "[Error] $1"
}

warn() {
    echo_font_yellow "[Warning] $1"
}

tip() {
    echo_font_green "[Tip] $1"
}

create_local_dir() {
    if [ "$1" = "v2d1" ]; then
        v21="$www/epg/100"
        if [ ! -e $v21 ]; then
            tip "creating $v21"
            sudo mkdir -p $v21
        fi
        epg_www_dir="$v21"
    elif [ "$1" = "v2d3" ]; then
        v23="$www/epg/101"
        if [ ! -e $v23 ]; then
            tip "creating $v23"
            sudo mkdir -p $v23
        fi
        epg_www_dir="$v23"
    fi
}

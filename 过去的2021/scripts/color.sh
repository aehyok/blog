#!/usr/local/bin/bash

echo_font_color() {
    message="$1"
    color=$2

    case "$color" in
        "black") echo -e "\033[30m $message \033[0m";;
        "red") echo -e "\033[31m $message \033[0m";;
        "green") echo -e "\033[32m $message \033[0m";;
        "yellow") echo -e "\033[33m $message \033[0m";;
        "blue") echo -e "\033[34m $message \033[0m";;
        "pink") echo -e "\033[35m $message \033[0m";;
        "skyblue") echo -e "\033[36m $message \033[0m";;
        "white") echo -e "\033[37m $message \033[0m";;
    esac

}


echo_bg_color() {
    message="$1"
    color=$2

    case "$color" in
        "black") echo -e "\033[40;37m $message \033[0m";;
        "red") echo -e "\033[41;30m $message \033[0m";;
        "green") echo -e "\033[42;34m $message \033[0m";;
        "yellow") echo -e "\033[43;34m $message \033[0m";;
        "blue") echo -e "\033[44;30m $message \033[0m";;
        "pink") echo -e "\033[45;30m $message \033[0m";;
        "skyblue") echo -e "\033[46;30m $message \033[0m";;
        "white") echo -e "\033[47;34m $message \033[0m";;
    esac
}

echo_font_black() { echo_font_color "$1" "black"; }
echo_font_red() { echo_font_color "$1" "red"; }
echo_font_green() { echo_font_color "$1" "green"; }
echo_font_yellow() { echo_font_color "$1" "yellow"; }
echo_font_blue() { echo_font_color "$1" "blue"; }
echo_font_pink() { echo_font_color "$1" "pink"; }
echo_font_skyblue() { echo_font_color "$1" "skyblue"; }
echo_font_white() { echo_font_color "$1" "white"; }
echo_font_red() { echo_font_color "$1" "red"; }
echo_bg_black() { echo_bg_color "$1" "black"; }
echo_bg_red() { echo_bg_color "$1" "red"; }
echo_bg_green() { echo_bg_color "$1" "green"; }
echo_bg_yellow() { echo_bg_color "$1" "yellow"; }
echo_bg_blue() { echo_bg_color "$1" "blue"; }
echo_bg_pink() { echo_bg_color "$1" "pink"; }
echo_bg_skyblue() { echo_bg_color "$1" "skyblue"; }
echo_bg_white() { echo_bg_color "$1" "white"; }
echo_bg_red() { echo_bg_color "$1" "red"; }




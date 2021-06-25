#!/usr/bin/bash
echo $EPG_NC_HOME
source $EPG_NC_HOME/scripts/versions # 版本文件
source $EPG_NC_HOME/scripts/declare.sh # 声明文件
echo $EPG_NC_HOME
echo $PUB_EPG_VERSION_NO

serve_dir=""
VERSION_NO="" # 2.0.0.001
VERSION_NAME="" # v2d1 -> 2.1
to_del_tag=""
to_deploy_local=""
province="nanchuan"
while getopts plrdn:v:P: opt
do
    case "$opt" in
        l) serv_dir=root@127.0.0.1:20046:/usr/local/pkgs/EPG/EPG30/NANC;; # stunnel 地址
        r) serv_dir=root@192.168.88.46:/usr/local/pkgs/EPG/EPG30/NANC;; # 公司环境
        d) to_del_tag="delete";; # 用来打包的时候删除不需要的重复 tag
        p) to_deploy_local="deploy";; # 部署到 mac 本地服务器
        P) province="$OPTARG";;
        n) VERSION_NAME="$OPTARG";; # v2d1 -> 2.1
        v) VERSION_NO="$OPTARG";; # 2.0.0.001
        *) warn "Unknown option: $OPTARG";;
    esac
done

if [ -z "$VERSION_NAME" ]; then
    error "Wrong EPG version name! (eg. v2d1 is EPG2.1, v2d3 is EPG2.3)"
    exit
fi

if [ -z "$VERSION_NO" ]; then
    error "Wrong EPG version number! (eg. 2.0.0.001)"
    exit
fi

ver_name_pattern='^v[1-9]d[0-9]$'
# 目前只支持 100 - 101 如果将来有更多的版本，请修改 [0-1] -> [0-2]
ver_no_pattern='^10[0-9].[0-9]\.[0-9]\.[0-9].[0-9]{3}$'

if [[ "$VERSION_NAME" =~ $ver_name_pattern ]]; then
    echo "EPG版本名称：$VERSION_NAME"
else
    echo "输入的EPG版本名称：[$VERSION_NAME], 格式不正确，请检查版本名称！"
    exit
fi

if [[ "$VERSION_NO" =~ $ver_no_pattern ]]; then
    echo "EPG版本号：$VERSION_NO"
else
    echo "输入的EPG版本号：[$VERSION_NO], 格式不正确，请检查版本号！"
    exit
fi

# 添加 tag，可能重复
tags=$(git tag)
result=$(echo $tags | grep "${VERSION_NO}")
if [[ "$result" != "" ]]
then
    if [[ "${to_del_tag}" != "" ]]; then
        # 需要删除
        warn "deleting tag: ${VERSION_NO}"
        git tag -d "${VERSION_NO}"
        git push --delete origin "${VERSION_NO}"
    else
        # tag 存在了，不能重复添加
        warn "repeat tag: ${VERSION_NO}"
        exit
    fi
else
    tip "not include ${VERSION_NO}"
fi

# git tag -a $VERSION_NO
# git push origin $VERSION_NO
# 更新版本文件
echo "PUB_EPG_VERSION_NO=\"$VERSION_NO\"  # $(date)" >> $EPG_NC_SCRIPTS/versions
# 版本号，版本名称正确，进入打包进程
cd $EPG_NC_HOME && pwd
ONLY_VERSION_NO=${VERSION_NO#*.} # 去掉开头的 100. 或 101.
yarn run build --version-name "$VERSION_NAME" --version-no "$ONLY_VERSION_NO" --province "$province"

# 部署到 macos 的本地环境
if [[ "${to_deploy_local}" != "" ]]; then
    create_local_dir "${VERSION_NAME}" "${ONLY_VERSION_NO}"
    if [ -e "${EPG_NC_HOME}/dist" ] && [ -e "${epg_www_dir}" ]; then
        current="${epg_www_dir}/${ONLY_VERSION_NO}"
        if [ -e "$current" ]; then
            warn "removing $current"
            sudo rm -rf "$current"
        fi

        sudo cp -R "./dist" "${epg_www_dir}/${ONLY_VERSION_NO}"
    fi
fi

pkg_name="${VERSION_NO}.tar.gz"

tip "EPG package name: ${pkg_name}"

# 开始压缩
dist=$EPG_NC_HOME/dist
if [ -e $dist ]; then
    cd $dist
    tar czf $pkg_name ./*
    if [ -e ~/Desktop ]; then
        cp $dist/$pkg_name ~/Desktop/
    fi
    tip "pack successed."
fi

# 上传到版本服务器
if [ -f $pkg_name ] && [ $serv_dir ]; then
    scp -r -i /usr/local/sunlight/sshkeys/init.pk \
        $pkg_name $serv_dir

    tip "Publish successfully."
else
    error "Publish failed, no $pkg_name package, or no server directory."
fi

# updating version file
cd $EPG_NC_HOME
# git add .
# git commit -m 'update version file.'
# git push

tip "pack $pkg_name finished."
tip 'publish done.'

# ## 当前脚本文件所在路径
source ./versions # 版本文件历史记录
source ./2021-08-09-dvs-build-pc.sh
current_path=$(cd $(dirname $0); pwd)

################1、 通过命令行执行传入的参数值
# a(app) 、w(wechat)、 p(park)、q(qrcode)、c(pc)
while getopts v:p: opt
do
    case "$opt" in
        p) project="$OPTARG";; # awpqc  # a(app) 、w(wechat)、 p(park)、q(qrcode)、c(pc)
        v) version="$OPTARG";; # 2.0.0.001
        *) warn "Unknown option: $OPTARG";;
    esac
done

echo -e " 命令行中包含的项目列表----${project}"
echo -e " 命令行中包含的版本号 ${version}"
echo "version=\"$version\"  # $(date)" >> ./versions

## 打印当前目录
echo $current_path

##############  1、需要拉取的项目路径  ##############
declare -A gitpull_pathArray
gitpull_pathArray["a"]="/e/work/git/dvs-2.x/dvs-app-h5-develop"
gitpull_pathArray["w"]="/e/work/git/dvs-2.x/dvs-offiaccount-dev"
gitpull_pathArray["p"]="/e/work/git/dvs-2.x/dvs-park-h5-app"
gitpull_pathArray["q"]="/e/work/git/dvs-2.x/qrcode-demo-dev"
gitpull_pathArray["c"]="/e/work/git/dvs-2.x/dvs-server-ui-dev"

# ##############  2、git拉取项目 ##############
for key in ${!gitpull_pathArray[@]}
do
  echo -e "${key}  ----${project}"
  if [[ $project == *$key* ]]
  then
    echo -e "包含${key}------${gitpull_pathArray[${key}]}"
    cd ${gitpull_pathArray[${key}]}
    git pull
    echo -e "拉取项目<<$key>>：-------路径为{${gitpull_pathArray[${key}]}} 成功";
  else
    echo "不包含"
  fi
    
done

#############   3、需要编译的项目路径 ################
for key in ${!gitpull_pathArray[@]}
do
    if test $key = "c"; then
      build_pc_Function
      echo -e "准备开始编译PC";
    else
      cd ${gitpull_pathArray[${key}]}
      echo -e "开始编译项目<<$key>>：-------路径为{${gitpull_pathArray[${key}]}} 成功";
      # yarn build
      echo -e "编译项目<<$key>>：-------路径为{${gitpull_pathArray[${key}]}} 成功";
    fi
done

# npmbuild_pathArr=(
#   "/e/work/git/dvs-2.x/dvs-app-h5-develop"
#   "/e/work/git/dvs-2.x/dvs-offiaccount-dev"
#   "/e/work/git/dvs-2.x/qrcode-demo-dev"
#   "/e/work/git/dvs-2.x/dvs-park-h5-app"
# )
# ###########   3、 开始 build 项目  ###############

# for ((i=0;i<${#npmbuild_pathArr[*]};i++))
# do
#   project_path=${npmbuild_pathArr[i]}
#   cd $project_path
#   yarn build
#   echo -e "编译项目：${npmbuild_pathArr[i]} 成功";
# done


# ##########4、编译完成后，删除app、qrcode、wechat 中的配置文件
# deleteBuildConfig_pathArr=(
#   "/e/work/git/dvs-2.x/release/cms/app"
#   "/e/work/git/dvs-2.x/release/cms/wechat"
#   "/e/work/git/dvs-2.x/release/cms/qrcode"
# )
# for ((i=0;i<${#deleteBuildConfig_pathArr[*]};i++))
# do
#   project_path=${deleteBuildConfig_pathArr[i]}
#   cd $project_path
#   rm config.js
#   echo -e "删除项目：${deleteBuildConfig_pathArr[i]} 中的配置文件成功";
# done


# ########### 4、dvs2.0将本地打包文件上传至服务器 ############

# scp -r /e/work/git/dvs-2.x/release/cms/* root@139.9.184.171:/usr/local/sunlight/dvs/dvs-ui/

# ########### 5、拷贝完之后进行git 的提交  ##############
# cd /e/work/git/dvs-2.x/release
# git add .
# sleep 2s
# message="chore：前端app、qrocde、wechat、park、console(child)commit-version:${version}"
# git commit -m $message .
# git push origin

echo "5秒后将自动退出本脚本："
for i in $(seq 5 -1 1)
do
  echo -e $i;sleep 1
done
exit
## 执行脚本  sh 2021-08-06-dvs-build数字乡村.sh |tee build-log.txt ##
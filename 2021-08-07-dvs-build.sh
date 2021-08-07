# ## 当前脚本文件所在路径
current_path=$(cd $(dirname $0); pwd)
version='2.2.0.004-2'

## 打印当前目录
echo $current_path

##############  1、需要拉取的项目路径  ##############
declare -A gitpull_pathArray
gitpull_pathArray["app"]="/e/work/git/dvs-2.x/dvs-app-h5-develop"
gitpull_pathArray["wechat"]="/e/work/git/dvs-2.x/dvs-offiaccount-dev"
gitpull_pathArray["park"]="/e/work/git/dvs-2.x/dvs-park-h5-app"
gitpull_pathArray["qrcode"]="/e/work/git/dvs-2.x/qrcode-demo-dev"
gitpull_pathArray["pc"]="/e/work/git/dvs-2.x/dvs-server-ui-dev"

declare -A build_pathArray
build_pathArray['dvs-main']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-main"
build_pathArray['dvs-basic']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-basic"
build_pathArray['dvs-cons']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-cons"
build_pathArray['dvs-village']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-village"
build_pathArray['dvs-digital']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-digital"
build_pathArray['dvs-park']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-park"
build_pathArray['dvs-geography']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-geography"

function build_pc_Function {
  for key in ${!build_pathArray[@]}
  do
    cd ${build_pathArray[${key}]}
    echo -e "开始编译项目<<$key>>：-------路径为{${build_pathArray[${key}]}} 成功";
    yarn build
    echo -e "编译项目<<$key>>：-------路径为{${build_pathArray[${key}]}} 成功";
  done
}

##############  2、git拉取项目 ##############
for key in ${!gitpull_pathArray[@]}
do
    cd ${gitpull_pathArray[${key}]}
    git pull
    echo -e "拉取项目<<$key>>：-------路径为{${gitpull_pathArray[${key}]}} 成功";
done

# #############   3、需要编译的项目路径 ################
for key in ${!gitpull_pathArray[@]}
do
    if test $key = "pc"; then
      build_pc_Function
      echo -e "准备开始编译PC";
    else
      cd ${gitpull_pathArray[${key}]}
      echo -e "开始编译项目<<$key>>：-------路径为{${gitpull_pathArray[${key}]}} 成功";
      yarn build
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
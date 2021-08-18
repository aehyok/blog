# ## 当前脚本文件所在路径
current_path=$(cd $(dirname $0); pwd)
version='2.2.0.004-2'

## 打印当前目录
echo $current_path

# # 打印当前目录文件列表
echo $a*

##############  1、需要拉取的项目路径  ##############

gitpull_pathArr=(
  "/e/work/git/dvs-2.x/dvs-app-h5-develop"
  "/e/work/git/dvs-2.x/dvs-offiaccount-dev"
  "/e/work/git/dvs-2.x/qrcode-demo-dev"
  "/e/work/git/dvs-2.x/dvs-park-h5-app"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev"
)

## 开始pull拉取项目
for ((i=0;i<${#gitpull_pathArr[*]};i++))
do
  # project_path=${current_path}/${project_pathArr[i]}
  project_path=${gitpull_pathArr[i]}
  cd $project_path
  git pull
  echo -e "拉取项目：${gitpull_pathArr[i]} 成功";
done

#############   2、需要编译的项目路径 ################

npmbuild_pathArr=(
  "/e/work/git/dvs-2.x/dvs-app-h5-develop"
  "/e/work/git/dvs-2.x/dvs-offiaccount-dev"
  "/e/work/git/dvs-2.x/qrcode-demo-dev"
  "/e/work/git/dvs-2.x/dvs-park-h5-app"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-main"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-basic"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-cons"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-village"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-digital"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-park"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-gis"
)
###########   3、 开始 build 项目  ###############

for ((i=0;i<${#npmbuild_pathArr[*]};i++))
do
  project_path=${npmbuild_pathArr[i]}
  cd $project_path
  yarn build
  echo -e "编译项目：${npmbuild_pathArr[i]} 成功";
done


##########4、编译完成后，删除app、qrcode、wechat 中的配置文件
deleteBuildConfig_pathArr=(
  "/e/work/git/dvs-2.x/release/cms/app"
  "/e/work/git/dvs-2.x/release/cms/wechat"
  "/e/work/git/dvs-2.x/release/cms/qrcode"
)
for ((i=0;i<${#deleteBuildConfig_pathArr[*]};i++))
do
  project_path=${deleteBuildConfig_pathArr[i]}
  cd $project_path
  rm config.js
  echo -e "删除项目：${deleteBuildConfig_pathArr[i]} 中的配置文件成功";
done


########### 4、dvs2.0将本地打包文件上传至服务器 ############

scp -r /e/work/git/dvs-2.x/release/cms/* root@139.9.184.171:/usr/local/sunlight/dvs/dvs-ui/

########### 5、拷贝完之后进行git 的提交  ##############
cd /e/work/git/dvs-2.x/release
git add .
sleep 2s
message="chore：前端app、qrocde、wechat、park、console(child)commit-version:${version}"
git commit -m $message .
git push origin

echo "5秒后将自动退出本脚本："
for i in $(seq 5 -1 1)
do
  echo -e $i;sleep 1
done
exit
## 执行脚本  sh 2021-08-06-dvs-build数字乡村.sh |tee build-log.txt ##
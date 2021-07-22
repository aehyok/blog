# ## 当前脚本文件所在路径
# current_path=$(cd $(dirname $0); pwd)
# version='2.2.0.001'

# ## 打印当前目录
# echo $current_path

# # 打印当前目录文件列表
# # echo $a* 

# ###############1、需要拉取的项目路径##############

# gitpull_pathArr=(
#   # "/e/work/git/dvs-2.x/dvs-app-h5-develop"
#   # "/e/work/git/dvs-2.x/dvs-offiaccount-dev"
#   # "/e/work/git/dvs-2.x/qrcode-demo-dev"
#   "/e/work/git/dvs-2.x/dvs-server-ui-dev"
# )

# ## 开始pull拉取项目
# for ((i=0;i<${#gitpull_pathArr[*]};i++))
# do
#   # project_path=${current_path}/${project_pathArr[i]}
#   project_path=${gitpull_pathArr[i]}
#   cd $project_path
#   # echo  -e "开始拉取"+$project_path
#   git pull
#   echo -e "\033[32m拉取项目：${gitpull_pathArr[i]} 成功\033[0m";
# done

# #############2、需要编译的项目路径
# npmbuild_pathArr=(
#   # "/e/work/git/dvs-2.x/dvs-app-h5-develop"
#   # "/e/work/git/dvs-2.x/dvs-offiaccount-dev"
#   # "/e/work/git/dvs-2.x/qrcode-demo-dev"
#   "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-main"
#   "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-basic"
#   "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-cons"
#   "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-village"
#   "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-digital"
#   "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-park"
# )
# ## 开始 build 项目
# for ((i=0;i<${#npmbuild_pathArr[*]};i++))
# do
#   project_path=${npmbuild_pathArr[i]}
#   cd $project_path
#   yarn build
#   echo -e "\033[32m编译项目：${npmbuild_pathArr[i]} 成功\033[0m";
# done


# ############3、删除之前打包的文件
# rm_pathArr=(
#   # "/e/work/git/dvs-2.x/dvs-release-dev/cms/app/"
#   # "/e/work/git/dvs-2.x/dvs-release-dev/cms/qrcode/"
#   # "/e/work/git/dvs-2.x/dvs-release-dev/cms/wechat/"
#   "/e/work/git/dvs-2.x/dvs-release-dev/cms/console/"
# )

# for ((i=0;i<${#rm_pathArr[*]};i++))
# do
#   project_path=${rm_pathArr[i]}
#   cd $project_path
#   rm -rf *
#   echo -e "\033[32mcp删除项目：${rm_pathArr[i]} 成功\033[0m";
# done


###########4、复制某个文件夹到某个文件夹下（目标文件夹好像要存在）
##复制某个文件到某个目录下面
# cp build.sh image/

copy_pathArr=(
#   "/e/work/git/dvs-2.x/release/cms/app/"
#   "/e/work/git/dvs-2.x/release/cms/qrcode/"
#   "/e/work/git/dvs-2.x/release/cms/wechat/"
  "/e/work/git/dvs-2.x/release/cms/console/"
)

## 开始 copy拷贝目录
for ((i=0;i<${#copy_pathArr[*]};i++))
do
  project_path=${copy_pathArr[i]}
  cd $project_path
  cp  -R  $project_path  /e/work/git/dvs-2.x/dvs-release-dev/cms/
  echo -e "\033[32mcp拷贝项目：${copy_pathArr[i]} 成功\033[0m";
done

# dvs2.0 
scp -r /e/work/git/dvs-2.x/release/cms/console root@139.9.184.171:/usr/local/sunlight/dvs/dvs-ui/

# dvs2.0
scp -r /e/work/git/dvs-2.x/release/cms/console root@139.9.184.171:/usr/local/sunlight/dvs/dvs-ui/
# cp  -R  /f/work/git/dvs-2.x/release/cms/  /f/work/git/dvs-2.x/dvs-release-dev/cms/


######5、拷贝完之后进行git 的提交
# cd /f/work/git/dvs-2.x/dvs-release-dev/
# git add .
# git status
# sleep 1s
# message="chore：前端app、qrocde、wechat、console(child)commit-version:${version}"
# git commit -m $message .
# git push origin

echo "5秒后将自动退出本脚本："
for i in $(seq 5 -1 1)
do
  echo -e $i;sleep 1
done
exit

## 执行脚本  sh 2021-06-09-build.sh
## 当前脚本文件所在路径
current_path=$(cd $(dirname $0); pwd)

## 打印当前目录
echo $current_path

# 打印当前目录文件列表
echo $a* 


## 需要拉取的项目路径
gitpull_pathArr=(
  "/f/work/git/dvs-2.x/dvs-app-h5-develop"
  "/f/work/git/dvs-2.x/dvs-offiaccount-dev"
  "/f/work/git/dvs-2.x/qrcode-demo-dev"
  "/f/work/git/dvs-2.x/dvs-server-ui-dev"
)


## 开始拉取
for ((i=0;i<${#gitpull_pathArr[*]};i++))
do
  # project_path=${current_path}/${project_pathArr[i]}
  project_path=${gitpull_pathArr[i]}
  cd $project_path
  # echo  -e "开始拉取"+$project_path
  git pull
  echo -e "\033[32m拉取项目：${gitpull_pathArr[i]} 成功\033[0m";
done

## 需要拉取的项目路径
npmbuild_pathArr=(
  "/f/work/git/dvs-2.x/dvs-app-h5-develop"
  "/f/work/git/dvs-2.x/dvs-offiaccount-dev"
  "/f/work/git/dvs-2.x/qrcode-demo-dev"
  "/f/work/git/dvs-2.x/dvs-server-ui-dev/dvs-main"
  "/f/work/git/dvs-2.x/dvs-server-ui-dev/dvs-basic"
  "/f/work/git/dvs-2.x/dvs-server-ui-dev/dvs-cons"
  "/f/work/git/dvs-2.x/dvs-server-ui-dev/dvs-village"
  "/f/work/git/dvs-2.x/dvs-server-ui-dev/dvs-digital"
)
## 开始拉取
for ((i=0;i<${#npmbuild_pathArr[*]};i++))
do
  # project_path=${current_path}/${project_pathArr[i]}
  project_path=${npmbuild_pathArr[i]}
  cd $project_path
  yarn build
  echo -e "\033[32m编译项目：${npmbuild_pathArr[i]} 成功\033[0m";
done


echo "5秒后将自动退出本脚本："
for i in $(seq 5 -1 1)
do
  echo -e $i;sleep 1
done
exit
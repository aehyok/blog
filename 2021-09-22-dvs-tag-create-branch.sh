### 根据tag创建新的分支

# ## 当前脚本文件所在路径
current_path=$(cd $(dirname $0); pwd)
# tag版本号
tagVersion='2.4.1.006'
# 创建的分支
branchVersion='2.4.1.fix'
# ## 打印当前目录
echo $current_path

gitpull_pathArr=(
  # "/e/work/git/dvs-2.x/dvs-app-h5-develop"
  # "/e/work/git/dvs-2.x/dvs-offiaccount-dev"
  # "/e/work/git/dvs-2.x/qrcode-demo-dev"
  # "/e/work/git/dvs-2.x/dvs-park-h5-app"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev"
)

## 开始pull拉取项目
for ((i=0;i<${#gitpull_pathArr[*]};i++))
do
  project_path=${gitpull_pathArr[i]}
  cd $project_path
    git pull
    git branch $branchVersion $tagVersion
    git checkout $branchVersion
    git push --set-upstream origin $branchVersion
  echo -e "根据tag创建分支：${gitpull_pathArr[i]} 成功";
done


echo "5秒后将自动退出本脚本："
for i in $(seq 5 -1 1)
do
  echo -e $i;sleep 1
done
exit

## 执行脚本  sh 2021-08-06-build-dvs-tag.sh |tee tag-log.txt 
# ## 当前脚本文件所在路径
source ./versions # 版本文件
current_path=$(cd $(dirname $0); pwd)

# ############# pc 相关模块编译路径 ################
# declare -A build_pathArray
# build_pathArray['dvs-main']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-main"
# build_pathArray['dvs-basic']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-basic"
# build_pathArray['dvs-cons']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-cons"
# build_pathArray['dvs-village']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-village"
# build_pathArray['dvs-digital']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-digital"
# build_pathArray['dvs-park']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-park"
# build_pathArray['dvs-geography']="/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-geography"

build_pathArray=(
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-main"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-basic"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-cons"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-village"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-digital"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-park"
  "/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-geography"
)

function build_pc_Function {
  for ((i=0;i<${#build_pathArray[*]};i++))
  do
    project_path=${build_pathArray[i]}
    echo -e "开始编译项目：${build_pathArray[i]} ";
    cd $project_path
    yarn build
    echo -e "编译PC 项目路径为{${build_pathArray[i]}} 成功";
  done
}
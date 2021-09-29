# ## 当前脚本文件所在路径
source ./versions # 版本文件历史记录
source ./2021-08-09-dvs-build-pc.sh
branchVersion="dev"
current_path=$(cd $(dirname $0); pwd)

################1、 通过命令行执行传入的参数值   ##############
# a(app) 、w(wechat)、 p(park)、q(qrcode)、c(pc)
tag=""  # 默认为空的时候要打tag,不为空的时候不进行tag管理
while getopts tv:p: opt
do
    case "$opt" in
        t) tag="tag";;
        p) project="$OPTARG";; # awpqc  # a(app) 、w(wechat)、 p(park)、q(qrcode)、c(pc)
        v) version="$OPTARG";; # 2.0.0.001
        *) warn "Unknown option: $OPTARG";;
    esac
done

echo -e "tag ${tag}"
################2、验证对应的项目  ##############
declare -A projectList
projectList["a"]="村委app"
projectList["w"]="微信公众号"
projectList["p"]="园区app"
projectList["q"]="一户一码"
projectList["c"]="pc后台管理"

for key in ${!projectList[@]}
do
  if [[ $project == *$key* ]]
  then
    echo -e "包含${key}------${projectList[${key}]}"
  fi
done

################3、版本号  ##############
echo -e " 命令行中包含的版本号: ${version}"

echo '-------------------------------------------------'
#############  4、需要拉取的项目路径  ##############
declare -A gitpull_pathArray
gitpull_pathArray["a"]="/e/work/git/dvs-2.x/dvs-app-h5-develop"
gitpull_pathArray["w"]="/e/work/git/dvs-2.x/dvs-offiaccount-dev"
gitpull_pathArray["p"]="/e/work/git/dvs-2.x/dvs-park-h5-app"
gitpull_pathArray["q"]="/e/work/git/dvs-2.x/qrcode-demo-dev"
gitpull_pathArray["c"]="/e/work/git/dvs-2.x/dvs-server-ui-dev"

# ############## 5、git拉取项目、编译项目 ##############
for key in ${!gitpull_pathArray[@]}
do
  # echo -e "${key}  ----${project}"
  if [[ $project == *$key* ]]
  then
     if test $key = "c"; then
      cd ${gitpull_pathArray[${key}]}
      projectName=${projectList[$key]}
      git checkout $branchVersion
      echo -e "开始拉取项目:<<${projectName}>>";
      git pull
      echo -e "拉取项目<<${projectName}>>成功";
      build_pc_Function
      echo -e "准备开始编译PC";
    else
      cd ${gitpull_pathArray[${key}]}
      projectName=${projectList[$key]}
      git checkout $branchVersion
      echo -e "开始拉取项目:<<${projectName}>>";
      git pull
      echo -e "拉取项目<<${projectName}>>成功";
      echo '-------------------------------------------------'
      echo -e "开始编译项目:<<${projectName}>>";
      yarn build
      echo -e "编译项目<<${projectName}>>成功";
      echo '-------------------------------------------------'
      echo -e "开始打tag项目:<<${projectName}>>";
    fi

    if [[ "$tag" == "" ]] 
      then
        if test $version = $tagVersion ; then
          echo 'tag 已经存在要先进行删除'
          git tag -d $version
          git push origin :refs/tags/$version

          echo 'tag已删除要进行git tag'
          git tag -a $version -m "${version}"
          git push origin $version
          echo -e "打tag项目:<<${projectName}>>成功";
          cd $current_path
          echo "tagVersion=\"$version\"  # $(date)" >> ./versions
        else  
          echo 'tag不存在 要进行git tag'
          git tag -a $version -m "${version}"
          git push origin $version
          echo -e "打tag项目:<<${projectName}>>成功";
          cd $current_path
          echo "tagVersion=\"$version\"  # $(date)" >> ./versions
        fi
      else
        echo  -e "不需要进行打tag"
      fi
  fi
done

########## 6、编译完成后，删除app、qrcode、wechat 中的配置文件
declare -A deleteBuildConfig_pathArr
deleteBuildConfig_pathArr["a"]="/e/work/git/dvs-2.x/release/cms/app"
deleteBuildConfig_pathArr["w"]="/e/work/git/dvs-2.x/release/cms/wechat"
deleteBuildConfig_pathArr["q"]="/e/work/git/dvs-2.x/release/cms/qrcode"
for key in ${!deleteBuildConfig_pathArr[@]}
do
  if [[ $project == *$key* ]]
  then
    project_path=${deleteBuildConfig_pathArr[${key}]}
    cd $project_path
    # rm config.js
    echo -e "删除项目：${deleteBuildConfig_pathArr[i]} 中的配置文件成功";
  fi
done

########### 4、dvs2.0将本地打包文件上传至服务器 ############

# scp -r /e/work/git/dvs-2.x/release/cms/* root@139.9.184.171:/usr/local/sunlight/dvs/dvs-ui/

########### 5、拷贝完之后进行git 的提交  ##############
cd /e/work/git/dvs-2.x/release
git add .
sleep 2s
message="build：前端app、qrocde、wechat、park、console(child)commit-version:${version}"
git commit -m $message .
git push origin

echo "5秒后将自动退出本脚本："
for i in $(seq 5 -1 1)
do
  echo -e $i;sleep 1
done
exit
## 执行脚本  sh 2021-08-07-dvs-build.sh  -v 2.3.0.003 -p awqpc  |tee build-log.txt
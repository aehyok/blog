echo off
chcp 65001
set /p branch=请输入分支名称：

cd release
git checkout %branch%
git pull
cd ..
echo 开始构建server-ui
cd server-ui
cd dvs-main
git checkout  %branch%
git pull
call yarn run build
cd ..
cd dvs-basic
git checkout  %branch%
git pull
call yarn run build
cd ..
cd dvs-cons
git checkout  %branch%
git pull
call yarn run build

cd ..
cd dvs-geography
git checkout  %branch%
git pull
call yarn run build

cd ..
cd dvs-park
git checkout %branch%
git pull
call yarn run build
echo dvs-pak 构建完成+++++++++++++++++
cd ..
cd dvs-digital
git checkout  %branch%
git pull
call yarn run build
cd ..
cd dvs-village
git checkout  %branch%
git pull
call yarn run build
cd ..
cd ..
echo 开始构建app-h5
cd app-h5
git checkout %branch%
git pull
call yarn run build
cd ..
cd park-app-h5
git checkout %branch%
git pull
call yarn run build
echo park-app完成构建++++++++++++++++++++++++++++++++++++
cd ..
cd offiaccount
git checkout %branch%
git pull
call yarn run build
cd ..
cd qrcode-demo
git checkout %branch%
git pull
call yarn run build
cd ..
echo 项目构建完毕
pause
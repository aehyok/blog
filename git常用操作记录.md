  ```javascript
  // 1、添加一个tag
  git tag -a 3.11.3.001 -m "release 3.11.3.001"
  git push origin 3.11.3.001

  //2、删除一个tag
  git tag -d 3.11.3.001
  git push origin :refs/tags/3.11.3.001

  // 3、查看分支
  git tag

  // 4、在某个commit 上打tag  git tag
  git tag test_tag c809ddbf83939a89659e51dc2a5fe183af384233　　　　
  git push origin test_tag　　　　//!!!本地tag推送到线上

  // 5、根据tag创建分支
  https://www.cnblogs.com/senlinyang/p/9455426.html
  git branch newbranch 3.11.3.001

  // 6、然后可以切换到分支
  git checkout newbranch

  // 7、再通过命令将本地仓库推送到远程仓库
  git push origin newbranch

  // 8、单独创建新的分支
  git branch branchname

  // 9、是将远程主机的最新内容拉到本地 ,用户在检查了以后决定是否合并到工作本机分支中。
  git fetch
  //更多基本操作
  //https://www.cnblogs.com/runnerjack/p/9342362.html

  // 10、将某个提交，任何其他分支的commit 合并到当前分支
  git cherry-pick  commitid  (正常情况直接合并成功，可能存在重复图需要手动解决)
  git push 正常情况直接push即可，手动解决冲突需要commit 再进行push

  // 11、当前分支dev的代码提交push成功，此时想合并到main分支上
  git checkout main
  git merge dev
  git push -u origin main

  // 12、修改文件名会忽略大小写
  git config core.ignorecase（查看是否忽略大小写） true则设置了忽略
  git config core.ignorecase false  后面加上false则直接可设置不忽略

  // 13、修改文件夹名字大小写的问题
  git rm Test (修改前先将Test文件夹备份并修改为TestTemp<一个临时文件夹名字而已>,
  // 然后执行命令，再将备份文件夹名字修改为需要的文件夹即可

  // 14、查看分支
  git branch    查看本地分支
  git branch -a 查看本地分支和远程分支，如果不存在需要git fetch一下
  git branch -r 查看远程分支

  // 15、 git config 配置提交用户名和用户邮箱
  git config --global user.name "aehyok"
  git config --global user.email "aehyok@163.com"
  git config -l 配置好后可通过这个来查看
  ```

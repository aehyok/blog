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

  ```


## 1、tag标签
  - 1.1、添加一个tag，并推送到远程仓库
  ```javascript
    git tag -a 3.11.3.001 -m "release 3.11.3.001"
    git push origin 3.11.3.001
  ```
  - 1.2、 删除一个tag
  ```javascript
    git tag -d 3.11.3.001
    git push origin :refs/tags/3.11.3.001  
  ```
  - 1.3、 查看tag
  ```javascript
    git tag
  ```
  - 1.4、在某个commit上打tag
  ```javascript
    git tag test_tag c809ddbf83939a89659e51dc2a5fe183af384233　　　　
    git push origin test_tag　　　　//!!!本地tag推送到线上
  ```
  - 1.5、 根据tag创建分支
  ```javascript
    https://www.cnblogs.com/senlinyang/p/9455426.html
    git branch newbranch 3.11.3.001
  ```
  - 1.6、然后可以切换到分支 
  ```javascript
    git checkout newbranch
  ```
  - 1.7、 再通过命令将本地仓库推送到远程仓库
  ```javascript
    git push origin newbranch
  ```
  - 1.8、 单独创建新的分支
    ```javascript
      git branch branchname
    ```
  - 1.9、 是将远程主机的最新内容拉到本地 ,用户在检查了以后决定是否合并到工作本机分支中。
   ```javascript
    git fetch
    //更多基本操作
    //https://www.cnblogs.com/runnerjack/p/9342362.html
   ```
  - 1.10、 将某个提交，任何其他分支的commit 合并到当前分支
  ```javascript
    git cherry-pick  commitid  (正常情况直接合并成功，可能存在重复图需要手动解决)
    git push 正常情况直接push即可，手动解决冲突需要commit 再进行push
   ```
   - 1.11、 当前分支dev的代码提交push成功，此时想合并到main分支上
   ```javascript
    git checkout main
    git merge dev
    git push -u origin main
   ```
   - 1.12、 修改文件名会忽略大小写
   ```javascript
    git config core.ignorecase（查看是否忽略大小写） true则设置了忽略
    git config core.ignorecase false  后面加上false则直接可设置不忽略
   ```
   - 1.13、修改文件夹名字大小写的问题
   ```javascript
    git rm Test (修改前先将Test文件夹备份并修改为TestTemp<一个临时文件夹名字而已>,
    // 然后执行命令，再将备份文件夹名字修改为需要的文件夹即可
    // 更好的方式其实还是先备份好要删除的文件，然后将文件删除，提交到仓库。完事后将备份的文件复制回来，然后修改文件大小写，再提交即可。
    // 
   ```
   - 1.14、 查看分支
   ```javascript
    git branch    查看本地分支
    git branch -a 查看本地分支和远程分支，如果不存在需要git fetch一下
    git branch -r 查看远程分支
   ```
   - 1.15、add commit push 提交文件
   ```javascript
    git add .
    git commit -m 'feat： 提交相关信息'
    git push origin develop   或者  git push origin develop:develop
   ```
   - 1.16、 git config 配置提交用户名和用户邮箱
   ```javascript
    git config --global user.name "aehyok"
    git config --global user.email "aehyok@163.com"
    git config -l 配置好后可通过这个来查看
   ```
   - 1.17、 修改分支名称
   ```javascript
    git branch -m develop-lqm   // 修改本地分支当前分支的名称
    git branch -m develop-lam develop-lqm   // 原分支名称  新分支名称
   ```
   - 1.18、 删除本地分支和删除远程分支
   ```javascript
    git checkout dev1.3.4 // 先切换到其他分支
    git branch -d dev // 删除本地分支
    git branch -D dev // 如果删除不了，可以进行强制删除
    git push origin --delete dev 有必要的情况下，删除远程分支但是要谨慎使用
   ```
   - 1.19、 创建分支
   ```javascript
    git checkout main  // 切换到基础分支
    git checkout -b dev //根据 main分支，创建dev分支并切换到dev分支
    ```
   - 1.20、 创建项目后如何提交到仓库
   ```javascript
    git init  // 初始化一个项目
    // 创建项目文件后
    git add . // 将添加或修改的文件提交到暂存区
    git add -u  // 将监控已经被add进暂存区的文件，会将被修改的文件再次提交到暂存区
    git add -A // 则是git add .和 git add -u 两个命令的集合
    git commit -m ' feat: 初始化项目'   // 提交到本地仓库
    git remote add github.origin https://github.com/aehyok/demo.git   // 当然也可以使用ssh 链接 
    git push --set-upstream origin main  // 设置本地分支追踪远程分支、、、之后就可以直接git push
   ``` 
   - 1.21、同样一个本地仓库可以设置多个远程仓库，然后通过不同的git push github.origin
   ```javascript
    git push github.origin   // 推送到github
    git push gitee.origin    //  推送到gitee
   ```

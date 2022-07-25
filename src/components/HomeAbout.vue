name: Auto Deploy # 当前工作流程的名称
on: 
  push: 
    branches: 
      - main # 只要push到main分支，就会触发该工作流程
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      # 使用别人封装好的的action，用于clone该仓库的源码到工作流中
      - name: Checkout
        uses: actions/checkout@v3
​
      # 在工作流中安装node环境（必需，这样才能在后续工作流程中运行 npm install 等指令，否则会报错）
      - name: Setup node
        uses: actions/setup-node@v3
        with:
          node-version: 16 # 指定node版本
          
      # 打包代码生成环境
      - name: Build
        run: |
          cd client # 进入前端侧的工程目录
          npm install # 安装依赖
          npm run build # 打包前端代码到生产环境（目标路径为：server/public）
​
      # 同步server目录下的后端代码到服务器（目标路径：/home/nginx/myBlogServer）
      - name: Deploy
        uses: cross-the-world/scp-pipeline@master
        with:
          host: ${{ secrets.MY_HOST }} # 服务器IP（需要在GitHub上自行配置对应的secret）
          user: ${{ secrets.MY_USER }} # 服务器用户名
          pass: ${{ secrets.MY_PASS }} # 服务器密码
          connect_timeout: 10s
          local: './server/*' # 源路径（工作流）
          remote: /home/nginx/myBlogServer # 目标路径（服务器）
      
      # 在服务器端执行相关指令
      - name: Executing remote ssh commands
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.MY_HOST }} # 服务器IP（需要在GitHub上自行配置对应的secret）
          username: ${{ secrets.MY_USER }} # 服务器用户名
          password: ${{ secrets.MY_PASS }} # 服务器密码
          script: |
            cd /home/nginx/myBlogServer # 进入服务器中的端工程所在的目录
            export NODE_HOME=/root/.nvm/versions/node/v12.19.0  # 可使用`whereis node`查询node所在的目录
            export PATH=$PATH:$NODE_HOME/bin # 重新定义node的环境变量（必需，这样才能在后续工作流程中运行 npm install 等指令，否则会报错）
            npm install # 安装项目依赖
            pm2 delete myBlogServer # 删除旧的进程
            pm2 start --name myBlogServer npm -- run server # 启动新的进程
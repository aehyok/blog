## linux下安装nodejs
```
  // 查看CPU架构
  lscpu
  uname -m
  arch

  // 1、下载地址
 https://nodejs.org/dist/v18.18.0/

  // 2、拷贝到linux服务器 -- 手动安装版本
    
    - https://blog.csdn.net/weixin_42940467/article/details/113866473
    ```javascript
    // 1、可从官网下载nodejs安装包
    // 2、然后通过xftp上传到服务器
    // 3、解压文件
    tar -xvf node-v12.14.1-linux-x64.tar.xz
    // 4、复制文件夹到指定位置
    sudo mv ./node-v12.14.1-linux-x64 /usr/local/node
    // 5、为node和npm创建快捷方式
    sudo ln -s /usr/local/node/bin/node /usr/bin/node
    sudo ln -s /usr/local/node/bin/npm /usr/bin/npm
    // 6、查看版本确认安装是否成功
    node -v   npm -v



  // 3、在线安装nodejs 
  https://github.com/nodesource/distributions

```


## 测试是否安装成功
```
  node -v
  npm -v
```


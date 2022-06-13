https://time.geekbang.org/column/article/211682

## 安装V8引擎
- 安装jsvu
```javascript
npm install jsvu -g
```
- 然后在命令行中直接运行jsvu,选择跟你电脑匹配的版本，我这里是64位的window10，所以选择 Windows 64-bit。
这里我安装的是v8和v8-debug。安装完毕后如下图所示
我的安装目录在C:\Users\aehyok\.jsvu，`aehyok`便是用户名，你也可以到对应的目录下去查找
## 生成命令行的帮助文档
```javascript
    //在C:\Users\aehyok\.jsvu文件夹中新建一个help.txt的文件
    // 通过v8或v8-debug 命令去生成帮助文档信息
    v8-debug --help >> help.txt
```
目前我使用过的命令行
```javascript
//参数看看 V8 引擎如何去优化
--trace-opt --trace-deopt  

// 
```

## 新建测试js文件
```javascript
let aa = 10
```


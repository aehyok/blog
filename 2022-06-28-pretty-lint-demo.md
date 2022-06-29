---
theme: vuepress
highlight: tomorrow-night
---

## 前言
## 2、通过pnpm 和vite创建项目

- 创建项目
```
yarn create vite
```
- 2、安装依赖
```
yarn
```
- 3、运行项目
```javascript
yarn dev
```

- 4、运行初始化eslint和prettier命令
```javascript
yarn create vite-pretty-lint
```
先来看没有执行命令前的文件目录

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53ea695c6f3640fba30b4da98759e73b~tplv-k3u1fbpfcp-watermark.image?)

再来看执行完命令后的文件目录

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51258fb53adf4bbfa4f0267cf55f5511~tplv-k3u1fbpfcp-watermark.image?)

可以发现文件目录中增加了eslint和prettier的相关配置，以及package.json中增加了相关的依赖。

一个命令干了这么多事情，真的太优秀了。接下来我们就去看看作者的源代码吧
## 3、源码调试过程
#### 3.1找到调试代码的位置
通过`package.json`中的bin节点可以发现，`yarn create vite-pretty-lint`最终执行的便是lib/main.js中的代码
```
  "bin": {
    "create-vite-pretty-lint": "lib/main.js"
  },
```
### 3.2 开始调试的命令
因为我们现在只是要执行`lib/main.js`这个入口文件，通过`package.json`的`scripts` 也没有发现执行命令，所以现在我们可以直接通过`node`来运行代码
```
node lib/main.js
```
调试成功的结果如下图所示
[图片]
[图片]
[图片]
### 3.3 查看头部引入的模块
- chalk
终端多色彩输出
```
const log = console.log
    // 字体背景颜色设置
    log(chalk.bgGreen('chalk打印设置') )

    // 字体颜色设置
    log(chalk.blue('Hello') + ' World' + chalk.red('!'))

    // 自定义颜色
    const custom = chalk.hex('#F03A17')
    const bgCustom = chalk.bgHex('#FFFFFF')
    log(custom('customer'))
    log(bgCustom('bgCustom'))
```
- gradient
- child_process
- fs
- path
- createSpinner
- enquirer
# 2021

本年度重点计划：通用页面配置化搭建、可视化页面研究、后台配置页面数据（Vue和React）

-  创建自己的Vue 通用组件代码库 https://github.com/aehyok/vuecomponent
-  React 可视化框架  https://github.com/brick-design/react-visual-editor
-  Vue 表单生成器 https://github.com/xaboy/form-create
-  Vue 通用Table和Form表单 https://github.com/nmxiaowei/avue
-  Vue React 等 https://mp.weixin.qq.com/s/U3gxd-y5hsLHtaa0MmHlvA
-  vue Form Generator https://mrhj.gitee.io/form-generator/#/
-  页面可视化搭建的前世今生 https://zhuanlan.zhihu.com/p/37171897

## 二月份
### 2月3日
- 132 jsonEditor编辑
    - https://github.com/josdejong/jsoneditor
    - 暂时使用这个比较方便 https://github.com/yansenlei/VJsoneditor
    - https://github.com/yansenlei/VJsoneditor/blob/master/src/VueJsoneditor.vue
    - https://ace.c9.io/
- 131 全局注册组件
    - https://segmentfault.com/a/1190000019903495
- 130 form-create自定义组件如何注册到form-create中使用
    - http://www.form-create.com/v2/guide/custom-form-component.html#%E7%A4%BA%E4%BE%8B
### 2月2日
- 129 Vue.extend动态注册子组件
    - https://www.cnblogs.com/tnnyang/p/10945399.html
- 128 go语言学习网站
    - http://c.biancheng.net/golang/intro/
- 127 vscode搭建go开发环境
    - https://juejin.cn/post/6844904122450182151
    ```javascript
      //1、go安装包下载
      https://studygolang.com/dl
      //2、安装成功cmd命令查看版本号
      go version
      //3、设置七牛云代理
      go env -w GO111MODULE=on
      go env -w GOPROXY=https://goproxy.cn,direct
      //4、vscode中下载go扩展插件
      //5、创建hello.go文件
      //6、写入代码后编译运行
      go run helloworld.go
      //7、将go文件打包成wasm
      GOOS=js GOARCH=wasm go build -o test.wasm hello.go
      //8、go打包编译
      go build -o hello.exe hello.go
      //9、vscode中Ctrl+Shift+P 安装go插件 全选进行安装
      https://zhuanlan.zhihu.com/p/320343679
    ```
### 2月1日
- 126 vue3.0 demo学习 https://github.com/newbee-ltd/vue3-examples
- 125 npx命令使用详解
    - http://www.ruanyifeng.com/blog/2019/02/npx.html
- 124 webpack在线图书
    - http://webpack.wuhaolin.cn/
- 123 vue.config.js配置
    - https://cli.vuejs.org/zh/config/
- 122 commander打包命令行工具
    - https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md
- 121 vue3源码解读
    - https://github.com/cuixiaorui/mini-vue
- 120 表单工具可视化拖拽程序
    - 各种前端轮子  https://mp.weixin.qq.com/s/U3gxd-y5hsLHtaa0MmHlvA
    - https://gitee.com/MTrun/big-screen-vue-datav
## 一月份
### 1月30日
- 119 webpack网上图书 http://webpack.wuhaolin.cn/
- 118 打包build时不清除原有打包目录的文件
    -  "build": "vue-cli-service build --no-clean",
- 117 github.io搭建自己的个人网站
    - 实际上就是将自己的前端网站打包，然后发布到打包文件commit到aehyok.github.io
    - https://zhuanlan.zhihu.com/p/28321740
    - https://github.com/Cazaea/Cazaea.github.io
### 1月28日
- 113 mockjs想要在typeScript中使用，安装mockjs之后，需要安装npm install --save @types/mockjs
    - https://developer.aliyun.com/mirror/npm/package/@types/mockjs
- 114 vue3.0 .sync 修饰符的替换
    - https://dev.to/chenxeed/awesome-breaking-changes-in-vue-3-if-you-migrate-from-vue-2-3b98
- 115 ffmpeg.wasm
    - https://ffmpegwasm.github.io/
    - npm install @ffmpeg/ffmpeg
- 116 css ::v-deep
    - https://stackoverflow.com/questions/63986278/vue-3-v-deep-usage-as-a-combinator-has-been-deprecated-use-v-deepinner-se/63986379
    - https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md
    - vue react npm git webpack typescript nodejs nginx linux
    - mongodb mysql redis
### 1月27日
- 111 动态import 的用法，动态路由
    - https://blog.csdn.net/javao_0/article/details/85162458
    - https://github.com/HenryTSZ/zeit/blob/master/source/_posts/vue-dynamic-router.md
    - https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96
- 112 document.activeElement.dataset和e.target.dataset问题
    - https://www.cnblogs.com/xiaoli52qd/p/7857468.html
### 1月26日
- 108 一个非常棒的开源项目 H5-Dooring 目前star 3.1k
    -  开源地址 https://github.com/MrXujiang/h5-Dooring
    -  基本介绍 http://h5.dooring.cn/doc/zh/guide/
- 109 npm 发包
    - https://mp.weixin.qq.com/s/2EL-wzXKwTIhGisUgkr4-g  最重要的一篇
    - https://my.oschina.net/u/4461771/blog/3188900
    - https://www.cnblogs.com/zlp-blog/p/10718383.html
    - https://mp.weixin.qq.com/s/4eE5kHicRK2mVcqEQSM4lg
- 110 npm publish 发包时异常
    - 403 Forbidden - PUT https://registry.npmjs.org/aehyok-hello - Forbidden
      ```javascript
      npm修改邮箱，要登录邮箱进行验证
      查看npm 仓库源，确保是npmjs.org
      ```
### 1月25日
- 100 1月23日参加公司年终总结和计划会以及部门会议
- 101 查看vue3 github项目 https://zhuanlan.zhihu.com/p/254219538
- 102 css !important 该条样式属性声明具有最高优先级
    - https://www.cnblogs.com/meiwenzx/p/6673302.html
- 103 linux 创建文件夹 删除文件夹
    - https://www.cnblogs.com/zf2011/archive/2011/05/17/2049155.html
- 104 elementui eltree 展开指定层级的节点
    - https://github.com/HenryTSZ/zeit/blob/master/source/_posts/based-on-element-ui-encapsulation-tree.md
    ```javascript
        expandToLevel(level) {
          this.$nextTick(() => {
            const elTreeStore = this.$refs.tree.store
            const allNodes = elTreeStore._getAllNodes().sort((a, b) => b.level - a.level)
            console.log('TCL: expandToLevel -> allNodes', allNodes)
            if (level === 0) {
              // 展开全部
              allNodes.forEach(node => {
                node.expanded = true
              })
            } else {
              allNodes.forEach(node => {
                if (node.level >= level) {
                  node.expanded = false
                } else {
                  node.expanded = true
                }
              })
            }
          })
        },
    ```
- 105 发现一个不错的git文档库 准备get一下
    - https://github.com/HenryTSZ/zeit/tree/master/source/_posts
- 106 npm使用详解
    - https://javascript.ruanyifeng.com/nodejs/npm.html
- 107 阮一峰 git仓库
    - https://github.com/ruanyf/jstutorial
    - http://www.ruanyifeng.com/home.html



### 1月22日
- 97 vue3中的setup  Composition API
    - https://segmentfault.com/a/1190000023911894
- 98 vue elementui table表格的封装
    - https://segmentfault.com/a/1190000023382224
- 99 vite 工具官网
    - https://vitejs.dev/
    - npm install -g create-vite-app 全局安装
    - create-vite-app projectName
    - https://www.cnblogs.com/qlb-7/p/13790610.html
    - https://segmentfault.com/a/1190000023737670  vite 创建项目并添加typescript
    - https://github.com/Mstian/Vue-Onepiece-Admin.git 参考一个vue3的项目
### 1月21日
- 90 对比一下vue2和vue3中分别使用typeScript的方式
    - https://jishuin.proginn.com/p/763bfbd2e891
    - https://www.cnblogs.com/qq3279338858/p/12631728.html
    -
- 91 vue中 lint检查的配置
    - https://www.cnblogs.com/fengyingYZ/p/10369703.html
- 92 vue create 项目时，手动选择  通过空格键进行选中或者反选，然后进行配置
- 93 dart-sass和node-sass区别
    - https://blog.csdn.net/qianxing111/article/details/107617538
- 94 前端多媒体知识
    - https://mp.weixin.qq.com/s/yuIkTwHk5dx20r8Z0cpSDA
- 95 vue3官网ts支持
    - https://v3.cn.vuejs.org/guide/typescript-support.html
- 96 google技术栏目
    - https://www.infoq.cn/zones/google/cloud/list?id=2
### 1月20日
- 84 vue-class-component和vue-property-decorator vue类组件
    - https://www.cnblogs.com/qq3279338858/p/12631728.html
- 85 css transform scale 放大和缩小
    - https://www.cnblogs.com/yanggeng/p/11277199.html
- 86 history.pushState()  可以控制浏览器自带的返回按钮
    - https://www.cnblogs.com/lguow/p/9222272.html
- 87 export 和export default
    - https://www.cnblogs.com/fanyanzhao/p/10298543.html
- 88 vue3项目创建
    - 创建项目 https://www.cnblogs.com/carlJian/p/13932400.html
    - 引入elementui https://element-plus.gitee.io/#/zh-CN/component/quickstart
    ```javascript
      npm install element-plus --save
    ```
    - vue-cli-service serve命令
     https://cli.vuejs.org/zh/guide/cli-service.html#vue-cli-service-serve
- 89 prettier 格式化代码的配置
    - https://www.cnblogs.com/guwufeiyang/p/12886333.html
    - https://www.cnblogs.com/oneweek/p/11236515.html
    ```javascript
        // 局部安装prettier
        npm install --save -dev  --save-exact prettier
        // 全局安装
        npm install --global prettier
    ```
### 1月19日
- 82 fq今日更新
- 83 webassembly视频进行转码  https://mp.weixin.qq.com/s/5k5f3UDNhFyc9DU-cws3og
### 1月18日
- 81 echarts地图
    - 设置echarts div的宽度和高度
    - 边距可以设置gird属性中的{top,left:right,bottom}
    - x轴和y轴，均可设置多个，匹配数据的时候要进行设置yIndex
    - 柱状图的柱状 可设置颜色
    - 顶部选项 可设置 图标icon，以及字体颜色等
    - 配置渐变颜色 https://blog.csdn.net/weixin_44897255/article/details/96877562
### 1月16日
- 80 transform
    - https://www.cnblogs.com/yanggeng/p/11286250.html  translate
    - https://www.cnblogs.com/yanggeng/p/11275771.html   rotate
### 1月15日
- 77 vscode插件韭菜盒子
    - https://github.com/LeekHub/leek-fund
- 78 echart柱状图渐变颜色
    - https://www.cnblogs.com/myfirstboke/p/11080968.html
- 79 echart 百度地图数据
    - https://echarts.apache.org/examples/zh/editor.html?c=doc-example/map-example
    - http://datav.aliyun.com/tools/atlas/#&lat=30.332329214580188&lng=106.75386074913891&zoom=4.5
### 1月14日
- 76 数字之间的间隔
      - letter-spacing:2px;
- 77 css小箭头
    - http://blog.sina.com.cn/s/blog_68128cfd0101nv28.html
- 78 css display:flex 一行两列一行三列
    -  https://blog.csdn.net/ws19900201/article/details/102564033 文档最后
### 1月13日
- 72 animate.css动画库
    - https://github.com/animate-css/animate.css
- 73 饼状图 legend圆点设置
    - https://www.jianshu.com/p/f4338c76b169
- 74 border-radius 50%和100%
    - https://blog.csdn.net/csm0912/article/details/85050562
- 75 axios针对请求进行缓存
    - https://www.wodecun.com/blog/7931.html
    - https://github.com/ZhengXiaowei/axios-request-cache/
    - https://github.com/kuitos/axios-extensions
### 1月12日
- 68 模块热替换api
    - http://www.myjscode.com/page/article109.html

- 69 webpack 配置设置
    - https://www.cnblogs.com/hezihao/p/8072750.html
- 70 cesium 地图
    - https://zhuanlan.zhihu.com/p/34217817
    - https://www.thingjs.com/guide/speedcityshow
- 71 百度echarts
    - https://github.com/ecomfe/vue-echarts
    - https://echarts.apache.org/examples/zh/editor.html?c=bar-background
    - https://echarts.apache.org/examples/zh/index.html 百度echarts地图样例
    - https://echarts.apache.org/zh/option.html#series-bar 配置项目设置
    - 柱状图颜色随机设置
```javascript
      //柱状图颜色随机设置
      //https://www.cnblogs.com/kang543418095/p/5964397.html?utm_source=itdadao&utm_medium=referral
      itemStyle: {
          normal: {
　　　　　　　　//这里是重点
              color: function(params) {
                //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                  var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622'];
                  return colorList[params.dataIndex]
              }
          }
      }
```
###  1月11日
- 54 无代码no-code(NCDP)和低代码的解释
    - https://mp.weixin.qq.com/s/Zhmh6mzCyxJlOvmuDMBSfw
    - no-code 解释https://www.makerpad.co/blog/what-is-no-code
- 55 无代码相关的社区
    - https://www.makerpad.co/
    - https://www.nocode.tech/
    - https://www.nucode.co
- 56 form-create中是如何通过control控制其他组件的
    - http://www.form-create.com/v2/guide/control.html
- 57 nginx 使用
    - https://www.cnblogs.com/taiyonghai/p/9402734.html  安装到初步尝试
    - https://www.yuque.com/jarvis-zzzhw/frontend/oew2z5 配置详解
- 58 vconsole 公众号调试,直接在微信聊天中点击下面连接，点击即可
    - debugmm.qq.com/?forcex5=true
  59 nginx 安装到使用详解
    - https://juejin.cn/post/6914160814152744973
- 60 杀进程的小工具fkill
    - https://github.com/sindresorhus/fkill-cli
- 61  document.documentElement.scrollTop微信公众号有时候获取值为0，暂时可考虑使用document.body.scrollTop进行设置
- 62 vue 可视化拖拽组件
    - https://juejin.cn/post/6908502083075325959#heading-16
    - 吸附标线 https://github.com/woai3c/visual-drag-demo/blob/main/src/components/Editor/MarkLine.vue
- 63 前端节流和防抖介绍
    - https://juejin.cn/post/6901493600098779150
- 64 vue组件嵌套会提示'make sure to provid the "name" option'
    - https://blog.csdn.net/Nalaluky/article/details/83007101
  ```javascript
      // 组件嵌套如何引用的问题
      components: {
        FormView: () => import('@/components/input/formView'),
      },
  ```
- 65 如果目前定义的组件中，没有满足要求的，可以进行自行定义组件，然后插入到自定义组件中
- 66 dev-server 通过express生成一个接口，来加载一个json本地文件
    - https://www.cnblogs.com/lurenjia1994/p/10038725.html
    - https://www.cnblogs.com/yy136/p/9977864.html
    - http://www.imooc.com/article/details/id/291839
  ```javascript
      // 此种方式打包好以后其实已经加载到项目中了
      let json = require('../static/pageList.json');
      let pageModelList: any = JSON.parse(JSON.stringify(json));
      console.log(pageModelList, 'this.pageModelList');
  ```
- 67 webpack 拷贝json文件后部署后虚拟路径读取的问题
  ```javascript
    let pageModelList: any;
    console.log(window.location, 'window.location');
    let href = window.location.href.split('?');
    requestJson.get(href[0] + '/static/pageList.json').then((res) => {
      console.log(res);
      pageModelList = res;
      //成功获取到json数据
    });
  ```
### 1月9日
- 49 linux命令删除文件
    - https://blog.csdn.net/weixin_43627766/article/details/89469016
    - https://www.cnblogs.com/qq350760546/p/7890680.html xshell命令行总结
    - https://www.yuque.com/jiushiyaoxuehaolinux/linux_ops/welcome
- 50 linux几个命令
    - 删除当前目录下的文件 rm -f *
    - 删除当前目录下的指定文件 rm -f xxxx.js
    - 返回上一级目录 cd ..
    - 返回根目录 cd ~
    - 直接到某个目录  cd  /usr/local/......
    - ls命令可以查看目录下的文件
    - ls -l 查看文件列表详情 https://blog.csdn.net/kexiaoling/article/details/51096164
    - 上传文件  rz -bye命令，弹出文件夹选项进行选择即可
    - 重启网站 nginx  -s reload
- 51 markdown语法学习
    - https://mp.weixin.qq.com/s/bZufZd8oynVOUgDYWOH9tg
    - https://www.yuque.com/yuque/help/dive-into-yuque-editor
    - https://mp.weixin.qq.com/s/bZufZd8oynVOUgDYWOH9tg
- 52 gitbook 编写文档
    - https://www.cnblogs.com/weswes/p/9874325.html
    - https://www.gitbook.com/  455043818@qq.com
    - https://www.kancloud.cn/ 看云平台
    - https://www.yuque.com/ 语雀
- 53 vue中nextTick 妙用
    - 在 created 和 mounted 阶段，如果需要操作渲染后的试图，也要使用 nextTick 方法。
    - 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted
  ```javascript
        this.$nextTick(()=>{
          document.documentElement.scrollTop = sessionStorage.getItem('scrollH') || 0
          console.log(document.documentElement.scrollTop, 'document.documentElement.scrollTop')
        })
  ```
### 1月8日
- 46 window.requestAnimationFrame 告诉浏览器要执行动画
    - https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame
    - 页面最小化了，或者被Tab切换关灯了，页面绘制全部停止，资源高效利用；
    - window.cancelAnimationFrame 取消回调函数
- 47 window.setInterval 以指定的周期执行某个函数运行，window.clearInterval取消由setInterval()方法设置的定时器。
    ```javascript
      private executeAnimation() {
        let self = this;
        window.setInterval(function () {
          self.startAnimation('right');
        }, 3000);
      }
    ```
- 48 webpack 配置官方文档
    - v5版本  https://webpack.docschina.org/
    - v4版本  https://v4.webpack.docschina.org/
    - 插件地址配置  https://v4.webpack.docschina.org/concepts/#%E6%8F%92%E4%BB%B6-plugin-
    - CopyWebpackPlugin https://www.webpackjs.com/plugins/copy-webpack-plugin/
    - 配置简易解释 https://www.cnblogs.com/yincece0316/p/10736715.html
    ```javascript
        new CopyWebpackPlugin({
          patterns: [
            {
              from: __dirname+'/src/static',
              to: 'static', // 不设置则回到默认根路径下面
            },
          ],
          // copyUnmodified: true,
        }),
    ```
### 1月7日
- 30 通过adb.exe连接机顶盒来查看应用的日志记录
    - 查看adb版本 adb version
    - 通过IP地址连接机顶盒 adb connect 172.18.0.80:5555
    - 查看应用apk列表 adb shell pm list package
    - adb devices 查看连接设备
    - adb kill-server
    - netstat -ano |findstr 5037
    - adb disconnect
    - 链接机顶盒 ----adb connect 172.18.0.239
    - google 浏览器中链接  chrome://inspect/#devices----------edge://inspect/#devices
    - 进入命令 ----adb shell
    - 查看包名列表----- pm -l |grep have
    - 卸载package ---- pm uninstall cn.haveplus.hoteltv
    - 退出shell ---- exit
    - 安装apk ----adb install C:\Users\chill\Desktop\havetv-release.apk
    - 开启start ----- adb shell am start cn.haveplus.hoteltv
- 31 版本号如何设置的问题
      <br/><br/>

    ![avatar](https://raw.githubusercontent.com/aehyok/2021/main/image/1/003.png)
- 32 常用开发代码函数查询 mac下dash，window下devDocs
- 33 elementui table中的那些基本操作

    - https://www.jianshu.com/p/2251cda42425
- 34 mapBox 地图指引
    - https://account.mapbox.com/  官网地址，设置accessTokens
    - http://www.mapbox.cn/mapbox-gl-js/api/#map 中文文档
    - https://github.com/mapbox/mapbox-gl-draw/  绘制
    - https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-draw/  绘制模板
- 35 mapBox 空间分析库truf.js

    - https://www.cnblogs.com/zhurong/p/12209209.html
- 36 ts后缀视频播放可通过mux.js
    - https://www.cnblogs.com/ypppt/p/13683685.html
    - https://docs.videojs.com/tutorial-vue.html
- 37 控制台console打印日志的开启和关闭
  ```javascript
      // 判断配置文件是否开启日志调试 是否输出日志 True 输出 False 不输出
      const logDebug = process.env.NODE_ENV !== 'production'
      console.log = (function(oriLogFunc) {
        return function() {
          if (logDebug) {
            oriLogFunc.apply(this, arguments)
          }
        }
      })(console.log)
  ```
- 38高德地图3D demo
- https://developer.amap.com/api/javascript-api/reference/maps-3d

- 39 vue前端项目webpack打包设置路径的问题，主要是publicPath
    - 官网配置地址 https://cli.vuejs.org/zh/config/#publicpath
   ```javascript
        // vue.config.js中路径设置
        module.exports = {
          lintOnSave: "error",
          publicPath: "./",    // 相对路径，这样可以随意部署任何路径
          outputDir: "../release/ui/",  // 配置打包输出路径
          assetsDir: "static",       // 配置css、js、img等路径
          productionSourceMap: false,
          css: {
            loaderOptions: {
              // global scss variables 传递配置选项到 sass-loader
              scss: {
                prependData: `@import "~@/styles/_variable.scss";`,
              },
            },
          },
  ```
- 40 Python命令行神器Click （pip install -U click），pip在python中

    - https://www.cnblogs.com/nima/p/11751459.html
- 41 git 针对tag标签设置，tag是针对所有分支的
    - 所有项目，发布版本到SIT，都需要打标签，以便追溯版本所对应的代码。如果后面需要改版本拉分支修改，也非常方便；
  ```javascript
  // 添加一个tag
  git tag -a 3.11.3.001 -m "release 3.11.3.001"
  git push origin 3.11.3.001

  //删除一个tag
  git tag -d 3.11.3.001
  git push origin :refs/tags/3.11.3.001

  // 查看分支
  git tag

  // 在某个commit 上打tag  git tag
  git tag test_tag c809ddbf83939a89659e51dc2a5fe183af384233　　　　
  git push origin test_tag　　　　//!!!本地tag推送到线上

  // 根据tag创建分支
  https://www.cnblogs.com/senlinyang/p/9455426.html
  git branch newbranch 3.11.3.001

  // 然后可以切换到分支
  git checkout newbranch

  // 再通过命令将本地仓库推送到远程仓库
  git push origin newbranch

  // 创建新的分支
  git branch branchname

  // 是将远程主机的最新内容拉到本地 ,用户在检查了以后决定是否合并到工作本机分支中。
  git fetch
  //更多基本操作
  //https://www.cnblogs.com/runnerjack/p/9342362.html
  ```
- 42 查看markdown.md文件可以使用Typora
    - 下载地址 https://www.typora.io/
- 43 web计时机制 performance对象
    - https://www.cnblogs.com/xiaohuochai/archive/2017/03/09/6523397.html
- 44 window performance 监测时间
    - http://www.cocoachina.com/articles/19882
    - https://www.cnblogs.com/web-easy/p/5287136.html
- 45 react color 颜色采集控件
    - https://casesandberg.github.io/react-color/#usage-include
    - https://casesandberg.github.io/react-color/
    - https://www.ctolib.com/article/compares/16070
### 1月6日

- 21 浏览器视频转码

    - https://github.com/bgrins/videoconverter.js
- https://github.com/FFmpeg/FFmpeg

- 22 2020年大前端技术趋势解读

- https://mp.weixin.qq.com/s/aAmFyYF7Y6F2-9-LrZ-fsg

- 23 css1、css2、css3 以及Sass、Scss
    - https://www.cnblogs.com/xj-excellent/p/12422126.html
    - http://www.mb5u.com/tool/css2/ css2手册

- 24 typescript 前端项目中引入mockjs（暂时没有使用接口形式）
    - https://blog.csdn.net/weixin_42512937/article/details/102971496
        ```javascript
          //1、----- 添加一个.ts文件，在顶部进行引入
          import Mock from 'mockjs';

          let pageModelList = Mock.mock({
            code:0,
            message:'请求成功',
            data:{
              docs:{
                //......
              }
            }
          })

          export default pageModelList;

          //2、------ 再在使用的地方进行导入
          import pageModelList from '@/mock/pageList';
          // 接下来便可以使用了
          console.log(pageModelList, 'this.pageModelList');
        ```

- 25 vue 项目中 main.js Vue全局 附加给window.vm，示例代码截图如下

    ```javascript
      // 在main.js中的设置
      window.vm = new Vue({
        router,
        store,
        render: h => h(App),
      }).$mount('#app')
      export default window.vm
    ```
    <br/>

    ```javascript
      // 在使用的地方可以直接调用
      window.vm.$router.push("/")
    ```

- 26 keepalive和document.documentElement.scrollTop测试中还是发现列表到详情再返回，有时候返回后位置还是异常的，或者图片预览弹窗后关闭时。

- 27 EPG 机顶盒样式显示问题
    -  html中每个页面元素会有focus(影响机顶盒样式的显示):表示元素被赋予焦点 和blur() ：表示元素失去焦点
    -  首页加载白屏(暂时感觉是代码执行问题)
    -  图片加载不完全（有时候只显示三分之一、四分之一），机顶盒问题

- 28 今日通用表单没有进行，参考一篇文章
    - http://www.form-create.com/v2/guide/control.html

- 29 markdown 规范参考
    - https://xianbai.me/learn-md/article/syntax/paragraphs-and-line-breaks.html
### 1月5日

- 10 vue keepalive发现一旦设置某个路由为true,后续通过动态设置就是无效的后来发现github官网也有很多人遇到这个问题
    - https://github.com/vuejs/vue-router/issues/811 <br>
  目前通过变通的方式进行解决此问题，凡是要进行缓存的组件页面，开始都将keepalive设置为true，后续通过钩子函数去触发数据列表更新。
- 11 vue router 官网有时候可以看一下api，感觉有很多自己是没有用到过的
    - https://router.vuejs.org/zh/installation.html

- 12 vue elementui radio在封装为表单控件，且可设置为必填项目，其label设置与外部赋值要保持一致的数据类型，而且required传入值如果为undefined要经过判断，代码如下(截取部分)
```javascript
    export default {
      props: {
        column: {
          type: [Object],
          default: () => {},
        },
        data: {
          type: Number,
          default: undefined,
        },
      },
      data() {
        return {
          rules: [
            {
              // 加上双？？，防止出现选中后提示请选择"this.column.title"
              required: this.column.required ?? false,
              message: '请选择' + this.column.title,
              trigger: 'change',
            },
          ],
          list: [],
        }
      },
      created() {
        this.getList()
      },
      computed: {
        value: {
          get: function() {
            return this.data
          },
          set: function(val) {
            console.log(val, typeof val, 'this.radioView.val')
            this.$emit('update:data', val)
          },
        },
      },
```

  此为一个子组件，data会传入值类型要与this.getList中设置的label值要保持一致(计算属性value会去绑定radio的 v-model)。

- 13 基于 Vue2.x 封装的 Echarts 图表组件
    - https://echarts.apache.org/zh/index.html
    - https://github.com/ElemeFE/v-charts

- 14 markdown中引入图片的方法：先将图片上传到github库，然后找到对应库，图片所在的地方，github上可预览图片的，此时便可右键查看图片地址[https://raw.githubusercontent.com/aehyok/2021/main/image/test.png],图片地址类似是这样的，或者点击download可以查看到地址的。
  <br/><br/>
  下面代码可以进行设置位置和宽高
  ```javascript
  <div align=center>
    <img src="https://raw.githubusercontent.com/aehyok/2021/main/image/test.png" width="300" height="450" align="middle" />
  </div>
  ```
  效果如下
<div align=center>
  <img src="https://raw.githubusercontent.com/aehyok/2021/main/image/test.png" width="300" height="450" align="middle" />
</div>
  <br/>

另外一种设置图片的显示方式，不过暂时没找到如何设置宽高和位置，应该可以考虑通过url后面进行参数设置（通过特定的转换）

```javascript
![avatar](https://raw.githubusercontent.com/aehyok/2021/main/image/test.png)
```
  <br/>

  ![avatar](https://raw.githubusercontent.com/aehyok/2021/main/image/test.png)

- 15 css颜色大全表
    - https://www.cnblogs.com/chenxiaomeng/p/6572319.html
    - https://blog.csdn.net/qq_42152029/article/details/81984596

- 16 html不同显示色差问题处理
    - https://www.zhihu.com/question/30113871

- 17 css 三角箭头
    - http://ourjs.com/detail/532bc9f36922aa7e1d000001

- 18 SSH 阮一峰学习笔记
    - https://github.com/wangdoc/ssh-tutorial
- 19 vconsole，引入项目
    - https://blog.csdn.net/weixin_43232488/article/details/83014086
<div align=center>
  <img src="https://raw.githubusercontent.com/aehyok/2021/main/image/1/001.png" width="560" height="600" align="middle" />
</div>

- 20 Less 中& 符号的妙用
    - https://blog.csdn.net/weixin_45959525/article/details/108396944
### 1月4日

- 1 vue中将v-for循环组件（通过v-if进行展示），方案修改为component组件，简化代码
```javascript
      <div v-for="(item, index) in columnList" :key="index">
            <component
              :is="item.type + 'View'"
              :column="item"
              :data.sync="formData[item.name]"
            />
            /*
            <!--文本框Input-->
            <!-- <TextView
              :column="item"
              :data.sync="formData[item.name]"
              v-if="item.type.toLowerCase() === 'text'"
            /> -->
            <!--文本框Input-->
            <!-- <TextAreaView
              :column="item"
              :data.sync="formData[item.name]"
              v-if="item.type.toLowerCase() === 'textarea'"
            /> -->
            <!--数值框Number-->
            <!-- <NumberView
              :column="item"
              :data.sync="formData[item.name]"
              v-if="item.type.toLowerCase() === 'number'"
            /> -->
            */
```

- 2 IMWeb 前端团队总结  https://mp.weixin.qq.com/s/muljS3iA0c2j1tIICLOhFQ

- 3  WebAssembly(WASM)学习了解
    - https://www.cnblogs.com/jixiaohua/tag/WebAssembly/

    IMWeb团队擅长的音视频领域，我们通过将ffmpeg编译为wasm版本且在浏 览器中运行，将过去处于黑盒中，只有浏览器底层才能使用的音视频编解码能力彻底解放。目前我们可以在前端页面中对音视频流直接进行处理，在完全不依赖后台的情况下，便捷、高效的实现了视频播放帧预览与视频帧截图等功能。目前团队正在进一步探索wasm在音视频以及其他过去前端无法触及的领域的可行性实践。
- 4  React可视化框架，目前3047个star

- https://github.com/brick-design/react-visual-editor

- 5 psd.js 将pds设计稿转换为json数据格式

- https://github.com/meltingice/psd.js

- 6 npm 设置源仓库
    - https://www.cnblogs.com/wenjunwei/p/10078460.html
    - https://www.cnblogs.com/steven-yang/p/12317646.html

- 7 webpack vuecli 创建项目
    - https://www.cnblogs.com/CL-King/p/14017238.html
    - https://www.cnblogs.com/gujun1998/p/13659430.html

- 8 mongodb 命令行启动数据库，可改为window服务，还未尝试
    - https://www.cnblogs.com/ningskyer/articles/6292891.html
    - https://www.cnblogs.com/wjaaron/p/7800490.html
- 9 vscode中保存自动格式化代码的插件 Prettier - Code formatter
---

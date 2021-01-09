# 2021
本年度重点计划：通用页面配置化搭建、可视化页面研究、后台配置页面数据（Vue和React）

-  创建自己的Vue 通用组件代码库 https://github.com/aehyok/vuecomponent
-  React 可视化框架  https://github.com/brick-design/react-visual-editor
-  Vue 表单生成器 https://github.com/xaboy/form-create
-  Vue 通用Table和Form表单 https://github.com/nmxiaowei/avue

## 一月份

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
- 45 react color 采集控件
    - https://casesandberg.github.io/react-color/#usage-include
    - https://casesandberg.github.io/react-color/
    - https://www.ctolib.com/article/compares/16070
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
    ```javascript
        new CopyWebpackPlugin({
          patterns: [
            {
              from: __dirname+'/src/static',
              to: 'static',
            },
          ],
          // copyUnmodified: true,
        }),
    ```
### 1月9日
 - 49 linux命令删除文件
    - https://blog.csdn.net/weixin_43627766/article/details/89469016
 - 50 linux几个命令
    - 返回上一级目录 cd ..
    - 返回根目录 cd ~
    - 直接到某个目录  cd  /usr/local/......
    - ls命令可以查看目录下的文件
    - 上传文件  rz -bye命令，弹出文件夹选项进行选择即可
    - 重启网站 nginx  -s reload

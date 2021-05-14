# 2021

本年度重点计划：通用页面配置化搭建、可视化页面研究、后台配置页面数据（Vue 和 React）

- 创建自己的 Vue 通用组件代码库 https://github.com/aehyok/vuecomponent
- React 可视化框架 https://github.com/brick-design/react-visual-editor
- Vue 表单生成器 https://github.com/xaboy/form-create
- Vue 通用 Table 和 Form 表单 https://github.com/nmxiaowei/avue
- Vue React 等 https://mp.weixin.qq.com/s/U3gxd-y5hsLHtaa0MmHlvA
- vue Form Generator https://mrhj.gitee.io/form-generator/#/
- 页面可视化搭建的前世今生 https://zhuanlan.zhihu.com/p/37171897
- imgcook https://github.com/imgcook/imgcook/blob/master/README.zh-CN.md
- https://wakatime.com/dashboard 查看 vscode 统计时长

- 大数据图标可视化
  - https://juejin.cn/post/6931708519976534029
- Form 表单生成器
  - https://github.com/dream2023/f-render
- Table 配置器
  - https://xuliangzhan_admin.gitee.io/vxe-table/#/table/base/basic
- qiankun 乾坤微前端
  - https://blog.csdn.net/Ag_wenbi/article/details/114250475
  - 官网 https://qiankun.umijs.org/zh
  - 部署配置 https://qiankun.umijs.org/zh/cookbook#%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2
  - 父子应用通信，子子应用通信 https://www.freesion.com/article/1714630234/
- 微前端

  - 打包 npm 工具包 https://github.com/aehyok/outils
  - 打包 npm 组件包 https://mp.weixin.qq.com/s/2EL-wzXKwTIhGisUgkr4-g
  - 通用配置数据 http://rap2.taobao.org/ (图片路径需要自己上传)
  - 接口文档配置 https://hellosean1025.github.io/yapi/index.html
  - 乾坤官网介绍 https://qiankun.umijs.org/zh/api
  - 搭建框架 vue3 https://juejin.cn/post/6951649464637636622
  - 乾坤全局函数 https://www.freesion.com/article/1714630234/
  - 乾坤路由跳转 https://www.codenong.com/cs109313017/
  - 路由设置 https://blog.csdn.net/qq_33396780/article/details/110694871
  - 乾坤综合性文章 https://segmentfault.com/a/1190000039185220
  - https://juejin.cn/post/6844904158085021704
  - SSO cookie 共享 https://www.cnblogs.com/sw008/p/11054301.html
  - SSO 三种方式 https://www.cnblogs.com/yonghengzh/p/13712729.html

- xShell 常用指令
  - https://www.cnblogs.com/qq350760546/p/7890680.html
  - Prettier 配置相关
  - TypeScript 相关配置
    - https://github.com/pingan8787/Leo-JavaScript/blob/master/Cute-ReadingNotes/%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%20tsconfig.json%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.md

## 五月份

### 5 月 14 日

- 254 安装 sass 和 sass-loader 时报错 this.getOptions is not a function

  - sass-loader 版本过高导致，我当时安装的版本为 11.1.1 卸载后改为 11.0.1 运行 ok

    ```javascript
      npm uninstall sass-loader

    ```

### 5 月 13 日

- 253 eslintrc.js 详解
  - https://www.cnblogs.com/ye-hcj/p/7069505.html
- 252 vue.config.js 先取消 eslint

  ```javascript
  // 是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
  module.exports = {
    lintOnSave: true,
  };
  ```

- 251 es6 module 和 commonjs
  - export 和 import https://blog.csdn.net/dt1991524/article/details/86497449
  - 深入 CommonJs 与 ES6 Module https://mp.weixin.qq.com/s/U2_hnwLTkCe-pm6f5z4nMg
  -
- 250 eslint 初始化
  ```javascript
    npm install eslint --save-dev
    ./node_modules/.bin/eslint --init
  ```

### 5 月 12 日

- 249 webpack 通过 less-loader 设置 css 前缀

  ```javascript
    {
      loader: 'less-loader',
      options: {
        modifyVars: {
          '@ant-prefix': 'yourPrefix',
        },
        javascriptEnabled: true,
      },
    }
  ```

### 5 月 11 日

- 248 vue3 form 表单 替换 this.$refs
  - https://segmentfault.com/a/1190000039651772

### 5 月 9 日

- 247 css 样式

  ```javascript
      // 鼠标悬浮于a标签选择器上的样式变化
      a:hover
      {
          background-color:yellow;
      }

      // 选择器为活动的链接设置的样式
      a:active
      {
          background-color:yellow;
      }
  ```

### 5 月 8 日

- 246 promise 防抖和节流
  - https://coding.imooc.com/learn/questiondetail/194653.html
  - 见 63
- 245 xgplayer 西瓜视频播放器
  - https://v2.h5player.bytedance.com/
  - https://github.com/bytedance/xgplayer
- 244 灰色模式和色弱模式

  ```javascript
      // 灰色模式
      .html-grey {
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: url("data:image/svg+xml;utf8,#grayscale");
      filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
      -webkit-filter: grayscale(1);
      }

      // 色弱模式
      .html-weakness {
      filter: invert(80%);
      -webkit-filter: invert(80%);
      -moz-filter: invert(80%);
      -ms-filter: invert(80%);
      -o-filter: invert(80%);
      }
  ```

### 5 月 6 日

- 243 vue template 多个根元素波浪线提示
  - https://blog.csdn.net/weixin_43245095/article/details/112514687

### 5 月 5 日

- 242 i18n 多语言翻译
  - https://www.cnblogs.com/xintao/p/11593395.html
  - https://kazupon.github.io/vue-i18n/
- 241 vueuse.org
  - https://vueuse.org/guide.html#usage-example
- 240 esbuild 编译和 commonjs

  - esbuild https://www.leiue.com/what-is-es-modules
  - esbuild 和 commonjs 比较 https://zhuanlan.zhihu.com/p/161015809

- 239 vite 开启 https
  - vite.config.js 中 https: true 属性开启
- 238 webpack devServer 配置开启 https
  - https://blog.csdn.net/dclnet/article/details/96316401
- 237 json 美化工具
  - https://github.com/leezng/vue-json-pretty

### 5 月 1 日

- 236 axios 请求缓存的处理
  - https://www.wodecun.com/blog/7931.html
  - 缓存库 https://github.com/RasCarlito/axios-cache-adapter

## 四月份

### 4 月 29 日

- 235 wpf 嵌入 chrome 浏览器
  - https://github.com/cefsharp/CefSharp/tree/master/CefSharp.Wpf.Example

### 4 月 25 日

- 234 vue3 学习笔记
  - https://www.cnblogs.com/sjie/p/14075641.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7-computed
- 233 HBuilderX 引入 vant
  - https://www.freesion.com/article/3159591401/

### 4 月 24 日

- 232 微信小程序地图服务
  - https://lbs.qq.com/product/miniapp/jssdk/
  - https://lbs.qq.com/miniProgram/jsSdk/jsSdkGuide/methodSearch
- 231 uni-app pages 数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
- 230 微信公众号 H5 页面调用微信登录全过程
  - 详见 ---微信公众号 H5 调用微信登录全过程
  - https://www.cnblogs.com/0201zcr/p/5131602.html
- 229 微信扫描二维码
  - https://mp.weixin.qq.com/s/1A30nQNg4j4GwLG1n91DCw

### 4 月 22 日

- 228 docker 中 mysql 的控制
  - https://www.cnblogs.com/jiefu/p/12204555.html
- 227 docker 安装
  - https://juejin.cn/post/6950558227490668557
  - docker 安装和 docker compose 安装
    - https://get.daocloud.io/
  - rap2 安装
    - https://github.com/thx/rap2-delos
  - docker-compose 安装和卸载
    - https://www.cnblogs.com/zhihuifan10/articles/11121110.html
  - docker 安装和卸载
    - https://www.cnblogs.com/qinxu/p/10032176.html

### 4 月 21 日

- 226 Husky 提升代码质量
  - https://www.cnblogs.com/xhyccc/p/13941335.html

### 4 月 20 日

- 225 vite mock
  - https://github.com/anncwb/vite-plugin-mock/blob/HEAD/README.zh_CN.md
- 224 eslint 规范
  - https://github.com/lin-123/javascript
  - https://github.com/airbnb/javascript#translation

### 4 月 19 日

- 223 mitt 事件总线 https://blog.csdn.net/fuweipeng2012/article/details/113812794
- 222 vue3 替代 vue2 中.sync 的 v-model
  - https://segmentfault.com/a/1190000023911894
  - https://blog.csdn.net/wk843620202/article/details/108613493
- 221 vue3 provide 和 inject 传值
  - https://blog.csdn.net/xuhua32100/article/details/113518217
- 220 vue3 useRoute 和 useStore 的使用
  - http://lanwuyaojiu.cn/blogm/blogart-110.html

###

- 219 typescript tsconfig.json
  - https://github.com/pingan8787/Leo-JavaScript/blob/master/Cute-ReadingNotes/%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%20tsconfig.json%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.md

### 4 月 18 日

- 218 vue3 vite2 模版项目配置

  - https://juejin.cn/post/6951649464637636622#heading-14

- 217 EditorConfig for VS Code 插件
  - JetBrains 系列（WebStorm、IntelliJ IDEA 等）则不用额外安装插件，可直接使用 EditorConfig 配置。
- 216 vite 中文网 https://www.pipipi.net/vite/
- 215 css module
  - https://github.com/FrankKai/FrankKai.github.io/issues/45

### 4 月 17 日

- 214 随机数字生成
  ```javascript
  Math.floor(Math.random() * 10); // 返回 0 至 9 之间的数
  Math.floor(Math.random() * 11);
  ```
- 213 适配大屏幕解决方案
  - lib-flexible 库
  - https://www.cnblogs.com/lyzg/p/5058356.html
  - https://vue-loader.vuejs.org/zh/guide/css-modules.html#%E7%94%A8%E6%B3%95

### 4 月 16 日

- 212 vue vite public 下图片路径的问题
  ```javascript
      public 下面的文件路径前要加斜杠 '/'
      参考 -204下webpack打包public路径设置
  ```

### 4 月 15 日

- 211 微信小程序开发
  - https://uniapp.dcloud.io/
  - https://vant-contrib.gitee.io/vant-weapp/#/home
  - https://blog.csdn.net/YNEWA/article/details/106056610
  - https://liubing.me/uniapp-use-vant-weapp.html
- 210 vue jsonp 插件跨域请求数据使用
  - https://www.npmjs.com/package/vue-jsonp
- 209 webpack plugin 各种插件
  - https://webpack.html.cn/plugins/

### 4 月 14 日

- 208 this.$set
  - https://juejin.cn/post/6844903901175496711
- 207 vue 首页加载慢，路由懒加载、组件懒加载
  - https://blog.csdn.net/mataodehtml/article/details/108867545

### 4 月 11 日

- 206 即偶数元素 css 给最后的元素添加样式
  ```javascript
      // 第二个元素，里面换成n就是第n个元素
      div:nth-child(2)
      {
      background:#ff0000;
      }
      // 选中最后一个奇数
      div:nth-child(odd):last-child {
          margin-bottom: 0;
      }
      // 选中最后一个偶数
      div:nth-child(even):last-child {
          margin-bottom: 0;
      }
      // 3的倍数元素的样式，后面的0可以换成m,就是3倍再加m
      p:nth-child(3n+0)
      {
      background:#ff0000;
      }
  ```

### 4 月 10 日

- 205 vue style 绑定样式
  ```javascript
      :style="{backgroundImage: 'url(' + item.url + ')'}"
  ```
- 204 vue cli public

  - 文件夹下面可以放置静态的图片资源和 json 文件
  - 注意在调用的时候不要在路径前面添加"/"

  ```javascript
      // 1、axios调用json数据
       this.$axios.get('data/001/family.json').then(res=>{
         console.log('this.$axios.get', res)
       })
      // 2、image路径 前面不要加斜杠了
      bannerData:[
          {imageUrl: 'images/banner/2.jpg'},
          {imageUrl: 'images/banner/1.png'},
          {imageUrl: 'images/banner/3.jpg'}
      ],

  ```

### 4 月 9 日

- 203 vue cli public 文件夹
  - https://cli.vuejs.org/zh/guide/html-and-static-assets.html#public-%E6%96%87%E4%BB%B6%E5%A4%B9
  - https://www.cnblogs.com/makalochen/p/13984699.html
- 202 window.location 详解
  - https://www.cnblogs.com/gopark/p/10191577.html
- 201 打包后 public 下的静态文件目录找不到
  - https://www.cnblogs.com/wzcsqaws/p/11283228.html
- 200 图片区域 area
  - https://www.w3school.com.cn/tags/tag_area.asp
  - https://www.w3school.com.cn/tiy/t.asp?f=eg_html_areamap
- 199 路由返回
  ```javascript
      //this.$route是当前页面的路由，而this.$router是当前路由器，包含所有路由的信息
      1、vue路由中的返回
      this.$router.go(-1)
      2、其中this.$router也包含 history中的路由信息
  ```
- 198 vscode 设置中文 https://blog.csdn.net/qq_30068487/article/details/82589347
  ```javascript
      1、vscode中 Ctrl+Shift+p
      2、搜索框中输入 configure display language
      3、选择zh-cn中文语言包
      4、如果还是中文，在Ctrl+Shift+x
      5、输入chinese中文语言包安装重启
  ```

### 4 月 8 日

- 197 flex 简单布局
  - https://marlous.github.io/2019/05/06/%E5%89%8D%E7%AB%AF-flex-%E5%B8%83%E5%B1%80%E6%96%B9%E6%B3%95%E5%B0%8F%E7%BB%93/

### 4 月 7 日

- 196 微信小程序跳转到小程序
  - https://www.cnblogs.com/strong514/p/12470365.html
- 195 vue- vnode
  ```javascript
  Vue.mixin({
    beforeRouteLeave: function (to, from, next) {
      console.log(this.$vnode, window);
      if (
        from &&
        from.meta.rank &&
        to.meta.rank &&
        from.meta.rank > to.meta.rank
      ) {
        console.log(this.$vnode, window, "-----------全局beforeRouteLeave");
        if (this.$vnode && this.$vnode.data.keepAlive) {
          if (
            this.$vnode.parent &&
            this.$vnode.parent.componentInstance &&
            this.$vnode.parent.componentInstance.cache
          ) {
            if (this.$vnode.componentOptions) {
              var key =
                this.$vnode.key == null
                  ? this.$vnode.componentOptions.Ctor.cid +
                    (this.$vnode.componentOptions.tag
                      ? `::${this.$vnode.componentOptions.tag}`
                      : "")
                  : this.$vnode.key;
              var cache = this.$vnode.parent.componentInstance.cache;
              var keys = this.$vnode.parent.componentInstance.keys;
              console.log(cache, "cache-keys");
              if (cache[key]) {
                if (keys.length) {
                  var index = keys.indexOf(key);
                  if (index > -1) {
                    keys.splice(index, 1);
                  }
                }
                delete cache[key];
              }
            }
          }
        }
        this.$destroy();
      }
      next();
    },
  });
  ```
- 194 nginx vue 404 not found
  - https://blog.csdn.net/onlysunnyboy/article/details/75270533

### 4 月 2 日

- 193 nodejs 安装
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
    ```
- 192 linux 常用命令使用
  - https://juejin.cn/post/6938385978004340744
- 191 xftp 设置，然后 xshell 就可以访问
  - https://juejin.cn/post/6844903940262199309
  - https://www.jb51.net/article/127411.htm
  - https://blog.csdn.net/lwg_1540652358/article/details/84679659
- 190 nginx
  - https://juejin.cn/post/6844903701459501070
  - https://juejin.cn/post/6844904144235413512

### 4 月 1 日

- 189 keepalive
  - https://www.dazhuanlan.com/2019/11/19/5dd2ee2bda35a/
  - https://juejin.cn/post/6844903846901186574
  - https://juejin.cn/post/6844903649517240328
- 188 Easy Sass 和 Beautify 安装 vscode 插件，则修改 scss 样式保存时会将样式自动同步 css 中
- 187 centos nginx
  - https://juejin.cn/post/6844904144235413512
- 186 密码加密

  - MD5 加密 js-md5
    ```javascript
    import md5 from "js-md5";
    md5("username" + "userpassword"); // 加密 加盐
    ```
  - 前端字符串转码解码

    ```javascript
        npm install --save js-base64
        import { encode, decode } from 'js-base64'

        encode('aehyok')  // 转码
        decode('ADkjdifewoewe')  //解码
    ```

## 三月份

### 3 月 31 日

- 185 富文本框 wangeditor
  - https://www.wangeditor.com/
- 184 全局监测录入框事件

  ```
      // 全局使用 引入init
      import '@/utils/init'

      //init.js文件内容
      // xss防御攻击输入框失去焦点
      document.addEventListener('blur', function(e) {
      if(['input', 'textarea'].includes(e.target.tagName.toLowerCase())) {
          console.log(e, e.target.value, 'e.target.value')
          e.target.value =replaceStr(e.target.value)
          e.focus()
      }
      }, true)
      function replaceStr(a) {
      a = a.replace(/(<br[^>]*>| |\s*)/g, '')
          .replace(/&/g,"")
          .replace(/"/g,"")
          .replace(/'/g,"")
          .replace(/</g,"")
          .replace(/>/g,"");
      return a
      }
  ```

  // 可以统一处理传递的 data 参数，加密或者请求头

  ```javascript
  instance.interceptors.request.use(
    (request) => {
      const userInfo = localStorage.loginInfo
        ? JSON.parse(localStorage.loginInfo)
        : {};
      request.headers = {
        Authorization: userInfo.token,
        "Content-Type": "application/json",
      };

      if (request.data) {
        request.data = replaceStr(request.data);
      }
      console.log(request, "s---------request");
      return request;
    },
    (error) => Promise.reject(error)
  );
  ```

### 3 月 30 日

- 183 nuxt.js 服务端渲染
  - https://www.nuxtjs.cn/guide
- 182 vue xss 攻击
  - https://blog.csdn.net/weixin_36908494/article/details/101268583
  - https://blog.csdn.net/u011140116/article/details/107994191
  - https://juejin.cn/post/6844904102137167880#heading-19

### 3 月 28 日

- 181 搭建 nuxt.js 服务端渲染
  - https://www.nuxtjs.cn/guide

### 3 月 27 日

- 180 搭建地图加载底图服务
  - https://zhuanlan.zhihu.com/p/72154608
  - https://www.dazhuanlan.com/2019/12/30/5e09c70e70078/
  - http://itecfun.com/viewtopic.php?id=3414

### 3 月 26 日

- 179 多边形计算重心
  - https://juejin.cn/post/6844903837669687303

### 3 月 25 日

- 178 vue cesium
  - https://zouyaoji.top/vue-cesium/#/zh/start/installation

### 3 月 24 日

- 177 回流和重绘
  - https://juejin.cn/post/6844903779700047885
- 176 TileLayer 设置 subdomains
  - https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
- 175 VUE 防止 XSS
  - https://blog.csdn.net/u011140116/article/details/107994191

### 3 月 23 日

- 174 VUE CLI 模式和环境变量
  - https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F
- 173 构建简易全景图
  - 构建过程 https://juejin.cn/post/6927193628724953096
  - https://github.com/loveskyhx/vuePanorama
  - 已 fork 到 https://github.com/aehyok/vuePanorama

### 3 月 19 日

- 172 webpack 打包优化
  - https://mp.weixin.qq.com/s/SzD22kTnYYfQShQwRaAGWA
- 171 css3 特效
  - https://www.17sucai.com/pins/20269.html
  - 关系图 https://www.17sucai.com/pins/36932.html
  - 关系图 https://www.17sucai.com/pins/27610.html
  - 关系图 https://www.moyublog.com/codes/7921.html

### 3 月 18 日

- 170 查看端口占用情况
  - 查看指定端口占用情况 netstat -ano |findstr 5037
  - 通过 pid 查看进行详情 tasklist | findstr pid
  - 然后可以到任务管理器中 结束指定 pid 的任务
- 169 github 无法打开
  - https://github.com.ipaddress.com/

### 3 月 16 日

- 168 vue 下载文件，通过添加 token 的方式
  - https://juejin.cn/post/6844904069958467592
  - https://www.cnblogs.com/chenjun1/p/11668535.html

### 3 月 15 日

- 167 vue videojs 播放视频
  - https://www.cnblogs.com/qdwds/p/11516241.html

### 3 月 12 日

- 166 几种通用的表单验证字段
  - https://www.cnblogs.com/luoxuemei/p/9295506.html
- 165 vue $attrs、$listeners 传值
  - https://www.cnblogs.com/vickylinj/p/13376391.html

### 3 月 11 日

- 164 vue watch 深度监听
  - https://www.cnblogs.com/lanleiming/p/13256099.html

### 3 月 10 日

- 163 vue2 和 vue3
  - 关注实时动态的
  - vue2 很熟悉、
- 162 有些包 package 如果 npm i 安装失败，那么可以使用 yarn 再试一下
- 161 全局 css 变量设置
  - https://www.cnblogs.com/happymental/p/12358167.html
- 160 qiankun 微前端 框架
  - 乾坤官网教程 https://qiankun.umijs.org/zh/cookbook

### 3 月 8 日

- 159 前端拆分
  - https://blog.csdn.net/weixin_39685459/article/details/111724613

### 3 月 7 日

- 158 省市区 vue elementui 联动
  - https://www.cnblogs.com/ychizzz/p/13743277.html

### 3 月 6 日

- 157 中国省市县区
  - https://github.com/small-dream/China_Province_City
  - https://github.com/modood/Administrative-divisions-of-China
- 156 vue-drag-resize
  - https://github.com/kirillmurashov/vue-drag-resize
- 155 map-demo
  - https://malagis.com/map-demo/leaflet/note-5.html

### 3 月 5 日

- 154 wrld.js
  - https://docs.wrld3d.com/wrld.js/latest/docs/examples/
- 153 eventBus 在 vue 中的使用
  - https://blog.csdn.net/qq_26834399/article/details/106387585

### 3 月 4 日

- 152 前端 qrcode
  - https://www.runoob.com/w3cnote/javascript-qrcodejs-library.html

### 3 月 1 日

- 151 vue2-leaflet
  - https://vue2-leaflet.netlify.app/quickstart/
- 150 leaflet 和 leaflet.pm,已迁移到 leaflet-geoman
  - https://github.com/geoman-io/leaflet-geoman
  - https://blog.csdn.net/qq_40423339/article/details/106080464
  - https://blog.csdn.net/qq_40423339/article/details/106098966
  - https://leafletjs.com/reference-1.6.0.html
- 149 微信公众号是否关注
  - https://www.cnblogs.com/Yang777/p/10113077.html
  - https://blog.csdn.net/xialong_927/article/details/90297259
  - h5 跳转公众号 https://blog.csdn.net/qq_35713752/article/details/104362096

### 2 月 27 日

- 148 vue env 全局变量
  - https://www.cnblogs.com/xixiaoxi/p/12593749.html

## 二月份

### 2 月 25 日

- 147 babel 入门
  - http://www.ruanyifeng.com/blog/2016/01/babel.html?bsh_bid=1656398345
- 146 webpack 配置详解
  - 基础篇 https://juejin.cn/post/6844904079219490830
  - 进阶篇 https://juejin.cn/post/6844904084927938567
  - 优化篇 https://juejin.cn/post/6844904093463347208
  - 从入门到真实项目 https://juejin.cn/post/6844903495959576583
  - 掘金小册子 https://juejin.cn/book/6844733709808041992

### 2 月 23 日

- 145 动态 form 表单 https://juejin.cn/post/6844904173691994119

### 2 月 21 日

- 144Element-Pro-Crud
  - https://crud.boboooooo.top/
- 143 vue element npm 发布组件
  - https://github.com/hwq888/hwq-custom-ui-package
- 142 imgcook 学习
  - imgcook https://github.com/imgcook/imgcook/blob/master/README.zh-CN.md
  - https://www.imgcook.com/docs?slug=simple-example
- 141 廖雪峰的个人博客
  - https://www.liaoxuefeng.com/wiki/1016959663602400
- 140 统计 vscode 使用时长 waketime
  - https://wakatime.com/vs-code

### 2 月 20 日

- 139 jquery find 返回多个后代元素
  - https://www.runoob.com/jquery/traversing-find.html

### 2 月 19 日

- 138 创建自己的 library 类库包并使用 webpack4.x 打包发布到 npm
  - https://www.cnblogs.com/weiqinl/p/9786966.html

### 2 月 18 日

- 137 新年开工第一天，立下一个 flag，自律、自律、自律

### 2 月 11 日

- 136 mac 下 npm install 安装失败
  - sudo 加上权限，主要是没有权限访问

### 2 月 6 日

- 135 Failed to mount component: template or render function not defined
- https://stackoverflow.com/questions/41983767/vue-template-or-render-function-not-defined-yet-i-am-using-neither
- https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
- https://github.com/JeffreyWay/laravel-mix/issues/198

### 2 月 5 日

- 134 husky 使用和介绍
  - http://www.mamicode.com/info-detail-2916910.html

### 2 月 4 日

- 133 前端本地存储 GoDb.js
  - https://juejin.cn/post/6925311938419408904
  - https://godb-js.github.io/gbah32.html
  - https://juejin.cn/post/6918705632757415950

### 2 月 3 日

- 132 jsonEditor 编辑
  - https://github.com/josdejong/jsoneditor
  - 暂时使用这个比较方便 https://github.com/yansenlei/VJsoneditor
  - https://github.com/yansenlei/VJsoneditor/blob/master/src/VueJsoneditor.vue
  - https://ace.c9.io/
- 131 全局注册组件
  - https://segmentfault.com/a/1190000019903495
- 130 form-create 自定义组件如何注册到 form-create 中使用
  - http://www.form-create.com/v2/guide/custom-form-component.html#%E7%A4%BA%E4%BE%8B

### 2 月 2 日

- 129 Vue.extend 动态注册子组件
  - https://www.cnblogs.com/tnnyang/p/10945399.html
- 128 go 语言学习网站
  - http://c.biancheng.net/golang/intro/
- 127 vscode 搭建 go 开发环境
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

### 2 月 1 日

- 126 vue3.0 demo 学习 https://github.com/newbee-ltd/vue3-examples
- 125 npx 命令使用详解
  - http://www.ruanyifeng.com/blog/2019/02/npx.html
- 124 webpack 在线图书
  - http://webpack.wuhaolin.cn/
- 123 vue.config.js 配置
  - https://cli.vuejs.org/zh/config/
- 122 commander 打包命令行工具
  - https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md
- 121 vue3 源码解读
  - https://github.com/cuixiaorui/mini-vue
- 120 表单工具可视化拖拽程序
  - 各种前端轮子 https://mp.weixin.qq.com/s/U3gxd-y5hsLHtaa0MmHlvA
  - https://gitee.com/MTrun/big-screen-vue-datav

## 一月份

### 1 月 30 日

- 119 webpack 网上图书 http://webpack.wuhaolin.cn/
- 118 打包 build 时不清除原有打包目录的文件
  - "build": "vue-cli-service build --no-clean",
- 117 github.io 搭建自己的个人网站
  - 实际上就是将自己的前端网站打包，然后发布到打包文件 commit 到 aehyok.github.io
  - https://zhuanlan.zhihu.com/p/28321740
  - https://github.com/Cazaea/Cazaea.github.io

### 1 月 28 日

- 113 mockjs 想要在 typeScript 中使用，安装 mockjs 之后，需要安装 npm install --save @types/mockjs
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

### 1 月 27 日

- 111 动态 import 的用法，动态路由
  - https://blog.csdn.net/javao_0/article/details/85162458
  - https://github.com/HenryTSZ/zeit/blob/master/source/_posts/vue-dynamic-router.md
  - https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96
- 112 document.activeElement.dataset 和 e.target.dataset 问题
  - https://www.cnblogs.com/xiaoli52qd/p/7857468.html

### 1 月 26 日

- 108 一个非常棒的开源项目 H5-Dooring 目前 star 3.1k
  - 开源地址 https://github.com/MrXujiang/h5-Dooring
  - 基本介绍 http://h5.dooring.cn/doc/zh/guide/
- 109 npm 发包
  - https://mp.weixin.qq.com/s/2EL-wzXKwTIhGisUgkr4-g 最重要的一篇
  - https://my.oschina.net/u/4461771/blog/3188900
  - https://www.cnblogs.com/zlp-blog/p/10718383.html
  - https://mp.weixin.qq.com/s/4eE5kHicRK2mVcqEQSM4lg
- 110 npm publish 发包时异常
  - 403 Forbidden - PUT https://registry.npmjs.org/aehyok-hello - Forbidden
    ```javascript
    npm修改邮箱，要登录邮箱进行验证
    查看npm 仓库源，确保是npmjs.org
    ```

### 1 月 25 日

- 100 1 月 23 日参加公司年终总结和计划会以及部门会议
- 101 查看 vue3 github 项目 https://zhuanlan.zhihu.com/p/254219538
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
- 105 发现一个不错的 git 文档库 准备 get 一下
  - https://github.com/HenryTSZ/zeit/tree/master/source/_posts
- 106 npm 使用详解
  - https://javascript.ruanyifeng.com/nodejs/npm.html
- 107 阮一峰 git 仓库
  - https://github.com/ruanyf/jstutorial
  - http://www.ruanyifeng.com/home.html

### 1 月 22 日

- 97 vue3 中的 setup Composition API
  - https://segmentfault.com/a/1190000023911894
- 98 vue elementui table 表格的封装
  - https://segmentfault.com/a/1190000023382224
- 99 vite 工具官网
  - https://vitejs.dev/
  - npm install -g create-vite-app 全局安装
  - create-vite-app projectName
  - https://www.cnblogs.com/qlb-7/p/13790610.html
  - https://segmentfault.com/a/1190000023737670 vite 创建项目并添加 typescript
  - https://github.com/Mstian/Vue-Onepiece-Admin.git 参考一个 vue3 的项目

### 1 月 21 日

- 90 对比一下 vue2 和 vue3 中分别使用 typeScript 的方式
  - https://jishuin.proginn.com/p/763bfbd2e891
  - https://www.cnblogs.com/qq3279338858/p/12631728.html
  -
- 91 vue 中 lint 检查的配置
  - https://www.cnblogs.com/fengyingYZ/p/10369703.html
- 92 vue create 项目时，手动选择 通过空格键进行选中或者反选，然后进行配置
- 93 dart-sass 和 node-sass 区别
  - https://blog.csdn.net/qianxing111/article/details/107617538
- 94 前端多媒体知识
  - https://mp.weixin.qq.com/s/yuIkTwHk5dx20r8Z0cpSDA
- 95 vue3 官网 ts 支持
  - https://v3.cn.vuejs.org/guide/typescript-support.html
- 96 google 技术栏目
  - https://www.infoq.cn/zones/google/cloud/list?id=2

### 1 月 20 日

- 84 vue-class-component 和 vue-property-decorator vue 类组件
  - https://www.cnblogs.com/qq3279338858/p/12631728.html
- 85 css transform scale 放大和缩小
  - https://www.cnblogs.com/yanggeng/p/11277199.html
- 86 history.pushState() 可以控制浏览器自带的返回按钮
  - https://www.cnblogs.com/lguow/p/9222272.html
- 87 export 和 export default
  - https://www.cnblogs.com/fanyanzhao/p/10298543.html
- 88 vue3 项目创建
  - 创建项目 https://www.cnblogs.com/carlJian/p/13932400.html
  - 引入 elementui https://element-plus.gitee.io/#/zh-CN/component/quickstart
  ```javascript
    npm install element-plus --save
  ```
  - vue-cli-service serve 命令
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

### 1 月 19 日

- 82 fq 今日更新
- 83 webassembly 视频进行转码 https://mp.weixin.qq.com/s/5k5f3UDNhFyc9DU-cws3og

### 1 月 18 日

- 81 echarts 地图
  - 设置 echarts div 的宽度和高度
  - 边距可以设置 gird 属性中的{top,left:right,bottom}
  - x 轴和 y 轴，均可设置多个，匹配数据的时候要进行设置 yIndex
  - 柱状图的柱状 可设置颜色
  - 顶部选项 可设置 图标 icon，以及字体颜色等
  - 配置渐变颜色 https://blog.csdn.net/weixin_44897255/article/details/96877562

### 1 月 16 日

- 80 transform
  - https://www.cnblogs.com/yanggeng/p/11286250.html translate
  - https://www.cnblogs.com/yanggeng/p/11275771.html rotate

### 1 月 15 日

- 77 vscode 插件韭菜盒子
  - https://github.com/LeekHub/leek-fund
- 78 echart 柱状图渐变颜色
  - https://www.cnblogs.com/myfirstboke/p/11080968.html
- 79 echart 百度地图数据
  - https://echarts.apache.org/examples/zh/editor.html?c=doc-example/map-example
  - http://datav.aliyun.com/tools/atlas/#&lat=30.332329214580188&lng=106.75386074913891&zoom=4.5

### 1 月 14 日

- 76 数字之间的间隔 - letter-spacing:2px;
- 77 css 小箭头
  - http://blog.sina.com.cn/s/blog_68128cfd0101nv28.html
- 78 css display:flex 一行两列一行三列
  - https://blog.csdn.net/ws19900201/article/details/102564033 文档最后

### 1 月 13 日

- 72 animate.css 动画库
  - https://github.com/animate-css/animate.css
- 73 饼状图 legend 圆点设置
  - https://www.jianshu.com/p/f4338c76b169
- 74 border-radius 50%和 100%
  - https://blog.csdn.net/csm0912/article/details/85050562
- 75 axios 针对请求进行缓存
  - https://www.wodecun.com/blog/7931.html
  - https://github.com/ZhengXiaowei/axios-request-cache/
  - https://github.com/kuitos/axios-extensions

### 1 月 12 日

- 68 模块热替换 api

  - http://www.myjscode.com/page/article109.html

- 69 webpack 配置设置
  - https://www.cnblogs.com/hezihao/p/8072750.html
- 70 cesium 地图
  - https://zhuanlan.zhihu.com/p/34217817
  - https://www.thingjs.com/guide/speedcityshow
- 71 百度 echarts
  - https://github.com/ecomfe/vue-echarts
  - https://echarts.apache.org/examples/zh/editor.html?c=bar-background
  - https://echarts.apache.org/examples/zh/index.html 百度 echarts 地图样例
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

### 1 月 11 日

- 54 无代码 no-code(NCDP)和低代码的解释
  - https://mp.weixin.qq.com/s/Zhmh6mzCyxJlOvmuDMBSfw
  - no-code 解释https://www.makerpad.co/blog/what-is-no-code
- 55 无代码相关的社区
  - https://www.makerpad.co/
  - https://www.nocode.tech/
  - https://www.nucode.co
- 56 form-create 中是如何通过 control 控制其他组件的
  - http://www.form-create.com/v2/guide/control.html
- 57 nginx 使用
  - https://www.cnblogs.com/taiyonghai/p/9402734.html 安装到初步尝试
  - https://www.yuque.com/jarvis-zzzhw/frontend/oew2z5 配置详解
- 58 vconsole 公众号调试,直接在微信聊天中点击下面连接，点击即可
  - debugmm.qq.com/?forcex5=true
    59 nginx 安装到使用详解
  - https://juejin.cn/post/6914160814152744973
- 60 杀进程的小工具 fkill
  - https://github.com/sindresorhus/fkill-cli
- 61 document.documentElement.scrollTop 微信公众号有时候获取值为 0，暂时可考虑使用 document.body.scrollTop 进行设置
- 62 vue 可视化拖拽组件
  - https://juejin.cn/post/6908502083075325959#heading-16
  - 吸附标线 https://github.com/woai3c/visual-drag-demo/blob/main/src/components/Editor/MarkLine.vue
- 63 前端节流和防抖介绍
  - https://juejin.cn/post/6901493600098779150
- 64 vue 组件嵌套会提示'make sure to provid the "name" option'
  - https://blog.csdn.net/Nalaluky/article/details/83007101
  ```javascript
      // 组件嵌套如何引用的问题
      components: {
        FormView: () => import('@/components/input/formView'),
      },
  ```
- 65 如果目前定义的组件中，没有满足要求的，可以进行自行定义组件，然后插入到自定义组件中
- 66 dev-server 通过 express 生成一个接口，来加载一个 json 本地文件
  - https://www.cnblogs.com/lurenjia1994/p/10038725.html
  - https://www.cnblogs.com/yy136/p/9977864.html
  - http://www.imooc.com/article/details/id/291839
  ```javascript
  // 此种方式打包好以后其实已经加载到项目中了
  let json = require("../static/pageList.json");
  let pageModelList: any = JSON.parse(JSON.stringify(json));
  console.log(pageModelList, "this.pageModelList");
  ```
- 67 webpack 拷贝 json 文件后部署后虚拟路径读取的问题
  ```javascript
  let pageModelList: any;
  console.log(window.location, "window.location");
  let href = window.location.href.split("?");
  requestJson.get(href[0] + "/static/pageList.json").then((res) => {
    console.log(res);
    pageModelList = res;
    //成功获取到json数据
  });
  ```

### 1 月 9 日

- 49 linux 命令删除文件
  - https://blog.csdn.net/weixin_43627766/article/details/89469016
  - https://www.cnblogs.com/qq350760546/p/7890680.html xshell 命令行总结
  - https://www.yuque.com/jiushiyaoxuehaolinux/linux_ops/welcome
- 50 linux 几个命令
  - 删除当前目录下的文件 rm -f \*
  - 删除当前目录下的指定文件 rm -f xxxx.js
  - 返回上一级目录 cd ..
  - 返回根目录 cd ~
  - 直接到某个目录 cd /usr/local/......
  - ls 命令可以查看目录下的文件
  - ls -l 查看文件列表详情 https://blog.csdn.net/kexiaoling/article/details/51096164
  - 上传文件 rz -bye 命令，弹出文件夹选项进行选择即可
  - 重启网站 nginx -s reload
- 51 markdown 语法学习
  - https://mp.weixin.qq.com/s/bZufZd8oynVOUgDYWOH9tg
  - https://www.yuque.com/yuque/help/dive-into-yuque-editor
  - https://mp.weixin.qq.com/s/bZufZd8oynVOUgDYWOH9tg
- 52 gitbook 编写文档
  - https://www.cnblogs.com/weswes/p/9874325.html
  - https://www.gitbook.com/ 455043818@qq.com
  - https://www.kancloud.cn/ 看云平台
  - https://www.yuque.com/ 语雀
- 53 vue 中 nextTick 妙用
  - 在 created 和 mounted 阶段，如果需要操作渲染后的试图，也要使用 nextTick 方法。
  - 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted
  ```javascript
  this.$nextTick(() => {
    document.documentElement.scrollTop = sessionStorage.getItem("scrollH") || 0;
    console.log(
      document.documentElement.scrollTop,
      "document.documentElement.scrollTop"
    );
  });
  ```

### 1 月 8 日

- 46 window.requestAnimationFrame 告诉浏览器要执行动画
  - https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame
  - 页面最小化了，或者被 Tab 切换关灯了，页面绘制全部停止，资源高效利用；
  - window.cancelAnimationFrame 取消回调函数
- 47 window.setInterval 以指定的周期执行某个函数运行，window.clearInterval 取消由 setInterval()方法设置的定时器。
  ```javascript
    private executeAnimation() {
      let self = this;
      window.setInterval(function () {
        self.startAnimation('right');
      }, 3000);
    }
  ```
- 48 webpack 配置官方文档
  - v5 版本 https://webpack.docschina.org/
  - v4 版本 https://v4.webpack.docschina.org/
  - 插件地址配置 https://v4.webpack.docschina.org/concepts/#%E6%8F%92%E4%BB%B6-plugin-
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

### 1 月 7 日

- 30 通过 adb.exe 连接机顶盒来查看应用的日志记录
  - 查看 adb 版本 adb version
  - 通过 IP 地址连接机顶盒 adb connect 172.18.0.80:5555
  - 查看应用 apk 列表 adb shell pm list package
  - adb devices 查看连接设备
  - adb kill-server
  - netstat -ano |findstr 5037
  - adb disconnect
  - 链接机顶盒 ----adb connect 172.18.0.239
  - google 浏览器中链接 chrome://inspect/#devices----------edge://inspect/#devices
  - 进入命令 ----adb shell
  - 查看包名列表----- pm -l |grep have
  - 卸载 package ---- pm uninstall cn.haveplus.hoteltv（海屋 apk 可通过遥控卸载）
  - 退出 shell ---- exit
  - 安装 apk ----adb install C:\Users\chill\Desktop\havetv-release.apk
  - 开启 start ----- adb shell am start cn.haveplus.hoteltv
- 31 版本号如何设置的问题
  <br/><br/>

  ![avatar](https://raw.githubusercontent.com/aehyok/2021/main/image/1/003.png)

- 32 常用开发代码函数查询 mac 下 dash，window 下 devDocs
- 33 elementui table 中的那些基本操作

  - https://www.jianshu.com/p/2251cda42425

- 34 mapBox 地图指引
  - https://account.mapbox.com/ 官网地址，设置 accessTokens
  - http://www.mapbox.cn/mapbox-gl-js/api/#map 中文文档
  - https://github.com/mapbox/mapbox-gl-draw/ 绘制
  - https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-draw/ 绘制模板
- 35 mapBox 空间分析库 truf.js

  - https://www.cnblogs.com/zhurong/p/12209209.html

- 36 ts 后缀视频播放可通过 mux.js
  - https://www.cnblogs.com/ypppt/p/13683685.html
  - https://docs.videojs.com/tutorial-vue.html
- 37 控制台 console 打印日志的开启和关闭
  ```javascript
  // 判断配置文件是否开启日志调试 是否输出日志 True 输出 False 不输出
  const logDebug = process.env.NODE_ENV !== "production";
  console.log = (function (oriLogFunc) {
    return function () {
      if (logDebug) {
        oriLogFunc.apply(this, arguments);
      }
    };
  })(console.log);
  ```
- 38 高德地图 3D demo
- https://developer.amap.com/api/javascript-api/reference/maps-3d

- 39 vue 前端项目 webpack 打包设置路径的问题，主要是 publicPath
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
- 40 Python 命令行神器 Click （pip install -U click），pip 在 python 中

  - https://www.cnblogs.com/nima/p/11751459.html

- 41 git 针对 tag 标签设置，tag 是针对所有分支的

  - 所有项目，发布版本到 SIT，都需要打标签，以便追溯版本所对应的代码。如果后面需要改版本拉分支修改，也非常方便；

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

- 42 查看 markdown.md 文件可以使用 Typora
  - 下载地址 https://www.typora.io/
- 43 web 计时机制 performance 对象
  - https://www.cnblogs.com/xiaohuochai/archive/2017/03/09/6523397.html
- 44 window performance 监测时间
  - http://www.cocoachina.com/articles/19882
  - https://www.cnblogs.com/web-easy/p/5287136.html
- 45 react color 颜色采集控件
  - https://casesandberg.github.io/react-color/#usage-include
  - https://casesandberg.github.io/react-color/
  - https://www.ctolib.com/article/compares/16070

### 1 月 6 日

- 21 浏览器视频转码

  - https://github.com/bgrins/videoconverter.js

- https://github.com/FFmpeg/FFmpeg

- 22 2020 年大前端技术趋势解读

- https://mp.weixin.qq.com/s/aAmFyYF7Y6F2-9-LrZ-fsg

- 23 css1、css2、css3 以及 Sass、Scss

  - https://www.cnblogs.com/xj-excellent/p/12422126.html
  - http://www.mb5u.com/tool/css2/ css2 手册

- 24 typescript 前端项目中引入 mockjs（暂时没有使用接口形式）

  - https://blog.csdn.net/weixin_42512937/article/details/102971496

    ```javascript
    //1、----- 添加一个.ts文件，在顶部进行引入
    import Mock from "mockjs";

    let pageModelList = Mock.mock({
      code: 0,
      message: "请求成功",
      data: {
        docs: {
          //......
        },
      },
    });

    export default pageModelList;

    //2、------ 再在使用的地方进行导入
    import pageModelList from "@/mock/pageList";
    // 接下来便可以使用了
    console.log(pageModelList, "this.pageModelList");
    ```

- 25 vue 项目中 main.js Vue 全局 附加给 window.vm，示例代码截图如下

  ```javascript
  // 在main.js中的设置
  window.vm = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
  export default window.vm;
  ```

    <br/>

  ```javascript
  // 在使用的地方可以直接调用
  window.vm.$router.push("/");
  ```

- 26 keepalive 和 document.documentElement.scrollTop 测试中还是发现列表到详情再返回，有时候返回后位置还是异常的，或者图片预览弹窗后关闭时。

- 27 EPG 机顶盒样式显示问题

  - html 中每个页面元素会有 focus(影响机顶盒样式的显示):表示元素被赋予焦点 和 blur() ：表示元素失去焦点
  - 首页加载白屏(暂时感觉是代码执行问题)
  - 图片加载不完全（有时候只显示三分之一、四分之一），机顶盒问题

- 28 今日通用表单没有进行，参考一篇文章

  - http://www.form-create.com/v2/guide/control.html

- 29 markdown 规范参考
  - https://xianbai.me/learn-md/article/syntax/paragraphs-and-line-breaks.html

### 1 月 5 日

- 10 vue keepalive 发现一旦设置某个路由为 true,后续通过动态设置就是无效的后来发现 github 官网也有很多人遇到这个问题
  - https://github.com/vuejs/vue-router/issues/811 <br>
    目前通过变通的方式进行解决此问题，凡是要进行缓存的组件页面，开始都将 keepalive 设置为 true，后续通过钩子函数去触发数据列表更新。
- 11 vue router 官网有时候可以看一下 api，感觉有很多自己是没有用到过的

  - https://router.vuejs.org/zh/installation.html

- 12 vue elementui radio 在封装为表单控件，且可设置为必填项目，其 label 设置与外部赋值要保持一致的数据类型，而且 required 传入值如果为 undefined 要经过判断，代码如下(截取部分)

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

此为一个子组件，data 会传入值类型要与 this.getList 中设置的 label 值要保持一致(计算属性 value 会去绑定 radio 的 v-model)。

- 13 基于 Vue2.x 封装的 Echarts 图表组件

  - https://echarts.apache.org/zh/index.html
  - https://github.com/ElemeFE/v-charts

- 14 markdown 中引入图片的方法：先将图片上传到 github 库，然后找到对应库，图片所在的地方，github 上可预览图片的，此时便可右键查看图片地址[https://raw.githubusercontent.com/aehyok/2021/main/image/test.png],图片地址类似是这样的，或者点击 download 可以查看到地址的。
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

另外一种设置图片的显示方式，不过暂时没找到如何设置宽高和位置，应该可以考虑通过 url 后面进行参数设置（通过特定的转换）

```javascript
![avatar](https://raw.githubusercontent.com/aehyok/2021/main/image/test.png)
```

  <br/>

![avatar](https://raw.githubusercontent.com/aehyok/2021/main/image/test.png)

- 15 css 颜色大全表

  - https://www.cnblogs.com/chenxiaomeng/p/6572319.html
  - https://blog.csdn.net/qq_42152029/article/details/81984596

- 16 html 不同显示色差问题处理

  - https://www.zhihu.com/question/30113871

- 17 css 三角箭头

  - http://ourjs.com/detail/532bc9f36922aa7e1d000001

- 18 SSH 阮一峰学习笔记
  - https://github.com/wangdoc/ssh-tutorial
- 19 vconsole，引入项目 - https://blog.csdn.net/weixin_43232488/article/details/83014086
<div align=center>
  <img src="https://raw.githubusercontent.com/aehyok/2021/main/image/1/001.png" width="560" height="600" align="middle" />
</div>

- 20 Less 中& 符号的妙用
  - https://blog.csdn.net/weixin_45959525/article/details/108396944

### 1 月 4 日

- 1 vue 中将 v-for 循环组件（通过 v-if 进行展示），方案修改为 component 组件，简化代码

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

- 2 IMWeb 前端团队总结 https://mp.weixin.qq.com/s/muljS3iA0c2j1tIICLOhFQ

- 3 WebAssembly(WASM)学习了解

  - https://www.cnblogs.com/jixiaohua/tag/WebAssembly/

  IMWeb 团队擅长的音视频领域，我们通过将 ffmpeg 编译为 wasm 版本且在浏 览器中运行，将过去处于黑盒中，只有浏览器底层才能使用的音视频编解码能力彻底解放。目前我们可以在前端页面中对音视频流直接进行处理，在完全不依赖后台的情况下，便捷、高效的实现了视频播放帧预览与视频帧截图等功能。目前团队正在进一步探索 wasm 在音视频以及其他过去前端无法触及的领域的可行性实践。

- 4 React 可视化框架，目前 3047 个 star

- https://github.com/brick-design/react-visual-editor

- 5 psd.js 将 pds 设计稿转换为 json 数据格式

- https://github.com/meltingice/psd.js

- 6 npm 设置源仓库

  - https://www.cnblogs.com/wenjunwei/p/10078460.html
  - https://www.cnblogs.com/steven-yang/p/12317646.html

- 7 webpack vuecli 创建项目

  - https://www.cnblogs.com/CL-King/p/14017238.html
  - https://www.cnblogs.com/gujun1998/p/13659430.html

- 8 mongodb 命令行启动数据库，可改为 window 服务，还未尝试
  - https://www.cnblogs.com/ningskyer/articles/6292891.html
  - https://www.cnblogs.com/wjaaron/p/7800490.html
- 9 vscode 中保存自动格式化代码的插件 Prettier - Code formatter

---

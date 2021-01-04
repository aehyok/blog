# 2021
本年度重点计划：通用页面配置化搭建、可视化页面研究、后台配置页面数据（Vue和React）

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

- 2 IMWeb 团队总结  https://mp.weixin.qq.com/s/muljS3iA0c2j1tIICLOhFQ

- 3  WebAssembly(WASM)学习了解 https://www.cnblogs.com/jixiaohua/tag/WebAssembly/

  ```文本
  引用
  IMWeb团队擅长的音视频领域，我们通过将ffmpeg编译为wasm版本且在浏览器中运行，将过去处于黑盒中，只有浏览器底层才能使用的音视频编解码能力彻底解放。目前我们可以在前端页面中对音视频流直接进行处理，在完全不依赖后台的情况下，便捷、高效的实现了视频播放帧预览与视频帧截图等功能。目前团队正在进一步探索wasm在音视频以及其他过去前端无法触及的领域的可行性实践。
  ```



- 4  React可视化框架  https://github.com/brick-design/react-visual-editor  目前3047个star

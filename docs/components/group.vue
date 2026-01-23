<template>
  <div class="container">
    <!-- 装饰背景层 -->
    <div class="bg-layer layer-1"></div>
    <div class="bg-layer layer-2"></div>
    <div class="flash-layer"></div>

    <template v-for="group in state.groupList" :key="group.id">
      <div class="group-section">
        <h2 class="group-title">
          <span class="title-text">{{ group.name }}</span>
          <span class="title-decoration"></span>
        </h2>
        
        <div class="post-grid">
          <template v-for="item in group.children" :key="item.id">
            <div class="post-card" @click="openClick(item)">
              <div class="card-inner">
                <div class="post-image-wrapper">
                  <img :src="item.cover" :alt="item.name" loading="lazy" />
                  <div class="image-overlay"></div>
                </div>
                
                <div class="post-content">
                  <div class="content-header">
                    <h3 class="post-title">{{ item.name }}</h3>
                    <div class="external-icon" v-if="item.isExternalLink">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </div>
                  </div>
                  
                  <p class="post-excerpt" :title="item.description">
                    {{ item.description }}
                  </p>
                  
                  <div class="post-tags">
                    <template v-for="tag in item.tags" :key="tag">
                      <span class="post-tag">{{ tag }}</span>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vitepress";
import { useData } from "vitepress";

const { site } = useData();
const base = site.value.base;
const router = useRouter();

const state = reactive({
  groupList: [
    {
      id: 0,
      name: "AI辅助工具",
      children: [
        {
          id: 1,
          name: "notebooklm 视频移除水印",
          cover: "https://imgur.aehyok.uk/v2/0vk7QT9.png",
          description: "notebooklm 视频移除水印",
          url: "https://www.notebooklmwatermark.com/",
          isExternalLink: true,
          tags: [],
        },
        {
          id: 2,
          name: "Gemini 图片移除水印",
          cover: "https://imgur.aehyok.uk/v2/sJDfe4o.jpeg",
          description: "Gemini 图片移除水印",
          url: "https://banana.ovo.re/",
          isExternalLink: true,
          tags: [],
        },
      ],
    },
    {
      id: 2,
      name: "益智小游戏",
      children: [
        {
          id: 1,
          name: "舒尔特表格小游戏",
          cover: "https://imgur.aehyok.uk/v2/ZwNn8zQ.png",
          description: "提高儿童专注力的小游戏，可长期训练",
          url: "./views/game?type=shuerte",
          isExternalLink: false,
          tags: ["#AI拼音", "#小游戏"],
        },
        {
          id: 2,
          name: "拼音组装小游戏",
          cover: "https://imgur.aehyok.uk/v2/dGPlHBa.jpeg",
          description: "拼音识别小游戏",
          url: "./views/game?type=pinyin",
          isExternalLink: false,
          tags: ["#AI", "自主规划任务"],
        },
        {
          id: 3,
          name: "打字侠-键盘键位练习",
          cover: "https://imgur.aehyok.uk/v2/I5vwhPI.png",
          description: "键位练习、拼音练习、打字练习",
          url: "https://www.hellotyping.com/get-started",
          isExternalLink: true,
          tags: [],
        },
        {
          id: 4,
          name: "跳一跳小游戏",
          cover: "https://imgur.aehyok.uk/v2/Uo67vfL.png",
          description: "模仿微信小程序跳一跳小游戏",
          url: "./views/game?type=threejs",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 5,
          name: "全球24个时区划分图",
          cover: "https://imgur.aehyok.uk/v2/OPidfpA.png",
          description: "全球24个时区划分图",
          url: "./views/game?type=timezone",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 6,
          name: "各种常识的单位换算逻辑",
          cover: "https://imgur.aehyok.uk/v2/GwYIpSp.png",
          description: "体积、重量、速度、面积、温度、时间、长度等单位换算",
          url: "./html/list?type=unit-basics&group=home",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 7,
          name: "雅迪智行的远程开关锁功能",
          cover: "https://imgur.aehyok.uk/v2/g7t2ylH.png",
          description: "跟新能源",
          url: "./html/list?type=yadea-smart&group=home",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 8,
          name: "新能源电车的远程开关锁功能",
          cover: "https://imgur.aehyok.uk/v2/mA5UEC5.png",
          description: "跟新能源",
          url: "./html/list?type=ev-car&group=home",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 9,
          name: "电池容量以及用电量消耗",
          cover: "https://imgur.aehyok.uk/v2/dkYHDaE.jpeg",
          description: "锂电池、半固态电池、全固态电池的容量以及用电量消耗",
          url: "./html/list?type=battery-capacity&group=home",
          isExternalLink: false,
          tags: [],
        },
      ],
    },
    {
      id: 1,
      name: "AI工具",
      children: [
        {
          id: 1,
          name: "ChatGPT AI",
          cover: "https://imgur.aehyok.uk/v2/9TCD4qy.png",
          description: "目前全方位最强的AI工具",
          url: "https://www.openai.com/chatgpt",
          isExternalLink: true,
          tags: ["#AI", "#文生图", "#文生视频", "#深度搜索"],
        },
        {
          id: 2,
          name: "Claude AI",
          cover: "https://imgur.aehyok.uk/v2/ZSeQGvq.jpeg",
          description: "地表代码能力最强工具",
          url: "https://claude.ai/",
          isExternalLink: true,
          tags: ["#AI", "#生成代码", "#深度搜索"],
        },
        {
          id: 3,
          name: "Gemini AI",
          cover: "https://imgur.aehyok.uk/v2/sJDfe4o.jpeg",
          description: "后起直追OpenAI的最佳选手",
          url: "https://gemini.google.com/",
          isExternalLink: true,
          tags: ["#AI", "#长文", "#深度搜索", "文生图", "文生视频"],
        },
        {
          id: 4,
          name: "Google AI Studio",
          cover: "https://imgur.aehyok.uk/v2/0vk7QT9.png",
          description: "后起直追OpenAI的最佳选手",
          url: "https://aistudio.google.com/app",
          isExternalLink: true,
          tags: ["#AI", "#长文", "#深度搜索", "文生图", "文生视频", "免费API"],
        },
        {
          id: 5,
          name: "Grok3 AI",
          cover: "https://imgur.aehyok.uk/v2/oK7t93C.jpeg",
          description: "马一龙全球首富的AI工具",
          url: "https://grok.com",
          isExternalLink: true,
          tags: ["#AI", "#长文", "#深度搜索", "文生图", "实时搜索", "免费API"],
        },
        {
          id: 6,
          name: "扣子空间",
          cover: "https://imgur.aehyok.uk/v2/6ZD4oAz.jpeg",
          description: "目前全方位最强的AI工具",
          url: "https://space.coze.cn/",
          isExternalLink: true,
          tags: ["#AI", "自主规划任务"],
        },
        {
          id: 7,
          name: "Manus",
          cover: "https://imgur.aehyok.uk/v2/UiJTdK7.jpeg",
          description: "全球首款通用AI Agent",
          url: "https://manus.im/",
          isExternalLink: true,
          tags: ["#AI", "自主规划任务"],
        },
      ],
    },
    {
      id: 3,
      name: "日常使用小工具",
      children: [
        {
          id: 1,
          name: "移除背景小工具",
          cover: "https://imgur.aehyok.uk/v2/PuGVUpG.png",
          description: "少儿、小学、初中、高中、大学、研究生、博士生的学习资源",
          url: "https://www.remove.bg/zh/upload",
          isExternalLink: true,
          tags: ["学而思", "名师", "直播录课"],
        },
        {
          id: 2,
          name: "PDF教材",
          cover: "https://imgur.aehyok.uk/v2/J39UE3b.png",
          description: "小学、初中、高中、大学PDF教材",
          url: "https://github.com/TapXWorld/ChinaTextbook",
          isExternalLink: true,
          tags: [
            "语文",
            "数学",
            "英语",
            "物理",
            "化学",
            "生物",
            "地理",
            "历史",
          ],
        },
      ],
    },
    {
      id: 3,
      name: "github上孩子学习资源",
      children: [
        {
          id: 1,
          name: "各类学习资源汇总下载",
          cover: "https://imgur.aehyok.uk/v2/PuGVUpG.png",
          description: "少儿、小学、初中、高中、大学、研究生、博士生的学习资源",
          url: "https://github.com/mswnlz/edu-knowlege",
          isExternalLink: true,
          tags: ["学而思", "名师", "直播录课"],
        },
        {
          id: 2,
          name: "PDF教材",
          cover: "https://imgur.aehyok.uk/v2/J39UE3b.png",
          description: "小学、初中、高中、大学PDF教材",
          url: "https://github.com/TapXWorld/ChinaTextbook",
          isExternalLink: true,
          tags: [
            "语文",
            "数学",
            "英语",
            "物理",
            "化学",
            "生物",
            "地理",
            "历史",
          ],
        },
        {
          id: 3,
          name: "各种电子书下载",
          cover: "https://imgur.aehyok.uk/v2/bkqiV8i.png",
          description: "小学、初中、高中、大学PDF教材",
          url: "https://github.com/jbiaojerry/ebook-treasure-chest",
          isExternalLink: true,
          tags: [
            "文学",
            "历史",
            "心理",
            "物理",
            "化学",
            "生物",
            "地理",
            "历史",
          ],
        },
        {
          id: 4,
          name: "雅书各种PDF电子书下载",
          cover: "https://imgur.aehyok.uk/v2/cslNQmT.png",
          description: "小学、初中、高中、大学PDF教材",
          url: "https://github.com/jbiaojerry/ebook-treasure-chest",
          isExternalLink: true,
          tags: [
            "文学",
            "历史",
            "心理",
            "物理",
            "化学",
            "生物",
            "地理",
            "历史",
          ],
        },
        {
          id: 5,
          name: "新媒派免费电子书下载和阅读",
          cover: "https://imgur.aehyok.uk/v2/TsCdNWL.png",
          description: "小学、初中、高中、大学PDF教材",
          url: "https://iseeue.com/",
          isExternalLink: true,
          tags: [
            "文学",
            "历史",
            "心理",
            "物理",
            "化学",
            "生物",
            "地理",
            "历史",
          ],
        },
      ],
    },
    {
      id: 3,
      name: "拼音歌词",
    },
    {
      id: 5,
      name: "自己使用小工具",
      children: [

        {
          id: 8,
          name: "全国高温查看",
          cover: "https://imgur.aehyok.uk/v2/QYjzqur.png",
          description: "",
          url: "http://wx.nmc.cn/f/page/eb18ad1b8ee748948f62084d9e40cb58/weatherMonitor/temperatureLiveOrder",
          isExternalLink: true,
          tags: [],
        },
        {
          id: 7,
          name: "全国高温查看",
          cover: "https://imgur.aehyok.uk/v2/QYjzqur.png",
          description: "",
          url: "./views/tool?type=temperature",
          // url: "http://wx.nmc.cn/f/page/eb18ad1b8ee748948f62084d9e40cb58/weatherMonitor/temperatureLiveOrder",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 8,
          name: "台风路径发布系系统",
          cover: "https://imgur.aehyok.uk/v2/YAW5bzk.jpeg",
          description: "",
          url: "https://typhoon.slt.zj.gov.cn/#/",
          isExternalLink: true,
          tags: [],
        },
        {
          id: 8,
          name: "中国地震台网",
          cover: "https://imgur.aehyok.uk/v2/W5IqGcZ.png",
          description: "",
          url: "https://news.ceic.ac.cn/index.html",
          isExternalLink: true,
          tags: [],
        },
        {
          id: 1,
          name: "数据AES解密",
          cover: "https://imgur.aehyok.uk/v2/e4zz38f.png",
          description: "",
          url: "./views/tool?type=aes",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 2,
          name: "base64图片展示",
          cover: "https://imgur.aehyok.uk/v2/5uQr6T9.png",
          description: "",
          url: "./views/tool?type=base64",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 3,
          name: "图片压缩",
          cover: "https://imgur.aehyok.uk/v2/AE9kROr.png",
          description: "",
          url: "./views/tool?type=compress",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 4,
          name: "图片格式转换",
          cover: "https://imgur.aehyok.uk/v2/KryQYKw.png",
          description: "",
          url: "./views/tool?type=convert",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 5,
          name: "图片转换为svg",
          cover: "https://imgur.aehyok.uk/v2/jwcP877.png",
          description: "",
          url: "./views/tool?type=svg",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 6,
          name: "文字生成图片",
          cover: "https://imgur.aehyok.uk/v2/7UNhgk0.png",
          description: "",
          url: "./views/tool?type=text-to-image",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 7,
          name: "生成二维码",
          cover: "https://imgur.aehyok.uk/v2/qn46gvr.png",
          description: "",
          url: "./views/tool?type=qrcode",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 8,
          name: "时间和时间戳互相转换",
          cover: "https://imgur.aehyok.uk/v2/clKmnz3.png",
          description: "",
          url: "./views/tool?type=timestamp-convert",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 9,
          name: "给图片添加手写签名",
          cover: "https://imgur.aehyok.uk/v2/UuLhPGL.png",
          description: "",
          url: "./views/tool?type=image-signature",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 10,
          name: "比较好的动画效果",
          cover: "https://imgur.aehyok.uk/v2/5Rzd09Q.png",
          description: "",
          url: "https://zumerlab.github.io/snapdom/#basic",
          isExternalLink: false,
          tags: [],
        },
        {
          id: 11,
          name: "json对象转换为json字符串",
          cover: "https://imgur.aehyok.uk/v2/31yKa0l.png",
          description: "",
          url: "./views/tool?type=json-convert",
          isExternalLink: false,
          tags: [],
        },
      ],
    },
  ],
});

const openClick = (item: any) => {
  if (item.url && item.isExternalLink) {
    window.open(item.url, "_blank");
  } else {
    const url = base !== "/" ? base + item.url : item.url;
    router.go(url);
  }
};
</script>

<style lang="css" scoped>
/* 容器核心 */
.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 80vh;
}

/* 装饰背景层 */
.bg-layer {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  z-index: -1;
  pointer-events: none;
}

.layer-1 {
  top: -10%;
  left: -10%;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(circle, var(--vp-c-brand-1) 0%, rgba(255, 255, 255, 0) 70%);
  animation: drift 15s infinite alternate ease-in-out, pulse 8s infinite alternate ease-in-out;
}

.layer-2 {
  bottom: -10%;
  right: -10%;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle, var(--vp-c-brand-2) 0%, rgba(255, 255, 255, 0) 70%);
  animation: drift 20s infinite alternate-reverse ease-in-out, pulse 10s infinite alternate ease-in-out;
}

@keyframes drift {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(10%, 15%) rotate(10deg);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}

/* 酷炫闪烁光效层 */
.flash-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 使用品牌色渐变，在深色和浅色模式下都可见 */
  background: linear-gradient(125deg, transparent 35%, var(--vp-c-brand-1) 50%, transparent 65%);
  background-size: 200% 200%;
  animation: shimmer 6s infinite linear; /* 稍微加快速度 */
  pointer-events: none;
  z-index: 1; /* 提高层级，使其浮于背景之上但位于内容之下(如果内容z-index更高) - wait, if z-index is 1 it might cover content? */
  opacity: 0.1;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* 分组标题 */
.group-section {
  margin-bottom: 60px;
}

.group-title {
  position: relative;
  display: inline-block;
  margin: 0 0 30px;
  font-size: 28px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  letter-spacing: 0.5px;
}

.title-decoration {
  display: block;
  width: 40px;
  height: 4px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  border-radius: 2px;
  margin-top: 8px;
  transition: width 0.3s ease;
}

.group-section:hover .title-decoration {
  width: 100%;
}

/* 网格布局 */
.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

/* 增强卡片设计 */
.post-card {
  position: relative;
  height: 100%;
  border-radius: 16px;
  cursor: pointer;
  perspective: 1000px;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-inner {
  height: 100%;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

/* 悬停效果：卡片上浮 + 阴影 + 边框高亮 */
.post-card:hover {
  transform: translateY(-8px);
}

.post-card:hover .card-inner {
  box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.15);
  border-color: var(--vp-c-brand-1);
}

/* 图片区域 */
.post-image-wrapper {
  position: relative;
  height: 160px;
  overflow: hidden;
}

.post-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.post-card:hover .post-image-wrapper img {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.post-card:hover .image-overlay {
  opacity: 1;
}

/* 内容区域 */
.post-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg) 100%);
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.post-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.4;
  transition: color 0.3s ease;
}

.post-card:hover .post-title {
  color: var(--vp-c-brand-1);
}

.external-icon {
  color: var(--vp-c-text-3);
  transform: translateX(5px);
  opacity: 0;
  transition: all 0.3s ease;
}

.post-card:hover .external-icon {
  transform: translateX(0);
  opacity: 1;
}

.post-excerpt {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

/* 标签样式 */
.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.post-tag {
  display: inline-block;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-alt);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.post-card:hover .post-tag {
  background-color: var(--vp-c-brand-soft);
  transform: scale(1.05);
}

/* 响应式适配 */
@media (max-width: 768px) {
  .post-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
  
  .group-title {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .post-grid {
    grid-template-columns: 1fr;
  }
  
  .post-image-wrapper {
    height: 180px;
  }
}
</style>

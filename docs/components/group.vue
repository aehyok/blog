<template>
  <div class="container">
    <!-- 开源项目 Group -->
     <template v-for="group in state.groupList">
      <h2 class="group-title">{{group.name}}</h2>
      <div class="post-grid">
        <!-- Post 7 -->
        <template v-for="item in group.children">
          <div class="post-card" @click="openClick(item)">
            <div class="post-image">
              <img :src="item.cover" alt="开源项目1" />
            </div>
            <div class="post-content">
              <h3 class="post-title">{{ item.name }}</h3>
              <p class="post-excerpt">
                {{ item.description }}
          </p>
              <div class="post-tags">
                <template v-for="tag in item.tags">
                  <span class="post-tag">{{ tag }}</span>
                </template>
                
              </div>
            </div>
          </div>
        </template>
      </div>
  </template>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { useRoute, useRouter } from 'vitepress'
import { useData } from 'vitepress'

const { site } = useData()
const base = site.value.base
console.log("base", base);
const router = useRouter()

const state = reactive({
  groupList:[
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
          isExternalLink: true,
          tags: ["#AI", "自主规划任务"],
        }
      ]
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
          tags: ["#AI", "#长文", "#深度搜索", "文生图", "文生视频","免费API"],
        },
        {
          id: 5,
          name: "Grok3 AI",
          cover: "https://imgur.aehyok.uk/v2/oK7t93C.jpeg",
          description: "马一龙全球首富的AI工具",
          url: "https://grok.com",
          isExternalLink: true,
          tags: ["#AI", "#长文", "#深度搜索", "文生图", "实时搜索","免费API"],
        },
      ],
    },
    {
      id: 2,
      name: "AI Agent工具",
      children: [
        {
          id: 1,
          name: "扣子空间",
          cover: "https://imgur.aehyok.uk/v2/6ZD4oAz.jpeg",
          description: "目前全方位最强的AI工具",
          url: "https://space.coze.cn/",
          isExternalLink: true,
          tags: ["#AI", "自主规划任务"],
        },
        {
          id: 2,
          name: "Manus",
          cover: "https://imgur.aehyok.uk/v2/UiJTdK7.jpeg",
          description: "全球首款通用AI Agent",
          url: "https://manus.im/",
          isExternalLink: true,
          tags: ["#AI", "自主规划任务"],
        }
      ]
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
          tags: ["学而思","名师","直播录课"],
        },
        {
          id: 2,
          name: "PDF教材",
          cover: "https://imgur.aehyok.uk/v2/J39UE3b.png",
          description: "小学、初中、高中、大学PDF教材",
          url: "https://github.com/TapXWorld/ChinaTextbook",
          isExternalLink: true,
          tags: ["语文", "数学", "英语", "物理", "化学", "生物", "地理", "历史"],
        }
      ]
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
          tags: ["学而思","名师","直播录课"],
        },
        {
          id: 2,
          name: "PDF教材",
          cover: "https://imgur.aehyok.uk/v2/J39UE3b.png",
          description: "小学、初中、高中、大学PDF教材",
          url: "https://github.com/TapXWorld/ChinaTextbook",
          isExternalLink: true,
          tags: ["语文", "数学", "英语", "物理", "化学", "生物", "地理", "历史"],
        }
      ]
    },
    {
      id: 3,
      name: "拼音歌词",
      children: [
        {
          id: 1,
          name: "各类学习资源汇总下载",
          cover: "https://imgur.aehyok.uk/v2/PuGVUpG.png",
          description: "少儿、小学、初中、高中、大学、研究生、博士生的学习资源",
          url: "https://github.com/mswnlz/edu-knowlege",
          isExternalLink: false,
          tags: ["学而思","名师","直播录课"],
        },
        {
          id: 2,
          name: "PDF教材",
          cover: "https://imgur.aehyok.uk/v2/J39UE3b.png",
          description: "小学、初中、高中、大学PDF教材",
          url: "https://github.com/TapXWorld/ChinaTextbook",
          isExternalLink: true,
          tags: ["语文", "数学", "英语", "物理", "化学", "生物", "地理", "历史"],
        }
      ]
    },
    {
      id: 5,
      name: "自己使用小工具",
      children: [
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
        }
      ]
    },
  ]
});

const openClick = (item: any) => {
  if (item.url && item.isExternalLink) {
    window.open(item.url, "_blank");
  } else {
    const url = base !== "/" ? base + item.url : item.url
    router.go(url)
  }
};

</script>
<style lang="css" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.group-title {
  font-size: 24px;
  font-weight: 600;
  margin: 30px 0 20px;
  padding-bottom: 10px;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.post-card {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eaeaea;
  Cursor: pointer;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.post-image {
  width: 100%;
  height: 160px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-content {
  padding: 8px;
}

.post-category {
  display: inline-block;
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.post-date {
  float: right;
  font-size: 14px;
  color: #888;
}

.post-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #111;
  line-height: 1.4;
   h3 {
    margin: 0
  }
}

.post-excerpt {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-tags {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.post-tag {
  display: inline-block;
  padding: 4px 10px;
  background-color: #f0f0f0;
  color: #666;
  border-radius: 20px;
  font-size: 12px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 36px;
  margin-bottom: 10px;
  color: #222;
}

.header p {
  font-size: 16px;
  color: #666;
}

@media (max-width: 768px) {
  .post-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (max-width: 480px) {
  .post-grid {
    grid-template-columns: 1fr;
  }
}

.vp-doc h3 {
  margin: 10px 0;
}
</style>

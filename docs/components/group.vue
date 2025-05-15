<template>
  <div class="container">
    <!-- 开源项目 Group -->
     <template v-for="group in state.groupList">
      <h2 class="group-title">{{group.name}}</h2>
      <div class="post-grid">
        <!-- Post 7 -->
        <template v-for="item in group.children">
          <div class="post-card" @click="openClick(item.url)">
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

const state = reactive({
  groupList:[
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
          tags: ["#AI", "#文生图", "#文生视频", "#深度搜索"],
        },
        {
          id: 2,
          name: "Claude AI",
          cover: "https://imgur.aehyok.uk/v2/ZSeQGvq.jpeg",
          description: "地表代码能力最强工具",
          url: "https://claude.ai/",
          tags: ["#AI", "#生成代码", "#深度搜索"],
        },
        {
          id: 3,
          name: "Gemini AI",
          cover: "https://imgur.aehyok.uk/v2/sJDfe4o.jpeg",
          description: "后起直追OpenAI的最佳选手",
          url: "https://gemini.google.com/",
          tags: ["#AI", "#长文", "#深度搜索", "文生图", "文生视频"],
        },
        {
          id: 4,
          name: "Google AI Studio",
          cover: "https://imgur.aehyok.uk/v2/0vk7QT9.png",
          description: "后起直追OpenAI的最佳选手",
          url: "https://aistudio.google.com/app",
          tags: ["#AI", "#长文", "#深度搜索", "文生图", "文生视频","免费API"],
        },
        {
          id: 5,
          name: "Grok3 AI",
          cover: "https://imgur.aehyok.uk/v2/oK7t93C.jpeg",
          description: "马一龙全球首富的AI工具",
          url: "https://grok.com",
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
          tags: ["#AI", "自主规划任务"],
        },
        {
          id: 2,
          name: "Manus",
          cover: "https://imgur.aehyok.uk/v2/UiJTdK7.jpeg",
          description: "全球首款通用AI Agent",
          url: "https://manus.im/",
          tags: ["#AI", "自主规划任务"],
        }
      ]
    },
    {
      id: 3,
      name: "学习资源",
      children: [
        {
          id: 1,
          name: "各类学习资源汇总下载",
          cover: "https://imgur.aehyok.uk/v2/PuGVUpG.png",
          description: "少儿、小学、初中、高中、大学、研究生、博士生的学习资源",
          url: "https://github.com/mswnlz/edu-knowlege",
          tags: ["学而思","名师","直播录课"],
        },
        {
          id: 2,
          name: "PDF教材",
          cover: "https://imgur.aehyok.uk/v2/J39UE3b.png",
          description: "小学、初中、高中、大学PDF教材",
          url: "https://github.com/TapXWorld/ChinaTextbook",
          tags: ["语文", "数学", "英语", "物理", "化学", "生物", "地理", "历史"],
        }
      ]
    },
  ]
});

const openClick = (url: string) => {
  if (url) {
    window.open(url, "_blank");
  } else {

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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
  height: 180px;
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
  padding: 16px;
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
</style>

<template>
  <div class="blog-interface">
    <!-- 顶部重点链接区域 -->
    <div class="top-links">
      <div class="container">
        <div class="link-item left-link">
          <a href="https://pangdaxing.xyz/news" target="_blank" class="highlight-link">
            🎁 Alpha空投通知
            <span class="link-description">最新空投机会，不容错过</span>
          </a>
        </div>
        <div class="link-item right-link">
          <a href="https://alpha123.uk/zh/index.html" class="highlight-link">
            📊 市场分析
            <span class="link-description">实时行情与深度解读</span>
          </a>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="left-panel">
        <h2>Web3币圈</h2>
        
        <div 
          v-for="blog in blogList" 
          :key="blog.id"
          class="blog-item"
          @click="handleBlogClick(blog)"
        >
          <div class="blog-title">{{ blog.title }}</div>
          <div class="blog-excerpt">{{ blog.excerpt }}</div>
          <div class="blog-meta">
            <span class="blog-date">{{ blog.date }}</span>
            <div class="blog-tags">
              <span v-for="tag in blog.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="right-panel">
        <h2>政策解读</h2>
        
        <div 
          v-for="radio in radioList" 
          :key="radio.id"
          class="blog-item"
          @click="handleBlogClick(radio)"
        >
          <div class="blog-title">{{ radio.title }}</div>
          <div class="blog-excerpt">{{ radio.excerpt }}</div>
          <div class="blog-meta">
            <span class="blog-date">{{ radio.date }}</span>
            <div class="blog-tags">
              <span class="tag">{{ radio.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { useRouter, useData } from 'vitepress'
const router = useRouter()
const { site } = useData()
const base = site.value.base
// 定义事件
const emit = defineEmits(['blog-click', 'radio-click'])

// 博客数据
const blogList = ref([
  {
      id: 5,
      title: '稳定币的历史和分类',
      excerpt: '学习下稳定币的历史，然后说明下稳定币的分类？',
      date: '2025-08-19',
      tags: ['区块链', '币圈'],
      code: "stablecoin-history",
      group: "crypto",
  },
  {
      id: 4,
      title: 'ETH的历史',
      excerpt: '学习下ETH的历史，然后解释下什么是pos？',
      date: '2025-08-18',
      tags: ['区块链', '币圈'],
      code: "eth-history",
      group: "crypto",
  },
  {
    id: 3,
    title: 'BTC的历史',
    excerpt: '学习下BTC的历史，然后解释下1聪是什么意思，等于多少个BTC？',
    date: '2025-08-18',
    tags: ['区块链', '币圈'],
    code: "btc-history",
    group: "crypto",
  },
  {
    id: 2,
    title: '区块链技术入门指南',
    excerpt: '图片预览、glb预览、BBCode解析、MarkMap解析、文章搜索...',
    date: '2025-07-15',
    tags: ['区块链', '币圈'],
    code: "blockchain",
    group: "crypto",
  },
  {
    id: 1,
    title: '稳定币生态系统完整解析',
    excerpt: '自从美国通过《稳定币法案》以来，中国香港这边也在积极推动稳定币的立法工作...',
    date: '2025-07-13',
    tags: ['稳定币'],
    code: "stablecoin",
    group: "crypto",
  }
])

// 电台数据
const radioList = ref([
  {
    id: 3,
    title: '本世纪最重磅的大事！李强总理宣布雅鲁藏布江下游水电站开工！',
    excerpt: '7月19日李强出席雅鲁藏布江下游水电工程开工仪式 并宣布工程开工',
    date: '2025-07-20',
    duration: '超级投资',
    code: "hkd-exchange-rate",
    group: "policy",
    url: "https://mp.weixin.qq.com/s/GuNbQgRizJuHbs--oqb_tQ"
  },
 {
    id: 2,
    title: '港币与美元是固定汇率吗？',
    excerpt: '在夜深人静的时候，让我们一起数羊，进入甜美的梦乡...',
    date: '2025-07-18',
    duration: '香港汇率',
    code: "hkd-exchange-rate",
    group: "policy"
  },
{
    id: 1,
    title: '中国人民银行开展14000亿元买断式逆回购操作',
    excerpt: '7月15日，为保持银行体系流动性充裕，中国人民银行将以固定数量、利率招标、多重价位中标方式开展14000亿元买断式逆回购操作。',
    date: '2025-07-14',
    duration: '买断式逆回购',
    code: "reverse-repo",
    group: "policy"
  }
])

// 处理博客点击
const handleBlogClick = (blog) => {
  if(!blog.url) {
    var item = { url: "html/list"}
    const url = base !== "/" ? base + item.url : item.url
    const path= `${url}?type=${blog.code}&group=${blog.group}`;
    router.go(path)
  }
  else {
    window.open(blog.url, "_blank");
  }
}
</script>

<style scoped>
.blog-interface {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
  min-height: 100vh;
  padding: 20px;
}

.top-links {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: -20px -20px 20px -20px;
  padding: 15px 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.top-links .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
}

.link-item {
  flex: 1;
}

.highlight-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 16px;
}

.highlight-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.link-description {
  font-size: 12px;
  font-weight: 400;
  opacity: 0.9;
  margin-top: 4px;
}

.container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
}

.left-panel,
.right-panel {
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.blog-item {
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.blog-item:hover {
  background-color: #f8f9fa;
}

.blog-item:last-child {
  border-bottom: none;
}

.blog-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.blog-excerpt {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 1.5;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #999;
}

.blog-date {
  color: #999;
}

.blog-tags {
  display: flex;
  gap: 8px;
}

.tag {
  background-color: #e9ecef;
  color: #495057;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
}

.radio-item {
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.radio-item:hover {
  background-color: #f8f9fa;
}

.radio-item:last-child {
  border-bottom: none;
}

.radio-cover {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  margin-right: 12px;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
}

.radio-info {
  flex: 1;
}

.radio-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.radio-date {
  font-size: 12px;
  color: #999;
}

.radio-duration {
  font-size: 12px;
  color: #999;
  margin-left: auto;
}

.cover-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.cover-2 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.cover-3 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.cover-4 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.cover-5 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
.cover-6 { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
.cover-7 { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); }

@media (max-width: 768px) {
  .top-links .container {
    flex-direction: column;
    gap: 10px;
  }
  
  .container {
    flex-direction: column;
  }
  
  .blog-interface {
    padding: 10px;
  }

  .top-links {
    margin: -10px -10px 10px -10px;
    padding: 15px 10px;
  }
}
</style>
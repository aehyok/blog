<template>
  <div class="blog-interface">
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
    id: 1,
    title: '中国人民银行开展14000亿元买断式逆回购操作',
    excerpt: '7月15日，为保持银行体系流动性充裕，中国人民银行将以固定数量、利率招标、多重价位中标方式开展14000亿元买断式逆回购操作。',
    date: '2025-07-14',
    duration: '07:08',
    code: "reverse-repo",
    group: "policy"
  },
  {
    id: 2,
    title: '数羊',
    excerpt: '在夜深人静的时候，让我们一起数羊，进入甜美的梦乡...',
    date: '2024-06-16',
    duration: '08:03'
  },
  {
    id: 3,
    title: '新年快乐（拜个晚年）',
    excerpt: '迟来的新年祝福，但心意永远不会迟到，愿新的一年里...',
    date: '2022-02-18',
    duration: '07:27',
  },
  {
    id: 4,
    title: '吃苦的人',
    excerpt: '生活中总有那么一些人，默默承受着生活的重担，他们是...',
    date: '2022-01-17',
    duration: '07:38',
  },
  {
    id: 5,
    title: '记得坚持',
    excerpt: '无论遇到什么困难，都要记得坚持下去，因为坚持就是胜利...',
    date: '2021-12-05',
    duration: '09:25',
  },
  {
    id: 6,
    title: '失败与成功',
    excerpt: '失败和成功都是人生路上的风景，重要的是我们如何看待...',
    date: '2021-10-22',
    duration: '07:34',
  },
  {
    id: 7,
    title: '关于结婚',
    excerpt: '谈谈对婚姻的理解和感悟，分享一些关于爱情和生活的思考...',
    date: '2021-09-15',
    duration: '08:49',
    coverClass: 'cover-7'
  }
])

// 处理博客点击
const handleBlogClick = (blog) => {
  var item = { url: "html/list"}
  const url = base !== "/" ? base + item.url : item.url
  const path= `${url}?type=${blog.code}&group=${blog.group}`;
  router.go(path)
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
  .container {
    flex-direction: column;
  }
  
  .blog-interface {
    padding: 10px;
  }
}
</style>
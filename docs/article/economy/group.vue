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
        <h2>我的电台</h2>
        
        <div 
          v-for="radio in radioList" 
          :key="radio.id"
          class="radio-item"
          @click="handleRadioClick(radio)"
        >
          <div :class="['radio-cover', radio.coverClass]"></div>
          <div class="radio-info">
            <div class="radio-title">{{ radio.title }}</div>
            <div class="radio-date">{{ radio.date }}</div>
          </div>
          <div class="radio-duration">{{ radio.duration }}</div>
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
    code: "blockchain"
  },  
  {
    id: 1,
    title: '稳定币生态系统完整解析',
    excerpt: '自从美国通过《稳定币法案》以来，中国香港这边也在积极推动稳定币的立法工作...',
    date: '2025-07-13',
    tags: ['稳定币'],
    code: "stablecoin"
  },
  {
    id: 3,
    title: 'VitePress实现MarkMap的兼容',
    excerpt: '很多时候我们在写博客的时候，需要编写思维导图，这个时候就可以...',
    date: '2025-05-23',
    tags: ['VitePress', '爬虫']
  },
  {
    id: 4,
    title: '如何利用夹逼实现快速查找',
    excerpt: '你可以把"夹逼"理解为不断缩小查找区间，直到找到目标值或区间...',
    date: '2025-05-19',
    tags: ['手撕面试题']
  },
  {
    id: 5,
    title: '这个黄色网站，让你更懂自己的身体',
    excerpt: '一些众所周知的原因，我们没有办法很好的了解自己的身体，但是...',
    date: '2025-04-29',
    tags: ['生活技巧']
  },
  {
    id: 6,
    title: '深入了解SM',
    excerpt: '一文带你了解SM的历史后果，前世今生，以后再也不害怕遇到S...',
    date: '2025-04-10',
    tags: ['奇淫技巧']
  },
  {
    id: 1,
    title: '普通小说网站提取bookId',
    excerpt: '提取普通小说中的bookId，使用正则表达式，方便做一些环境的...',
    date: '2025-07-08',
    tags: ['爬虫']
  },
  {
    id: 2,
    title: 'VitePress 专属增强库来袭',
    excerpt: '图片预览、glb预览、BBCode解析、MarkMap解析、文章搜索...',
    date: '2025-06-16',
    tags: ['奇淫技巧', 'VitePress']
  },
  {
    id: 3,
    title: 'VitePress实现MarkMap的兼容',
    excerpt: '很多时候我们在写博客的时候，需要编写思维导图，这个时候就可以...',
    date: '2025-05-23',
    tags: ['VitePress', '爬虫']
  },
  {
    id: 4,
    title: '如何利用夹逼实现快速查找',
    excerpt: '你可以把"夹逼"理解为不断缩小查找区间，直到找到目标值或区间...',
    date: '2025-05-19',
    tags: ['手撕面试题']
  },
  {
    id: 5,
    title: '这个黄色网站，让你更懂自己的身体',
    excerpt: '一些众所周知的原因，我们没有办法很好的了解自己的身体，但是...',
    date: '2025-04-29',
    tags: ['生活技巧']
  },
  {
    id: 6,
    title: '深入了解SM',
    excerpt: '一文带你了解SM的历史后果，前世今生，以后再也不害怕遇到S...',
    date: '2025-04-10',
    tags: ['奇淫技巧']
  }
])

// 电台数据
const radioList = ref([
  {
    id: 1,
    title: '写给妈妈的话',
    date: '2024-09-20 23:00:04',
    duration: '07:08',
    coverClass: 'cover-1'
  },
  {
    id: 2,
    title: '数羊',
    date: '2024-06-16 00:04:57',
    duration: '08:03',
    coverClass: 'cover-2'
  },
  {
    id: 3,
    title: '新年快乐（拜个晚年）',
    date: '2022-02-18 00:14:07',
    duration: '07:27',
    coverClass: 'cover-3'
  },
  {
    id: 4,
    title: '吃苦的人',
    date: '2022-01-17 01:08:09',
    duration: '07:38',
    coverClass: 'cover-4'
  },
  {
    id: 5,
    title: '记得坚持',
    date: '2021-12-05 22:49:00',
    duration: '09:25',
    coverClass: 'cover-5'
  },
  {
    id: 6,
    title: '失败与成功',
    date: '2021-10-22 22:11:15',
    duration: '07:34',
    coverClass: 'cover-6'
  },
  {
    id: 7,
    title: '关于结婚',
    date: '2021-09-15 23:45:20',
    duration: '08:49',
    coverClass: 'cover-7'
  }
])

// 处理博客点击
const handleBlogClick = (blog) => {
  var item = { url: "article/economy/list"}
  const url = base !== "/" ? base + item.url : item.url
  router.go(url + "?type=" + blog.code)
}

// 处理电台点击
const handleRadioClick = (radio) => {
  emit('radio-click', radio)
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
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
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
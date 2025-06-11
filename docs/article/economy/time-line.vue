<template>
  <div class="container">
    <div class="header">
      <h1>股市时间轴</h1>
      <p>七星联盟股市复盘</p>
    </div>

    <div class="timeline" ref="timeline">
      <!-- 时间轴项目 -->
      <div 
        v-for="(item, index) in timelineItems" 
        :key="index"
        class="timeline-item"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="timeline-content">
          <div class="date">{{ item.date }}</div>
          <div class="image-container">
            <img 
              :src="item.image" 
              :alt="item.alt || '时间轴图片'" 
              class="timeline-image"
              @click="openImageModal(item.image, item.date)"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 图片弹窗 -->
    <div 
      class="image-modal" 
      :class="{ show: modalVisible }"
      @click="closeImageModal"
    >
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeImageModal">&times;</button>
        <img 
          :src="modalImage" 
          class="modal-image" 
          :alt="modalDate"
        >
        <div class="modal-date">{{ modalDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      modalVisible: false,
      modalImage: '',
      modalDate: '',
      timelineItems: [
        {
          date: '2025年6月11日早上6点30分',
          image: 'https://imgur.aehyok.uk/v2/PVH6GEK.png',
          alt: '时间轴图片'
        },
        {
          date: '2025年6月10日早上6点30分',
          image: 'https://imgur.aehyok.uk/v2/TLhmyLJ.png',
          alt: '时间轴图片'
        },
        {
          date: '2024年10月30日',
          image: 'https://imgur.aehyok.uk/v2/PVH6GEK.png',
          alt: '时间轴图片'
        },
        {
          date: '2024年10月15日',
          image: 'https://imgur.aehyok.uk/v2/PVH6GEK.png',
          alt: '时间轴图片'
        },
        {
          date: '2024年9月28日',
          image: 'https://imgur.aehyok.uk/v2/PVH6GEK.png',
          alt: '时间轴图片'
        }
      ]
    }
  },
  mounted() {
    this.animateOnScroll()
    window.addEventListener('scroll', this.animateOnScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.animateOnScroll)
  },
  methods: {
    openImageModal(imageSrc, date) {
      this.modalImage = imageSrc
      this.modalDate = date
      this.modalVisible = true
      document.body.style.overflow = 'hidden' // 防止背景滚动
    },
    closeImageModal() {
      this.modalVisible = false
      document.body.style.overflow = 'auto' // 恢复滚动
    },
    animateOnScroll() {
      const items = document.querySelectorAll('.timeline-item')
      
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isVisible) {
          setTimeout(() => {
            item.style.opacity = '1'
            item.style.transform = 'translateY(0)'
          }, index * 100)
        }
      })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 40px 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 50px;
}

.header h1 {
  color: white;
  font-size: 2.5rem;
  font-weight: 300;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  margin-bottom: 10px;
}

.header p {
  color: rgba(255,255,255,0.8);
  font-size: 1.1rem;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #ff6b6b, #4ecdc4, #45b7d1);
  transform: translateX(-50%);
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(255,255,255,0.3);
}

.timeline-item {
  position: relative;
  margin: 40px 0;
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease forwards;
}

.timeline-item:nth-child(odd) {
  padding-right: calc(50% + 20px);
  text-align: right;
}

.timeline-item:nth-child(even) {
  padding-left: calc(50% + 20px);
  text-align: left;
  animation-delay: 0.2s;
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: 4px solid white;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  z-index: 2;
}

.timeline-item:nth-child(odd)::before {
  right: calc(50% - 10px);
}

.timeline-item:nth-child(even)::before {
  left: calc(50% - 10px);
}

.timeline-content {
  background: rgba(255,255,255,0.95);
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
}

.date {
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.date::before {
  content: '📅';
  font-size: 1.4rem;
}

.image-container {
  width: 100%;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  position: relative;
  transition: all 0.3s ease;
}

.image-container:hover {
  transform: scale(1.02);
}

.timeline-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  cursor: pointer;
}

.timeline-image:hover {
  transform: scale(1.05);
}

/* 图片弹窗样式 */
.image-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 3000;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;
}

.image-modal.show {
  display: flex;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  animation: zoomIn 0.3s ease;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.modal-date {
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zoomIn {
  from { 
    opacity: 0;
    transform: scale(0.5);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }

  .timeline-item {
    padding-left: 70px !important;
    padding-right: 0 !important;
    text-align: left !important;
  }

  .timeline-item::before {
    left: 20px !important;
  }

  .header h1 {
    font-size: 2rem;
  }

  .image-container {
    height: 200px;
  }
}
</style>
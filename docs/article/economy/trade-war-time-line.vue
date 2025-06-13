<template>
  <div class="trade-war-timeline">
    <div class="container">
      <div class="header">
        <h1>2025年中美贸易战时间轴</h1>
        <p>按时间倒序记录2025年1月至今中美贸易争端的重要节点</p>
      </div>
      
      <div class="timeline">
        <!-- 当前状态 -->
        <div class="timeline-item china-response">
          <div class="timeline-dot current-status"></div>
          <div class="response-card" @click="handleCardClick">
            <div class="date">
              <span class="flag china-flag"></span>
              <span class="flag us-flag" style="margin-left: 5px;"></span>
              {{ formatDate(currentDate) }}（当前）
            </div>
            <div class="title">当前状态：谨慎乐观</div>
            <div class="content">
              日内瓦会谈后，中美贸易关系出现缓和迹象，双方保持<span class="highlight">美国对华30%关税，中国对美10%关税</span>，后续协商机制正在建立。市场对贸易战降温保持谨慎乐观态度。
            </div>
          </div>
        </div>
        
        <!-- 时间轴事件 -->
        <div 
          v-for="(event, index) in timelineEvents" 
          :key="event.id"
          class="timeline-item"
          :class="event.type"
          :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
          ref="timelineItems"
        >
          <div class="timeline-dot" :class="{ 'current-status': event.isCurrentStatus }"></div>
          <div 
            :class="[event.type === 'us-action' ? 'action-card' : 'response-card']"
            @click="handleCardClick"
          >
            <div class="date">
              <span v-if="event.country === 'both'" class="flag us-flag"></span>
              <span v-if="event.country === 'both'" class="flag china-flag" style="margin-left: 5px;"></span>
              <span v-else-if="event.country === 'us'" class="flag us-flag"></span>
              <span v-else-if="event.country === 'china'" class="flag china-flag"></span>
              {{ event.date }}
            </div>
            <div class="title">{{ event.title }}</div>
            <div class="content" v-html="event.content"></div>
          </div>
        </div>
      </div>
      
      <div class="status">
        <h3>💡 当前局势分析</h3>
        <p>
          <strong>关税演变：</strong>从最初的10%逐步升级到最高125%，后经日内瓦会谈降至美国对华30%、中国对美10%。
          <br><br>
          <strong>经济影响：</strong>据高盛报告估算，贸易战可能使中国2025年GDP增长降至约4%，2026年约3.5%，影响约1620万个工作岗位。
          <br><br>
          <strong>未来展望：</strong>虽然达成90天休战协议，但双方结构性分歧依然存在，贸易争端长期化趋势明显。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

// 响应式数据
const timelineItems = ref([])
const currentDate = ref(new Date())

// 时间轴事件数据
const timelineEvents = ref([
  {
    id: 1,
    type: 'us-action',
    country: 'both',
    date: '2025年5月12日',
    title: '中美：日内瓦经贸会谈',
    content: `中美在瑞士日内瓦举行高层闭门会谈，达成<span class="highlight">"重大"与"实质性"进展</span>，双方同意：
      <br>• 美国将对中国商品关税降至30%（90天内）
      <br>• 中国对美国商品关税降至10%
      <br>• 暂停贸易休战90天，建立经贸磋商机制`,
    isCurrentStatus: true
  },
  {
    id: 2,
    type: 'china-response',
    country: 'china',
    date: '2025年4月29日',
    title: '中国：外交宣传攻势',
    content: `中国外交部发布题为<span class="highlight">"不跪！"(Never Kneel Down)</span>的中英双语宣传片，强调"中国不退，世界的公理就有人守护"，展示坚决反对贸易霸凌的立场。`
  },
  {
    id: 3,
    type: 'china-response',
    country: 'china',
    date: '2025年4月24日',
    title: '中国："11箭齐发"综合反制',
    content: `面对美国步步施压，中国推出<span class="highlight">"11箭齐发"</span>的综合反制措施，包括稀土出口限制、技术转移限制、暂停美国原木进口等多维度应对。`
  },
  {
    id: 4,
    type: 'china-response',
    country: 'china',
    date: '2025年4月4日',
    title: '中国：全面对等反制',
    content: `面对美国"对等关税"，中国国务院关税税则委员会宣布，自4月10日起对原产于美国的所有进口商品<span class="highlight">加征34%关税</span>，实施全面对等反制。`
  },
  {
    id: 5,
    type: 'us-action',
    country: 'us',
    date: '2025年4月2日',
    title: '美国："解放日"对等关税',
    content: `特朗普宣布历史性的"对等关税"政策，对中国商品征收<span class="highlight">34%关税</span>，对全球180多个国家和地区加征10%-50%关税，并宣布国家紧急状态。`
  },
  {
    id: 6,
    type: 'us-action',
    country: 'us',
    date: '2025年3月12日',
    title: '美国：全球钢铝关税',
    content: `美国对所有进口钢铁和铝制品<span class="highlight">加征25%关税</span>，包括之前获得豁免的国家。对俄罗斯铝制品加征200%关税。`
  },
  {
    id: 7,
    type: 'china-response',
    country: 'china',
    date: '2025年3月4日',
    title: '中国：农产品反制措施',
    content: `针对美国3月3日以芬太尼为由再次加征关税，中国自3月10日起对美国农产品实施反制：<span class="highlight">鸡肉、小麦、玉米、棉花加征15%关税</span>，<span class="highlight">高粱、大豆、猪肉、牛肉等加征10%关税</span>，同时暂停美国原木进口。`
  },
  {
    id: 8,
    type: 'us-action',
    country: 'us',
    date: '2025年3月3日',
    title: '美国：二轮关税升级',
    content: `特朗普以芬太尼为由，对所有中国输美商品<span class="highlight">再次加征10%关税</span>，累计关税负担进一步增加。同时签署针对中墨加的行政令。`
  },
  {
    id: 9,
    type: 'china-response',
    country: 'china',
    date: '2025年2月4日',
    title: '中国：首轮关税反制',
    content: `针对美国2月1日加征关税，中国国务院关税税则委员会迅速反制，自2月10日起对美国部分商品加征关税：<span class="highlight">煤炭、液化天然气加征15%</span>，<span class="highlight">原油、农业机械、大排量汽车、皮卡加征10%</span>。`
  },
  {
    id: 10,
    type: 'us-action',
    country: 'us',
    date: '2025年2月1日',
    title: '美国：首轮关税加征',
    content: `特朗普签署行政命令，对所有进口自中国的商品在现有关税基础上<span class="highlight">加征10%关税</span>，标志着新一轮贸易战正式开始。`
  }
])

// 计算属性
const formattedCurrentDate = computed(() => {
  return formatDate(currentDate.value)
})

// 方法
const formatDate = (date) => {
  if (typeof date === 'string') return date
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}年${month}月${day}日`
}

const handleCardClick = (event) => {
  const card = event.currentTarget
  card.style.transform = 'scale(0.98)'
  setTimeout(() => {
    card.style.transform = ''
  }, 150)
}

const setupScrollAnimation = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running'
      }
    })
  }, observerOptions)
  
  timelineItems.value.forEach(item => {
    if (item) {
      observer.observe(item)
    }
  })
}

// 生命周期
onMounted(() => {
  setupScrollAnimation()
})
</script>

<style scoped>
.trade-war-timeline {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.header {
  text-align: center;
  margin-bottom: 50px;
}

.header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #e74c3c, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header p {
  font-size: 1.1rem;
  color: #7f8c8d;
}

.timeline {
  position: relative;
  margin: 40px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #2ecc71, #e74c3c);
  transform: translateX(-50%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin: 50px 0;
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
  animation-play-state: paused;
}

.us-action {
  text-align: right;
  padding-right: calc(50% + 30px);
}

.china-response {
  text-align: left;
  padding-left: calc(50% + 30px);
}

.action-card, .response-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
}

.action-card:hover, .response-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.action-card {
  border-left: 5px solid #e74c3c;
  background: linear-gradient(135deg, rgba(231, 76, 60, 0.1), rgba(192, 57, 43, 0.05));
}

.response-card {
  border-left: 5px solid #3498db;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(41, 128, 185, 0.05));
}

.date {
  font-size: 0.9rem;
  font-weight: bold;
  color: #7f8c8d;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.us-action .date {
  justify-content: flex-end;
}

.flag {
  width: 20px;
  height: 15px;
  border-radius: 3px;
  display: inline-block;
}

.us-flag {
  background: linear-gradient(to right, #B22234 0%, #B22234 33%, #FFFFFF 33%, #FFFFFF 66%, #3C3B6E 66%);
}

.china-flag {
  background: linear-gradient(45deg, #DE2910, #FFDE00);
}

.title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #2c3e50;
}

.content {
  font-size: 1rem;
  line-height: 1.6;
  color: #34495e;
}

:deep(.highlight) {
  background: linear-gradient(120deg, #f39c12, #e67e22);
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: bold;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 30px;
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 4px solid #e74c3c;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.china-response .timeline-dot {
  border-color: #3498db;
}

.current-status {
  border-color: #2ecc71 !important;
}

.status {
  text-align: center;
  margin-top: 50px;
  padding: 30px;
  background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(39, 174, 96, 0.05));
  border-radius: 15px;
  border: 2px solid #2ecc71;
}

.status h3 {
  color: #27ae60;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.status p {
  color: #2c3e50;
  font-size: 1.1rem;
  line-height: 1.6;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .timeline::before {
    left: 30px;
  }
  
  .us-action, .china-response {
    text-align: left;
    padding-left: 60px;
    padding-right: 20px;
  }
  
  .timeline-dot {
    left: 30px;
  }
}
</style>
<template>
  <div class="container">
    <h1>全球24个时区划分图</h1>
    
    <div class="current-time">
      当前UTC时间: <span>{{ utcTime }}</span>
    </div>
    
    <div class="legend">
      <div class="legend-item">
        <div class="legend-color utc-zero-color"></div>
        <span>UTC+0 (格林威治标准时间)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color east-zones-color"></div>
        <span>东时区 (UTC+1 到 UTC+12)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color west-zones-color"></div>
        <span>西时区 (UTC-1 到 UTC-12)</span>
      </div>
    </div>
    
    <div class="timezone-map">
      <div
        v-for="(tz, index) in timezones"
        :key="tz"
        class="timezone-strip"
        :class="getTimezoneClass(tz)"
        :style="getTimezoneStyle(index)"
        @mouseenter="hoveredTimezone = tz"
        @mouseleave="hoveredTimezone = null"
        @touchstart="handleTouchStart(tz)"
        @touchend="handleTouchEnd"
      >
        <div class="timezone-label">
          {{ tz >= 0 ? `UTC+${tz}` : `UTC${tz}` }}
        </div>
        <div class="time-display">
          {{ getTimezoneTime(tz) }}
        </div>
        <div class="city-info">
          <div class="city-flag">{{ timezoneData[tz.toString()]?.flag }}</div>
          <div class="city-name">{{ timezoneData[tz.toString()]?.city }}</div>
          <div class="country-name">{{ timezoneData[tz.toString()]?.country }}</div>
        </div>
      </div>
    </div>
    
    <!-- 移动端时区详情弹窗 -->
    <div v-if="selectedTimezone !== null && isMobile" class="timezone-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>时区详情</h3>
        <div class="modal-flag">{{ timezoneData[selectedTimezone.toString()]?.flag }}</div>
        <p><strong>时区:</strong> {{ selectedTimezone >= 0 ? `UTC+${selectedTimezone}` : `UTC${selectedTimezone}` }}</p>
        <p><strong>代表城市:</strong> {{ timezoneData[selectedTimezone.toString()]?.city }}</p>
        <p><strong>所属国家:</strong> {{ timezoneData[selectedTimezone.toString()]?.country }}</p>
        <p><strong>当前时间:</strong> {{ getTimezoneTime(selectedTimezone) }}</p>
        <button @click="closeModal" class="modal-close">关闭</button>
      </div>
    </div>
    
    <div class="info-box">
      <h3>时区说明：</h3>
      <ul>
        <li><strong>UTC+0</strong>：格林威治标准时间，位于英国伦敦</li>
        <li><strong>东时区</strong>：UTC+1到UTC+12，时间比UTC快1-12小时</li>
        <li><strong>西时区</strong>：UTC-1到UTC-12，时间比UTC慢1-12小时</li>
        <li><strong>国际日期变更线</strong>：大致位于UTC+12和UTC-12之间</li>
        <li>每个时区跨越经度15度（360°÷24小时=15°）</li>
      </ul>
    </div>
    
    <div class="example-cities">
      <div class="city-time">
        <div class="city-names">北京</div>
        <div class="city-timezone">UTC+8</div>
        <div>{{ cityTimes.beijing }}</div>
      </div>
      <div class="city-time">
        <div class="city-names">东京</div>
        <div class="city-timezone">UTC+9</div>
        <div>{{ cityTimes.tokyo }}</div>
      </div>
      <div class="city-time">
        <div class="city-names">伦敦</div>
        <div class="city-timezone">UTC+0</div>
        <div>{{ cityTimes.london }}</div>
      </div>
      <div class="city-time">
        <div class="city-names">纽约</div>
        <div class="city-timezone">UTC-5</div>
        <div>{{ cityTimes.newyork }}</div>
      </div>
      <div class="city-time">
        <div class="city-names">洛杉矶</div>
        <div class="city-timezone">UTC-8</div>
        <div>{{ cityTimes.losangeles }}</div>
      </div>
      <div class="city-time">
        <div class="city-names">悉尼</div>
        <div class="city-timezone">UTC+10</div>
        <div>{{ cityTimes.sydney }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 响应式数据
const currentTime = ref(new Date())
const hoveredTimezone = ref(null)
const selectedTimezone = ref(null)
const isMobile = ref(false)
let timeInterval = null

// 生成时区数组
const timezones = []
for (let i = -12; i <= 12; i++) {
  timezones.push(i)
}

// 时区代表性城市数据
const timezoneData = {
  '-12': { city: '贝克岛', country: '美国', flag: '🇺🇸' },
  '-11': { city: '阿皮亚', country: '萨摩亚', flag: '🇼🇸' },
  '-10': { city: '檀香山', country: '美国(夏威夷)', flag: '🇺🇸' },
  '-9': { city: '安克雷奇', country: '美国(阿拉斯加)', flag: '🇺🇸' },
  '-8': { city: '洛杉矶', country: '美国', flag: '🇺🇸' },
  '-7': { city: '丹佛', country: '美国', flag: '🇺🇸' },
  '-6': { city: '芝加哥', country: '美国', flag: '🇺🇸' },
  '-5': { city: '纽约', country: '美国', flag: '🇺🇸' },
  '-4': { city: '圣地亚哥', country: '智利', flag: '🇨🇱' },
  '-3': { city: '圣保罗', country: '巴西', flag: '🇧🇷' },
  '-2': { city: '诺罗尼亚', country: '巴西', flag: '🇧🇷' },
  '-1': { city: '亚速尔群岛', country: '葡萄牙', flag: '🇵🇹' },
  '0': { city: '伦敦', country: '英国', flag: '🇬🇧' },
  '1': { city: '巴黎', country: '法国', flag: '🇫🇷' },
  '2': { city: '开罗', country: '埃及', flag: '🇪🇬' },
  '3': { city: '莫斯科', country: '俄罗斯', flag: '🇷🇺' },
  '4': { city: '迪拜', country: '阿联酋', flag: '🇦🇪' },
  '5': { city: '卡拉奇', country: '巴基斯坦', flag: '🇵🇰' },
  '6': { city: '达卡', country: '孟加拉国', flag: '🇧🇩' },
  '7': { city: '曼谷', country: '泰国', flag: '🇹🇭' },
  '8': { city: '北京', country: '中国', flag: '🇨🇳' },
  '9': { city: '东京', country: '日本', flag: '🇯🇵' },
  '10': { city: '悉尼', country: '澳大利亚', flag: '🇦🇺' },
  '11': { city: '努美阿', country: '新喀里多尼亚', flag: '🇳🇨' },
  '12': { city: '奥克兰', country: '新西兰', flag: '🇳🇿' }
}

// 计算UTC时间
const utcTime = computed(() => {
  const now = currentTime.value
  const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000)
  return utc.toLocaleTimeString()
})

// 计算各城市时间
const cityTimes = computed(() => {
  const now = currentTime.value
  const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000)
  
  return {
    beijing: new Date(utc.getTime() + 8 * 60 * 60 * 1000).toLocaleTimeString(),
    tokyo: new Date(utc.getTime() + 9 * 60 * 60 * 1000).toLocaleTimeString(),
    london: utc.toLocaleTimeString(),
    newyork: new Date(utc.getTime() - 5 * 60 * 60 * 1000).toLocaleTimeString(),
    losangeles: new Date(utc.getTime() - 8 * 60 * 60 * 1000).toLocaleTimeString(),
    sydney: new Date(utc.getTime() + 10 * 60 * 60 * 1000).toLocaleTimeString()
  }
})

// 获取时区CSS类
const getTimezoneClass = (tz) => {
  const classes = []
  if (tz === 0) {
    classes.push('utc-zero')
  } else if (tz > 0) {
    classes.push('east-zones')
  } else {
    classes.push('west-zones')
  }
  
  if (hoveredTimezone.value === tz) {
    classes.push('hovered')
  }
  
  return classes
}

// 获取时区样式
const getTimezoneStyle = (index) => {
  return {
    left: `${(index / 25) * 100}%`,
    width: `${100 / 25}%`
  }
}

// 获取时区时间
const getTimezoneTime = (tz) => {
  const now = currentTime.value
  const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000)
  const tzTime = new Date(utc.getTime() + tz * 60 * 60 * 1000)
  
  return tzTime.getHours().toString().padStart(2, '0') + ':' + 
         tzTime.getMinutes().toString().padStart(2, '0')
}

// 更新时间
const updateTime = () => {
  currentTime.value = new Date()
}

// 检测移动端
const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 768 || 'ontouchstart' in window
}

// 处理触摸事件
const handleTouchStart = (tz) => {
  if (isMobile.value) {
    selectedTimezone.value = tz
  }
}

const handleTouchEnd = () => {
  // 触摸结束处理
}

const closeModal = () => {
  selectedTimezone.value = null
}

// 生命周期钩子
onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 1000)
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
  window.removeEventListener('resize', checkIsMobile)
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 1.8rem;
}

.timezone-map {
  width: 100%;
  height: 400px;
  position: relative;
  background: linear-gradient(to bottom, #87CEEB 0%, #87CEEB 40%, #90EE90 40%, #90EE90 60%, #87CEEB 60%, #87CEEB 100%);
  border: 2px solid #333;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  touch-action: pan-x;
}

.timezone-strip {
  position: absolute;
  top: 0;
  height: 100%;
  border-left: 1px solid #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #333;
  font-size: 12px;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 5px 2px;
}

.timezone-strip.hovered {
  background-color: rgba(255, 255, 0, 0.3);
  transform: scale(1.05);
  z-index: 10;
}

.timezone-strip.utc-zero {
  background-color: rgba(255, 0, 0, 0.2);
}

.timezone-strip.east-zones {
  background-color: rgba(0, 255, 0, 0.1);
}

.timezone-strip.west-zones {
  background-color: rgba(0, 0, 255, 0.1);
}

.timezone-label {
  writing-mode: vertical-lr;
  text-orientation: mixed;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  margin-bottom: 10px;
}

.time-display {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 10px;
}

.legend {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
}

.legend-color {
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid #333;
}

.utc-zero-color {
  background-color: rgba(255, 0, 0, 0.2);
}

.east-zones-color {
  background-color: rgba(0, 255, 0, 0.1);
}

.west-zones-color {
  background-color: rgba(0, 0, 255, 0.1);
}

.info-box {
  background-color: #e8f4ff;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  border-left: 4px solid #007bff;
}

.current-time {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #007bff;
}

.example-cities {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.city-time {
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #dee2e6;
}

.city-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 3px;
  border-radius: 3px;
  font-size: 8px;
  text-align: center;
  line-height: 1.1;
}

.city-flag {
  font-size: 12px;
}

.city-name {
  font-weight: bold;
  color: #2c3e50;
}

.city-names {
  font-weight: bold;
  color: #2c3e50;
}

.country-name {
  color: #7f8c8d;
  font-size: 7px;
}

.info-box h3 {
  margin-top: 0;
}

.info-box ul {
  margin-bottom: 0;
}

.info-box li {
  margin-bottom: 5px;
}

/* 移动端时区弹窗 */
.timezone-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  max-width: 300px;
  width: 100%;
  text-align: center;
}

.modal-flag {
  font-size: 2rem;
  margin: 10px 0;
}

.modal-close {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .container {
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
  }
  
  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .current-time {
    font-size: 1rem;
  }
  
  .legend {
    gap: 10px;
    justify-content: space-around;
  }
  
  .legend-item {
    font-size: 0.8rem;
    flex-direction: column;
    text-align: center;
    gap: 3px;
  }
  
  .legend-color {
    width: 15px;
    height: 15px;
  }
  
  .timezone-map {
    height: 300px;
    margin-bottom: 15px;
  }
  
  .timezone-strip {
    font-size: 10px;
    padding: 3px 1px;
  }
  
  .city-info {
    font-size: 6px;
    padding: 2px;
  }
  
  .city-flag {
    font-size: 8px;
  }
  
  .city-name {
    font-size: 6px;
  }
  
  .country-name {
    font-size: 5px;
  }
  
  .example-cities {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 8px;
  }
  
  .city-time {
    padding: 8px;
    font-size: 0.9rem;
  }
  
  .info-box {
    padding: 12px;
    font-size: 0.9rem;
  }
  
  .info-box li {
    margin-bottom: 8px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 10px;
    margin: 5px;
  }
  
  h1 {
    font-size: 1.3rem;
  }
  
  .current-time {
    font-size: 0.9rem;
  }
  
  .legend {
    flex-direction: column;
    gap: 8px;
  }
  
  .legend-item {
    justify-content: center;
  }
  
  .timezone-map {
    height: 250px;
  }
  
  .example-cities {
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }
  
  .city-time {
    padding: 6px;
    font-size: 0.8rem;
  }
  
  .info-box {
    padding: 10px;
    font-size: 0.8rem;
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .timezone-strip:hover {
    transform: none;
    background-color: inherit;
  }
  
  .timezone-strip:active {
    background-color: rgba(255, 255, 0, 0.3);
    transform: scale(1.02);
  }
}
</style>
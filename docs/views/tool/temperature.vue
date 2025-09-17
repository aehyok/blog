<template>
  <div class="weather-container">
    <div class="header">
      <h1>天气预报</h1>
      <div>实时温度监测</div>
    </div>

    <div class="nav-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="nav-tab"
        :class="{ active: activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="search-box">
      <input
        v-model="searchTerm"
        type="text"
        class="search-input"
        placeholder="搜索城市..."
      />
    </div>

    <div class="info-bar">
      <span>{{ state.weatherData.formatTime }}</span>
      <span>共{{ state.count }}站</span>
    </div>

    <div class="weather-list">
      <div
        v-if = "state.weatherData?.stations?.length > 0"
        v-for="(item, index) in filteredWeatherData.slice(0, 120)"
        :key="index"
        class="weather-item"
        :class="{ 'fade-in': isVisible }"
      >
        <div class="city-info" >
          <div class="city-rank">{{ index + 1 }}</div>
          <div>
            <span class="city-name">{{ item[1] }}</span>
            <span class="city-province">({{ item[0] }})</span>
          </div>
        </div>
        <div class="temperature" :class="getTemperatureClass(item.temperature)">
          {{ item[5] }}°C
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import axios from 'axios'
// Props
const props = defineProps({
  weatherData: {
    type: Array,
    default: () => [
      { cityName: '托克逊', province: '新疆', temperature: 41.6 },
      { cityName: '吐鲁番东坎', province: '新疆', temperature: 41.5 },
      { cityName: '吐鲁番', province: '新疆', temperature: 41.1 },
      { cityName: '华县', province: '陕西', temperature: 40.1 },
      { cityName: '昌邑', province: '山东', temperature: 40 },
      { cityName: '旬阳', province: '陕西', temperature: 39.8 },
      { cityName: '太原', province: '陕西', temperature: 39.5 },
      { cityName: '白河', province: '陕西', temperature: 39.4 },
      { cityName: '沙坪坝', province: '重庆', temperature: 39.4 },
      { cityName: '平度', province: '山东', temperature: 39.3 },
      { cityName: '临颍', province: '河南', temperature: 39.3 },
      { cityName: '云阳', province: '重庆', temperature: 39.3 },
      { cityName: '合江', province: '四川', temperature: 39.3 },
      { cityName: '新泰', province: '山西', temperature: 39.2 },
      { cityName: '高密', province: '山东', temperature: 39.2 },
      { cityName: '永济', province: '山西', temperature: 39.2 },
      { cityName: '北碚', province: '重庆', temperature: 39.2 },
      { cityName: '潍坊', province: '山东', temperature: 39.1 },
      { cityName: '川汇区', province: '河南', temperature: 39.1 },
      { cityName: '蒲县', province: '陕西', temperature: 39 },
      { cityName: '华阴', province: '陕西', temperature: 39 }
    ]
  },
  currentTime: {
    type: String,
    default: '07月04日16时-17时'
  },
  totalStations: {
    type: Number,
    default: 2419
  }
})

const state = reactive({
  weatherData: {}
})

// Emits
const emit = defineEmits(['tab-change', 'city-select'])

// 响应式数据
const searchTerm = ref('')
const activeTab = ref('minTemp')
const isVisible = ref(false)

// 选项卡配置
const tabs = [
  { key: 'minTemp', label: '最小时气温' },
  { key: 'maxTemp', label: '最高温度' },
  { key: 'minTempDaily', label: '最低温度' },
  { key: 'tempChange', label: '24小时变温' }
]

// 计算属性
const filteredWeatherData = computed(() => {
  if (!searchTerm.value) {
    return state.weatherData.stations || []
  }
  
  const term = searchTerm.value.toLowerCase()
  return state.weatherData.stations.filter(item => 
    item[0].toLowerCase().includes(term) || 
    item[1].toLowerCase().includes(term)
  )
})

// 方法
const getTemperatureClass = (temp) => {
  if (temp >= 41) return 'temperature-hot'
  if (temp >= 39.5) return 'temperature-warm'
  if (temp >= 38) return 'temperature-cool'
  return 'temperature-cold'
}

// 生命周期
onMounted(() => {
  isVisible.value = true
  const result = fetchTemperature().then(response => {
    console.log('最高温度数据:', response.data)
    state.weatherData = response.data;
    state.count = response.data.stations.length;
  }).catch(error => {
    console.error('获取最高温度数据失败:', error)
  })
})

// 监听选项卡变化
const handleTabChange = (tabKey) => {
  activeTab.value = tabKey
  emit('tab-change', tabKey)
}

// 监听城市选择
const handleCitySelect = (cityData) => {
  emit('city-select', cityData)
}

const getCurrentTimeWithHour = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()-1).padStart(2, '0'); // 24小时制，两位数
    
    return year + month + day + hour;
}

// 获取上一个小时的大致温度
const fetchTemperature = async () => {
  try {
    const url = `http://www.nmc.cn/rest/wxapi/getTemperature?ymdh=${getCurrentTimeWithHour()}&type=ET1&_=${Date.now()}`
    const enUrl = encodeURIComponent(url);
    const response = await axios.get(`https://api.aehyok.uk/api/proxy?target=${enUrl}`)
    return response.data
  } catch (error) {
    console.error('获取最高温度失败:', error)
    return []
  }
}
</script>

<style scoped>
.weather-container {
  max-width: 400px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  text-align: center;
}

.header h1 {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 600;
}

.nav-tabs {
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.nav-tab {
  flex: 1;
  padding: 12px 8px;
  text-align: center;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  transition: all 0.3s ease;
}

.nav-tab.active {
  color: #667eea;
  background: white;
  border-bottom: 2px solid #667eea;
}

.nav-tab:hover {
  background: #f0f0f0;
}

.search-box {
  padding: 15px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.search-input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #667eea;
}

.info-bar {
  padding: 15px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
}

.weather-list {
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
}

.weather-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  cursor: pointer;
}

.weather-item:hover {
  background-color: #f8f9fa;
  transform: translateX(5px);
}

.weather-item:last-child {
  border-bottom: none;
}

.weather-item.fade-in {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.city-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.city-rank {
  background: #667eea;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.city-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.city-province {
  font-size: 12px;
  color: #999;
  margin-left: 5px;
}

.temperature {
  font-size: 18px;
  font-weight: 600;
  color: #667eea;
}

.temperature-hot {
  color: #ff6b6b;
}

.temperature-warm {
  color: #ffa500;
}

.temperature-cool {
  color: #4ecdc4;
}

.temperature-cold {
  color: #667eea;
}

@media (max-width: 480px) {
  .weather-container {
    margin: 10px;
    border-radius: 15px;
  }
  
  .nav-tab {
    font-size: 12px;
    padding: 10px 4px;
  }
  
  .weather-item {
    padding: 12px 15px;
  }
}
</style>
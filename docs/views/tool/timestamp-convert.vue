<template>
  <div class="container">
    <h1>时间戳转换工具</h1>
    
    <div class="current-time">
      {{ currentTimeDisplay }}
    </div>

    <!-- 时间戳转时间 -->
    <div class="converter-section">
      <div class="section-title">时间戳转时间</div>
      <div class="input-group">
        <div class="input-row">
          <label>时间戳:</label>
          <input 
            type="text" 
            v-model="timestampInput" 
            @keypress="handleTimestampKeypress"
            placeholder="输入时间戳 (如: 1642820400)"
          >
          <button @click="convertTimestamp">转换</button>
        </div>
        <div class="unit-selector">
          <div 
            class="unit-btn" 
            :class="{ active: currentUnit === 'seconds' }"
            @click="selectUnit('seconds')"
          >
            秒 (s)
          </div>
          <div 
            class="unit-btn" 
            :class="{ active: currentUnit === 'milliseconds' }"
            @click="selectUnit('milliseconds')"
          >
            毫秒 (ms)
          </div>
        </div>
        <div 
          class="result" 
          :style="timestampResultStyle"
        >
          {{ timestampResult }}
        </div>
      </div>
    </div>

    <!-- 时间转时间戳 -->
    <div class="converter-section">
      <div class="section-title">时间转时间戳</div>
      <div class="input-group">
        <div class="input-row">
          <label>时间:</label>
          <input 
            type="datetime-local" 
            v-model="datetimeInput"
            @change="convertDatetime"
          >
          <button @click="convertDatetime">转换</button>
        </div>
        <div class="input-row">
          <button 
            @click="setCurrentTime" 
            style="background: linear-gradient(135deg, #28a745, #20c997);"
          >
            设为当前时间
          </button>
        </div>
        <div 
          class="result" 
          :style="datetimeResultStyle"
          v-html="datetimeResult"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

// 响应式数据
const timestampInput = ref('')
const datetimeInput = ref('')
const currentUnit = ref('seconds')
const currentTime = ref(new Date())
const timestampResult = ref('等待转换...')
const datetimeResult = ref('等待转换...')

// 结果样式状态
const timestampResultState = reactive({
  type: 'default', // 'success', 'error', 'default'
})

const datetimeResultState = reactive({
  type: 'default',
})

// 计算属性
const currentTimeDisplay = computed(() => {
  const now = currentTime.value
  const timeStr = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  const timestamp = Math.floor(now.getTime() / 1000)
  return `当前时间：${timeStr} | 时间戳：${timestamp}`
})

const timestampResultStyle = computed(() => {
  const styles = {
    success: {
      background: 'linear-gradient(135deg, #e8f5e8, #f0f8f0)',
      color: '#155724',
      borderColor: '#28a745'
    },
    error: {
      background: 'linear-gradient(135deg, #f8d7da, #f5c6cb)',
      color: '#721c24',
      borderColor: '#dc3545'
    },
    default: {
      background: 'linear-gradient(135deg, #e8f5e8, #f0f8f0)',
      color: '#155724',
      borderColor: '#28a745'
    }
  }
  return styles[timestampResultState.type]
})

const datetimeResultStyle = computed(() => {
  const styles = {
    success: {
      background: 'linear-gradient(135deg, #e8f5e8, #f0f8f0)',
      color: '#155724',
      borderColor: '#28a745'
    },
    error: {
      background: 'linear-gradient(135deg, #f8d7da, #f5c6cb)',
      color: '#721c24',
      borderColor: '#dc3545'
    },
    default: {
      background: 'linear-gradient(135deg, #e8f5e8, #f0f8f0)',
      color: '#155724',
      borderColor: '#28a745'
    }
  }
  return styles[datetimeResultState.type]
})

// 定时器引用
let timeInterval = null

// 方法
const updateCurrentTime = () => {
  currentTime.value = new Date()
}

const selectUnit = (unit) => {
  currentUnit.value = unit
}

const convertTimestamp = () => {
  const input = timestampInput.value.trim()
  
  if (!input) {
    timestampResult.value = '请输入时间戳'
    timestampResultState.type = 'error'
    return
  }

  try {
    let timestamp = parseInt(input)
    
    if (isNaN(timestamp)) {
      throw new Error('无效的时间戳格式')
    }

    // 根据单位转换
    let date
    if (currentUnit.value === 'milliseconds') {
      date = new Date(timestamp)
    } else {
      date = new Date(timestamp * 1000)
    }

    if (!isFinite(date.getTime())) {
      throw new Error('时间戳超出有效范围')
    }

    const formatted = date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      weekday: 'long'
    })

    timestampResult.value = formatted
    timestampResultState.type = 'success'
  } catch (error) {
    timestampResult.value = `转换失败: ${error.message}`
    timestampResultState.type = 'error'
  }
}

const convertDatetime = () => {
  const input = datetimeInput.value
  
  if (!input) {
    datetimeResult.value = '请选择时间'
    datetimeResultState.type = 'error'
    return
  }

  try {
    const date = new Date(input)
    const timestamp = Math.floor(date.getTime() / 1000)
    const millisecondTimestamp = date.getTime()

    datetimeResult.value = `
      <div>秒级时间戳: ${timestamp}</div>
      <div style="margin-top: 8px;">毫秒级时间戳: ${millisecondTimestamp}</div>
    `
    datetimeResultState.type = 'success'
  } catch (error) {
    datetimeResult.value = '转换失败: 无效的时间格式'
    datetimeResultState.type = 'error'
  }
}

const setCurrentTime = () => {
  const now = new Date()
  const offset = now.getTimezoneOffset() * 60000
  const localISOTime = new Date(now.getTime() - offset).toISOString().slice(0, 16)
  datetimeInput.value = localISOTime
  convertDatetime()
}

const handleTimestampKeypress = (e) => {
  if (e.key === 'Enter') {
    convertTimestamp()
  }
}

// 生命周期
onMounted(() => {
  updateCurrentTime()
  timeInterval = setInterval(updateCurrentTime, 1000)
  setCurrentTime()
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.converter-section {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 25px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.converter-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #495057;
  font-size: 1.3rem;
  margin-bottom: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-title::before {
  content: "⏰";
  font-size: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.input-row {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

label {
  font-weight: 500;
  color: #495057;
  min-width: 80px;
  font-size: 0.95rem;
}

input[type="text"], input[type="datetime-local"], input[type="number"] {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #dee2e6;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  min-width: 200px;
}

input[type="text"]:focus, input[type="datetime-local"]:focus, input[type="number"]:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  transform: translateY(-1px);
}

button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

button:active {
  transform: translateY(0);
}

.result {
  border: 2px solid;
  border-radius: 10px;
  padding: 15px;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  font-weight: 600;
  min-height: 50px;
  display: flex;
  align-items: center;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.current-time {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 25px;
  font-size: 1.1rem;
  font-weight: 500;
}

.unit-selector {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.unit-btn {
  padding: 8px 15px;
  background: #e9ecef;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  color: #495057;
}

.unit-btn.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-color: #667eea;
}

.unit-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 600px) {
  .container {
    padding: 25px;
    margin: 10px;
  }

  h1 {
    font-size: 2rem;
  }

  .input-row {
    flex-direction: column;
    align-items: stretch;
  }

  label {
    min-width: auto;
  }
}
</style>
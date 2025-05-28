<template>
  <div class="app">
    <h1>舒尔特表格训练器</h1>
    
    <div class="stats">
      <div class="stat-item">
        <div class="stat-label">当前进度</div>
        <div class="stat-value">{{ currentNumber - 1 }}/25</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">计时</div>
        <div class="stat-value timer">{{ formatTime(elapsedTime) }}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">最佳成绩</div>
        <div class="stat-value">{{ bestTime ? formatTime(bestTime) : '--:--' }}</div>
      </div>
    </div>

    <div class="controls">
      <button 
        class="start-btn" 
        :disabled="gameStarted && !gameCompleted"
        @click="generateNewGrid"
      >
        {{ gameStarted && !gameCompleted ? '游戏进行中' : '开始新游戏' }}
      </button>
      <button class="reset-btn" @click="resetGame">重置</button>
      <button 
        class="toggle-btn" 
        :class="{ active: showClickedNumbers }"
        @click="toggleClickedNumbers"
      >
        {{ showClickedNumbers ? '隐藏已点' : '显示已点' }}
      </button>
      <button 
        class="toggle-btn hover-toggle" 
        :class="{ active: showHoverEffect }"
        @click="toggleHoverEffect"
      >
        {{ showHoverEffect ? '隐藏悬停' : '显示悬停' }}
      </button>
    </div>

    <div class="grid">
      <div 
        v-for="(number, index) in grid" 
        :key="index"
        class="cell" 
        :class="{
          'clicked': showClickedNumbers && clickedNumbers.includes(number),
          'error': errorCells.includes(index),
          'no-hover': !showHoverEffect
        }"
        @click="cellClick(number, index)"
      >
        {{ number }}
      </div>
    </div>

    <div class="completion-message" :class="{ show: showCompletionMessage }">
      <div class="completion-title">🎉 恭喜完成！</div>
      <div>完成时间: {{ formatTime(completionTime) }}</div>
      <div v-if="isNewRecord" style="margin-top: 10px;">🏆 新的最佳记录！</div>
    </div>

    <div class="history" :class="{ show: gameHistory.length > 0 }">
      <h3>历史记录</h3>
      <div>
        <div 
          v-for="(record, index) in reversedHistory" 
          :key="index"
          class="history-item"
        >
          <span>第 {{ gameHistory.length - index }} 次</span>
          <span class="history-time">{{ formatTime(record.time) }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="error-message" :class="{ show: showErrorMessage }">
    {{ errorMessage }}
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 响应式数据
const grid = ref([])
const currentNumber = ref(1)
const clickedNumbers = ref([])
const gameStarted = ref(false)
const gameCompleted = ref(false)
const startTime = ref(0)
const elapsedTime = ref(0)
const completionTime = ref(0)
const bestTime = ref(null)
const gameHistory = ref([])
const timer = ref(null)
const errorCells = ref([])
const showCompletionMessage = ref(false)
const showErrorMessage = ref(false)
const errorMessage = ref('')
const isNewRecord = ref(false)
const showClickedNumbers = ref(true)
const showHoverEffect = ref(true)

// 计算属性
const reversedHistory = computed(() => {
  return [...gameHistory.value].reverse()
})

// 生成随机网格
const generateRandomGrid = () => {
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1)
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]]
  }
  return numbers
}

// 生成新网格
const generateNewGrid = () => {
  grid.value = generateRandomGrid()
  resetGame()
}

// 重置游戏
const resetGame = () => {
  currentNumber.value = 1
  clickedNumbers.value = []
  gameStarted.value = false
  gameCompleted.value = false
  elapsedTime.value = 0
  completionTime.value = 0
  errorCells.value = []
  showCompletionMessage.value = false
  isNewRecord.value = false
  
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
}

// 单元格点击事件
const cellClick = (number, index) => {
  if (gameCompleted.value) return

  // 开始游戏（点击数字1）
  if (!gameStarted.value && number === 1) {
    gameStarted.value = true
    startTime.value = Date.now()
    startTimer()
  }

  // 检查是否按顺序点击
  if (gameStarted.value && number === currentNumber.value) {
    clickedNumbers.value.push(number)
    currentNumber.value++

    // 检查是否完成
    if (currentNumber.value > 25) {
      completeGame()
    }
  } else if (gameStarted.value) {
    // 点击错误的数字
    showError(`请点击数字 ${currentNumber.value}`, index)
  } else if (!gameStarted.value && number !== 1) {
    // 游戏未开始，点击非1的数字
    showError('请先点击数字 1 开始游戏', index)
  }
}

// 显示错误信息
const showError = (message, cellIndex) => {
  errorMessage.value = message
  showErrorMessage.value = true
  errorCells.value.push(cellIndex)
  
  setTimeout(() => {
    showErrorMessage.value = false
  }, 2000)
  
  setTimeout(() => {
    errorCells.value = errorCells.value.filter(i => i !== cellIndex)
  }, 500)
}

// 开始计时器
const startTimer = () => {
  timer.value = setInterval(() => {
    elapsedTime.value = Date.now() - startTime.value
  }, 10)
}

// 完成游戏
const completeGame = () => {
  gameCompleted.value = true
  completionTime.value = elapsedTime.value
  
  // 检查是否是新记录
  isNewRecord.value = !bestTime.value || completionTime.value < bestTime.value
  if (isNewRecord.value) {
    bestTime.value = completionTime.value
    try {
      localStorage.setItem('schulte-best-time', bestTime.value.toString())
    } catch (e) {
      console.error('Failed to save best time:', e)
    }
  }

  // 添加到历史记录
  gameHistory.value.push({
    time: completionTime.value,
    date: new Date()
  })
  
  try {
    localStorage.setItem('schulte-history', JSON.stringify(gameHistory.value))
  } catch (e) {
    console.error('Failed to save history:', e)
  }

  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }

  showCompletionMessage.value = true
}

// 切换显示已点击数字
const toggleClickedNumbers = () => {
  showClickedNumbers.value = !showClickedNumbers.value
  try {
    localStorage.setItem('schulte-show-clicked', showClickedNumbers.value.toString())
  } catch (e) {
    console.error('Failed to save setting:', e)
  }
}

// 切换悬停效果
const toggleHoverEffect = () => {
  showHoverEffect.value = !showHoverEffect.value
  try {
    localStorage.setItem('schulte-show-hover', showHoverEffect.value.toString())
  } catch (e) {
    console.error('Failed to save setting:', e)
  }
}

// 格式化时间
const formatTime = (ms) => {
  if (!ms) return '00:00.00'
  
  const totalMs = Math.floor(ms % 1000 / 10)
  const seconds = Math.floor(ms / 1000) % 60
  const minutes = Math.floor(ms / 60000)
  
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${totalMs.toString().padStart(2, '0')}`
}

// 加载保存的数据
const loadSavedData = () => {
  try {
    const savedBestTime = localStorage.getItem('schulte-best-time')
    if (savedBestTime) {
      bestTime.value = parseInt(savedBestTime)
    }

    const savedHistory = localStorage.getItem('schulte-history')
    if (savedHistory) {
      gameHistory.value = JSON.parse(savedHistory)
    }

    const savedShowClicked = localStorage.getItem('schulte-show-clicked')
    if (savedShowClicked !== null) {
      showClickedNumbers.value = savedShowClicked === 'true'
    }

    const savedShowHover = localStorage.getItem('schulte-show-hover')
    if (savedShowHover !== null) {
      showHoverEffect.value = savedShowHover === 'true'
    }
  } catch (e) {
    console.error('Failed to load saved data:', e)
  }
}

// 生命周期钩子
onMounted(() => {
  loadSavedData()
  generateNewGrid()
})

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: Arial, sans-serif;
  background: white;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}

h1 {
  color: #333;
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
}

.stat-item {
  text-align: center;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.timer {
  color: #e74c3c;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  max-width: 400px;
  margin: 0 auto 30px;
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.cell {
  aspect-ratio: 1;
  border: 2px solid #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  color: #333;
  min-height: 60px;
}

.cell:hover {
  transform: scale(1.05);
  border-color: #667eea;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.cell.no-hover:hover {
  transform: none;
  border-color: #ddd;
  box-shadow: none;
}

.cell.clicked {
  background: #2ecc71;
  color: white;
  border-color: #27ae60;
}

.cell.error {
  animation: shake 0.5s ease-in-out;
  border-color: #e74c3c;
  background: #ffe6e6;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
}

button {
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
}

.start-btn {
  background: #2ecc71;
  color: white;
}

.start-btn:hover {
  background: #27ae60;
  transform: translateY(-2px);
}

.reset-btn {
  background: #3498db;
  color: white;
}

.reset-btn:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

.start-btn:disabled {
  background: #95a5a6;
  cursor: not-allowed;
  transform: none;
}

.toggle-btn {
  background: #9b59b6;
  color: white;
}

.toggle-btn:hover {
  background: #8e44ad;
  transform: translateY(-2px);
}

.toggle-btn.active {
  background: #27ae60;
}

.toggle-btn.active:hover {
  background: #229954;
}

.hover-toggle {
  background: #f39c12;
}

.hover-toggle:hover {
  background: #e67e22;
}

.hover-toggle.active {
  background: #27ae60;
}

.hover-toggle.active:hover {
  background: #229954;
}

.completion-message {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  color: #155724;
  display: none;
}

.completion-message.show {
  display: block;
}

.completion-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.history {
  margin-top: 30px;
  text-align: left;
  display: none;
}

.history.show {
  display: block;
}

.history h3 {
  margin-bottom: 15px;
  color: #333;
}

.history-item {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.history-time {
  font-weight: bold;
  color: #667eea;
}

.error-message {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #e74c3c;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  transform: translateX(300px);
  transition: transform 0.3s ease;
  z-index: 1000;
}

.error-message.show {
  transform: translateX(0);
}
</style>
<template>
  <div class="app">
    <h1>舒尔特表格训练器</h1>
    
    <div class="stats">
      <div class="stat-item">
        <div class="stat-label">当前进度</div>
        <div class="stat-value">{{ currentNumber - 1 }}/{{ totalCells }}</div>
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
      <div class="control-row">
        <div class="grid-size-selector">
          <label for="gridSize">网格尺寸:</label>
          <select 
            id="gridSize" 
            v-model="gridSize" 
            @change="handleGridSizeChange"
            :disabled="gameStarted && !gameCompleted"
          >
            <option v-for="size in gridSizes" :key="size.value" :value="size.value">
              {{ size.label }}
            </option>
          </select>
        </div>
      </div>
      <div class="control-row">
        <button 
          class="start-btn" 
          :disabled="gameStarted && !gameCompleted"
          @click="generateNewGrid"
        >
          {{ gameStarted && !gameCompleted ? '游戏进行中' : '开始新游戏' }}
        </button>
        <button class="reset-btn" @click="resetGame">重置</button>
      </div>
      <div class="control-row">
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
    </div>

    <div class="grid" :style="{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }">
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
      <h3>历史记录 ({{ gridSize }}×{{ gridSize }})</h3>
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

// 网格尺寸选项
const gridSizes = [
  { value: 1, label: '1×1 (1格)' },
  { value: 2, label: '2×2 (4格)' },
  { value: 3, label: '3×3 (9格)' },
  { value: 4, label: '4×4 (16格)' },
  { value: 5, label: '5×5 (25格)' },
  { value: 6, label: '6×6 (36格)' },
  { value: 7, label: '7×7 (49格)' }
]

// 响应式数据
const gridSize = ref(5)
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
const totalCells = computed(() => gridSize.value * gridSize.value)

const reversedHistory = computed(() => {
  return [...gameHistory.value].reverse()
})

// 生成随机网格
const generateRandomGrid = () => {
  const numbers = Array.from({ length: totalCells.value }, (_, i) => i + 1)
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]]
  }
  return numbers
}

// 处理网格尺寸变化
const handleGridSizeChange = () => {
  loadSavedData()
  generateNewGrid()
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
    if (currentNumber.value > totalCells.value) {
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
      localStorage.setItem(`schulte-best-time-${gridSize.value}x${gridSize.value}`, bestTime.value.toString())
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
    localStorage.setItem(`schulte-history-${gridSize.value}x${gridSize.value}`, JSON.stringify(gameHistory.value))
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
    const savedBestTime = localStorage.getItem(`schulte-best-time-${gridSize.value}x${gridSize.value}`)
    if (savedBestTime) {
      bestTime.value = parseInt(savedBestTime)
    } else {
      bestTime.value = null
    }

    const savedHistory = localStorage.getItem(`schulte-history-${gridSize.value}x${gridSize.value}`)
    if (savedHistory) {
      gameHistory.value = JSON.parse(savedHistory)
    } else {
      gameHistory.value = []
    }

    const savedShowClicked = localStorage.getItem('schulte-show-clicked')
    if (savedShowClicked !== null) {
      showClickedNumbers.value = savedShowClicked === 'true'
    }

    const savedShowHover = localStorage.getItem('schulte-show-hover')
    if (savedShowHover !== null) {
      showHoverEffect.value = savedShowHover === 'true'
    }

    const savedGridSize = localStorage.getItem('schulte-grid-size')
    if (savedGridSize) {
      gridSize.value = parseInt(savedGridSize)
    }
  } catch (e) {
    console.error('Failed to load saved data:', e)
  }
}

// 保存网格尺寸
const saveGridSize = () => {
  try {
    localStorage.setItem('schulte-grid-size', gridSize.value.toString())
  } catch (e) {
    console.error('Failed to save grid size:', e)
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
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

h1 {
  color: #333;
  margin-bottom: 25px;
  font-size: 2.2rem;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
}

.stat-item {
  text-align: center;
}

.stat-label {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 5px;
}

.stat-value {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
}

.timer {
  color: #e74c3c;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
}

.control-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
}

.grid-size-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}

.grid-size-selector label {
  color: #333;
  font-weight: bold;
}

.grid-size-selector select {
  padding: 8px 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  background: white;
  color: #333;
  transition: all 0.3s ease;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%23666' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 12px;
  padding-right: 30px;
  min-width: 120px;
}

.grid-size-selector select:hover {
  border-color: #667eea;
  background-color: #f8f9fa;
}

.grid-size-selector select:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.grid-size-selector select:disabled {
  background: #f5f5f5;
  color: #999;
  cursor: not-allowed;
  border-color: #ccc;
}

.grid-size-selector select option {
  background: white;
  color: #333;
  padding: 8px;
  border: none;
}

.grid-size-selector select option:hover {
  background: #f8f9fa;
}

.grid-size-selector select option:checked {
  background: #667eea;
  color: white;
}

.grid {
  display: grid;
  gap: 6px;
  max-width: min(500px, 95vw);
  margin: 0 auto 25px;
  background: #fff;
  padding: 12px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.cell {
  aspect-ratio: 1;
  border: 2px solid #ddd;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(0.7rem, 2vw, 1.2rem);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  color: #333;
  min-height: clamp(25px, 6vw, 45px);
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

button {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 90px;
}

.start-btn {
  background: #2ecc71;
  color: white;
  min-width: 110px;
}

.start-btn:hover {
  background: #27ae60;
  transform: translateY(-1px);
}

.reset-btn {
  background: #3498db;
  color: white;
}

.reset-btn:hover {
  background: #2980b9;
  transform: translateY(-1px);
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
  transform: translateY(-1px);
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
  padding: 15px;
  margin-top: 20px;
  color: #155724;
  display: none;
}

.completion-message.show {
  display: block;
}

.completion-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.history {
  margin-top: 25px;
  text-align: left;
  display: none;
}

.history.show {
  display: block;
}

.history h3 {
  margin-bottom: 12px;
  color: #333;
  font-size: 1.1rem;
}

.history-item {
  background: #f8f9fa;
  padding: 8px 12px;
  border-radius: 5px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
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
  padding: 8px 16px;
  border-radius: 5px;
  transform: translateX(300px);
  transition: transform 0.3s ease;
  z-index: 1000;
  font-size: 0.9rem;
}

.error-message.show {
  transform: translateX(0);
}
</style>
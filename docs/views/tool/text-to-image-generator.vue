<template>
  <div class="text-to-image-generator">
    <!-- 顶部标题 -->
    <div class="header">
      <div class="header-content">
        <h1>✨文字图片生成器</h1>
        <p>创造独特的文字艺术，支持实时预览和多格式导出</p>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="main-wrapper">
      <div class="container">
        <!-- 预览区域 -->
        <div class="preview-area">
          <div class="preview-card">
            <div class="preview-header">
              <h3>🖼️ 实时预览</h3>
              <div class="canvas-info">
                {{ canvasWidth }} × {{ canvasHeight }}
              </div>
            </div>
            <div class="canvas-container">
              <canvas 
                ref="canvas" 
                :width="canvasWidth" 
                :height="canvasHeight"
                @mousedown="handleMouseDown"
                @mousemove="handleMouseMove"
                @mouseup="handleMouseUp"
                @click="handleCanvasClick"
                class="main-canvas"
              ></canvas>
            </div>
            <div class="preview-tips">
              💡 点击或拖拽画布来调整文字位置
            </div>
          </div>
        </div>

        <!-- 控制面板 -->
        <div class="control-panel">
          <!-- 文字内容卡片 -->
          <div class="control-card">
            <div class="card-header">
              <h3>📝 文字内容</h3>
              <div class="text-controls">
                <button class="btn-add-text" @click="addTextLayer">
                  ➕ 添加文字
                </button>
                <select v-model="currentTextIndex" class="text-selector">
                  <option v-for="(text, index) in textLayers" :key="index" :value="index">
                    文字层 {{ index + 1 }}: {{ text.content.slice(0, 10) }}{{ text.content.length > 10 ? '...' : '' }}
                  </option>
                </select>
                <button v-if="textLayers.length > 1" class="btn-delete-text" @click="deleteTextLayer">
                  🗑️
                </button>
              </div>
            </div>
            <textarea 
              v-model="currentText.content" 
              placeholder="在这里输入你想要生成的文字内容..."
              class="text-input"
              @input="generateImage"
            ></textarea>
          </div>

          <!-- 画布设置卡片 -->
          <div class="control-card">
            <div class="card-header">
              <h3>🖼️ 画布尺寸</h3>
            </div>
            <div class="input-grid">
              <div class="input-group">
                <label>宽度</label>
                <input 
                  type="number" 
                  v-model="canvasWidth" 
                  min="100" 
                  max="2000"
                  @input="updateCanvasSize"
                  class="number-input"
                >
              </div>
              <div class="input-group">
                <label>高度</label>
                <input 
                  type="number" 
                  v-model="canvasHeight" 
                  min="100" 
                  max="2000"
                  @input="updateCanvasSize"
                  class="number-input"
                >
              </div>
            </div>
          </div>

          <!-- 字体设置卡片 -->
          <div class="control-card">
            <div class="card-header">
              <h3>🎨 字体样式</h3>
            </div>
            <div class="input-grid">
              <div class="input-group">
                <label>字体大小</label>
                <input 
                  type="number" 
                  v-model="currentText.fontSize" 
                  min="12" 
                  max="200"
                  @input="generateImage"
                  class="number-input"
                >
              </div>
              <div class="input-group">
                <label>字体类型</label>
                <select v-model="currentText.fontFamily" @change="generateImage" class="select-input">
                  <option value="Microsoft YaHei">微软雅黑</option>
                  <option value="SimSun">宋体</option>
                  <option value="SimHei">黑体</option>
                  <option value="KaiTi">楷体</option>
                  <option value="Arial">Arial</option>
                  <option value="Times New Roman">Times New Roman</option>
                </select>
              </div>
            </div>
          </div>

          <!-- 颜色设置卡片 -->
          <div class="control-card">
            <div class="card-header">
              <h3>🎨 颜色配置</h3>
            </div>
            <div class="color-grid">
              <div class="color-group">
                <label>文字颜色</label>
                <div class="color-wrapper">
                  <input 
                    type="color" 
                    v-model="currentText.color" 
                    class="color-input"
                    @change="generateImage"
                  >
                  <span class="color-value">{{ currentText.color }}</span>
                </div>
              </div>
              <div class="color-group">
                <label>背景颜色</label>
                <div class="color-wrapper">
                  <input 
                    type="color" 
                    v-model="bgColor" 
                    class="color-input"
                    @change="generateImage"
                  >
                  <span class="color-value">{{ bgColor }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 位置设置卡片 -->
          <div class="control-card">
            <div class="card-header">
              <h3>📍 文字位置</h3>
            </div>
            <div class="input-grid">
              <div class="input-group">
                <label>X 坐标</label>
                <input 
                  type="number" 
                  v-model="currentText.x" 
                  min="0"
                  @input="generateImage"
                  class="number-input"
                >
              </div>
              <div class="input-group">
                <label>Y 坐标</label>
                <input 
                  type="number" 
                  v-model="currentText.y" 
                  min="0"
                  @input="generateImage"
                  class="number-input"
                >
              </div>
            </div>
          </div>

          <!-- 背景图片卡片 -->
          <div class="control-card">
            <div class="card-header">
              <h3>🖼️ 背景图片</h3>
            </div>
            <input 
              type="file" 
              ref="bgImageInput"
              accept="image/*" 
              class="file-input"
              @change="handleImageUpload"
            >
            <button class="upload-btn" @click="$refs.bgImageInput.click()">
              📁 选择背景图片
            </button>
          </div>

          <!-- 操作按钮 -->
          <div class="action-buttons">
            <button class="btn-generate" @click="generateImage">
              ✨ 生成图片
            </button>
            <button class="btn-center" @click="centerText">
              📍 文字居中
            </button>
            <div class="download-buttons">
              <button class="btn-download jpg" @click="downloadImage('jpg')">JPG</button>
              <button class="btn-download png" @click="downloadImage('png')">PNG</button>
              <button class="btn-download gif" @click="downloadImage('gif')">GIF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, computed } from 'vue'

// 响应式数据
const canvasWidth = ref(400)
const canvasHeight = ref(300)
const bgColor = ref('#ffffff')

// 文字层数组
const textLayers = ref([
  {
    id: 1,
    content: '测试文字',
    fontSize: 40,
    fontFamily: 'Microsoft YaHei',
    color: '#000000',
    x: 50,
    y: 50
  }
])

const currentTextIndex = ref(0)
const selectedTextId = ref(null)

// 当前选中的文字对象
const currentText = computed(() => textLayers.value[currentTextIndex.value])

// DOM引用
const canvas = ref(null)
const bgImageInput = ref(null)

// 其他状态
const backgroundImage = ref(null)
const isDragging = ref(false)
const dragOffsetX = ref(0)
const dragOffsetY = ref(0)
const mouseDownTime = ref(0)
const hasMouseMoved = ref(false)

let ctx = null

// 初始化
onMounted(() => {
  ctx = canvas.value.getContext('2d')
  generateImage()
})

// 监听画布尺寸变化
watch([canvasWidth, canvasHeight], () => {
  generateImage()
})

// 更新画布尺寸
const updateCanvasSize = () => {
  nextTick(() => {
    generateImage()
  })
}

// 添加新文字层
const addTextLayer = () => {
  const newId = Math.max(...textLayers.value.map(t => t.id)) + 1
  const newText = {
    id: newId,
    content: '新文字',
    fontSize: 40,
    fontFamily: 'Microsoft YaHei',
    color: '#000000',
    x: 50 + (textLayers.value.length * 20),
    y: 50 + (textLayers.value.length * 20)
  }
  textLayers.value.push(newText)
  currentTextIndex.value = textLayers.value.length - 1
  generateImage()
}

// 删除文字层
const deleteTextLayer = () => {
  if (textLayers.value.length > 1) {
    textLayers.value.splice(currentTextIndex.value, 1)
    if (currentTextIndex.value >= textLayers.value.length) {
      currentTextIndex.value = textLayers.value.length - 1
    }
    generateImage()
  }
}

// 处理图片上传
const handleImageUpload = (e) => {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (event) => {
      const img = new Image()
      img.onload = () => {
        backgroundImage.value = img
        generateImage()
      }
      img.src = event.target.result
    }
    reader.readAsDataURL(file)
  }
}

// 获取准确的画布坐标
const getCanvasCoordinates = (e) => {
  const rect = canvas.value.getBoundingClientRect()
  const scaleX = canvasWidth.value / rect.width
  const scaleY = canvasHeight.value / rect.height
  
  const x = (e.clientX - rect.left) * scaleX
  const y = (e.clientY - rect.top) * scaleY
  
  return { x: Math.round(x), y: Math.round(y) }
}

// 获取文字的实际尺寸
const getTextDimensions = (textLayer) => {
  if (!ctx || !textLayer.content.trim()) return { width: 0, height: 0 }
  
  ctx.font = `${textLayer.fontSize}px ${textLayer.fontFamily}`
  const lines = textLayer.content.split('\n').filter(line => line.trim())
  
  if (lines.length === 0) return { width: 0, height: 0 }
  
  const maxWidth = Math.max(...lines.map(line => ctx.measureText(line).width))
  const totalHeight = lines.length * textLayer.fontSize * 1.2
  
  return { width: maxWidth, height: totalHeight }
}

// 检查点击是否在某个文字区域内
const getClickedTextLayer = (x, y) => {
  // 从后往前检查，确保最上层的文字优先响应
  for (let i = textLayers.value.length - 1; i >= 0; i--) {
    const textLayer = textLayers.value[i]
    const { width, height } = getTextDimensions(textLayer)
    
    if (x >= textLayer.x && x <= textLayer.x + width && 
        y >= textLayer.y && y <= textLayer.y + height) {
      return { layer: textLayer, index: i }
    }
  }
  return null
}

// 鼠标事件处理
const handleMouseDown = (e) => {
  mouseDownTime.value = Date.now()
  hasMouseMoved.value = false
  
  const { x, y } = getCanvasCoordinates(e)
  const clickedText = getClickedTextLayer(x, y)
  
  if (clickedText) {
    // 选中并开始拖拽
    currentTextIndex.value = clickedText.index
    selectedTextId.value = clickedText.layer.id
    isDragging.value = true
    dragOffsetX.value = x - clickedText.layer.x
    dragOffsetY.value = y - clickedText.layer.y
    canvas.value.style.cursor = 'grabbing'
    e.preventDefault()
  }
}

const handleMouseMove = (e) => {
  if (isDragging.value) {
    hasMouseMoved.value = true
    const { x, y } = getCanvasCoordinates(e)
    
    const { width, height } = getTextDimensions(currentText.value)
    const maxX = canvasWidth.value - width
    const maxY = canvasHeight.value - height
    
    const newX = Math.max(0, Math.min(maxX, x - dragOffsetX.value))
    const newY = Math.max(0, Math.min(maxY, y - dragOffsetY.value))
    
    currentText.value.x = Math.round(newX)
    currentText.value.y = Math.round(newY)
    generateImage()
    e.preventDefault()
  } else {
    // 鼠标悬停时改变光标样式
    const { x, y } = getCanvasCoordinates(e)
    const clickedText = getClickedTextLayer(x, y)
    
    if (clickedText) {
      canvas.value.style.cursor = 'grab'
    } else {
      canvas.value.style.cursor = 'crosshair'
    }
  }
}

const handleMouseUp = (e) => {
  if (isDragging.value) {
    isDragging.value = false
    selectedTextId.value = null
    canvas.value.style.cursor = 'crosshair'
    e.preventDefault()
  }
}

const handleCanvasClick = (e) => {
  const clickDuration = Date.now() - mouseDownTime.value
  if (!hasMouseMoved.value && clickDuration < 300 && !isDragging.value) {
    const { x, y } = getCanvasCoordinates(e)
    const clickedText = getClickedTextLayer(x, y)
    
    if (!clickedText) {
      // 点击空白区域，移动当前选中的文字
      const { width, height } = getTextDimensions(currentText.value)
      const maxX = canvasWidth.value - width
      const maxY = canvasHeight.value - height
      
      const newX = Math.max(0, Math.min(x, maxX))
      const newY = Math.max(0, Math.min(y, maxY))
      
      currentText.value.x = Math.round(newX)
      currentText.value.y = Math.round(newY)
      generateImage()
    }
  }
}

// 文字居中函数
const centerText = () => {
  const { width, height } = getTextDimensions(currentText.value)
  
  const centerX = (canvasWidth.value - width) / 2
  const centerY = (canvasHeight.value - height) / 2
  
  currentText.value.x = Math.max(0, Math.round(centerX))
  currentText.value.y = Math.max(0, Math.round(centerY))
  
  generateImage()
}

// 生成图片
const generateImage = () => {
  if (!ctx || !canvas.value) return
  
  canvas.value.width = canvasWidth.value
  canvas.value.height = canvasHeight.value
  
  ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value)

  // 绘制背景
  if (backgroundImage.value) {
    ctx.drawImage(backgroundImage.value, 0, 0, canvasWidth.value, canvasHeight.value)
  } else {
    ctx.fillStyle = bgColor.value
    ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)
  }

  // 绘制所有文字层
  textLayers.value.forEach((textLayer, index) => {
    if (!textLayer.content.trim()) return

    ctx.font = `${textLayer.fontSize}px ${textLayer.fontFamily}`
    ctx.fillStyle = textLayer.color
    ctx.textBaseline = 'top'

    // 如果是选中的文字，添加边框
    if (selectedTextId.value === textLayer.id) {
      const { width, height } = getTextDimensions(textLayer)
      ctx.strokeStyle = '#667eea'
      ctx.lineWidth = 2
      ctx.setLineDash([5, 5])
      ctx.strokeRect(textLayer.x - 2, textLayer.y - 2, width + 4, height + 4)
      ctx.setLineDash([])
    }

    const lines = textLayer.content.split('\n')
    lines.forEach((line, lineIndex) => {
      if (line.trim()) {
        const y = textLayer.y + (lineIndex * textLayer.fontSize * 1.2)
        if (y + textLayer.fontSize <= canvasHeight.value) {
          ctx.fillText(line, textLayer.x, y)
        }
      }
    })
  })
}

// 下载图片
const downloadImage = (format) => {
  let mimeType
  let fileName
  
  switch(format) {
    case 'jpg':
      mimeType = 'image/jpeg'
      fileName = 'text_image.jpg'
      break
    case 'png':
      mimeType = 'image/png'
      fileName = 'text_image.png'
      break
    case 'gif':
      mimeType = 'image/gif'
      fileName = 'text_image.gif'
      break
    default:
      mimeType = 'image/png'
      fileName = 'text_image.png'
  }

  const link = document.createElement('a')
  link.download = fileName
  link.href = canvas.value.toDataURL(mimeType)
  link.click()
}
</script>

<style scoped>
.text-to-image-generator {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  font-family: 'Inter', 'Microsoft YaHei', sans-serif;
}

/* 顶部标题区域 */
.header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 1rem; /* 减少上下内边距 */
  text-align: center;
  color: white;
}

.header h1 {
  font-size: 2rem; /* 减小字体大小 */
  font-weight: 700;
  margin-bottom: 0.25rem; /* 减少底部间距 */
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header p {
  font-size: 0.95rem; /* 减小字体大小 */
  opacity: 0.9;
  font-weight: 300;
  margin: 0; /* 移除默认边距 */
}

/* 主要内容包装器 */
.main-wrapper {
  padding: 1rem; /* 减少内边距 */
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 减少元素间距 */
}

/* 预览区域 */
.preview-area {
  display: flex;
  justify-content: center;
  align-items: start;
}

.preview-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px; /* 减小圆角 */
  padding: 1rem; /* 减少内边距 */
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1); /* 减小阴影 */
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  max-width: 700px;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem; /* 减少底部间距 */
}

.preview-header h3 {
  font-size: 1.1rem; /* 减小字体大小 */
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.canvas-info {
  background: #f7fafc;
  padding: 0.35rem 0.75rem; /* 减少内边距 */
  border-radius: 16px;
  font-size: 0.8rem; /* 减小字体大小 */
  font-weight: 600;
  color: #4a5568;
}

.canvas-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem; /* 减少内边距 */
  background: #f8fafc;
  border-radius: 12px; /* 减小圆角 */
  border: 2px dashed #cbd5e0;
  transition: all 0.3s ease;
}

.canvas-container:hover {
  border-color: #667eea;
  background: #f0f4ff;
}

.main-canvas {
  border-radius: 8px; /* 减小圆角 */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); /* 减小阴影 */
  cursor: crosshair;
  transition: all 0.3s ease;
  max-width: 100%;
  height: auto;
}

.main-canvas:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.preview-tips {
  margin-top: 0.75rem; /* 减少上边距 */
  text-align: center;
  font-size: 0.85rem; /* 减小字体大小 */
  color: #6b7280;
  padding: 0.5rem; /* 减少内边距 */
  background: #fef3c7;
  border-radius: 6px; /* 减小圆角 */
  border-left: 3px solid #f59e0b; /* 减小边框宽度 */
}

/* 控制面板 */
.control-panel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* 减小最小宽度 */
  gap: 1rem; /* 减少间距 */
}

.control-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 12px; /* 减小圆角 */
  padding: 1rem; /* 减少内边距 */
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1); /* 减小阴影 */
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.control-card:hover {
  transform: translateY(-1px); /* 减小移动距离 */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-header {
  margin-bottom: 0.75rem; /* 减少底部间距 */
}

.card-header h3 {
  font-size: 1rem; /* 减小字体大小 */
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

/* 文字输入 */
.text-input {
  width: 100%;
  min-height: 80px; /* 减小最小高度 */
  padding: 0.75rem; /* 减少内边距 */
  border: 2px solid #e2e8f0;
  border-radius: 8px; /* 减小圆角 */
  font-size: 0.9rem; /* 减小字体大小 */
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  box-sizing: border-box;
}

.text-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1); /* 减小阴影范围 */
}

/* 输入网格 */
.input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem; /* 减少间距 */
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem; /* 减少间距 */
}

.input-group label {
  font-size: 0.8rem; /* 减小字体大小 */
  font-weight: 600;
  color: #4a5568;
}

.number-input, .select-input {
  padding: 0.6rem; /* 减少内边距 */
  border: 2px solid #e2e8f0;
  border-radius: 6px; /* 减小圆角 */
  font-size: 0.85rem; /* 减小字体大小 */
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.number-input:focus, .select-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1); /* 减小阴影范围 */
}

/* 颜色设置 */
.color-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 减少间距 */
}

.color-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem; /* 减少间距 */
}

.color-group label {
  font-size: 0.8rem; /* 减小字体大小 */
  font-weight: 600;
  color: #4a5568;
}

.color-wrapper {
  display: flex;
  align-items: center;
  gap: 0.6rem; /* 减少间距 */
}

.color-input {
  width: 40px; /* 减小宽度 */
  height: 32px; /* 减小高度 */
  border: none;
  border-radius: 6px; /* 减小圆角 */
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* 减小阴影 */
  transition: transform 0.2s ease;
}

.color-input:hover {
  transform: scale(1.05);
}

.color-value {
  font-size: 0.8rem; /* 减小字体大小 */
  color: #6b7280;
  font-family: 'Monaco', monospace;
  background: #f7fafc;
  padding: 0.2rem 0.4rem; /* 减少内边距 */
  border-radius: 4px; /* 减小圆角 */
}

/* 文件上传 */
.file-input {
  display: none;
}

.upload-btn {
  width: 100%;
  padding: 0.6rem; /* 减少内边距 */
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 6px; /* 减小圆角 */
  font-size: 0.85rem; /* 减小字体大小 */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3); /* 减小阴影 */
}

/* 操作按钮 */
.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* 减少间距 */
}

.btn-generate {
  width: 100%;
  padding: 0.8rem; /* 减少内边距 */
  background: linear-gradient(45deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 8px; /* 减小圆角 */
  font-size: 0.95rem; /* 减小字体大小 */
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 12px rgba(16, 185, 129, 0.3); /* 减小阴影 */
}

.btn-generate:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.btn-center {
  width: 100%;
  padding: 0.8rem; /* 减少内边距 */
  background: linear-gradient(45deg, #8b5cf6, #7c3aed);
  color: white;
  border: none;
  border-radius: 8px; /* 减小圆角 */
  font-size: 0.95rem; /* 减小字体大小 */
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 12px rgba(139, 92, 246, 0.3); /* 减小阴影 */
}

.btn-center:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
}

.download-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.4rem; /* 减少间距 */
}

.btn-download {
  padding: 0.6rem; /* 减少内边距 */
  border: none;
  border-radius: 6px; /* 减小圆角 */
  font-size: 0.8rem; /* 减小字体大小 */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.btn-download.jpg {
  background: linear-gradient(45deg, #ef4444, #dc2626);
  color: white;
}

.btn-download.png {
  background: linear-gradient(45deg, #3b82f6, #2563eb);
  color: white;
}

.btn-download.gif {
  background: linear-gradient(45deg, #f59e0b, #d97706);
  color: white;
}

.btn-download:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2); /* 减小阴影 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header h1 {
    font-size: 1.75rem; /* 进一步减小 */
  }
  
  .header p {
    font-size: 0.9rem; /* 进一步减小 */
  }
  
  .control-panel {
    grid-template-columns: 1fr;
  }
  
  .input-grid {
    grid-template-columns: 1fr;
  }
  
  .download-buttons {
    grid-template-columns: 1fr;
  }
  
  .preview-card {
    padding: 0.75rem; /* 减少移动端内边距 */
  }
  
  .main-wrapper {
    padding: 0.75rem; /* 减少移动端内边距 */
  }
}

@media (max-width: 640px) {
  .color-grid {
    gap: 0.5rem; /* 进一步减少间距 */
  }
  
  .color-wrapper {
    gap: 0.4rem; /* 进一步减少间距 */
  }
  
  .color-input {
    width: 35px; /* 进一步减小 */
    height: 30px; /* 进一步减小 */
  }
  
  .color-value {
    font-size: 0.7rem; /* 进一步减小 */
  }
}
</style>
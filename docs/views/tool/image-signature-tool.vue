<template>
  <div class="container">
    <div class="header">
      <h1>📝 图片签名工具</h1>
      <p>上传图片，添加您的手写签名，并自由移动位置</p>
    </div>
    
    <div class="controls">
      <div class="control-group">
        <div class="file-input-wrapper">
          <input 
            type="file" 
            id="imageUpload" 
            class="file-input" 
            accept="image/*"
            @change="handleImageUpload"
          >
          <label for="imageUpload" class="file-input-label">
            📁 选择图片
          </label>
        </div>
        
        <button class="btn btn-primary" @click="toggleSignatureMode">
          {{ isSignatureMode ? '📋 保存签名' : '✏️ 签名模式' }}
        </button>
        
        <button class="btn btn-secondary" @click="clearSignature">
          🗑️ 清除签名
        </button>
        
        <button class="btn btn-success" @click="downloadImage">
          💾 保存图片
        </button>
      </div>
    </div>
    
    <div class="workspace">
      <div 
        class="canvas-container" 
        ref="canvasContainer"
        :class="{ 'has-image': hasImage, 'signature-mode': isSignatureMode }"
      >
        <div v-if="!hasImage" class="placeholder">
          <h3>请先上传一张图片</h3>
          <p>支持 JPG、PNG、GIF 等格式</p>
        </div>
        <canvas ref="backgroundCanvas"></canvas>
        <canvas 
          ref="signatureCanvas"
          :style="{ pointerEvents: isSignatureMode ? 'auto' : 'none' }"
          @mousedown="startDrawing"
          @mousemove="draw"
          @mouseup="stopDrawing"
          @mouseout="stopDrawing"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        ></canvas>
        <div 
          ref="signaturePreview"
          class="signature-preview"
          :style="signaturePreviewStyle"
          @mousedown="startDragging"
        >
          拖动调整位置
        </div>
      </div>
      
      <div class="signature-controls">
        <div class="color-picker">
          <label>签名颜色:</label>
          <input 
            type="color" 
            v-model="signatureColor" 
            @change="updateSignatureStyle"
          >
        </div>
        
        <div class="size-control">
          <label>笔触大小:</label>
          <input 
            type="range" 
            v-model="brushSize" 
            min="1" 
            max="10" 
            @input="updateSignatureStyle"
          >
          <span>{{ brushSize }}px</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue'

// 响应式数据
const backgroundCanvas = ref(null)
const signatureCanvas = ref(null)
const canvasContainer = ref(null)
const signaturePreview = ref(null)

const hasImage = ref(false)
const isSignatureMode = ref(false)
const isDrawing = ref(false)
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })
const signatureData = ref(null)
const signaturePosition = ref({ x: 50, y: 50 })
const signatureColor = ref('#000000')
const brushSize = ref(3)

// 修改签名相关数据
const signatureBounds = ref({ minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity })
const signatureSize = ref({ width: 0, height: 0 })
const signatureOffset = ref({ x: 0, y: 0 }) // 签名在原画布中的偏移

// Canvas contexts
let backgroundCtx = null
let signatureCtx = null

// 计算属性
const signaturePreviewStyle = computed(() => ({
  display: signatureData.value ? 'block' : 'none',
  left: signaturePosition.value.x + 'px',
  top: signaturePosition.value.y + 'px',
  width: signatureSize.value.width + 'px',
  height: signatureSize.value.height + 'px',
  backgroundImage: signatureData.value ? `url(${signatureData.value})` : 'none',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
}))

// 生命周期
onMounted(() => {
  backgroundCtx = backgroundCanvas.value.getContext('2d')
  signatureCtx = signatureCanvas.value.getContext('2d')
  
  // 添加全局鼠标事件监听
  document.addEventListener('mousemove', dragPreview)
  document.addEventListener('mouseup', stopDragging)
})

// 方法
const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  const reader = new FileReader()
  reader.onload = (e) => {
    const img = new Image()
    img.onload = () => {
      setupCanvas(img)
      hasImage.value = true
    }
    img.src = e.target.result
  }
  reader.readAsDataURL(file)
}

const setupCanvas = (img) => {
  // 计算画布尺寸，保持图片比例
  const containerWidth = canvasContainer.value.clientWidth - 40
  const maxContainerHeight = 800 // 最大高度限制
  const minContainerHeight = 300 // 最小高度限制
  
  let canvasWidth = img.width
  let canvasHeight = img.height
  
  // 计算缩放比例以适应容器宽度
  let scale = 1
  if (canvasWidth > containerWidth) {
    scale = containerWidth / canvasWidth
    canvasWidth = containerWidth
    canvasHeight = img.height * scale
  }
  
  // 如果高度超过最大限制，再次调整
  if (canvasHeight > maxContainerHeight) {
    scale = maxContainerHeight / img.height
    canvasWidth = img.width * scale
    canvasHeight = maxContainerHeight
  }
  
  // 确保最小高度
  if (canvasHeight < minContainerHeight) {
    scale = minContainerHeight / img.height
    canvasWidth = img.width * scale
    canvasHeight = minContainerHeight
  }
  
  // 设置画布尺寸
  backgroundCanvas.value.width = canvasWidth
  backgroundCanvas.value.height = canvasHeight
  signatureCanvas.value.width = canvasWidth
  signatureCanvas.value.height = canvasHeight
  
  backgroundCanvas.value.style.width = canvasWidth + 'px'
  backgroundCanvas.value.style.height = canvasHeight + 'px'
  signatureCanvas.value.style.width = canvasWidth + 'px'
  signatureCanvas.value.style.height = canvasHeight + 'px'
  
  // 动态调整容器大小
  canvasContainer.value.style.width = canvasWidth + 'px'
  canvasContainer.value.style.height = canvasHeight + 'px'
  canvasContainer.value.style.minHeight = 'auto'
  
  // 绘制背景图片
  backgroundCtx.drawImage(img, 0, 0, canvasWidth, canvasHeight)
  
  // 设置签名画布样式
  updateSignatureStyle()
  
  // 清空签名画布
  signatureCtx.clearRect(0, 0, canvasWidth, canvasHeight)
}

const updateSignatureStyle = () => {
  if (signatureCtx) {
    signatureCtx.strokeStyle = signatureColor.value
    signatureCtx.lineWidth = brushSize.value
    signatureCtx.lineCap = 'round'
    signatureCtx.lineJoin = 'round'
  }
}

const toggleSignatureMode = () => {
  isSignatureMode.value = !isSignatureMode.value
  
  if (!isSignatureMode.value) {
    createSignaturePreview()
  }
}

const getEventPosition = (e) => {
  const rect = signatureCanvas.value.getBoundingClientRect()
  return {
    x: (e.clientX - rect.left) * (signatureCanvas.value.width / rect.width),
    y: (e.clientY - rect.top) * (signatureCanvas.value.height / rect.height)
  }
}

const startDrawing = (e) => {
  if (!isSignatureMode.value) return
  
  isDrawing.value = true
  const pos = getEventPosition(e)
  
  // 重置边界框（如果是新的签名）
  if (signatureBounds.value.minX === Infinity) {
    signatureBounds.value = { minX: pos.x, minY: pos.y, maxX: pos.x, maxY: pos.y }
  }
  
  // 更新边界框
  updateSignatureBounds(pos)
  
  signatureCtx.beginPath()
  signatureCtx.moveTo(pos.x, pos.y)
}

const draw = (e) => {
  if (!isDrawing.value || !isSignatureMode.value) return
  
  const pos = getEventPosition(e)
  
  // 更新边界框
  updateSignatureBounds(pos)
  
  signatureCtx.lineTo(pos.x, pos.y)
  signatureCtx.stroke()
  signatureCtx.beginPath()
  signatureCtx.moveTo(pos.x, pos.y)
}

// 新增方法：更新签名边界框
const updateSignatureBounds = (pos) => {
  const padding = brushSize.value * 2 // 给笔触留些边距
  signatureBounds.value.minX = Math.min(signatureBounds.value.minX, pos.x - padding)
  signatureBounds.value.minY = Math.min(signatureBounds.value.minY, pos.y - padding)
  signatureBounds.value.maxX = Math.max(signatureBounds.value.maxX, pos.x + padding)
  signatureBounds.value.maxY = Math.max(signatureBounds.value.maxY, pos.y + padding)
}

const stopDrawing = () => {
  isDrawing.value = false
  if (signatureCtx) {
    signatureCtx.beginPath()
  }
}

// 触摸事件处理
const handleTouchStart = (e) => {
  e.preventDefault()
  startDrawing(e.touches[0])
}

const handleTouchMove = (e) => {
  e.preventDefault()
  draw(e.touches[0])
}

const handleTouchEnd = (e) => {
  e.preventDefault()
  stopDrawing()
}

const createSignaturePreview = () => {
  // 检查是否有签名数据
  const imageData = signatureCtx.getImageData(0, 0, signatureCanvas.value.width, signatureCanvas.value.height)
  const hasSignature = imageData.data.some((channel, index) => index % 4 === 3 && channel !== 0)
  
  if (!hasSignature || signatureBounds.value.minX === Infinity) return
  
  // 计算实际签名区域
  const bounds = signatureBounds.value
  const width = Math.max(50, bounds.maxX - bounds.minX) // 最小宽度50px
  const height = Math.max(25, bounds.maxY - bounds.minY) // 最小高度25px
  
  // 创建裁剪后的签名画布
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  // 从原画布裁剪签名区域
  const croppedImageData = signatureCtx.getImageData(bounds.minX, bounds.minY, width, height)
  ctx.putImageData(croppedImageData, 0, 0)
  
  signatureData.value = canvas.toDataURL()
  
  // 计算预览尺寸和位置（基于画布显示尺寸的缩放）
  const canvasRect = backgroundCanvas.value.getBoundingClientRect()
  const scaleX = canvasRect.width / backgroundCanvas.value.width
  const scaleY = canvasRect.height / backgroundCanvas.value.height
  
  // 更新签名尺寸（显示尺寸）
  signatureSize.value = { 
    width: width * scaleX, 
    height: height * scaleY 
  }
  
  // 设置预览位置（相对于容器的位置）
  signaturePosition.value = {
    x: bounds.minX * scaleX,
    y: bounds.minY * scaleY
  }
  
  // 保存原始签名信息用于下载
  signatureOffset.value = { 
    x: bounds.minX, 
    y: bounds.minY,
    width: width,
    height: height
  }
  
  // 清空签名画布和重置边界框
  signatureCtx.clearRect(0, 0, signatureCanvas.value.width, signatureCanvas.value.height)
  signatureBounds.value = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }
}

const startDragging = (e) => {
  isDragging.value = true
  const rect = signaturePreview.value.getBoundingClientRect()
  dragOffset.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

const dragPreview = (e) => {
  if (!isDragging.value) return
  
  const containerRect = canvasContainer.value.getBoundingClientRect()
  const canvasRect = backgroundCanvas.value.getBoundingClientRect()
  
  const x = e.clientX - containerRect.left - dragOffset.value.x
  const y = e.clientY - containerRect.top - dragOffset.value.y
  
  // 限制拖动范围在画布内
  const maxX = canvasRect.width - signatureSize.value.width
  const maxY = canvasRect.height - signatureSize.value.height
  
  signaturePosition.value = {
    x: Math.max(0, Math.min(x, maxX)),
    y: Math.max(0, Math.min(y, maxY))
  }
}

const stopDragging = () => {
  isDragging.value = false
}

const clearSignature = () => {
  if (signatureCtx && signatureCanvas.value) {
    signatureCtx.clearRect(0, 0, signatureCanvas.value.width, signatureCanvas.value.height)
  }
  signatureData.value = null
  // 重置边界框
  signatureBounds.value = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }
  signatureSize.value = { width: 0, height: 0 }
}

const downloadImage = () => {
  if (!backgroundCanvas.value.width || !signatureData.value) {
    alert('请先上传图片并添加签名！')
    return
  }
  
  // 创建合成画布，使用原始背景画布的尺寸
  const canvas = document.createElement('canvas')
  canvas.width = backgroundCanvas.value.width
  canvas.height = backgroundCanvas.value.height
  const ctx = canvas.getContext('2d')
  
  // 直接绘制原始背景图片（保持原始质量）
  ctx.drawImage(backgroundCanvas.value, 0, 0)
  
  // 在指定位置绘制签名
  const img = new Image()
  img.onload = () => {
    // 计算签名在原始画布坐标系中的位置
    const canvasRect = backgroundCanvas.value.getBoundingClientRect()
    const displayScaleX = canvasRect.width / backgroundCanvas.value.width
    const displayScaleY = canvasRect.height / backgroundCanvas.value.height
    
    // 将显示坐标转换回原始画布坐标
    const originalX = signaturePosition.value.x / displayScaleX
    const originalY = signaturePosition.value.y / displayScaleY
    const originalWidth = signatureOffset.value.width
    const originalHeight = signatureOffset.value.height
    
    // 在原始坐标系中绘制签名
    ctx.drawImage(img, originalX, originalY, originalWidth, originalHeight)
    
    // 下载图片
    const link = document.createElement('a')
    link.download = 'signed-image.png'
    link.href = canvas.toDataURL('image/png', 1.0) // 使用最高质量
    link.click()
  }
  img.src = signatureData.value
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  overflow: hidden;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  text-align: center;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.header p {
  opacity: 0.9;
  font-size: 1.1rem;
}

.controls {
  padding: 30px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.control-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.file-input-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.file-input {
  position: absolute;
  left: -9999px;
}

.file-input-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  font-weight: 500;
}

.file-input-label:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-success {
  background: #28a745;
  color: white;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.workspace {
  padding: 30px;
  min-height: 600px;
  position: relative;
}

.canvas-container {
  position: relative;
  margin: 0 auto;
  border: 2px dashed #dee2e6;
  border-radius: 15px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  max-width: 100%;
  transition: all 0.3s ease;
}

.canvas-container.has-image {
  border: none;
  background: transparent;
  align-items: flex-start;
  justify-content: flex-start;
}

.placeholder {
  text-align: center;
  color: #6c757d;
}

.placeholder h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
}

canvas:last-of-type {
  cursor: crosshair;
}

.signature-preview {
  position: absolute;
  border: 2px dashed #007bff;
  background: rgba(255,255,255,0.9);
  cursor: move;
  border-radius: 8px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007bff;
}

.signature-mode {
  background: rgba(0, 123, 255, 0.1);
  border: 2px solid #007bff;
}

.signature-controls {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: center;
}

.color-picker {
  display: flex;
  align-items: center;
  gap: 10px;
}

.color-picker input[type="color"] {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.size-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.size-control input[type="range"] {
  width: 100px;
}

@media (max-width: 768px) {
  .control-group {
    flex-direction: column;
  }
  
  .signature-controls {
    flex-direction: column;
  }
}
</style>
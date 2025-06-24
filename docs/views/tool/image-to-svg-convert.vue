<template>
  <div class="container">
    <h1>🎨 图片转SVG转换器</h1>
    
    <div 
      class="upload-area" 
      :class="{ dragover: isDragOver }"
      @click="() => $refs.fileInput.click()"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
    >
      <div class="upload-icon">📁</div>
      <div class="upload-text">点击选择图片或拖拽到此处</div>
      <div class="upload-hint">支持 PNG, JPG, JPEG, GIF 格式</div>
      <input 
        ref="fileInput"
        type="file" 
        accept="image/*" 
        style="display: none"
        @change="handleFileSelect"
      >
    </div>

    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>

    <div v-if="isProcessing" class="processing">
      <div class="spinner"></div>
      <div>正在处理图片...</div>
    </div>

    <div v-if="showControls" class="controls">
      <div class="control-group">
        <label for="colorCount">颜色数量:</label>
        <input 
          id="colorCount"
          v-model.number="colorCount" 
          type="number" 
          min="2" 
          max="32"
          @change="convertToSVG"
        >
      </div>
      <div class="control-group">
        <label for="pathSimplify">路径简化:</label>
        <input 
          id="pathSimplify"`  
          v-model.number="pathSimplify" 
          type="range" 
          min="0" 
          max="5" 
          step="0.5"
          @input="convertToSVG"
        >
      </div>
    </div>

    <div v-if="showPreview" class="preview-container">
      <div class="preview-grid">
        <div class="preview-section">
          <div class="section-title">原始图片</div>
          <img 
            :src="currentImageData" 
            class="image-preview" 
            alt="原图预览"
          >
        </div>
        <div class="preview-section">
          <div class="section-title">SVG 结果</div>
          <svg 
            class="svg-output"
            :viewBox="svgViewBox"
            width="100%"
            height="100%"
            v-html="svgContent"
          ></svg>
        </div>
      </div>
    </div>

    <div v-if="showButtons" class="btn-group">
      <button class="btn btn-primary" @click="convertToSVG">🔄 重新转换</button>
      <button class="btn btn-secondary" @click="downloadSVG">💾 下载SVG</button>
      <button class="btn btn-secondary" @click="copySVGCode">{{ copyButtonText }}</button>
      <button class="btn btn-secondary" @click="reset">🔄 重新选择</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 响应式数据
const isDragOver = ref(false)
const currentImageData = ref(null)
const currentSVG = ref(null)
const svgContent = ref('')
const svgViewBox = ref('')
const isProcessing = ref(false)
const errorMessage = ref('')
const colorCount = ref(8)
const pathSimplify = ref(2)
const copyButtonText = ref('📋 复制代码')

// 计算属性
const showControls = computed(() => currentImageData.value !== null)
const showPreview = computed(() => currentImageData.value !== null)
const showButtons = computed(() => currentImageData.value !== null)

// 文件处理方法
const handleDragOver = (e) => {
  e.preventDefault()
  isDragOver.value = true
}

const handleDragLeave = (e) => {
  e.preventDefault()
  isDragOver.value = false
}

const handleDrop = (e) => {
  e.preventDefault()
  isDragOver.value = false
  const files = e.dataTransfer.files
  if (files.length > 0) {
    processFile(files[0])
  }
}

const handleFileSelect = (e) => {
  const file = e.target.files[0]
  if (file) {
    processFile(file)
  }
}

const processFile = (file) => {
  if (!file.type.startsWith('image/')) {
    showError('请选择有效的图片文件')
    return
  }

  if (file.size > 10 * 1024 * 1024) {
    showError('图片文件过大，请选择小于10MB的图片')
    return
  }

  hideError()
  const reader = new FileReader()
  reader.onload = (e) => {
    currentImageData.value = e.target.result
    convertToSVG()
  }
  reader.readAsDataURL(file)
}

// SVG转换方法
const convertToSVG = async () => {
  if (!currentImageData.value) return

  isProcessing.value = true
  
  try {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      // 设置合适的尺寸
      const maxSize = 400
      let { width, height } = img
      
      if (width > height) {
        if (width > maxSize) {
          height = (height * maxSize) / width
          width = maxSize
        }
      } else {
        if (height > maxSize) {
          width = (width * maxSize) / height
          height = maxSize
        }
      }
      
      canvas.width = width
      canvas.height = height
      ctx.drawImage(img, 0, 0, width, height)
      
      // 生成SVG
      generateSVGFromCanvas(canvas)
      isProcessing.value = false
    }
    img.src = currentImageData.value
  } catch (error) {
    isProcessing.value = false
    showError('转换过程中出现错误：' + error.message)
  }
}

const generateSVGFromCanvas = (canvas) => {
  const ctx = canvas.getContext('2d')
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data
  
  // 简化的像素转SVG算法
  const colorPalette = extractColors(data, colorCount.value)
  const shapes = pixelsToShapes(data, canvas.width, canvas.height, colorPalette)
  
  // 生成SVG字符串
  const svgString = generateSVGString(shapes, canvas.width, canvas.height)
  currentSVG.value = svgString
  
  // 设置SVG显示内容
  svgViewBox.value = `0 0 ${canvas.width} ${canvas.height}`
  svgContent.value = svgString.replace(/<svg[^>]*>/, '').replace('</svg>', '')
}

const extractColors = (data, count) => {
  const colorMap = new Map()
  
  // 统计颜色频率
  for (let i = 0; i < data.length; i += 4) {
    const r = Math.floor(data[i] / 32) * 32
    const g = Math.floor(data[i + 1] / 32) * 32
    const b = Math.floor(data[i + 2] / 32) * 32
    const a = data[i + 3]
    
    if (a < 128) continue // 跳过透明像素
    
    const color = `${r},${g},${b}`
    colorMap.set(color, (colorMap.get(color) || 0) + 1)
  }
  
  // 选择最常见的颜色
  return Array.from(colorMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([color]) => {
      const [r, g, b] = color.split(',').map(Number)
      return `rgb(${r},${g},${b})`
    })
}

const pixelsToShapes = (data, width, height, palette) => {
  const shapes = []
  const blockSize = Math.max(1, Math.floor(pathSimplify.value))
  
  for (let y = 0; y < height; y += blockSize) {
    for (let x = 0; x < width; x += blockSize) {
      const i = (y * width + x) * 4
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const a = data[i + 3]
      
      if (a < 128) continue
      
      // 找到最接近的调色板颜色
      const color = findClosestColor(r, g, b, palette)
      
      shapes.push({
        type: 'rect',
        x: x,
        y: y,
        width: Math.min(blockSize, width - x),
        height: Math.min(blockSize, height - y),
        fill: color
      })
    }
  }
  
  return shapes
}

const findClosestColor = (r, g, b, palette) => {
  let minDistance = Infinity
  let closestColor = palette[0]
  
  for (const color of palette) {
    const rgb = color.match(/\d+/g).map(Number)
    const distance = Math.sqrt(
      Math.pow(r - rgb[0], 2) +
      Math.pow(g - rgb[1], 2) +
      Math.pow(b - rgb[2], 2)
    )
    
    if (distance < minDistance) {
      minDistance = distance
      closestColor = color
    }
  }
  
  return closestColor
}

const generateSVGString = (shapes, width, height) => {
  let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n`
  
  // 按颜色分组以优化输出
  const colorGroups = new Map()
  shapes.forEach(shape => {
    if (!colorGroups.has(shape.fill)) {
      colorGroups.set(shape.fill, [])
    }
    colorGroups.get(shape.fill).push(shape)
  })
  
  colorGroups.forEach((shapeGroup, color) => {
    svg += `  <g fill="${color}">\n`
    shapeGroup.forEach(shape => {
      svg += `    <rect x="${shape.x}" y="${shape.y}" width="${shape.width}" height="${shape.height}"/>\n`
    })
    svg += `  </g>\n`
  })
  
  svg += '</svg>'
  return svg
}

// 工具方法
const downloadSVG = () => {
  if (!currentSVG.value) return
  
  const blob = new Blob([currentSVG.value], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'converted-image.svg'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

const copySVGCode = async () => {
  if (!currentSVG.value) return
  
  try {
    await navigator.clipboard.writeText(currentSVG.value)
    copyButtonText.value = '✅ 已复制'
    setTimeout(() => {
      copyButtonText.value = '📋 复制代码'
    }, 2000)
  } catch (err) {
    showError('复制失败，请手动复制')
  }
}

const reset = () => {
  currentImageData.value = null
  currentSVG.value = null
  svgContent.value = ''
  svgViewBox.value = ''
  hideError()
  isProcessing.value = false
}

const showError = (message) => {
  errorMessage.value = message
}

const hideError = () => {
  errorMessage.value = ''
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --text-primary: #333;
  --text-secondary: #666;
  --text-tertiary: #999;
  --bg-primary: rgba(255, 255, 255, 0.95);
  --bg-secondary: rgba(248, 250, 252, 0.8);
  --border-color: rgba(226, 232, 240, 0.5);
  --border-dashed: #667eea;
  --error-bg: #fef2f2;
  --error-border: #fecaca;
  --error-text: #dc2626;
  --input-bg: #ffffff;
  --svg-bg: #ffffff;
  --title-color: #ffffff;
  --btn-secondary-bg: rgba(248, 250, 252, 0.9);
  --btn-secondary-color: #374151;
  --btn-secondary-border: #d1d5db;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --text-tertiary: #94a3b8;
    --bg-primary: rgba(30, 41, 59, 0.95);
    --bg-secondary: rgba(51, 65, 85, 0.8);
    --border-color: rgba(71, 85, 105, 0.5);
    --border-dashed: #818cf8;
    --error-bg: rgba(239, 68, 68, 0.1);
    --error-border: rgba(239, 68, 68, 0.3);
    --error-text: #fca5a5;
    --input-bg: rgba(51, 65, 85, 0.8);
    --svg-bg: rgba(51, 65, 85, 0.5);
    --title-color: #f1f5f9;
    --btn-secondary-bg: rgba(71, 85, 105, 0.8);
    --btn-secondary-color: #f1f5f9;
    --btn-secondary-border: rgba(71, 85, 105, 0.5);
  }
}

.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 20px;
}

.container > * {
  background: var(--bg-primary);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
}

.container > *:last-child {
  margin-bottom: 0;
}

h1 {
  text-align: center;
  color: var(--title-color);
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.upload-area {
  border: 3px dashed var(--border-dashed);
  border-radius: 15px;
  padding: 60px 20px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  position: relative;
  overflow: hidden;
}

.upload-area:hover {
  border-color: #764ba2;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
}

.upload-area.dragover {
  border-color: #764ba2;
  background: linear-gradient(45deg, rgba(118, 75, 162, 0.3), rgba(102, 126, 234, 0.3));
  transform: scale(1.02);
}

.upload-icon {
  font-size: 4rem;
  color: #667eea;
  margin-bottom: 20px;
  display: block;
}

.upload-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 15px;
}

.upload-hint {
  font-size: 0.9rem;
  color: var(--text-tertiary);
}

.preview-container {
  margin-bottom: 30px;
}

.preview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: start;
}

.preview-section {
  background: var(--bg-secondary);
  border-radius: 15px;
  padding: 20px;
  border: 1px solid var(--border-color);
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 15px;
  text-align: center;
}

.image-preview {
  max-width: 100%;
  max-height: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 auto;
}

.svg-output {
  width: 100%;
  max-height: 300px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  background: var(--svg-bg);
  display: block;
  margin: 0 auto;
}

.controls {
  margin-bottom: 20px;
  text-align: center;
}

.control-group {
  display: inline-block;
  margin: 0 15px;
  text-align: left;
}

.control-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: var(--text-primary);
}

.control-group input {
  padding: 8px 12px;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.9rem;
  transition: border-color 0.3s ease;
  background: var(--input-bg);
  color: var(--text-primary);
}

.control-group input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.btn-group {
  display: flex;
  text-align: center;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  padding: 12px 24px;
  border-color: white;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: var(--btn-secondary-bg);
  color: var(--btn-secondary-color);
  border: 1px solid var(--btn-secondary-border);
}

.btn-secondary:hover {
  background: var(--bg-secondary);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.processing {
  text-align: center;
  margin: 30px 0;
  color: var(--text-primary);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border-color);
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 15px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message {
  background: var(--error-bg);
  border: 1px solid var(--error-border);
  color: var(--error-text);
  padding: 15px;
  border-radius: 10px;
  margin: 20px 0;
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
    margin: 10px;
  }

  h1 {
    font-size: 2rem;
  }

  .preview-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .control-group {
    display: block;
    margin: 10px 0;
  }

  .btn-group {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 200px;
    margin: 5px 0;
  }
}
</style>
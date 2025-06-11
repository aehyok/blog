<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="header">
        <h1>📸 图片压缩工具</h1>
        <p class="subtitle">智能压缩，保持画质，减小体积</p>
      </div>
      
      <div 
        class="upload-area" 
        :class="{ dragover: isDragOver }"
        @click="triggerFileInput"
        @dragover="handleDragOver"
        @dragleave="handleDragLeave"
        @drop="handleDrop"
      >
        <div class="upload-icon">📁</div>
        <div class="upload-text">点击选择图片或拖拽到此处</div>
        <div class="upload-hint">支持 JPG、PNG、WebP 格式，最大 10MB</div>
        <input 
          ref="fileInput"
          type="file" 
          accept="image/*"
          @change="handleFileSelect"
          style="display: none"
        >
      </div>
      
      <div v-show="showControls" class="controls-section">
        <h3 class="section-title">压缩设置</h3>
        <div class="controls">
          <div class="control-group">
            <label>
              图片质量 
              <span class="range-value">{{ quality }}</span>
            </label>
            <input 
              v-model.number="quality" 
              type="range" 
              min="0.1" 
              max="1" 
              step="0.1"
            >
          </div>
          
          <div class="control-group">
            <label>
              最大宽度 
              <span class="range-value">{{ maxWidth }}px</span>
            </label>
            <input 
              v-model.number="maxWidth" 
              type="range" 
              min="200" 
              max="3000" 
              step="100"
            >
          </div>
          
          <div class="control-group">
            <label>输出格式</label>
            <select v-model="outputFormat">
              <option value="image/jpeg">JPEG</option>
              <option value="image/png">PNG</option>
              <option value="image/webp">WebP</option>
            </select>
          </div>
        </div>
      </div>
      
      <div v-show="isLoading" class="loading-section">
        <div class="loading">
          <div class="spinner"></div>
          <div class="loading-text">正在处理图片...</div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progress + '%' }"></div>
          </div>
        </div>
      </div>
      
      <div v-show="showPreview" class="preview-section">
        <h3 class="section-title">预览对比</h3>
        <div class="preview-container">
          <div class="preview-item">
            <h4>原图</h4>
            <div class="image-wrapper">
              <img v-if="originalImageUrl" :src="originalImageUrl" alt="原图">
            </div>
            <div class="info">
              <div class="info-item">
                <span class="label">文件名:</span>
                <span class="value">{{ originalFile?.name }}</span>
              </div>
              <div class="info-item">
                <span class="label">大小:</span>
                <span class="value">{{ formatFileSize(originalFile?.size || 0) }}</span>
              </div>
              <div class="info-item">
                <span class="label">类型:</span>
                <span class="value">{{ originalFile?.type }}</span>
              </div>
            </div>
          </div>
          <div class="preview-item">
            <h4>压缩后</h4>
            <div class="image-wrapper">
              <img v-if="compressedImageUrl" :src="compressedImageUrl" alt="压缩后">
            </div>
            <div class="info">
              <div class="info-item">
                <span class="label">大小:</span>
                <span class="value">{{ formatFileSize(compressedBlob?.size || 0) }}</span>
              </div>
              <div class="info-item">
                <span class="label">类型:</span>
                <span class="value">{{ compressedBlob?.type }}</span>
              </div>
              <div class="info-item highlight">
                <span class="label">压缩率:</span>
                <span class="value compression-rate">{{ compressionRatio }}%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="buttons">
          <button class="btn-primary" @click="downloadCompressed">
            💾 下载压缩图片
          </button>
          <button class="btn-secondary" @click="reset">
            🔄 重新选择
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// ...existing code...
import { ref, computed, watch, nextTick } from 'vue'

// 响应式数据
const fileInput = ref(null)
const originalFile = ref(null)
const compressedBlob = ref(null)
const originalImageUrl = ref('')
const compressedImageUrl = ref('')
const isDragOver = ref(false)
const isLoading = ref(false)
const progress = ref(0)

// 控制参数
const quality = ref(0.8)
const maxWidth = ref(1920)
const outputFormat = ref('image/jpeg')

// 计算属性
const showControls = computed(() => !!originalFile.value)
const showPreview = computed(() => !!compressedBlob.value && !isLoading.value)

const compressionRatio = computed(() => {
  if (!originalFile.value || !compressedBlob.value) return '0'
  const ratio = ((originalFile.value.size - compressedBlob.value.size) / originalFile.value.size * 100)
  return ratio.toFixed(1)
})

// 监听参数变化，自动重新压缩
let compressTimeout = null
watch([quality, maxWidth, outputFormat], () => {
  if (compressTimeout) {
    clearTimeout(compressTimeout)
  }
  compressTimeout = setTimeout(() => {
    if (originalFile.value) {
      compressImage()
    }
  }, 300)
}, { deep: true })

// 文件选择相关方法
const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event) => {
  const file = event.target.files?.[0]
  if (file) {
    processFile(file)
  }
}

const handleDragOver = (e) => {
  e.preventDefault()
  isDragOver.value = true
}

const handleDragLeave = () => {
  isDragOver.value = false
}

const handleDrop = (e) => {
  e.preventDefault()
  isDragOver.value = false
  const file = e.dataTransfer.files?.[0]
  if (file) {
    processFile(file)
  }
}

// 文件处理
const processFile = (file) => {
  if (!file.type.startsWith('image/')) {
    alert('请选择有效的图片文件！')
    return
  }
  
  if (file.size > 10 * 1024 * 1024) {
    alert('图片大小不能超过 10MB！')
    return
  }
  
  originalFile.value = file
  showOriginalPreview()
  compressImage()
}

const showOriginalPreview = () => {
  if (!originalFile.value) return
  
  const reader = new FileReader()
  reader.onload = (e) => {
    originalImageUrl.value = e.target?.result
  }
  reader.readAsDataURL(originalFile.value)
}

// 图片压缩
const compressImage = async () => {
  if (!originalFile.value) return
  
  isLoading.value = true
  progress.value = 0
  
  try {
    // 模拟进度
    updateProgress(20)
    
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    const img = new Image()
    
    img.onload = () => {
      updateProgress(40)
      
      // 计算新尺寸
      const { width, height } = calculateNewSize(img.width, img.height, maxWidth.value)
      
      // 设置画布尺寸
      canvas.width = width
      canvas.height = height
      
      updateProgress(60)
      
      // 绘制图片
      ctx.drawImage(img, 0, 0, width, height)
      
      updateProgress(80)
      
      // 转换为Blob
      canvas.toBlob((blob) => {
        compressedBlob.value = blob
        showCompressedPreview()
        updateProgress(100)
        
        setTimeout(() => {
          isLoading.value = false
        }, 500)
      }, outputFormat.value, quality.value)
    }
    
    img.onerror = () => {
      throw new Error('图片加载失败')
    }
    
    img.src = URL.createObjectURL(originalFile.value)
    
  } catch (error) {
    console.error('压缩失败:', error)
    alert('图片压缩失败，请重试！')
    isLoading.value = false
  }
}

const calculateNewSize = (originalWidth, originalHeight, maxWidth) => {
  if (originalWidth <= maxWidth) {
    return { width: originalWidth, height: originalHeight }
  }
  
  const ratio = maxWidth / originalWidth
  return {
    width: maxWidth,
    height: Math.round(originalHeight * ratio)
  }
}

const showCompressedPreview = () => {
  if (!compressedBlob.value) return
  
  // 清理之前的URL
  if (compressedImageUrl.value) {
    URL.revokeObjectURL(compressedImageUrl.value)
  }
  
  compressedImageUrl.value = URL.createObjectURL(compressedBlob.value)
}

const updateProgress = (percent) => {
  progress.value = percent
}

// 下载功能
const downloadCompressed = () => {
  if (!compressedBlob.value || !originalFile.value) return
  
  const url = URL.createObjectURL(compressedBlob.value)
  const a = document.createElement('a')
  a.href = url
  a.download = `compressed_${originalFile.value.name.split('.')[0]}.${getFileExtension()}`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

const getFileExtension = () => {
  const extensions = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp'
  }
  return extensions[outputFormat.value] || 'jpg'
}

// 重置功能
const reset = () => {
  // 清理URLs
  if (originalImageUrl.value) {
    URL.revokeObjectURL(originalImageUrl.value)
  }
  if (compressedImageUrl.value) {
    URL.revokeObjectURL(compressedImageUrl.value)
  }
  
  originalFile.value = null
  compressedBlob.value = null
  originalImageUrl.value = ''
  compressedImageUrl.value = ''
  isLoading.value = false
  progress.value = 0
  
  // 重置参数
  quality.value = 0.8
  maxWidth.value = 1920
  outputFormat.value = 'image/jpeg'
  
  // 清空文件输入
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// 工具函数
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 组件卸载时清理
import { onUnmounted } from 'vue'

onUnmounted(() => {
  if (originalImageUrl.value) {
    URL.revokeObjectURL(originalImageUrl.value)
  }
  if (compressedImageUrl.value) {
    URL.revokeObjectURL(compressedImageUrl.value)
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: #718096;
  font-size: 1.1rem;
  font-weight: 400;
}

.upload-area {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 3px dashed #cbd5e0;
  border-radius: 20px;
  padding: 60px 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.upload-area:hover {
  border-color: #667eea;
  background: rgba(102, 126, 234, 0.05);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.upload-area.dragover {
  border-color: #764ba2;
  background: rgba(118, 75, 162, 0.1);
  transform: scale(1.02);
}

.upload-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  color: #667eea;
}

.upload-text {
  font-size: 1.25rem;
  color: #2d3748;
  font-weight: 600;
  margin-bottom: 12px;
}

.upload-hint {
  color: #718096;
  font-size: 0.95rem;
}

.controls-section,
.loading-section,
.preview-section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e2e8f0;
}

.controls {
  display: grid;
  gap: 24px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  color: #2d3748;
  font-size: 1rem;
}

.range-value {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  min-width: 60px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

input[type="range"] {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #e2e8f0;
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transition: all 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
}

select {
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  color: #2d3748;
  background: white;
  transition: all 0.3s ease;
  cursor: pointer;
}

select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.loading {
  text-align: center;
  padding: 20px;
}

.spinner {
  border: 4px solid #e2e8f0;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

.loading-text {
  color: #2d3748;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 16px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  transition: width 0.3s ease;
  border-radius: 4px;
}

.preview-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;
}

.preview-item {
  text-align: center;
}

.preview-item h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 16px;
}

.image-wrapper {
  background: #f7fafc;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  border: 2px solid #e2e8f0;
}

.preview-item img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.preview-item img:hover {
  transform: scale(1.02);
}

.info {
  background: #f7fafc;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e2e8f0;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e2e8f0;
}

.info-item:last-child {
  border-bottom: none;
}

.info-item.highlight {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  margin: 8px -16px -16px;
  padding: 12px 16px;
  border-radius: 0 0 12px 12px;
}

.label {
  color: #718096;
  font-weight: 500;
  font-size: 0.9rem;
}

.value {
  color: #2d3748;
  font-weight: 600;
  font-size: 0.9rem;
}

.compression-rate {
  color: #667eea;
  font-weight: 700;
  font-size: 1rem;
}

.buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  padding: 14px 32px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 160px;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: #718096;
  color: white;
  box-shadow: 0 4px 16px rgba(113, 128, 150, 0.3);
}

.btn-secondary:hover {
  background: #2d3748;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(45, 55, 72, 0.4);
}

@media (max-width: 768px) {
  .container {
    padding: 16px;
  }
  
  .header {
    padding: 32px 24px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .controls-section,
  .loading-section,
  .preview-section {
    padding: 24px;
  }
  
  .preview-container {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .buttons {
    flex-direction: column;
  }
  
  button {
    width: 100%;
  }
  
  .upload-area {
    padding: 40px 20px;
  }
  
  .upload-icon {
    font-size: 3rem;
  }
  
  .upload-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.75rem;
  }
  
  .controls-section,
  .loading-section,
  .preview-section {
    padding: 20px;
  }
  
  .section-title {
    font-size: 1.25rem;
  }
}
</style>
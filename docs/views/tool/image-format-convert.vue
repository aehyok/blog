<template>
  <div class="container">
    <div class="header">
      <h1>🎨 图片格式转换器</h1>
      <p>支持 JPEG、PNG、WebP、BMP 等格式互相转换</p>
    </div>
    
    <div class="main-content">
      <div 
        class="upload-area" 
        :class="{ dragover: isDragOver }"
        @click="triggerFileInput"
        @dragover.prevent="handleDragOver"
        @dragleave.prevent="handleDragLeave"
        @drop.prevent="handleDrop"
      >
        <div class="upload-icon">📸</div>
        <div class="upload-text">拖放图片到这里或点击选择</div>
        <div class="upload-hint">支持 JPG、PNG、WebP、BMP、GIF 格式</div>
        <input 
          ref="fileInputRef"
          type="file" 
          accept="image/*"
          @change="handleFileSelect"
          style="display: none"
        >
      </div>

      <div v-if="fileInfo.show" class="file-info">
        <h3>📄 文件信息</h3>
        <p><strong>文件名:</strong> {{ fileInfo.name }}</p>
        <p><strong>文件大小:</strong> {{ fileInfo.size }}</p>
        <p><strong>图片尺寸:</strong> {{ fileInfo.dimensions }}</p>
        <p><strong>当前格式:</strong> {{ fileInfo.format }}</p>
      </div>

      <div v-if="showControls" class="controls show">
        <div class="format-selector">
          <button 
            v-for="format in formats"
            :key="format.value"
            class="format-btn"
            :class="{ active: selectedFormat === format.value }"
            @click="selectFormat(format.value)"
          >
            {{ format.label }}
          </button>
        </div>

        <div v-if="showQualityControl" class="quality-control">
          <label for="qualitySlider">图片质量:</label>
          <input 
            type="range" 
            class="quality-slider" 
            min="10" 
            max="100" 
            v-model="quality"
          >
          <div class="quality-value">{{ quality }}%</div>
        </div>

        <button 
          class="convert-btn" 
          @click="convertImage"
          :disabled="isConverting || !selectedFile"
        >
          🔄 开始转换
        </button>
      </div>

      <div v-if="isConverting" class="loading">
        <div class="spinner"></div>
        <p>正在转换中...</p>
      </div>

      <div v-if="showPreview" class="preview-area show">
        <div class="preview-container">
          <div class="preview-item">
            <h3>原始图片</h3>
            <img :src="originalImageUrl" alt="原始图片">
          </div>
          <div class="preview-item">
            <h3>转换后图片</h3>
            <img :src="convertedImageUrl" alt="转换后图片">
            <br>
            <button class="download-btn" @click="downloadImage">
              ⬇️ 下载图片
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onUnmounted } from 'vue'

// 响应式数据
const selectedFile = ref(null)
const selectedFormat = ref('jpeg')
const quality = ref(90)
const convertedBlob = ref(null)
const originalImageUrl = ref('')
const convertedImageUrl = ref('')
const isDragOver = ref(false)
const isConverting = ref(false)
const showControls = ref(false)
const showPreview = ref(false)

// 文件输入引用
const fileInputRef = ref(null)

// 文件信息
const fileInfo = reactive({
  show: false,
  name: '',
  size: '',
  dimensions: '',
  format: ''
})

// 支持的格式
const formats = [
  { value: 'jpeg', label: 'JPEG' },
  { value: 'png', label: 'PNG' },
  { value: 'webp', label: 'WebP' },
  { value: 'bmp', label: 'BMP' }
]

// 计算属性
const showQualityControl = computed(() => {
  return selectedFormat.value !== 'png' && selectedFormat.value !== 'bmp'
})

// 方法
const triggerFileInput = () => {
  fileInputRef.value?.click()
}

const handleDragOver = () => {
  isDragOver.value = true
}

const handleDragLeave = () => {
  isDragOver.value = false
}

const handleDrop = (e) => {
  isDragOver.value = false
  const files = e.dataTransfer.files
  if (files.length > 0) {
    handleFile(files[0])
  }
}

const handleFileSelect = (e) => {
  const file = e.target.files[0]
  if (file) {
    handleFile(file)
  }
}

const handleFile = (file) => {
  if (!file.type.startsWith('image/')) {
    alert('请选择有效的图片文件！')
    return
  }

  selectedFile.value = file
  displayFileInfo(file)
  showControls.value = true
  
  // 显示原始图片预览
  const reader = new FileReader()
  reader.onload = (e) => {
    originalImageUrl.value = e.target.result
  }
  reader.readAsDataURL(file)
}

const displayFileInfo = (file) => {
  fileInfo.name = file.name
  fileInfo.size = formatFileSize(file.size)
  fileInfo.format = file.type.split('/')[1].toUpperCase()
  
  // 获取图片尺寸
  const img = new Image()
  img.onload = () => {
    fileInfo.dimensions = `${img.width} × ${img.height}`
  }
  img.src = URL.createObjectURL(file)
  
  fileInfo.show = true
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const selectFormat = (format) => {
  selectedFormat.value = format
}

const convertImage = () => {
  if (!selectedFile.value) return

  isConverting.value = true

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const img = new Image()

  img.onload = () => {
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0)

    const qualityValue = quality.value / 100
    let mimeType = `image/${selectedFormat.value}`
    
    // 处理特殊格式
    if (selectedFormat.value === 'jpg') {
      mimeType = 'image/jpeg'
    }

    canvas.toBlob((blob) => {
      convertedBlob.value = blob
      const url = URL.createObjectURL(blob)
      
      convertedImageUrl.value = url
      showPreview.value = true
      
      isConverting.value = false
    }, mimeType, qualityValue)
  }

  img.src = URL.createObjectURL(selectedFile.value)
}

const downloadImage = () => {
  if (!convertedBlob.value) return

  const url = URL.createObjectURL(convertedBlob.value)
  const a = document.createElement('a')
  a.href = url
  
  const originalName = selectedFile.value.name.split('.')[0]
  a.download = `${originalName}_converted.${selectedFormat.value}`
  
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// 清理URL对象
onUnmounted(() => {
  if (originalImageUrl.value) {
    URL.revokeObjectURL(originalImageUrl.value)
  }
  if (convertedImageUrl.value) {
    URL.revokeObjectURL(convertedImageUrl.value)
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
  max-width: 900px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  padding: 30px;
  text-align: center;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.main-content {
  padding: 40px;
}

.upload-area {
  border: 3px dashed #cbd5e1;
  border-radius: 16px;
  padding: 60px 20px;
  text-align: center;
  transition: all 0.3s ease;
  background: linear-gradient(45deg, #f8fafc, #f1f5f9);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.upload-area:hover {
  border-color: #4f46e5;
  background: linear-gradient(45deg, #eef2ff, #e0e7ff);
  transform: translateY(-2px);
}

.upload-area.dragover {
  border-color: #4f46e5;
  background: linear-gradient(45deg, #eef2ff, #ddd6fe);
  transform: scale(1.02);
}

.upload-icon {
  font-size: 4rem;
  color: #94a3b8;
  margin-bottom: 20px;
}

.upload-text {
  font-size: 1.3rem;
  color: #475569;
  margin-bottom: 10px;
  font-weight: 600;
}

.upload-hint {
  color: #64748b;
  font-size: 0.95rem;
}

.controls {
  margin-top: 30px;
  padding: 30px;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}

.controls.show {
  animation: slideIn 0.5s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.format-selector {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  flex-wrap: wrap;
  justify-content: center;
}

.format-btn {
  padding: 12px 24px;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.format-btn:hover {
  border-color: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
}

.format-btn.active {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  border-color: #4f46e5;
  transform: scale(1.05);
}

.quality-control {
  margin-bottom: 25px;
  text-align: center;
}

.quality-control label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #374151;
}

.quality-slider {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  appearance: none;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, #ef4444, #f59e0b, #10b981);
  outline: none;
}

.quality-slider::-webkit-slider-thumb {
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 3px solid #4f46e5;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.quality-value {
  display: inline-block;
  margin-top: 8px;
  font-weight: 600;
  color: #4f46e5;
}

.convert-btn {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  padding: 16px 40px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
}

.convert-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(16, 185, 129, 0.4);
}

.convert-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.preview-area {
  margin-top: 30px;
  padding: 30px;
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}

.preview-area.show {
  animation: slideIn 0.5s ease;
}

.preview-container {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.preview-item {
  text-align: center;
  flex: 1;
  min-width: 250px;
}

.preview-item h3 {
  margin-bottom: 15px;
  color: #374151;
  font-size: 1.2rem;
}

.preview-item img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid #f1f5f9;
}

.download-btn {
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.3s ease;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
}

.file-info {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;
  border-left: 4px solid #4f46e5;
}

.file-info h3 {
  color: #374151;
  margin-bottom: 10px;
}

.file-info p {
  color: #64748b;
  margin: 5px 0;
}

.loading {
  text-align: center;
  margin: 20px 0;
}

.spinner {
  border: 4px solid #f3f4f6;
  border-top: 4px solid #4f46e5;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto 15px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .main-content {
    padding: 20px;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .format-selector {
    gap: 10px;
  }
  
  .format-btn {
    padding: 10px 16px;
    font-size: 0.85rem;
  }
  
  .preview-container {
    flex-direction: column;
  }
}
</style>
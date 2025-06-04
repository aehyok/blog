<template>
  <div class="base64-image-viewer">
    <!-- 头部标题 -->
    <div class="viewer-header">
      <h3 class="viewer-title">
        <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21,15 16,10 5,21"/>
        </svg>
        Base64 图片查看器
      </h3>
    </div>

    <!-- 输入区域 -->
    <div class="input-section">
      <label class="input-label">Base64 字符串</label>
      <div class="textarea-container">
        <textarea
          v-model="base64Input"
          placeholder="请粘贴 base64 图片字符串..."
          class="base64-textarea"
          :class="{ 'has-error': showError }"
          @input="handleInput"
        ></textarea>
        <div v-if="showError" class="error-message">
          <svg class="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
          {{ errorMessage }}
        </div>
      </div>
    </div>

    <!-- 图片展示区域 -->
    <div v-if="imageUrl" class="image-section">
      <div class="image-container">
        <img
          :src="imageUrl"
          alt="Base64 图片"
          class="preview-image"
          :style="imageStyle"
          @load="onImageLoad"
          @error="onImageError"
        />
        <div v-if="loading" class="loading-overlay">
          <div class="loading-spinner"></div>
          <span class="loading-text">加载中...</span>
        </div>
      </div>
      
      <!-- 图片信息 -->
      <div v-if="imageInfo.width" class="image-info">
        <span class="info-item">
          <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          {{ imageInfo.width }} × {{ imageInfo.height }}
        </span>
        <span class="info-item">
          <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10,9 9,9 8,9"/>
          </svg>
          {{ formatFileSize(base64Input.length) }}
        </span>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div v-if="imageUrl" class="action-section">
      <button
        @click="downloadImage"
        class="download-btn"
        :disabled="!canDownload"
      >
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7,10 12,15 17,10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        下载图片
      </button>
      
      <button
        @click="clearImage"
        class="clear-btn"
      >
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="3,6 5,6 21,6"/>
          <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
          <line x1="10" y1="11" x2="10" y2="17"/>
          <line x1="14" y1="11" x2="14" y2="17"/>
        </svg>
        清除
      </button>
    </div>

    <!-- 空状态 -->
    <div v-if="!imageUrl && !base64Input.trim()" class="empty-state">
      <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21,15 16,10 5,21"/>
      </svg>
      <p class="empty-text">请输入 Base64 图片字符串</p>
      <p class="empty-hint">支持 JPEG、PNG、GIF、WebP 等格式</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'

// 响应式数据
const base64Input = ref('')
const imageUrl = ref('')
const loading = ref(false)
const showError = ref(false)
const errorMessage = ref('')
const canDownload = ref(false)
const imageInfo = ref({ width: 0, height: 0 })

// 处理输入
const handleInput = () => {
  showError.value = false
  if (base64Input.value.trim()) {
    processBase64()
  } else {
    clearImage()
  }
}

// 处理base64字符串
const processBase64 = () => {
  const input = base64Input.value.trim()
  
  if (!input) {
    clearImage()
    return
  }

  loading.value = true
  
  try {
    // 检查是否是有效的base64格式
    let base64Data = input
    
    // 如果不包含data:image前缀，添加默认前缀
    if (!input.startsWith('data:image/')) {
      base64Data = `data:image/png;base64,${input}`
    }
    
    // 验证base64格式
    const base64Pattern = /^data:image\/(png|jpe?g|gif|webp|bmp|svg\+xml);base64,([A-Za-z0-9+/=]+)$/
    if (!base64Pattern.test(base64Data)) {
      throw new Error('无效的 Base64 图片格式')
    }
    
    imageUrl.value = base64Data
    
  } catch (error) {
    showError.value = true
    errorMessage.value = error.message || '解析 Base64 失败'
    imageUrl.value = ''
    loading.value = false
  }
}

// 图片加载成功
const onImageLoad = (event) => {
  loading.value = false
  canDownload.value = true
  
  const img = event.target
  imageInfo.value = {
    width: img.naturalWidth,
    height: img.naturalHeight
  }
}

// 图片加载失败
const onImageError = () => {
  loading.value = false
  showError.value = true
  errorMessage.value = '图片加载失败，请检查 Base64 格式是否正确'
  imageUrl.value = ''
  canDownload.value = false
}

// 下载图片
const downloadImage = () => {
  if (!imageUrl.value) return
  
  try {
    const link = document.createElement('a')
    link.href = imageUrl.value
    
    // 根据base64数据确定文件扩展名
    const mimeMatch = imageUrl.value.match(/data:image\/(\w+);/)
    const extension = mimeMatch ? mimeMatch[1] : 'png'
    
    link.download = `image_${Date.now()}.${extension}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('下载失败:', error)
  }
}

// 清除图片
const clearImage = () => {
  base64Input.value = ''
  imageUrl.value = ''
  showError.value = false
  canDownload.value = false
  imageInfo.value = { width: 0, height: 0 }
}

// 格式化文件大小
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 计算图片样式
const imageStyle = computed(() => {
  if (!imageInfo.value.width || !imageInfo.value.height) {
    return {}
  }
  
  return {
    width: `${imageInfo.value.width}px`,
    height: `${imageInfo.value.height}px`,
    maxWidth: '100%',
    // maxHeight: '400px'
  }
})

// 监听base64Input变化
watch(base64Input, (newVal) => {
  if (!newVal.trim()) {
    clearImage()
  }
})
</script>

<style scoped>
.base64-image-viewer {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 头部样式 */
.viewer-header {
  margin-bottom: 24px;
}

.viewer-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
}

.title-icon {
  width: 28px;
  height: 28px;
  color: #3b82f6;
  stroke-width: 2;
}

/* 输入区域样式 */
.input-section {
  margin-bottom: 24px;
}

.input-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.textarea-container {
  position: relative;
}

.base64-textarea {
  width: 100%;
  min-height: 120px;
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 14px;
  font-family: 'SF Mono', Monaco, monospace;
  line-height: 1.5;
  resize: vertical;
  transition: all 0.2s ease;
  background: #fafafa;
}

.base64-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.base64-textarea.has-error {
  border-color: #ef4444;
  background: #fef2f2;
}

.error-message {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding: 8px 12px;
  background: #fef2f2;
  border-radius: 8px;
  font-size: 14px;
  color: #dc2626;
}

.error-icon {
  width: 16px;
  height: 16px;
  stroke-width: 2;
  flex-shrink: 0;
}

/* 图片展示区域 */
.image-section {
  margin-bottom: 24px;
}

.image-container {
  position: relative;
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}

.preview-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  display: block;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #e5e7eb;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  font-size: 14px;
  color: #6b7280;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 图片信息 */
.image-info {
  display: flex;
  gap: 24px;
  padding: 12px 16px;
  background: #f1f5f9;
  border-radius: 8px;
  font-size: 14px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #475569;
}

.info-icon {
  width: 16px;
  height: 16px;
  stroke-width: 2;
}

/* 操作按钮区域 */
.action-section {
  display: flex;
  gap: 12px;
}

.download-btn,
.clear-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.download-btn {
  background: #3b82f6;
  color: white;
  flex: 1;
}

.download-btn:hover:not(:disabled) {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.download-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.clear-btn {
  background: #f3f4f6;
  color: #6b7280;
  border: 1px solid #d1d5db;
}

.clear-btn:hover {
  background: #e5e7eb;
  color: #374151;
  transform: translateY(-1px);
}

.btn-icon {
  width: 18px;
  height: 18px;
  stroke-width: 2;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 48px 24px;
  color: #6b7280;
}

.empty-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  stroke-width: 1.5;
  color: #d1d5db;
}

.empty-text {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 8px;
  color: #374151;
}

.empty-hint {
  font-size: 14px;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 640px) {
  .base64-image-viewer {
    padding: 16px;
    margin: 16px;
  }
  
  .viewer-title {
    font-size: 20px;
  }
  
  .action-section {
    flex-direction: column;
  }
  
  .image-info {
    flex-direction: column;
    gap: 8px;
  }
  
  .preview-image {
    max-height: 300px;
  }
}
</style>
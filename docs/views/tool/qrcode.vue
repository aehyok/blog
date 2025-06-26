<template>
  <div class="qr-generator-container">
    <div class="header">
      <h1>二维码生成工具</h1>
      <p>自定义你的专属二维码，支持Logo和文字设置</p>
    </div>
    
    <div class="main-content">
      <div class="controls">
        <div class="control-group">
          <label for="qrText">二维码内容</label>
          <textarea 
            v-model="qrText" 
            id="qrText" 
            placeholder="输入要生成二维码的内容..."
          ></textarea>
        </div>
        
        <div class="control-group">
          <label for="qrSize">二维码大小</label>
          <select v-model="qrSize" id="qrSize">
            <option value="200">小 (200x200)</option>
            <option value="300">中 (300x300)</option>
            <option value="400">大 (400x400)</option>
            <option value="500">超大 (500x500)</option>
          </select>
        </div>
        
        <div class="control-group">
          <label for="logoUpload">上传Logo</label>
          <input 
            type="file" 
            @change="handleLogoUpload" 
            accept="image/*" 
            class="file-input"
          >
        </div>
        
        <div class="control-group">
          <label for="overlayText">覆盖文字</label>
          <input 
            type="text" 
            v-model="overlayText" 
            id="overlayText" 
            placeholder="输入要显示的文字（可选）"
          >
        </div>
        
        <div class="control-group">
          <label for="textColor">文字颜色</label>
          <input 
            type="color" 
            v-model="textColor" 
            id="textColor" 
            class="color-input"
          >
        </div>
        
        <div class="control-group">
          <label for="textPosition">文字位置</label>
          <select v-model="textPosition" id="textPosition">
            <option value="top">顶部</option>
            <option value="bottom">底部</option>
            <option value="left">左侧</option>
            <option value="right">右侧</option>
          </select>
        </div>
      </div>
      
      <div class="preview-section">
        <h3>预览效果</h3>
        <div class="qr-container" ref="qrContainer">
          <canvas ref="qrCanvas"></canvas>
          <img 
            v-if="logoImg" 
            :src="logoImg" 
            class="qr-logo" 
            alt="logo"
          >
          <div 
            v-if="overlayText" 
            class="qr-text" 
            :style="textStyle"
          >
            {{ overlayText }}
          </div>
        </div>
        <button class="download-btn" @click="downloadQR">下载二维码</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed, nextTick } from 'vue'

// 响应式数据
const qrText = ref('https://example.com')
const qrSize = ref(300)
const logoImg = ref(null)
const overlayText = ref('')
const textColor = ref('#000000')
const textPosition = ref('top')

// 模板引用
const qrCanvas = ref(null)
const qrContainer = ref(null)

// QR实例
let qr = null

// 计算文字样式
const textStyle = computed(() => {
  const styles = {
    color: textColor.value,
    position: 'absolute',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    fontSize: '14px',
    zIndex: 10
  }

  switch (textPosition.value) {
    case 'top':
      styles.top = '-30px'
      styles.left = '50%'
      styles.transform = 'translateX(-50%)'  
      styles.whiteSpace = 'nowrap'
      break
    case 'bottom':
      styles.bottom = '-30px'
      styles.left = '50%'
      styles.transform = 'translateX(-50%)'
      styles.whiteSpace = 'nowrap'
      break
    case 'left':
      styles.left = '-35px'
      styles.top = '50%'
      styles.transform = 'translateY(-50%)'
      styles.writingMode = 'vertical-lr'
      styles.textOrientation = 'mixed'
      break
    case 'right':
      styles.right = '-35px'
      styles.top = '50%'
      styles.transform = 'translateY(-50%)'
      styles.writingMode = 'vertical-lr'
      styles.textOrientation = 'mixed'
      break
  }

  return styles
})

// 初始化QR码
const initQR = async () => {
  if (!window.QRious) {
    // 如果QRious库还没加载，等待一下
    await loadQRious()
  }
  
  qr = new window.QRious({
    element: qrCanvas.value,
    value: qrText.value,
    size: qrSize.value,
    background: 'white',
    foreground: 'black',
    level: 'H'
  })
}

// 动态加载QRious库
const loadQRious = () => {
  return new Promise((resolve, reject) => {
    if (window.QRious) {
      resolve()
      return
    }
    
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js'
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

// 更新QR码
const updateQR = () => {
  if (qr) {
    qr.set({
      value: qrText.value,
      size: qrSize.value
    })
  }
}

// 处理Logo上传
const handleLogoUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      logoImg.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

// 下载二维码
const downloadQR = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const qrCanvasEl = qrCanvas.value
  
  // 根据文字位置调整画布大小和边距
  let topPadding = 40
  let bottomPadding = 40
  let leftPadding = 40
  let rightPadding = 40
  
  if (overlayText.value) {
    switch (textPosition.value) {
      case 'top':
        topPadding = 60
        break
      case 'bottom':
        bottomPadding = 60
        break
      case 'left':
        leftPadding = 60
        break
      case 'right':
        rightPadding = 60
        break
    }
  }
  
  canvas.width = qrCanvasEl.width + leftPadding + rightPadding
  canvas.height = qrCanvasEl.height + topPadding + bottomPadding
  
  // 设置白色背景
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  // 绘制二维码
  ctx.drawImage(qrCanvasEl, leftPadding, topPadding)
  
  // 绘制Logo
  if (logoImg.value) {
    const logo = new Image()
    logo.onload = function() {
      const logoSize = 60
      const logoX = leftPadding + (qrCanvasEl.width - logoSize) / 2
      const logoY = topPadding + (qrCanvasEl.height - logoSize) / 2
      
      // 绘制白色背景
      ctx.fillStyle = 'white'
      ctx.fillRect(logoX - 4, logoY - 4, logoSize + 8, logoSize + 8)
      
      ctx.drawImage(logo, logoX, logoY, logoSize, logoSize)
      
      drawTextAndDownload()
    }
    logo.src = logoImg.value
  } else {
    drawTextAndDownload()
  }
  
  function drawTextAndDownload() {
    // 绘制文字
    if (overlayText.value) {
      ctx.font = 'bold 16px Arial'
      ctx.fillStyle = textColor.value
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      
      const qrCenterX = leftPadding + qrCanvasEl.width / 2
      const qrCenterY = topPadding + qrCanvasEl.height / 2
      
      switch (textPosition.value) {
        case 'top':
          // 位于顶部边距中间
          ctx.fillText(overlayText.value, qrCenterX, topPadding / 2)
          break
        case 'bottom':
          // 位于底部边距中间
          ctx.fillText(overlayText.value, qrCenterX, topPadding + qrCanvasEl.height + bottomPadding / 2)
          break
        case 'left':
          // 位于左侧边距中间，竖向文字
          ctx.save()
          ctx.translate(leftPadding / 2, qrCenterY)
          ctx.rotate(-Math.PI / 2)
          ctx.fillText(overlayText.value, 0, 0)
          ctx.restore()
          break
        case 'right':
          // 位于右侧边距中间，竖向文字
          ctx.save()
          ctx.translate(leftPadding + qrCanvasEl.width + rightPadding / 2, qrCenterY)
          ctx.rotate(Math.PI / 2)
          ctx.fillText(overlayText.value, 0, 0)
          ctx.restore()
          break
      }
    }
    
    // 下载
    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = canvas.toDataURL()
    link.click()
  }
}

// 组件挂载后初始化
onMounted(async () => {
  await initQR()
})

// 监听数据变化
watch([qrText, qrSize], () => {
  updateQR()
})

// 组件暴露的方法（可选）
defineExpose({
  downloadQR,
  updateQR
})
</script>

<style scoped>
.qr-generator-container {
  width: 100%;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
}

.header {
  background: #f5f5f5;
  color: #333;
  padding: 16px 20px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}

.header h1 {
  font-size: 1.5rem;
  margin-bottom: 4px;
  font-weight: 500;
}

.header p {
  opacity: 0.7;
  font-size: 0.9rem;
  margin: 0;
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
}

.controls {
  background: #fafafa;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
}

.control-group {
  margin-bottom: 16px;
}

.control-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #333;
  font-size: 0.9rem;
}

.control-group input, .control-group select, .control-group textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: border-color 0.2s ease;
  background: white;
}

.control-group input:focus, .control-group select:focus, .control-group textarea:focus {
  outline: none;
  border-color: #2196F3;
  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
}

.control-group textarea {
  resize: vertical;
  min-height: 60px;
}

.color-input {
  height: 40px !important;
  cursor: pointer;
}

.file-input {
  padding: 6px !important;
  font-size: 0.85rem;
}

.preview-section {
  background: #fafafa;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  text-align: center;
  overflow: visible; /* 确保文字不被裁剪 */
}

.qr-container {
  position: relative;
  display: inline-block;
  margin: 40px; /* 增加外边距为文字留出空间 */
  background: white;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
}

.qr-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50px;
  max-height: 50px;
  border-radius: 4px;
  background: white;
  padding: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.qr-text {
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-size: 14px;
  line-height: 1.2;
  max-width: 200px; /* 限制文字最大宽度 */
  word-wrap: break-word;
}

.download-btn {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 0.9rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 12px;
  font-weight: 500;
}

.download-btn:hover {
  background: #45a049;
}

.download-btn:active {
  transform: translateY(1px);
}

.preview-section h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #333;
}

@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
  }
  
  .header h1 {
    font-size: 1.3rem;
  }
  
  .header p {
    font-size: 0.8rem;
  }
}
</style>
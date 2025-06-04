<template>
  <div class="app-container">
    <div class="app-header">
      <h1>Base64 图片工具</h1>
      <p>上传、查看和下载 Base64 格式的图片</p>
    </div>
    
    <!-- 直接使用Base64图片查看器组件 -->
    <Base64ImageViewer />
  </div>
</template>

<script setup>
import Base64ImageViewer from './base64ImageViewer.vue'
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.app-header {
  text-align: center;
  margin-bottom: 32px;
  color: white;
}

.app-header h1 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.app-header p {
  font-size: 16px;
  margin: 0;
  opacity: 0.9;
}

</style>
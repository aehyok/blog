<template>
  <div class="json-converter">
    <div class="header">
      <h1>JSON 对象转换器</h1>
      <p>将 JSON 对象转换为可用的字符串格式</p>
    </div>

    <div class="conversion-mode">
      <span class="mode-label">转换模式：</span>
      <div class="mode-options">
        <div class="mode-option">
          <input 
            type="radio" 
            id="stringMode" 
            v-model="conversionMode" 
            value="string"
          >
          <label for="stringMode">转换为字符串（带转义）</label>
        </div>
        <div class="mode-option">
          <input 
            type="radio" 
            id="formatMode" 
            v-model="conversionMode" 
            value="format"
          >
          <label for="formatMode">格式化显示</label>
        </div>
      </div>
    </div>

    <div class="main-content">
      <div class="left-panel">
        <div class="panel-title">JSON 对象输入</div>
        
        <div class="info-box">
          <h3>使用说明：</h3>
          <ul>
            <li><strong>字符串模式</strong>：输出可直接在代码中使用的转义字符串</li>
            <li><strong>格式化模式</strong>：输出美观的格式化JSON</li>
            <li>在输入框中输入有效的 JSON 对象</li>
            <li>选择转换模式后点击"转换"按钮</li>
          </ul>
        </div>

        <div class="button-group">
          <button class="convert-btn" @click="convertJSON">
            🔄 转换
          </button>
          <button class="example-btn" @click="loadExample">
            📋 示例
          </button>
          <button class="clear-btn" @click="clearInput">
            🗑️ 清空
          </button>
        </div>

        <Transition name="status">
          <div 
            v-if="status.show" 
            :class="['status', status.type]"
          >
            {{ status.message }}
          </div>
        </Transition>

        <div class="textarea-container">
          <textarea 
            v-model="jsonInput"
            placeholder="请输入 JSON 对象，例如：
{
  &quot;name&quot;: &quot;张三&quot;,
  &quot;age&quot;: 25,
  &quot;city&quot;: &quot;北京&quot;
}"
            @keydown="handleKeydown"
          ></textarea>
        </div>
      </div>

      <div class="right-panel">
        <div class="panel-title">转换结果</div>

        <div class="button-group">
          <button class="copy-btn" @click="copyToClipboard">
            📋 复制
          </button>
          <button class="clear-btn" @click="clearOutput">
            🗑️ 清空
          </button>
        </div>

        <div class="textarea-container">
          <textarea 
            v-model="jsonOutput"
            readonly 
            placeholder="转换后的结果将显示在这里...

字符串模式示例：
&quot;{\&quot;name\&quot;:\&quot;张三\&quot;,\&quot;age\&quot;:25}&quot;

格式化模式示例：
{
  &quot;name&quot;: &quot;张三&quot;,
  &quot;age&quot;: 25
}"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted, nextTick } from 'vue'

// 响应式数据
const jsonInput = ref('')
const jsonOutput = ref('')
const conversionMode = ref('string')

const status = reactive({
  show: false,
  message: '',
  type: 'success'
})

// 示例数据
const exampleData = {
  "name": "李小明",
  "age": 28,
  "job": "软件工程师",
  "email": "lixiaoming@example.com",
  "address": {
    "province": "广东省",
    "city": "深圳市",
    "district": "南山区"
  },
  "skills": ["JavaScript", "Python", "React", "Vue.js"],
  "projects": [
    {
      "name": "电商平台",
      "tech": ["Vue", "Express", "MongoDB"],
      "year": "2023-2024"
    },
    {
      "name": "数据分析系统",
      "tech": ["Python", "Django", "PostgreSQL"],
      "year": "2022-2023"
    }
  ],
  "active": true,
  "salary": null
}

// 转换 JSON 对象
const convertJSON = () => {
  const input = jsonInput.value.trim()
  
  if (!input) {
    showStatus('请先输入 JSON 对象', 'error')
    return
  }

  try {
    // 解析 JSON 对象
    const jsonObj = JSON.parse(input)
    
    let result
    if (conversionMode.value === 'string') {
      // 转换为转义的字符串格式
      const jsonString = JSON.stringify(jsonObj)
      result = JSON.stringify(jsonString)
    } else {
      // 格式化显示
      result = JSON.stringify(jsonObj, null, 2)
    }
    
    // 显示在输出框中
    jsonOutput.value = result
    
    const modeText = conversionMode.value === 'string' ? '字符串' : '格式化'
    showStatus(`${modeText}转换成功！`, 'success')
  } catch (error) {
    showStatus('JSON 格式错误：' + error.message, 'error')
    jsonOutput.value = ''
  }
}

// 加载示例数据
const loadExample = () => {
  jsonInput.value = JSON.stringify(exampleData, null, 2)
  showStatus('示例数据已加载', 'success')
}

// 清空输入框
const clearInput = () => {
  jsonInput.value = ''
  showStatus('输入框已清空', 'success')
}

// 清空输出框
const clearOutput = () => {
  jsonOutput.value = ''
  showStatus('输出框已清空', 'success')
}

// 复制到剪贴板
const copyToClipboard = async () => {
  if (!jsonOutput.value.trim()) {
    showStatus('没有内容可复制', 'error')
    return
  }

  try {
    await navigator.clipboard.writeText(jsonOutput.value)
    showStatus('已复制到剪贴板！', 'success')
  } catch (err) {
    // 降级方案 - 创建临时textarea元素
    const textarea = document.createElement('textarea')
    textarea.value = jsonOutput.value
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    showStatus('已复制到剪贴板！', 'success')
  }
}

// 显示状态信息
const showStatus = (message, type) => {
  status.message = message
  status.type = type
  status.show = true
  
  // 3秒后隐藏状态信息
  setTimeout(() => {
    status.show = false
  }, 3000)
}

// 键盘事件处理
const handleKeydown = (e) => {
  if (e.ctrlKey && e.key === 'Enter') {
    e.preventDefault()
    convertJSON()
  }
}

// 监听转换模式变化
watch(conversionMode, () => {
  if (jsonInput.value.trim()) {
    nextTick(() => {
      convertJSON() // 自动重新转换
    })
  }
})

// 组件挂载后的初始化
onMounted(() => {
  showStatus('工具已就绪，请输入 JSON 对象', 'success')
})

// 暴露方法供父组件调用（可选）
defineExpose({
  convertJSON,
  loadExample,
  clearInput,
  clearOutput
})
</script>

<style scoped>
.json-converter {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;
}

.header {
  background: linear-gradient(135deg, #2c3e50, #3498db);
  color: white;
  padding: 20px;
  text-align: center;
}

.header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.header p {
  font-size: 1.1em;
  opacity: 0.9;
}

.conversion-mode {
  background: #f8f9fa;
  padding: 15px 20px;
  border-bottom: 2px solid #ecf0f1;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.mode-label {
  font-weight: bold;
  color: #2c3e50;
  white-space: nowrap;
}

.mode-options {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
}

.mode-option {
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}

.mode-option input[type="radio"] {
  margin: 0;
}

.mode-option label {
  cursor: pointer;
  color: #2c3e50;
  user-select: none;
}

.main-content {
  display: flex;
  min-height: 70vh;
}

.left-panel, .right-panel {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.left-panel {
  border-right: 2px solid #ecf0f1;
  background: #f8f9fa;
}

.panel-title {
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 15px;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 10px;
}

.panel-title::before {
  content: "📝";
}

.right-panel .panel-title::before {
  content: "📋";
}

.textarea-container {
  flex: 1;
  position: relative;
}

textarea {
  width: 100%;
  height: 100%;
  min-height: 300px;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-family: 'Courier New', Consolas, monospace;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  transition: border-color 0.3s ease;
  background: #fff;
}

textarea:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.3);
}

textarea:read-only {
  background: #f8f9fa;
  color: #2c3e50;
}

.button-group {
  margin: 15px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 80px;
}

.convert-btn {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
}

.convert-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(39, 174, 96, 0.3);
}

.clear-btn {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
}

.clear-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(231, 76, 60, 0.3);
}

.copy-btn {
  background: linear-gradient(135deg, #f39c12, #e67e22);
  color: white;
}

.copy-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);
}

.example-btn {
  background: linear-gradient(135deg, #9b59b6, #8e44ad);
  color: white;
}

.example-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(155, 89, 182, 0.3);
}

.status {
  padding: 10px;
  border-radius: 6px;
  margin: 10px 0;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s ease;
}

.status.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.info-box {
  background: #e8f4f8;
  border: 1px solid #bee5eb;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 15px;
  color: #0c5460;
}

.info-box h3 {
  margin-bottom: 8px;
  color: #0c5460;
}

.info-box ul {
  margin-left: 20px;
}

.info-box li {
  margin-bottom: 5px;
}

/* Vue Transition 动画 */
.status-enter-active, .status-leave-active {
  transition: all 0.3s ease;
}

.status-enter-from, .status-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 滚动条样式 */
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .json-converter {
    margin: 10px;
    border-radius: 10px;
  }

  .header {
    padding: 15px;
  }

  .header h1 {
    font-size: 1.8em;
    margin-bottom: 5px;
  }

  .header p {
    font-size: 1em;
  }

  .conversion-mode {
    padding: 10px 15px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .mode-options {
    width: 100%;
    justify-content: space-around;
  }

  .main-content {
    flex-direction: column;
  }

  .left-panel {
    border-right: none;
    border-bottom: 2px solid #ecf0f1;
    padding: 15px;
  }

  .right-panel {
    padding: 15px;
  }

  .button-group {
    flex-direction: column;
    gap: 8px;
  }

  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }

  textarea {
    min-height: 250px;
    font-size: 16px;
    padding: 12px;
  }

  .panel-title {
    font-size: 1.2em;
  }

  .info-box {
    padding: 12px;
    margin-bottom: 12px;
  }

  .info-box h3 {
    font-size: 1em;
  }

  .info-box ul {
    margin-left: 15px;
  }

  .info-box li {
    font-size: 0.9em;
    line-height: 1.4;
  }
}

/* 超小屏幕适配 */
@media (max-width: 480px) {
  .json-converter {
    margin: 5px;
    border-radius: 8px;
  }

  .header h1 {
    font-size: 1.5em;
  }

  .conversion-mode {
    padding: 8px 12px;
  }

  .mode-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .left-panel, .right-panel {
    padding: 12px;
  }

  textarea {
    min-height: 200px;
    font-size: 14px;
    padding: 10px;
  }

  button {
    padding: 10px;
    font-size: 14px;
  }

  .info-box {
    padding: 10px;
  }

  .info-box li {
    font-size: 0.85em;
  }
}
</style>
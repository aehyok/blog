<template>
  <div class="aes-decrypt-container">   
    <div class="content">
      <div class="input-section">
        <h2 class="section-title">解密结果</h2>
        <div class="form-group">
          <label for="keyInput">密钥 (Key)</label>
          <input 
            type="text" 
            id="keyInput" 
            v-model="key"
            placeholder="请输入解密密钥"
            @keydown.ctrl.enter="performDecrypt"
          />
        </div>
        
        <div class="form-group">
          <label for="dataInput">IV + 加密数据</label>
          <textarea 
            id="dataInput"
            v-model="ivData"
            placeholder="请输入IV和加密数据的合并字符串&#10;格式: IV偏移量+加密数据"
            @keydown.ctrl.enter="performDecrypt"
          ></textarea>
        </div>
        
        <button class="decrypt-btn" @click="performDecrypt">
          🔓 开始解密
        </button>
        
        <div v-if="status.message" :class="['status', status.type]">
          {{ status.message }}
        </div>
      </div>
      
      <div class="output-section">
        <h2 class="section-title">解密结果</h2>
        
        <div class="result-container">
          <div class="json-viewer">
            <div v-if="!decryptResult" class="placeholder">
              <div class="placeholder-icon">📄</div>
              <p>解密结果将在这里显示</p>
              <small>请在左侧输入解密参数并点击解密按钮</small>
            </div>
            <pre v-else v-html="decryptResult"></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'

export default {
  name: 'AESDecryptTool',
  data() {
    return {
      key: '',
      ivData: '',
      decryptResult: '',
      status: {
        message: '',
        type: ''
      }
    }
  },
  methods: {
    /**
     * 解密字符串
     * @param {string} key 秘钥
     * @param {string} iv 偏移量
     * @param {string} data 要解密的字符串
     * @returns {string}
     */
    decrypt(key, iv, data) {
      try {
        // 将密钥和IV转换为WordArray
        const keyWordArray = CryptoJS.enc.Utf8.parse(key);
        const ivWordArray = CryptoJS.enc.Utf8.parse(iv);

        // 执行解密
        const decrypted = CryptoJS.AES.decrypt(data, keyWordArray, {
          iv: ivWordArray,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });

        // 转换为UTF8字符串
        const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

        if (!decryptedText) {
          throw new Error('解密失败，可能是密钥或IV不正确');
        }

        return decryptedText;

      } catch (error) {
        console.error('解密失败:', error);
        throw error;
      }
    },

    /**
     * 解析并分离IV和数据
     * @param {string} ivDataString IV和数据的合并字符串
     * @param {number} ivLength IV的长度（默认16字节）
     * @returns {object}
     */
    parseIvAndData(ivDataString, ivLength = 16) {
      if (ivDataString.length < ivLength) {
        throw new Error(`输入字符串太短，无法提取${ivLength}字节的IV`);
      }
      
      const iv = ivDataString.substring(0, ivLength);
      const data = ivDataString.substring(ivLength);
      
      return { iv, data };
    },

    /**
     * 格式化JSON显示
     * @param {object} obj JSON对象
     * @returns {string}
     */
    formatJsonHtml(obj, indent = 0) {
      const spaces = '  '.repeat(indent);
      
      if (obj === null) {
        return `<span class="json-null">null</span>`;
      }
      
      if (typeof obj === 'string') {
        return `<span class="json-string">"${this.escapeHtml(obj)}"</span>`;
      }
      
      if (typeof obj === 'number') {
        return `<span class="json-number">${obj}</span>`;
      }
      
      if (typeof obj === 'boolean') {
        return `<span class="json-boolean">${obj}</span>`;
      }
      
      if (Array.isArray(obj)) {
        if (obj.length === 0) return '[]';
        
        let result = '[\n';
        obj.forEach((item, index) => {
          result += spaces + '  ' + this.formatJsonHtml(item, indent + 1);
          if (index < obj.length - 1) result += ',';
          result += '\n';
        });
        result += spaces + ']';
        return result;
      }
      
      if (typeof obj === 'object') {
        const keys = Object.keys(obj);
        if (keys.length === 0) return '{}';
        
        let result = '{\n';
        keys.forEach((key, index) => {
          result += spaces + '  ';
          result += `<span class="json-key">"${this.escapeHtml(key)}"</span>: `;
          result += this.formatJsonHtml(obj[key], indent + 1);
          if (index < keys.length - 1) result += ',';
          result += '\n';
        });
        result += spaces + '}';
        return result;
      }
      
      return String(obj);
    },

    /**
     * HTML转义
     */
    escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    },

    /**
     * 显示状态消息
     */
    showStatus(message, type = 'info') {
      this.status = { message, type };
      
      // 3秒后自动清除成功消息
      if (type === 'success') {
        setTimeout(() => {
          this.status = { message: '', type: '' };
        }, 3000);
      }
    },

    /**
     * 执行解密操作
     */
    performDecrypt() {
      const key = this.key.trim();
      const ivDataInput = this.ivData.trim();
      
      // 清除之前的状态
      this.status = { message: '', type: '' };
      
      // 验证输入
      if (!key) {
        this.showStatus('请输入解密密钥', 'error');
        return;
      }
      
      if (!ivDataInput) {
        this.showStatus('请输入IV和加密数据', 'error');
        return;
      }
      
      try {
        // 解析IV和数据（假设IV长度为16字节）
        const { iv, data } = this.parseIvAndData(ivDataInput, 16);
        
        // 执行解密
        const decryptedText = this.decrypt(key, iv, data);
        
        // 尝试解析为JSON
        let jsonObj;
        try {
          jsonObj = JSON.parse(decryptedText);
        } catch (parseError) {
          // 如果不是有效的JSON，就作为字符串处理
          jsonObj = { 
            type: "字符串",
            content: decryptedText 
          };
        }
        
        // 显示格式化的JSON
        this.decryptResult = this.formatJsonHtml(jsonObj);
        
        this.showStatus('解密成功！', 'success');
        
      } catch (error) {
        this.showStatus(`解密失败: ${error.message}`, 'error');
        this.decryptResult = `
          <div class="placeholder">
            <div class="placeholder-icon">❌</div>
            <p>解密失败</p>
            <small>${error.message}</small>
          </div>
        `;
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.aes-decrypt-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
  width: 100%;
}

.aes-decrypt-container {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-height: auto;
}

.header {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 30px;
  text-align: center;
}

.header h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.header p {
  opacity: 0.9;
  font-size: 1.2rem;
}

.content {
  display: grid;
  grid-template-rows: auto auto;
  gap: 30px;
}

.input-section {
  background: #f8f9fa;
  border-radius: 15px;
  border: 2px solid #e9ecef;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-section h2.section-title {
  margin-bottom: 0;
}

.output-section {
  background: #f1f8ff;
  border-radius: 15px;
  padding: 0 15px;
  border: 2px solid #d1ecf1;
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 1.6rem;
  color: #2c3e50;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-title::before {
  content: "🔐";
  font-size: 1.3em;
}

.output-section .section-title::before {
  content: "📋";
}

.form-group {
  margin-bottom: 0;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #495057;
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px 15px;
  border: 2px solid #dee2e6;
  border-radius: 10px;
  font-size: 16px;
  font-family: 'Consolas', 'Monaco', monospace;
  transition: all 0.3s ease;
  background: white;
}

.form-group input {
  min-height: 30px;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
  line-height: 1.6;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4facfe;
  box-shadow: 0 0 0 4px rgba(79, 172, 254, 0.15);
  transform: translateY(-1px);
}

.decrypt-btn {
  padding:10px 45px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  min-height: 35px;
  margin: 10px 15px;
}

.decrypt-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.decrypt-btn:active {
  transform: translateY(-1px);
}

.status {
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
  font-size: 15px;
}

.status.error {
  color: #dc3545;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
}

.status.success {
  color: #155724;
  background: #d4edda;
  border: 1px solid #c3e6cb;
}

.result-container {
  background: white;
  border: 2px solid #dee2e6;
  border-radius: 10px;
  min-height: 400px;
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
}

.json-viewer {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.6;
  padding: 25px;
  overflow: auto;
  flex-grow: 1;
}

:deep(.json-key) {
  color: #0066cc;
  font-weight: bold;
}

:deep(.json-string) {
  color: #009900;
}

:deep(.json-number) {
  color: #ff6600;
}

:deep(.json-boolean) {
  color: #cc0066;
}

:deep(.json-null) {
  color: #999999;
}

.placeholder {
  color: #6c757d;
  text-align: center;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  flex-grow: 1;
  justify-content: center;
}

.placeholder-icon {
  font-size: 4rem;
  opacity: 0.5;
}

.placeholder p {
  font-size: 1.1rem;
  font-weight: 500;
}

.placeholder small {
  font-size: 0.95rem;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .aes-decrypt-container {
    max-width: 100%;
    padding: 15px;
    border-radius: 15px;
  }
  
  .content {
    padding: 25px;
    gap: 25px;
  }
  
  .input-section {
    gap: 15px;
    padding: 25px;
  }
  
  .decrypt-btn {
    margin-top: 5px;
    padding: 18px 30px;
    font-size: 1.1rem;
    min-height: 60px;
  }
  
  .output-section {
    padding: 25px;
  }
  
  .section-title {
    font-size: 1.4rem;
    margin-bottom: 15px;
  }
  
  .form-group label {
    margin-bottom: 6px;
  }
  
  .form-group input {
    min-height: 55px;
    font-size: 16px;
    padding: 15px 18px;
  }
  
  .form-group textarea {
    min-height: 120px;
    font-size: 16px;
    padding: 15px 18px;
  }
  
  .json-viewer {
    font-size: 13px;
    padding: 20px;
  }
  
  .result-container {
    min-height: 300px;
  }
  
  .status {
    padding: 12px;
    margin-top: 12px;
  }
  
  .placeholder {
    padding: 30px 20px;
    gap: 12px;
  }
  
  .placeholder-icon {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .aes-decrypt-container {
    padding: 10px;
  }
  
  .content {
    padding: 15px;
    gap: 20px;
  }
  
  .input-section,
  .output-section {
    padding: 20px;
  }
  
  .input-section {
    gap: 12px;
  }
  
  .section-title {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }
  
  .form-group label {
    margin-bottom: 5px;
  }
  
  .form-group input {
    min-height: 50px;
    padding: 12px 15px;
  }
  
  .form-group textarea {
    min-height: 100px;
    padding: 12px 15px;
  }
  
  .decrypt-btn {
    padding: 15px 25px;
    font-size: 1rem;
    min-height: 55px;
    margin-top: 5px;
  }
  
  .result-container {
    min-height: 250px;
  }
  
  .status {
    padding: 10px;
    margin-top: 10px;
  }
  
  .placeholder {
    padding: 25px 15px;
    gap: 10px;
  }
}

.vp-doc h2  {
  margin: 0 0 16px;
}
</style>
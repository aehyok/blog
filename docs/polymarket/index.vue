<template>
  <div class="polymarket-container">
    <h1> 数据查询</h1>
    
    <div class="search-form">
      <div class="form-group">
        <label>ProxyWallet:</label>
        <input 
          v-model="searchParams.proxyWallet" 
          type="text" 
          placeholder="输入 proxyWallet 地址"
        />
      </div>
      
      <div class="form-group">
        <label>Title:</label>
        <input 
          v-model="searchParams.title" 
          type="text" 
          placeholder="输入标题关键词"
        />
      </div>
      
      <!-- 新增：数据条数下拉 -->
      <div class="form-group">
        <label>返回条数 (limit):</label>
        <select v-model.number="searchParams.limit">
          <option :value="5">5</option>
          <option :value="10">10</option>
          <option :value="25">25</option>
          <option :value="50">50</option>
          <option :value="100">100</option>
          <option :value="200">200</option>
          <option :value="500">500</option>
          <option :value="1000">1000</option>
        </select>
      </div>

      <!-- 新增：排序方向下拉 -->
      <div class="form-group">
        <label>排序方向 (sortDirection):</label>
        <select v-model="searchParams.sortDirection">
          <option value="DESC">降序 (DESC)</option>
          <option value="ASC">升序 (ASC)</option>
        </select>
      </div>
      <div class="form-group">
        <label>交易类型 (type):</label>
        <select v-model="searchParams.type">
          <option value="TRADE">TRADE (交易)</option>
          <option value="SPLIT">SPLIT (拆分)</option>
          <option value="TRADE">MERGE (合并)</option>
          <option value="REDEEM">REDEEM (赎回/兑换)</option>
          <option value="REWARD">REWARD (奖励)</option>
          <option value="CONVERSION">CONVERSION (转换)</option>
        </select>
      </div>
      <div class="button-group">
        <button 
          class="btn-search" 
          @click="fetchData" 
          :disabled="loading"
        >
          {{ loading ? '查询中...' : '查询' }}
        </button>
        <button class="btn-reset" @click="resetSearch">重置</button>
      </div>
    </div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="loading" class="loading">正在加载数据...</div>

    <!-- 修改：把分组汇总放到主列表上方，且只显示三列（标题 / 类型 / 总计） -->
    <div v-if="groupedSummaries.length > 0" class="group-summary-container">
      <h2 class="group-summary-title">按标题分组 — 类型与总计 (USDC)</h2>
      <div class="group-table">
        <table>
          <thead>
            <tr>
              <th>标题</th>
              <th>类型</th>
              <th>份额</th>
              <th>总计 (USDC)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="group in groupedSummaries" :key="group.title + '::' + group.type">
              <td class="group-title">{{ group.title }}</td>
              <td :class="group.type === 'Up' ? 'group-up' : 'group-down'">{{ group.type }}</td>
              <td class="group-total">{{ formatNumber(group.size) }}</td>
              <td class="group-total">{{ formatNumber(group.total) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <template v-if="filteredData.length > 0">
      <div class="result-info">
        共找到 {{ filteredData.length }} 条记录
        <span v-if="responseTimeMs !== null" class="response-time">
          (查询耗时: {{ responseTimeMs }}ms)
        </span>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <!-- <th>ProxyWallet</th> -->
              <th>时间</th>
              <th>标题</th>
              <th>结果</th>
              <th>类型</th>
              <th>方向</th>
              <th>价格</th>
              <th>数量</th>
              <th>USDC 数量</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in filteredData" :key="`${item.transactionHash}-${index}`">
              <!-- <td>{{ formatAddress(item.proxyWallet) }}</td> -->
              <td>{{ formatTimestamp(item.timestamp) }}</td>
              <td>{{ item.title }}</td>
              <td>
                <span 
                  class="outcome-badge"
                  :class="item.outcome === 'Up' ? 'outcome-up' : 'outcome-down'"
                >
                  {{ item.outcome }}
                </span>
              </td>
              <td>{{ item.type }}</td>
              <td :class="item.side === 'BUY' ? 'side-buy' : 'side-sell'">
                {{ item.side }}
              </td>
              <td>{{ formatNumber(item.price) }}</td>
              <td>{{ formatNumber(item.size) }}</td>
              <td>{{ formatNumber(item.usdcSize) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const searchParams = ref({
  proxyWallet: '0x0d32e5fc366d846bbca8a82c6d60a6dd718b6336',
  title: '',
  limit: 100,                
  sortDirection: 'DESC',
  type: "TRADE"
});

const rawData = ref([]);
const loading = ref(false);
const error = ref(null);

const responseTimeMs = ref(null);

const filteredData = computed(() => {
  console.log("Computing filteredData...");
  let data = rawData.value;
  
  if (searchParams.value.title) {
    const titleLower = searchParams.value.title.toLowerCase();
    data = data.filter(item => 
      item.title && item.title.toLowerCase().includes(titleLower)
    );
  }
  console.log(data, "----filteredData");
  return data;
});


const isValidAddress = (address) => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

const fetchData = async () => {
  if (!searchParams.value.proxyWallet) {
    error.value = '请输入 ProxyWallet 地址';
    return;
  }

  if (!isValidAddress(searchParams.value.proxyWallet.trim())) {
    error.value = 'ProxyWallet 地址格式不正确\n应为 0x 开头的 42 位十六进制字符';
    return;
  }

  
  const allowedLimits = [5, 10, 25, 50, 100, 200, 500, 1000];
  const limit = Number(searchParams.value.limit);
  if (!Number.isInteger(limit) || limit <= 0 || !allowedLimits.includes(limit)) {
    error.value = `limit 值不合法，请选择：${allowedLimits.join(', ')}`;
    return;
  }

  
  const sortDir = String(searchParams.value.sortDirection).toUpperCase();
  if (sortDir !== 'ASC' && sortDir !== 'DESC') {
    error.value = 'sortDirection 必须为 ASC 或 DESC';
    return;
  }

  loading.value = true;
  error.value = null;
  responseTimeMs.value = null; // 查询开始时重置时间

  // 2. 记录开始时间
  const startTime = performance.now();

  try {
    // 使用用户选择的 limit 和 sortDirection
    const result = await axios.get('https://data-api.polymarket.com/activity', {
      params: {
        user: searchParams.value.proxyWallet.trim(),
        limit: limit,
        sortBy: 'TIMESTAMP',
        sortDirection: sortDir,
        type: searchParams.value.type
      },
      timeout: 10000 // ✅ 新增：10秒超时
    });

    console.log(result, "-------result--------");
    
    if (result.data && Array.isArray(result.data)) {
      rawData.value = result.data;
    } else {
      rawData.value = [];
      error.value = 'API 返回数据格式不正确';
    }

  } catch (err) {
    console.error('API 请求失败:', err);
    
    if (err.code === 'ECONNABORTED') {
      error.value = '请求超时，请检查网络连接';
    } else if (err.response) {
      error.value = `API 错误 (${err.response.status}): ${err.response.statusText}`;
    } else if (err.request) {
      error.value = '无法连接到服务器，请检查网络';
    } else {
      error.value = `获取数据失败: ${err.message}`;
    }
    
    rawData.value = [];
    console.log('使用模拟数据进行测试...');
    rawData.value = getMockData();
  } finally {
    loading.value = false;
    // 3. 记录结束时间并计算耗时
    responseTimeMs.value = Math.round(performance.now() - startTime);
  }
};

// ✅ 新增：提取模拟数据到单独函数
const getMockData = () => {
  return [
    {
      "proxyWallet": "0x0d32e5fc366d846bbca8a82c6d60a6dd718b6336",
      "timestamp": 1731470100,
      "conditionId": "0xf910ea36342df52deb045d3437f6011d0e7d46b9df3326422c7eaa3ccb634d52",
      "type": "TRADE",
      "size": 98.039214,
      "usdcSize": 48.039215,
      "transactionHash": "0x938a6fa014859e67f6337979dbed9a17e2f18e0ba1ad2e6757718a8dd0faeccd",
      "price": 0.49000000142800004,
      "asset": "51125716007472132041446136984495310770285780708294404174348029552936651205436",
      "side": "BUY",
      "outcomeIndex": 1,
      "title": "Bitcoin Up or Down - November 13, 4:15AM-4:30AM ET",
      "slug": "btc-updown-15m-1763025300",
      "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/BTC+fullsize.png",
      "eventSlug": "btc-updown-15m-1763025300",
      "outcome": "Down",
      "name": "0x0D32e5fC366d846BbcA8a82C6D60a6DD718b6336-1761759997574",
      "pseudonym": "Bite-Sized-Turban"
    },
    {
      "proxyWallet": "0x0d32e5fc366d846bbca8a82c6d60a6dd718b6336",
      "timestamp": 1731469800,
      "conditionId": "0xa820ea36342df52deb045d3437f6011d0e7d46b9df3326422c7eaa3ccb634d88",
      "type": "TRADE",
      "size": 150.5,
      "usdcSize": 90.3,
      "transactionHash": "0x738b6fa014859e67f6337979dbed9a17e2f18e0ba1ad2e6757718a8dd0faed12",
      "price": 0.6,
      "asset": "61125716007472132041446136984495310770285780708294404174348029552936651205437",
      "side": "SELL",
      "outcomeIndex": 0,
      "title": "Ethereum Price Prediction - November 13",
      "slug": "eth-price-1731469800",
      "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/ETH+fullsize.png",
      "eventSlug": "eth-price-1731469800",
      "outcome": "Up",
      "name": "0x0D32e5fC366d846BbcA8a82C6D60a6DD718b6336-1731469800",
      "pseudonym": "Crypto-Trader-Pro"
    },
    {
      "proxyWallet": "0x0d32e5fc366d846bbca8a82c6d60a6dd718b6336",
      "timestamp": 1731469200,
      "conditionId": "0xb920ea36342df52deb045d3437f6011d0e7d46b9df3326422c7eaa3ccb634d99",
      "type": "TRADE",
      "size": 75.25,
      "usdcSize": 37.625,
      "transactionHash": "0x838c7fa014859e67f6337979dbed9a17e2f18e0ba1ad2e6757718a8dd0faee23",
      "price": 0.5,
      "asset": "71125716007472132041446136984495310770285780708294404174348029552936651205438",
      "side": "BUY",
      "outcomeIndex": 1,
      "title": "Bitcoin Up or Down - November 13, 3:45AM-4:00AM ET",
      "slug": "btc-updown-15m-1731469200",
      "icon": "https://polymarket-upload.s3.us-east-2.amazonaws.com/BTC+fullsize.png",
      "eventSlug": "btc-updown-15m-1731469200",
      "outcome": "Down",
      "name": "0x0D32e5fC366d846BbcA8a82C6D60a6DD718b6336-1731469200",
      "pseudonym": "Market-Master"
    }
  ];
};

const resetSearch = () => {
  searchParams.value = {
    proxyWallet: '0x0d32e5fc366d846bbca8a82c6d60a6dd718b6336',
    title: '',
    limit: 100,                // 重置为默认
    sortDirection: 'DESC'      // 重置为默认
  };
  rawData.value = [];
  error.value = null;
  responseTimeMs.value = null; // 重置时清空时间
};

const formatNumber = (value) => {
  if (value == null) return '0.00';
  return Number(value).toFixed(2);
};

const calculateTotal = (price, size) => {
  if (price == null || size == null) return '0.00';
  return (Number(price) * Number(size)).toFixed(2);
};

const formatAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const formatTimestamp = (timestamp) => {
  if (!timestamp) return '';
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

// 替换：按 title + outcome (Up/Down) 分组，返回数组：{ title, type, total }
// 改为基于 filteredData，这样在模板显示 groupedSummaries 时会触发 filteredData 的 computed 执行
const groupedSummaries = computed(() => {
  const map = new Map(); // key = `${title}||${type}`
  console.log(filteredData.value, "----groupedSummaries filteredData");
  (filteredData.value || []).forEach(item => {
    const title = item.title || '未命名';
    const outcome = String(item.outcome || '').trim();
    if (outcome !== 'Up' && outcome !== 'Down') return; // 只统计 Up/Down
    const usdc = Number(item.usdcSize) || 0;
    const size = Number(item.size) || 0;
    const key = `${title}||${outcome}`;
    const prev = map.get(key);
    if (prev) {
      prev.total += usdc;
      prev.size += size;
    } else {
      map.set(key, { title, type: outcome, total: usdc, size: size });
    }
  });
  return Array.from(map.values()).map(e => ({ ...e, total: Number(e.total), size: Number(e.size) }));
});

onMounted(() => {
  fetchData();
});
</script>

<style scoped>

.trade-war-timeline {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.polymarket-container {
  min-height: 100vh;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 24px;
  font-size: 24px;
}

.search-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 6px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 6px;
  color: #555;
  font-size: 14px;
  font-weight: 500;
}

.form-group input {
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
}

/* 简单样式：select 与 input 保持一致 */
.form-group select {
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus {
  outline: none;
  border-color: #4CAF50;
}

.button-group {
  display: flex;
  gap: 12px;
  align-items: flex-end;
}

button {
  padding: 10px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-search {
  background: #4CAF50;
  color: white;
}

.btn-search:hover {
  background: #45a049;
}

.btn-search:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.btn-reset {
  background: #f0f0f0;
  color: #666;
}

.btn-reset:hover {
  background: #e0e0e0;
}

.loading {
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 16px;
}

.error {
  padding: 16px;
  background: #ffebee;
  color: #c62828;
  border-radius: 4px;
  margin-bottom: 16px;
  white-space: pre-line;
  line-height: 1.6;
}

.result-info {
  margin-bottom: 16px;
  color: #666;
  font-size: 14px;
    /* 样式更新：让时间和总数保持在一行 */
  display: flex;
  align-items: center;
  gap: 10px;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

thead {
  background: #f5f5f5;
}

th {
  padding: 12px 8px;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #ddd;
  white-space: nowrap;
}

td {
  padding: 12px 8px;
  border-bottom: 1px solid #eee;
}

tbody tr:hover {
  background: #f9f9f9;
}

.side-buy {
  color: #4CAF50;
  font-weight: 600;
}

.side-sell {
  color: #f44336;
  font-weight: 600;
}

.price-calc {
  color: #1976d2;
  font-weight: 500;
}

.no-data {
  text-align: center;
  padding: 40px;
  color: #999;
}

.outcome-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.outcome-up {
  background: #e8f5e9;
  color: #2e7d32;
}

.outcome-down {
  background: #ffebee;
  color: #c62828;
}

/* 新增：响应时间样式 */
.response-time {
    font-weight: 600;
    color: #1976d2; /* 突出显示时间 */
    font-size: 13px;
    background-color: #e3f2fd;
    padding: 4px 8px;
    border-radius: 4px;
}

/* 新增：分组汇总样式 */
.group-summary-container {
  margin-bottom: 16px;
  padding: 12px;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 6px;
}

.group-summary-title {
  margin: 0 0 8px 0;
  font-size: 15px;
  color: #333;
}

.group-table {
  overflow-x: auto;
}

.group-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.group-table th {
  text-align: left;
  padding: 8px;
  background: #f5f5f5;
  border-bottom: 1px solid #e6e6e6;
}

.group-table td {
  padding: 8px;
  border-bottom: 1px solid #f0f0f0;
  vertical-align: top;
  white-space: nowrap;
}

.group-title {
  font-weight: 600;
  color: #333;
}

.group-up {
  color: #2e7d32;
  font-weight: 600;
}

.group-down {
  color: #c62828;
  font-weight: 600;
}

.group-total {
  color: #1976d2;
  font-weight: 700;
}
</style>
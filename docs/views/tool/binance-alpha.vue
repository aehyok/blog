<template>
  <div class="trading-dashboard">
    <div class="container">
      <!-- Header Section -->
      <div class="header">
        <div class="header-top">
          <div class="title">批量查询交易所预损信息 (UTC)</div>
          <input 
            type="date" 
            class="date-input" 
            v-model="selectedDate"
            @change="onDateChange"
          >
        </div>
        
        <div class="button-group">
          <button 
            class="btn btn-primary"
            @click="handleWalletManage"
          >
            管理钱包 ({{ walletCount }})
          </button>
          <!-- <button 
            class="btn btn-warning"
            @click="handleBatchQuery"
          >
            批量查询损耗
          </button>
          <button 
            class="btn btn-info"
            @click="handleBalanceQuery"
          >
            <span class="icon">🔒</span>
            批量查询余额
          </button> -->
          <button 
            class="btn btn-info"
            @click="handleTradeQuery"
          >
            <span class="icon">🔒</span>
            查询交易
          </button>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-section">
        <div class="stats-title">总数据统计</div>
        
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-label">总交易次数</div>
            <div class="stat-value">{{ stats.totalTransactions }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">实际总交易额 (USDT)</div>
            <div class="stat-value blue">${{ stats.totalAmount }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">总交易收益(包含Gas)</div>
            <div class="stat-value negative">${{ stats.totalProfit }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">总预估利润(2x)</div>
            <div class="stat-value purple">{{ stats.estimatedProfit }}</div>
          </div>
        </div>

        <div class="controls">
          <div class="filter-controls">
            <select 
              class="dropdown"
              v-model="sortType"
              @change="onSortChange"
            >
              <option value="default">默认排序</option>
              <option value="amount">金额排序</option>
              <option value="time">时间排序</option>
            </select>
            
            <div class="display-mode">
              <span class="mode-label">显示方式</span>
              <button 
                class="btn mode-btn"
                :class="{ active: displayMode === 'table' }"
                @click="setDisplayMode('table')"
              >
                表格
              </button>
              <button 
                class="btn mode-btn"
                :class="{ active: displayMode === 'card' }"
                @click="setDisplayMode('card')"
              >
                卡片
              </button>
            </div>
          </div>
          
          <div class="profit-filter">
            <span class="filter-label">按预估利润分过滤</span>
            <select 
              class="dropdown filter-dropdown"
              v-model="profitFilter"
              @change="onProfitFilterChange"
            >
              <option value="below">显示低于阈值</option>
              <option value="above">显示高于阈值</option>
            </select>
            <input 
              type="text" 
              class="search-input threshold-input" 
              placeholder="输入阈值"
              v-model="profitThreshold"
              @input="onThresholdChange"
            >
          </div>
        </div>
      </div>

      <!-- Table Section -->
      <div class="table-section" v-if="displayMode === 'table'">
        <table class="table">
          <thead>
            <tr>
              <th>钱包地址</th>
              <th>备注</th>
              <th>实际总交易额 (USDT)</th>
              <th>交易次数</th>
              <th>总预估利润(2x)</th>
              <th>总交易收益(包含Gas)</th>
              <th>下一条实际交易量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(item, index) in filteredTableData" 
              :key="index"
            >
              <td class="address">{{ item.address }}</td>
              <td>
                <span class="tag" v-if="item.tag">{{ item.tag }}</span>
              </td>
              <td class="blue-amount">${{ item.totalAmount }}</td>
              <td>{{ item.transactionCount }}</td>
              <td class="purple">{{ item.estimatedProfit }}</td>
              <td class="negative-amount">${{ item.profit }}</td>
              <td class="positive-amount">${{ item.nextAmount }} ({{ item.nextCount }})</td>
              <td>
                <button 
                  class="action-btn"
                  @click="viewDetails(item)"
                >
                  查看交易详情
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Card View (可选) -->
      <div class="card-section" v-else>
        <div 
          class="wallet-card"
          v-for="(item, index) in filteredTableData"
          :key="index"
        >
          <div class="card-header">
            <span class="address">{{ item.address }}</span>
            <span class="tag" v-if="item.tag">{{ item.tag }}</span>
          </div>
          <div class="card-content">
            <div class="card-row">
              <span>交易额:</span>
              <span class="blue-amount">${{ item.totalAmount }}</span>
            </div>
            <div class="card-row">
              <span>交易次数:</span>
              <span>{{ item.transactionCount }}</span>
            </div>
            <div class="card-row">
              <span>预估利润:</span>
              <span class="purple">{{ item.estimatedProfit }}</span>
            </div>
          </div>
          <div class="card-actions">
            <button 
              class="action-btn"
              @click="viewDetails(item)"
            >
              查看详情
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import  axios from "axios"
import { format, addHours, getUnixTime } from 'date-fns';

export default {
  name: 'TradingDashboard',
  props: {
    // 可以通过props接收外部数据
    initialData: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [
    'wallet-manage',
    'batch-query',
    'balance-query',
    'view-details',
    'date-change',
    'filter-change'
  ],
  setup(props, { emit }) {
    // 响应式数据
    const date = format(new Date(), 'yyyy-MM-dd');
    const selectedDate = ref(date)
    const sortType = ref('default')
    const displayMode = ref('table')
    const profitFilter = ref('below')
    const profitThreshold = ref('')
    const walletCount = ref(1)
    const state = reactive({
      list: [],
      tempList: [],
      list_tokentx: [],
      list_txlist: [],
      list_txlistinternal: [],

    })

    // 统计数据
    const stats = reactive({
      totalTransactions: 34,
      totalAmount: '16406.63',
      totalProfit: '-3.95',
      estimatedProfit: 15
    })

    // 表格数据
    const tableData = ref([
      {
        address: '0xf05e...53ca',
        tag: '首创',
        totalAmount: '16406.63',
        transactionCount: 34,
        estimatedProfit: 15,
        profit: '-3.95',
        nextAmount: '16361.37',
        nextCount: 16
      }
      // 可以添加更多数据
    ])

    // 计算属性 - 过滤后的数据
    const filteredTableData = computed(() => {
      let filtered = [...tableData.value]

      // 根据利润阈值过滤
      if (profitThreshold.value) {
        const threshold = parseFloat(profitThreshold.value)
        if (!isNaN(threshold)) {
          filtered = filtered.filter(item => {
            const profit = parseFloat(item.estimatedProfit)
            return profitFilter.value === 'below' ? profit < threshold : profit > threshold
          })
        }
      }

      // 排序
      if (sortType.value === 'amount') {
        filtered.sort((a, b) => parseFloat(b.totalAmount) - parseFloat(a.totalAmount))
      } else if (sortType.value === 'time') {
        // 这里可以根据实际的时间字段进行排序
        filtered.sort((a, b) => b.transactionCount - a.transactionCount)
      }

      return filtered
    })

    // 计算开始时间和结束时间的时间戳
    const startTimestamp = computed(() => {
      const dateStr = selectedDate.value + ' 08:00:00'
      return getUnixTime(new Date(dateStr))
    })

    const endTimestamp = computed(() => {
      const dateStr = selectedDate.value + ' 08:00:00'
      const startDate = new Date(dateStr)
      const endDate = addHours(startDate, 24)
      return getUnixTime(endDate)
    })

    // 方法
    const onDateChange = () => {
      emit('date-change', selectedDate.value)
    }

    const handleWalletManage = () => {
      emit('wallet-manage')
    }

    const handleBatchQuery = () => {
      emit('batch-query')
    }

    const baseUrl = 'https://api.etherscan.io/v2/api'
    /**
     * 拼接url
     * @param parameters 
     */
    const buildUrl = (parameters) => {
      // 将parameters对象转换为URL查询字符串
      const queryString = Object.entries(parameters)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
      
      const url = `${baseUrl}?${queryString}`
      return url;
    }

    // 中间合约链
    const MIDDLE_ADDRESS = '0xb300000b72DEAEb607a12d5f54773D1C19c7028d'

    const MY_WALLET_ADDRESS = "0xf05E440e444C1629F73caF142f7aad09ED9453ca"
    // 买入操作
    // 1、合约地址0x55d398326f99059fF775485246999027B3197955
    // 2、From我的钱包地址 MY_WALLET_ADDRESS
    // 3、To (中间合约链) MIDDLE_ADDRESS

    // 成功之后，再由（中间合约链）自动买入KOGE
    // 4、合约地址0xe6df05ce8c8301223373cf5b969afcb1498c5528
    // 5、From (中间合约链)MIDDLE_ADDRESS
    // 6、To我的钱包地址 MY_WALLET_ADDRESS

    // 卖出操作
    // 1、合约地址0xe6df05ce8c8301223373cf5b969afcb1498c5528
    // 2、From我的钱包地址 MY_WALLET_ADDRESS
    // 3、To (中间合约链) MIDDLE_ADDRESS

    // 4、合约地址0x55d398326f99059fF775485246999027B3197955
    // 5、From (中间合约链)MIDDLE_ADDRESS
    // 6、To我的钱包地址 MY_WALLET_ADDRESS

    const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955'
    const USDC_ADDRESS = '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'

    const ADDRESSES = ["0x55d398326f99059fF775485246999027B3197955", "0xe6df05ce8c8301223373cf5b969afcb1498c5528"]

    const ALPHA = 
    {
      chainId: '56',
      contractAddress: '0xe6df05ce8c8301223373cf5b969afcb1498c5528',
      name: `BNB48 Club Token`,
      symbol: 'KOGE',
      decimals: 18,
    }

    // 查询交易
    const handleTradeQuery = async() => {
      // 将选择的日期转换为时间戳
      console.log('查询交易数据，当前日期:', selectedDate.value)
      console.log('开始时间戳:', startTimestamp.value)
      console.log('结束时间戳:', endTimestamp.value)
      console.log('开始时间:', format(new Date(startTimestamp.value * 1000), 'yyyy-MM-dd HH:mm:ss'))
      console.log('结束时间:', format(new Date(endTimestamp.value * 1000), 'yyyy-MM-dd HH:mm:ss'))

      console.log('Binance Alpha component mounted')
      try {
        const tokentx_parameters = {
          chainid: 56,
          module: 'account',
          action: 'tokentx',
          address: MY_WALLET_ADDRESS,
          startblock: 0,
          endblock: 99999999,
          page: 1,
          offset: 100,
          sort: 'desc',
          apikey: 'JGKUPIJS5BK9PFKHPQB7Y2SRFJYD7QX52K'
        }

        const tokentxApi = buildUrl(tokentx_parameters);

        const txlist_parameters = {
          chainid: 56,
          module: 'account',
          action: 'txlist',
          address: MY_WALLET_ADDRESS,
          startblock: 0,
          endblock: 99999999,
          page: 1,
          offset: 100,
          sort: 'desc',
          apikey: 'JGKUPIJS5BK9PFKHPQB7Y2SRFJYD7QX52K'
        }

        const txlistApi = buildUrl(txlist_parameters);

        const txlistinternal_parameters  = {
          chainid: 56,
          module: 'account',
          action: 'txlistinternal',
          address: MY_WALLET_ADDRESS,
          startblock: 0,
          endblock: 99999999,
          page: 1,
          offset: 100,
          sort: 'desc',
          apikey: 'JGKUPIJS5BK9PFKHPQB7Y2SRFJYD7QX52K'
        }

        const txlistinternalApi = buildUrl(txlistinternal_parameters);

        // 帮我写一个Promise.all的代码，来并行请求这三个API
        const [tokentxResponse, txlistResponse, txlistinternalResponse] = await Promise.all([
          axios.get(tokentxApi),
          axios.get(txlistApi),
          axios.get(txlistinternalApi)
        ]);
        
        console.log('交易数据:', tokentxResponse.data);
        console.log('交易列表:', txlistResponse.data);
        console.log('内部交易列表:', txlistinternalResponse.data);

        const convertData = (data) => {
          const resultList = [];
          if(data.status = "1") {
            const list = data.result;
            console.log('原始数据列表:', list);
            if(!list) {
              return [];
            }
            list.forEach(element => {
              if(element.timeStamp) {
                const timeStamp = parseInt(element.timeStamp) * 1000;
                const time = new Date(timeStamp);
                element.time = format(time, 'yyyy-MM-dd HH:mm:ss');
              }

              // element.blockNumber == "55138108" &&
              // if(ADDRESSES.includes(element.contractAddress) && element.timeStamp > startTimestamp.value && element.timeStamp < endTimestamp.value) {
              if(element.timeStamp > startTimestamp.value && element.timeStamp < endTimestamp.value) {
                resultList.push(element);
              }
            });
          }
          return resultList;
        }

        state.list_tokentx = convertData(tokentxResponse.data || []);
        console.log(state.list_tokentx, "====state.list_tokentx====")
        state.list_tokentx.forEach(item => {
          //买入第一步
          if(item.contractAddress == "0x55d398326f99059ff775485246999027b3197955" && item.from == MY_WALLET_ADDRESS.toLowerCase()) {
            let temp = {};
            temp.time = item.time;
            temp.blockNumber = item.blockNumber;
            temp.blockHash = item.blockNumber;
            temp.type ="买入";
            temp.from = item.contractAddress;
            temp.fromValue = item.value / 1e18;
            temp.gasTotal1 = parseFloat(item.gasUsed) * parseFloat(item.gasPrice) / 1e18;

            let findItem = state.list.find(f =>f.blockNumber == item.blockNumber);
            if(!findItem) {
              state.list.push(temp);
            }
            else {
              findItem = { ...findItem, ...temp };
              state.tempList.push(findItem);
              console.log("----------------11111", temp, findItem);
            }
          }
          
          //买入第二部判断
          if(item.contractAddress == "0xe6df05ce8c8301223373cf5b969afcb1498c5528" && item.to == MY_WALLET_ADDRESS.toLowerCase()) {
            let temp = {};
            temp.time = item.time;
            temp.blockNumber = item.blockNumber;
            temp.blockHash = item.blockNumber;
            temp.type = "买入";
            temp.to = item.contractAddress;
            temp.toValue = item.value / 1e18;
            temp.gasTotal2 = parseFloat(item.gasUsed) * parseFloat(item.gasPrice) / 1e18;

            let findItem = state.list.find(f =>f.blockNumber == item.blockNumber);
            if(!findItem) {
              state.list.push(temp);
            }
            else {
              findItem = { ...findItem, ...temp };
              console.log("----------------22222", temp, findItem);
            }
          }

          //卖出第一步
          if(item.contractAddress == "0xe6df05ce8c8301223373cf5b969afcb1498c5528" && item.from == MY_WALLET_ADDRESS.toLowerCase()) {
            let temp = {};
            temp.blockNumber = item.blockNumber;
            temp.blockHash = item.blockHash;
            temp.type ="卖出";
            temp.from = item.contractAddress;
            temp.fromValue = item.value / 1e18;
            temp.gasTotal1 = parseFloat(item.gasUsed) * parseFloat(item.gasPrice) / 1e18;

            let findItem = state.list.find(f =>f.blockNumber == item.blockNumber);
            if(!findItem) {
              state.list.push(temp);
            }
            else {
              findItem = { ...findItem, ...temp };
              state.tempList.push(findItem);
              console.log("----------------11111", temp, findItem);
            }
          }
          
          //卖出第二部判断
          if(item.contractAddress == "0x55d398326f99059ff775485246999027b3197955" && item.to == MY_WALLET_ADDRESS.toLowerCase()) {
            let temp = {};
            temp.blockNumber = item.blockNumber;
            temp.blockHash = item.blockHash;
            temp.type = "卖出";
            temp.to = item.contractAddress;
            temp.toValue = item.value / 1e18;
            temp.gasTotal2 = parseFloat(item.gasUsed) * parseFloat(item.gasPrice) / 1e18;

            let findItem = state.list.find(f =>f.blockNumber == item.blockNumber);
            if(!findItem) {
              state.list.push(temp);
            }
            else {
              findItem = { ...findItem, ...temp };
              console.log("----------------22222", temp, findItem);
            }
          }
        });

        console.log(state.list, "====state.list====")
        console.log(state.tempList, "========state.tempList========")

        state.list_txlist = convertData(txlistResponse.data || []);
        state.list_txlistinternal = convertData(txlistinternalResponse.data || []);
       
        console.log('转换后的交易数据:', state.list_tokentx);
        console.log('转换后的交易列表:', state.list_txlist);
        console.log('转换后的内部交易列表:', state.list_txlistinternal);
      } catch (error) {
        console.error('请求失败:', error.response?.data || error.message);
        throw error;
      }
    }

    const handleBalanceQuery = () => {
      emit('balance-query')
    }

    const onSortChange = () => {
      emit('filter-change', {
        type: 'sort',
        value: sortType.value
      })
    }

    const setDisplayMode = (mode) => {
      displayMode.value = mode
    }

    const onProfitFilterChange = () => {
      emit('filter-change', {
        type: 'profit-filter',
        value: profitFilter.value
      })
    }

    const onThresholdChange = () => {
      emit('filter-change', {
        type: 'threshold',
        value: profitThreshold.value
      })
    }

    const viewDetails = (item) => {
      emit('view-details', item)
    }

    // 更新数据的方法（供外部调用）
    const updateStats = (newStats) => {
      Object.assign(stats, newStats)
    }

    const updateTableData = (newData) => {
      tableData.value = newData
    }

    // 组件挂载时的逻辑
    onMounted(() => {
      // 如果有初始数据，更新组件数据
      if (props.initialData.stats) {
        updateStats(props.initialData.stats)
      }
      if (props.initialData.tableData) {
        updateTableData(props.initialData.tableData)
      }
    })

    const getTransactionsApi = async() => {
      console.log('Binance Alpha component mounted')
      try {
        const url = 'https://api.etherscan.io/v2/api?chainid=56&module=account&action=tokentx&address=0xf05E440e444C1629F73caF142f7aad09ED9453ca&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=JGKUPIJS5BK9PFKHPQB7Y2SRFJYD7QX52K';
        
        const response = await axios.get(url);
        console.log('交易数据:', response.data);
          response.data;
      } catch (error) {
        console.error('请求失败:', error.response?.data || error.message);
        throw error;
      }
    }

    // 暴露给模板的数据和方法
    return {
      selectedDate,
      sortType,
      displayMode,
      profitFilter,
      profitThreshold,
      walletCount,
      stats,
      tableData,
      filteredTableData,
      onDateChange,
      handleWalletManage,
      handleBatchQuery,
      handleBalanceQuery,
      onSortChange,
      setDisplayMode,
      onProfitFilterChange,
      onThresholdChange,
      viewDetails,
      updateStats,
      updateTableData,
      handleTradeQuery,
      startTimestamp,
      endTimestamp
    }
  }
}
</script>

<style scoped>
.trading-dashboard * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.trading-dashboard {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  background-color: #f5f5f5;
  color: #333;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  font-size: 18px;
  font-weight: 600;
  color: #1890ff;
  display: flex;
  align-items: center;
}

.title::before {
  content: '';
  width: 4px;
  height: 20px;
  background: #1890ff;
  margin-right: 8px;
}

.date-input {
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: white;
}

.button-group {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.btn-primary {
  background: #4096ff;
  color: white;
}

.btn-primary:hover {
  background: #1677ff;
}

.btn-warning {
  background: #fa8c16;
  color: white;
}

.btn-warning:hover {
  background: #d46b08;
}

.btn-info {
  background: #722ed1;
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
}

.btn-info:hover {
  background: #531dab;
}

.stats-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.stats-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.stat-item {
  text-align: center;
  padding: 15px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
}

.stat-label {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.stat-value {
  font-size: 24px;
  font-weight: 600;
}

.stat-value.negative {
  color: #ff4d4f;
}

.stat-value.blue {
  color: #1890ff;
}

.stat-value.purple {
  color: #722ed1;
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.filter-controls {
  display: flex;
  align-items: center;
  gap: 15px;
}

.display-mode {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mode-label,
.filter-label {
  font-size: 12px;
  color: #666;
}

.mode-btn {
  padding: 4px 8px;
  font-size: 12px;
  background: #f5f5f5;
  color: #666;
}

.mode-btn.active {
  background: #e6f7ff;
  color: #1890ff;
}

.profit-filter {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dropdown {
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.filter-dropdown {
  width: 120px;
}

.search-input {
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 200px;
}

.threshold-input {
  width: 100px;
}

.table-section,
.card-section {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}

.table th {
  background: #fafafa;
  font-weight: 600;
  color: #666;
  font-size: 12px;
}

.table td {
  font-size: 14px;
}

.table tr:hover {
  background: #f5f5f5;
}

.address {
  font-family: 'Courier New', monospace;
  color: #666;
}

.negative-amount {
  color: #ff4d4f;
}

.positive-amount {
  color: #52c41a;
}

.blue-amount {
  color: #1890ff;
}

.purple {
  color: #722ed1;
}

.action-btn {
  padding: 6px 12px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.action-btn:hover {
  background: #40a9ff;
}

.tag {
  display: inline-block;
  padding: 2px 6px;
  background: #f6ffed;
  color: #52c41a;
  border: 1px solid #b7eb8f;
  border-radius: 2px;
  font-size: 12px;
}

.icon {
  width: 16px;
  height: 16px;
  display: inline-block;
}

/* 卡片视图样式 */
.card-section {
  padding: 20px;
}

.wallet-card {
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  transition: all 0.3s;
}

.wallet-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.card-content {
  margin-bottom: 12px;
}

.card-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.card-actions {
  text-align: right;
}
</style>
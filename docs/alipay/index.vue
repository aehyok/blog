<template>
  <div class="points-exchange-container">
    <div class="container">
      <div class="header">
        <h1>🎯 积分兑换活动管理</h1>
        <p>看我家小孩能坚持多久，2025年8月29日开始，马上上一年级。</p>
      </div>
      
      <div class="activity-info">
        <div class="info-grid">
          <div class="info-card">
            <h3>📅 活动周期</h3>
            <p>每个积分周期 7 天</p>
          </div>
          <div class="info-card">
            <h3>🎁 兑换标准</h3>
            <p>满足条件后可获得 1 元奖励</p>
          </div>
          <div class="info-card">
            <h3>⏰ 兑换日期</h3>
            <p>每满七天自动发放</p>
          </div>
          <div class="info-card">
            <h3>📍 当前状态</h3>
            <p>活动进行中，实时跟踪</p>
          </div>
        </div>
      </div>
      
      <div class="content">
        <div class="current-date">
          📅 今日日期：<span>{{ currentDate }}</span>
        </div>
        
        <div class="section">
          <h2>👥 参与者积分记录</h2>
          <div class="participants-table">
            <table>
              <thead>
                <tr>
                  <th>参与天数</th>
                  <th>连续天数</th>
                  <th>年.月.日</th>
                  <th>星期几</th>
                  <th>打卡状态</th>
                  <th>奖励状态</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(record, index) in records"
                  :key="index"
                  :class="{ 'exchange-ready': record.status === 'eligible' }"
                  :style="{ animation: `slideInUp 0.5s ease-out ${index * 0.1}s both` }"
                >
                  <td data-label="参与天数">{{ record.index }}</td>
                  <td data-label="连续天数">{{ record.period }}</td>
                  <td data-label="年.月.日">{{ record.date }}</td>
                  <td data-label="星期几">{{ record.week }}</td>
                  <td data-label="打卡状态">
                    <span
                      :class="{
                        'exchange-badge': record.status === 'eligible',
                        'status pending': record.status === 'pending'
                      }"
                    >
                      {{ record.status === '1' ? '✅ 已打卡' : '❌未打卡' }}
                    </span>
                  </td>
                  <td data-label="奖励状态">
                    <span
                      v-if="record.isreward === '1'"
                      class="transfer-record"
                    >
                      🔥 已转账
                    </span>
                    <span v-else>{{ record.isreward ? record.isreward : '-' }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

// 响应式数据
const records = ref([
{
  date: '2025.12.9',
  week: "星期二",
  period: '88',
  status: '1',
  index: 102,
},
{
  date: '2025.12.8',
  week: "星期一",
  period: '87',
  status: '1',
  index: 101,
},
{
  date: '2025.12.7',
  week: "星期日",
  period: '86',
  status: '1',
  index: 100,
},
{
  date: '2025.12.6',
  week: "星期六",
  period: '85',
  status: '1',
  index: 99,
},
{
  date: '2025.12.5',
  week: "星期五",
  period: '84',
  status: '1',
  index: 98,
},
{
  date: '2025.12.4',
  week: "星期四",
  period: '83',
  status: '1',
  index: 97,
},
{
  date: '2025.12.3',
  week: "星期三",
  period: '82',
  status: '1',
  index: 96,
},
{
  date: '2025.12.2',
  week: "星期二",
  period: '81',
  status: '1',
  index: 95,
},
{
  date: '2025.12.1',
  week: "星期一",
  period: '80',
  status: '1',
  index: 94,
},
{
  date: '2025.11.30',
  week: "星期日",
  period: '79',
  status: '1',
  index: 93,
},
{
  date: '2025.11.29',
  week: "星期六",
  period: '78',
  status: '1',
  index: 92,
},
{
  date: '2025.11.28',
  week: "星期五",
  period: '77',
  status: '1',
  index: 91,
  isreward: "1"  
},
{
  date: '2025.11.27',
  week: "星期四",
  period: '76',
  status: '1',
  index: 90,
},
{
  date: '2025.11.26',
  week: "星期三",
  period: '75',
  status: '1',
  index: 89,
},
{
  date: '2025.11.25',
  week: "星期二",
  period: '74',
  status: '1',
  index: 88,
},
{
  date: '2025.11.24',
  week: "星期一",
  period: '73',
  status: '1',
  index: 87,
},
{
  date: '2025.11.23',
  week: "星期日",
  period: '72',
  status: '1',
  index: 86,
},
{
  date: '2025.11.22',
  week: "星期六",
  period: '71',
  status: '1',
  index: 85,
},
{
  date: '2025.11.21',
  week: "星期五",
  period: '70',
  status: '1',
  index: 84,
  isreward: "1"  
},
{
  date: '2025.11.20',
  week: "星期四",
  period: '69',
  status: '1',
  index: 83,
},
{
  date: '2025.11.19',
  week: "星期三",
  period: '68',
  status: '1',
  index: 82,
},
{
  date: '2025.11.18',
  week: "星期二",
  period: '67',
  status: '1',
  index: 81,
  isreward: "已补3.2"  
},
{
  date: '2025.11.17',
  week: "星期一",
  period: '66',
  status: '1',
  index: 80,
},
{
  date: '2025.11.16',
  week: "星期日",
  period: '65',
  status: '1',
  index: 79,
},
{
  date: '2025.11.15',
  week: "星期六",
  period: '64',
  status: '1',
  index: 78,
},
{
  date: '2025.11.14',
  week: "星期五",
  period: '63',
  status: '1',
  index: 77,
},
{
  date: '2025.11.13',
  week: "星期四",
  period: '62',
  status: '1',
  index: 76,
},
{
  date: '2025.11.12',
  week: "星期三",
  period: '61',
  status: '1',
  index: 75,
},
{
  date: '2025.11.11',
  week: "星期二",
  period: '60',
  status: '1',
  index: 74,
},
{
  date: '2025.11.10',
  week: "星期一",
  period: '59',
  status: '1',
  index: 73,
  isreward: "已补1.6"  
},
{
  date: '2025.11.9',
  week: "星期日",
  period: '58',
  status: '1',
  index: 72,
},
{
  date: '2025.11.8',
  week: "星期六",
  period: '57',
  status: '1',
  index: 71,
},
{
  date: '2025.11.7',
  week: "星期五",
  period: '56',
  status: '1',
  index: 70,
  isreward: "1"  
},
{
  date: '2025.11.6',
  week: "星期四",
  period: '55',
  status: '1',
  index: 69,
},
{
  date: '2025.11.5',
  week: "星期三",
  period: '54',
  status: '1',
  index: 68,
},
{
  date: '2025.11.4',
  week: "星期二",
  period: '53',
  status: '1',
  index: 67,
},
{
  date: '2025.11.3',
  week: "星期一",
  period: '52',
  status: '1',
  index: 66,
},
{
  date: '2025.11.2',
  week: "星期日",
  period: '51',
  status: '1',
  index: 65,
},
{
  date: '2025.11.1',
  week: "星期六",
  period: '50',
  status: '1',
  index: 64,
},
{
  date: '2025.10.31',
  week: "星期五",
  period: '49',
  status: '1',
  index: 63,
  isreward: "1"  
},
{
  date: '2025.10.30',
  week: "星期四",
  period: '48',
  status: '1',
  index: 62
},
{
  date: '2025.10.29',
  week: "星期三",
  period: '47',
  status: '1',
  index: 61
},
{
  date: '2025.10.28',
  week: "星期二",
  period: '46',
  status: '1',
  index: 60
},
{
  date: '2025.10.27',
  week: "星期一",
  period: '45',
  status: '1',
  index: 59
},
{
  date: '2025.10.26',
  week: "星期日",
  period: '44',
  status: '1',
  index: 58
},
{
  date: '2025.10.25',
  week: "星期六",
  period: '43',
  status: '1',
  index: 57
},
{
  date: '2025.10.24',
  week: "星期五",
  period: '42',
  status: '1',
  index: 56,
  isreward: "1"  
},
{
  date: '2025.10.23',
  week: "星期四",
  period: '41',
  status: '1',
  index: 55,
  isreward: "24日补0.8"  
},
{
  date: '2025.10.22',
  week: "星期三",
  period: '40',
  status: '1',
  index: 54
},
{
  date: '2025.10.21',
  week: "星期二",
  period: '39',
  status: '1',
  index: 53
},
{
  date: '2025.10.20',
  week: "星期一",
  period: '38',
  status: '1',
  index: 52
},
{
  date: '2025.10.19',
  week: "星期日",
  period: '37',
  status: '1',
  index: 51,
  isreward: "扫到妈妈哪里了"
},
{
  date: '2025.10.18',
  week: "星期六",
  period: '36',
  status: '1',
  index: 50
},
{
  date: '2025.10.17',
  week: "星期五",
  period: '35',
  status: '1',
  index: 49,
  isreward: "1"  
},
{
  date: '2025.10.16',
  week: "星期四",
  period: '34',
  status: '1',
  index: 48
},
{
  date: '2025.10.15',
  week: "星期三",
  period: '33',
  status: '1',
  index: 47
},
{
  date: '2025.10.14',
  week: "星期二",
  period: '32',
  status: '1',
  index: 46
},
{
  date: '2025.10.13',
  week: "星期一",
  period: '31',
  status: '1',
  index: 45,
  isreward: "10月17日补"
},
{
  date: '2025.10.12',
  week: "星期日",
  period: '30',
  status: '1',
  index: 44
},
{
  date: '2025.10.11',
  week: "星期六",
  period: '29',
  status: '1',
  index: 43
},
{
  date: '2025.10.10',
  week: "星期五",
  period: '28',
  status: '1',
  index: 42,
  isreward: "1"
},
{
  date: '2025.10.9',
  week: "星期四",
  period: '27',
  status: '1',
  index: 41,
},
{
  date: '2025.10.8',
  week: "星期三",
  period: '26',
  status: '1',
  index: 40,
},
{
  date: '2025.10.7',
  week: "星期二",
  period: '25',
  status: '1',
  index: 39,
},
{
  date: '2025.10.6',
  week: "星期一",
  period: '24',
  status: '1',
  index: 38,
  isreward: "10月8日补"
},
{
  date: '2025.10.5',
  week: "星期日",
  period: '23',
  status: '1',
  index: 37,
},
{
  date: '2025.10.4',
  week: "星期六",
  period: '22',
  status: '1',
  index: 36,
},
{
  date: '2025.10.3',
  week: "星期五",
  period: '21',
  status: '1',
  index: 35,
  isreward: "1"
},
{
  date: '2025.10.2',
  week: "星期四",
  period: '20',
  status: '1',
  index: 34,
},
{
  date: '2025.10.1',
  week: "星期三",
  period: '19',
  status: '1',
  index: 33,
},
{
  date: '2025.9.30',
  week: "星期二",
  period: '18',
  status: '1',
  index: 32,
},
{
  date: '2025.9.29',
  week: "星期一",
  period: '17',
  status: '1',
  index: 31,
},
{
  date: '2025.9.28',
  week: "星期日",
  period: '16',
  status: '1',
  index: 30,
},
{
  date: '2025.9.27',
  week: "星期六",
  period: '15',
  status: '1',
  index: 29,
},
{
  date: '2025.9.26',
  week: "星期五",
  period: '14',
  status: '1',
  index: 28,
  isreward: "1"
},
{
  date: '2025.9.25',
  week: "星期四",
  period: '13',
  status: '1',
  index: 27,
},
{
  date: '2025.9.24',
  week: "星期三",
  period: '12',
  status: '1',
  index: 26,
},
{
  date: '2025.9.23',
  week: "星期二",
  period: '11',
  status: '1',
  index: 25,
  isreward: "补9月22日"
},
{
  date: '2025.9.22',
  week: "星期一",
  period: '10',
  status: '1',
  index: 24,
  isreward: "漏打卡"
},
{
  date: '2025.9.21',
  week: "星期日",
  period: '9',
  status: '1',
  index: 23,
},
{
  date: '2025.9.20',
  week: "星期六",
  period: '8',
  status: '1',
  index: 22,
},
{
  date: '2025.9.19',
  week: "星期五",
  period: '7',
  status: '1',
  index: 21,
  isreward: "1"
},
{
  date: '2025.9.18',
  week: "星期四",
  period: '6',
  status: '1',
  index: 20,
},
{
  date: '2025.9.17',
  week: "星期三",
  period: '5',
  status: '1',
  index: 19,
},
{
  date: '2025.9.16',
  week: "星期二",
  period: '4',
  status: '1',
  index: 18,
},
{
  date: '2025.9.15',
  week: "星期一",
  period: '3',
  status: '1',
  index: 17,
},
{
  date: '2025.9.14',
  week: "星期日",
  period: '2',
  status: '1',
  index: 16,
},
{
  date: '2025.9.13',
  week: "星期六",
  period: '1',
  status: '1',
  index: 15,
},
{
  date: '2025.9.11',
  week: "星期四",
  period: '14',
  status: '1',
  index: 14,
  isreward: "1",
},
{
  date: '2025.9.10',
  week: "星期三",
  period: '13',
  status: '1',
  index: 13,
},
{
  date: '2025.9.9',
  week: "星期二",
  period: '12',
  status: '1',
  index: 12,
},
{
  date: '2025.9.8',
  week: "星期一",
  period: '11',
  status: '1',
  index: 11,
},
{
  date: '2025.9.7',
  week: "星期日",
  period: '10',
  status: '1',
  index: 10,
},
{
  date: '2025.9.6',
  week: "星期六",
  period: '9',
  status: '1',
  index: 9,
},
{
  date: '2025.9.5',
  week: "星期五",
  period: '8',
  status: '1',
  index: 8,
},
{
  date: '2025.9.4',
  week: "星期四",
  period: '7',
  status: '1',
  isreward: "1",
  index: 7,
},
{
  date: '2025.9.3',
  week: "星期三",
  period: '6',
  status: '1',
  index: 6,
},
{
  date: '2025.9.2',
  week: "星期二",
  period: '5',
  status: '1',
  index: 5,
},
{
  date: '2025.9.1',
  week: "星期一",
  period: '4',
  status: '1',
  index: 4,
},
{
  date: '2025.8.31',
  week: "星期日",
  period: '3',
  status: '1',
  index: 3,
},
{
  date: '2025.8.30',
  week: "星期六",
  period: '2',
  status: '1',
  index: 2,
},
{
  date: '2025.8.29',
  week: "星期五",
  period: '1',
  status: '1',
  index: 1,
}
])

const newRecord = reactive({
  year: 2025,
  date: '',
  period: '',
  status: 'pending'
})

// 计算当前日期
const currentDate = computed(() => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  return `${year}年${month}月${day}日`
})

// 方法
const addRecord = () => {
  if (!newRecord.year || !newRecord.date || !newRecord.period) {
    alert('请填写完整信息！')
    return
  }
  
  records.value.push({
    year: newRecord.year,
    date: newRecord.date,
    period: newRecord.period,
    status: newRecord.status
  })
  
  // 清空表单
  newRecord.date = ''
  newRecord.period = ''
  newRecord.status = 'pending'
  
  alert('记录添加成功！')
}

// 组件挂载时执行
onMounted(() => {
  // 可以在这里执行初始化逻辑
})
</script>

<style scoped>
.points-exchange-container {
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 1400px; /* 放宽PC端容器宽度，原为1200 */
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 30px;
  text-align: center;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 300;
}

.header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.activity-info {
  background: #f8f9fa;
  padding: 25px;
  border-bottom: 1px solid #e9ecef;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.info-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #4facfe;
}

.info-card h3 {
  color: #333;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.info-card p {
  color: #666;
  font-size: 1.1rem;
  font-weight: 500;
}

.content {
  padding: 30px;
}

.section {
  margin-bottom: 40px;
}

.section h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.8rem;
  border-bottom: 3px solid #4facfe;
  padding-bottom: 10px;
}

.participants-table {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  -webkit-overflow-scrolling: touch;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

th, td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

th {
  font-weight: 600;
  font-size: 1.1rem;
}

tbody tr {
  transition: all 0.3s ease;
}

tbody tr:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.exchange-ready {
  background: rgba(40, 167, 69, 0.1) !important;
  border-left: 5px solid #28a745;
}

.exchange-ready td {
  font-weight: 600;
}

.exchange-badge {
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  display: inline-block;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.transfer-record {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  color: #d63031;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  display: inline-block;
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes glow {
  from { box-shadow: 0 0 10px rgba(214, 48, 49, 0.3); }
  to { box-shadow: 0 0 20px rgba(214, 48, 49, 0.6); }
}

.status {
  padding: 8px 15px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
}

.status.pending {
  background: #fff3cd;
  color: #856404;
}

.status.eligible {
  background: #d1ecf1;
  color: #0c5460;
}

.current-date {
  text-align: center;
  margin-bottom: 30px;
  padding: 15px;
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  color: white;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
}

.add-data-form {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

.form-group input, .form-group select {
  width: 100%;
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus, .form-group select:focus {
  outline: none;
  border-color: #4facfe;
  box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
}

.btn {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.3);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 中屏：稍微压缩 padding 与字号 */
@media (max-width: 960px) {
  .header h1 {
    font-size: 2rem;
  }
  .header p {
    font-size: 1rem;
  }
  .content {
    padding: 20px;
  }
  th, td {
    padding: 12px 10px;
  }
}

/* 小屏：卡片式重排表格 */
@media (max-width: 600px) {
  .container {
    border-radius: 16px;
  }

  .activity-info {
    padding: 18px;
  }

  .info-grid {
    gap: 14px;
  }

  .info-card {
    padding: 14px 16px;
  }

  .section h2 {
    font-size: 1.4rem;
    padding-bottom: 6px;
    margin-bottom: 14px;
  }

  .current-date {
    font-size: 1rem;
    padding: 12px;
    margin-bottom: 20px;
  }

  .participants-table table,
  .participants-table thead,
  .participants-table tbody,
  .participants-table th,
  .participants-table td,
  .participants-table tr {
    display: block;
    width: 100%;
  }

  .participants-table thead {
    position: absolute;
    left: -9999px;
    top: -9999px;
    height: 0;
    overflow: hidden;
  }

  .participants-table tbody tr {
    background: #ffffff;
    margin: 0 0 14px 0;
    border: 1px solid #eceff3;
    border-radius: 14px;
    padding: 10px 12px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.06);
    animation: none !important;
  }

  .participants-table tbody tr.exchange-ready {
    border-left: 5px solid #28a745;
  }

  .participants-table td {
    border: none;
    position: relative;
    padding: 10px 10px 10px 110px;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .participants-table td + td {
    border-top: 1px dashed #f0f2f5;
  }

  .participants-table td:before {
    content: attr(data-label);
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 600;
    color: #555;
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    text-transform: none;
    width: 86px;
    line-height: 1.2;
    white-space: pre-wrap;
  }

  .exchange-badge,
  .transfer-record,
  .status {
    font-size: 0.7rem;
    padding: 5px 10px;
    border-radius: 14px;
  }

  .exchange-badge {
    animation: none;
  }

  .transfer-record {
    animation: none;
  }

  .points-exchange-container {
    padding: 12px;
  }

  .header {
    padding: 24px 18px;
  }

  .header h1 {
    font-size: 1.6rem;
    margin-bottom: 6px;
  }

  .header p {
    font-size: 0.9rem;
  }
}

/* 极小屏再压缩 */
@media (max-width: 400px) {
  .participants-table td {
    padding-left: 100px;
  }
  .participants-table td:before {
    width: 78px;
    font-size: 0.7rem;
  }
  .header h1 {
    font-size: 1.4rem;
  }
}

/* 优化触控状态 */
@media (hover: none) {
  tbody tr:hover {
    background: #ffffff;
    transform: none;
    box-shadow: 0 4px 14px rgba(0,0,0,0.05);
  }
}

/* 仅桌面端：表格更宽且不换行 */
@media (min-width: 961px) {
  .participants-table table {
    /* 6列至少1200px，避免列过窄；如需更宽可调到1300/1400 */
    min-width: 1200px;
    table-layout: auto;
  }
  .participants-table th,
  .participants-table td {
    white-space: nowrap; /* 禁止换行，避免表头折行 */
  }
}
</style>
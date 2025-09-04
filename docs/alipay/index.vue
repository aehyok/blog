<template>
  <div class="points-exchange-container">
    <div class="container">
      <div class="header">
        <h1>🎯 积分兑换活动管理</h1>
        <p>跟踪参与者积分累积与兑换状态</p>
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
            <p>每月 29 日开始兑换</p>
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
                  <th>参与期数</th>
                  <th>年.月.日</th>
                  <th>星期几</th>
                  <th>兑换状态</th>
                  <th>转账记录</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(record, index) in records"
                  :key="index"
                  :class="{ 'exchange-ready': record.status === 'eligible' }"
                  :style="{ animation: `slideInUp 0.5s ease-out ${index * 0.1}s both` }"
                >
                  <td>{{ record.period }}</td>
                  <td>{{ record.date }}</td>
                  <td>{{ record.week }}</td>
                  <td>
                    <span
                      :class="{
                        'exchange-badge': record.status === 'eligible',
                        'status pending': record.status === 'pending'
                      }"
                    >
                      {{ record.status === 'eligible' ? '⏳可兑换' : '✅ 已打卡' }}
                    </span>
                  </td>
                  <td>
                    <span
                      v-if="record.status === 'eligible'"
                      class="transfer-record"
                    >
                      🔥 已转账奖励
                    </span>
                    <span v-else>-</span>
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
    date: '2025.8.29',
    week: "星期五",
    period: '1',
    status: 'pending'
  },
  {
    date: '2025.8.30',
    week: "星期六",
    period: '2',
    status: 'pending'
  },
  {
    date: '2025.8.31',
    week: "星期日",
    period: '3',
    status: 'pending'
  },
  {
    date: '2025.9.1',
    week: "星期一",
    period: '4',
    status: 'pending'
  },
  {
    date: '2025.9.2',
    week: "星期二",
    period: '5',
    status: 'pending'
  },
  {
    date: '2025.9.3',
    week: "星期三",
    period: '6',
    status: 'pending'
  },
  {
    date: '2025.9.4',
    week: "星期四",
    period: '7',
    status: 'eligible'
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
  max-width: 1200px;
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
</style>
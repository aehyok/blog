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
                  <td data-label="参与期数">{{ record.index }}</td>
                  <td data-label="参与期数">{{ record.period }}</td>
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
},






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
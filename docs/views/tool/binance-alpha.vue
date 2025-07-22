<template>
  <div>111-222</div>
</template>
<script setup>
  import { onMounted } from 'vue'
  import axios from 'axios'
  onMounted(async() => {
    // 这里可以添加一些初始化代码
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
  })
</script>

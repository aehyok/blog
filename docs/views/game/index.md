<script lang="ts" setup>
  import Shuerte from "./shuerte.vue"
  import Pinyin from "./pinyin.vue"
//   import Threejs from "./threejs.vue"
  import { onMounted, ref } from 'vue'
  // 方法1: 使用URLSearchParams (推荐，现代浏览器支持)
  function getUrlParams(url = window.location.href) {
      try {
          const urlObj = new URL(url);
          const params = new URLSearchParams(urlObj.search);
          const result = {};
          // 将所有参数转换为对象
          for (let [key, value] of params) {
              result[key] = value;
          }
          return result;
      } catch (error) {
          console.error('URL解析错误:', error);
          return {};
      }
  }

  // 方法2: 获取单个参数值
  function getUrlParam(paramName, url = window.location.href) {
      try {
          const urlObj = new URL(url);
          const params = new URLSearchParams(urlObj.search);
          return params.get(paramName);
      } catch (error) {
          console.error('URL解析错误:', error);
          return null;
      }
  }

  const type = ref("")
  
  onMounted(() => {
    type.value = getUrlParam("type") || "";

    console.log("type", type.value);
  })
</script>

<Shuerte v-if="type == 'shuerte'" />
<Pinyin v-if="type == 'pinyin'" />
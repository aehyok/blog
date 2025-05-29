<!-- <script setup lang="ts">
  import { ref } from "vue"
  import { useRoute, useRouter } from 'vitepress'
  import { useData } from 'vitepress'
  import IframeResizer from '@iframe-resizer/vue/sfc'

  const { site } = useData()
  const base = site.value.base

  const route = useRoute();
  const url = ref(window.location.origin + base + "html/game/schulte_table.html")
</script>
<IframeResizer
  v-resize="iFrameResizer"
  id="myFrame"
  style="width: 100%; height: 100vh;"
  @on-ready="() => console.log('onReady')"
  :src="url">
</IframeResizer> -->
<script lang="ts" setup>
  import Shuerte from "./shuerte.vue"
  import Pinyin from "./pinyin.vue"
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
  })

  console.log("location", window.location.href)

</script>

<Shuerte v-if="type == 'shuerte'" />
<Pinyin v-if="type == 'pinyin'" />
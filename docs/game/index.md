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
  import { ref } from "vue";
  import { useRoute, useRouter } from 'vitepress'
  import Shuerte from "./shuerte.vue"
  import Pinyin from "./pinyin.vue"

  const router = useRouter()
  const route = useRoute();

  // 封装获取URL参数的方法
  const getUrlParams = () => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    return {
      // 获取单个参数值
      get: (key: string, defaultValue: string = '') => {
        return params.get(key) || defaultValue
      },
      // 获取所有参数对象
      getAll: () => {
        const result: Record<string, string> = {}
        params.forEach((value, key) => {
          result[key] = value
        })
        return result
      },
      // 检查参数是否存在
      has: (key: string) => {
        return params.has(key)
      },
      // 获取参数数组（适用于同名参数）
      getArray: (key: string) => {
        return params.getAll(key)
      }
    }
  }

  // 使用示例
  const urlParams = getUrlParams()

  const type = ref("")
  type.value = urlParams.get('type', '')
  
  console.log("location", window.location.href)
  console.log("route", route)
  console.log("router", router)
  console.log("所有URL参数:", urlParams.getAll())
  console.log("获取size参数:", urlParams.get('type', ''))
  console.log("检查是否有debug参数:", urlParams.has('debug'))

</script>

<Shuerte v-if="type == 'shuerte'" />
<Pinyin v-if="type == 'pinyin'" />
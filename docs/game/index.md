<script setup lang="ts">
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
</IframeResizer>
---
layout: home
---

<script setup lang="ts">
  import { ref } from "vue"
  import IframeResizer from '@iframe-resizer/vue/sfc'
  import { useRoute, useRouter } from 'vitepress'
  import { useData } from 'vitepress'

  const { site } = useData()
  const base = site.value.base

  const route = useRoute();
  console.log(route, "route===route")
  console.log(window.location, "window.location.href")
  
  const url = ref(window.location.origin + base + "html/2025-07-13稳定币.html")
  const width =window.innerWidth;
  const height = window.innerHeight;
</script>
<iframe
  id="myFrame"
  :src="url"
  :width="'100%'"
  :height="height"
  frameborder="0">
</iframe>
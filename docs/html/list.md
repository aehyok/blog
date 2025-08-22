---
layout: home
---

<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import IframeResizer from '@iframe-resizer/vue/sfc'
  import { useRoute, useRouter } from 'vitepress'
  import { useData } from 'vitepress'
  import lists from "./list.json"
  import { getUrlParam } from "./../utils/index.js"

  const { site } = useData()
  const base = site.value.base
  console.log(base, "base--")
  const route = useRoute();
  const width =window.innerWidth;
  const height = window.innerHeight - 80;

  const type = ref("")
  const group = ref("")
  const url = ref("")

  onMounted(() => {
    type.value = getUrlParam("type") || "";
    group.value = getUrlParam("group") || "";
    const groupList = lists.find(item => item.group === group.value);
    const list = groupList.list;
    const item = list.find(item => item.key === type.value);
    const path = `${window.location.origin}${base}html/${group.value}/${item.value}`;

    console.log(path, "path--")
    url.value = path || "404.html";
  })
</script>
<iframe
  id="myFrame"
  :src="url"
  :width="'100%'"
  :height="height"
  frameborder="0">
</iframe>
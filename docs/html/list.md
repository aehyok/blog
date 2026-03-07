---
layout: home
---

<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import { useData } from "vitepress"
  import lists from "./list.json"
  import { getUrlParam } from "./../utils/index.js"

  const { site } = useData()
  const base = site.value.base
  console.log(base, "base--")

  const type = ref("")
  const group = ref("")
  const url = ref("")
  const height = ref(0)

  onMounted(() => {
    if (typeof window === "undefined") {
      return
    }

    height.value = window.innerHeight - 80
    type.value = getUrlParam("type") || "";
    group.value = getUrlParam("group") || "";
    const groupList = lists.find((item) => item.group === group.value);
    const list = groupList?.list ?? [];
    const item = list.find((item) => item.key === type.value);
    const value = item?.value;
    const path = value ? `${window.location.origin}${base}html/${group.value}/${value}` : "";

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

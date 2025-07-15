---
layout: home
---
<script lang="ts" setup>
  import Shuerte from "./shuerte.vue"
  import Pinyin from "./pinyin.vue"
  import Threejs from "./threejs.vue"
  import TimeZone from './timezone.vue'
  import { onMounted, ref } from 'vue'
  import { getUrlParam } from "./../../utils/index.js"

  const type = ref("")
  
  onMounted(() => {
    type.value = getUrlParam("type") || "";

    console.log("type", type.value);
  })
</script>

<Shuerte v-if="type == 'shuerte'" />
<Pinyin v-if="type == 'pinyin'" />
<Threejs v-if="type == 'threejs'" />
<TimeZone v-if="type == 'timezone'" />
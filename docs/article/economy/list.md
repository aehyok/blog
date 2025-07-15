<script setup lang="ts">
  import { ref } from "vue"
  import { useRoute, useRouter } from 'vitepress'
  import { useData } from 'vitepress'

window.addEventListener('message', function(e) {
  var iframe = document.getElementById('myFrame');
  // 假设内嵌页面发送了高度信息
  if (e.data.type === 'resize') {
    iframe.style.height = e.data.height + 'px';
  }
});

  const { site } = useData()
  const base = site.value.base

  const route = useRoute();
  console.log(route, "route===route")
  console.log(window.location, "window.location.href")
  const url = ref(window.location.origin + base + "html/game/schulte_table.html")
</script>
<iframe
  id="myFrame"
  :src="url"
  width="510px"
  height="730px"
  frameborder="0">
</iframe>
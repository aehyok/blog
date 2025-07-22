---
layout: home
---
<script lang="ts" setup>
  import Aes from "./aes-decrypt-tool.vue"
  import Base64Image from "./base64-image.vue"
  import ImageCompress from "./image-compress.vue"
  import ImageFormatConvert from "./image-format-convert.vue"
  import ImageToSvgConvert from "./image-to-svg-convert.vue"
  import TextToImageGenerator from "./text-to-image-generator.vue"
  import Temperature from "./temperature.vue"
  import QrCode from "./qrcode.vue"
  import TimeStampConvert from "./timestamp-convert.vue"
  import { onMounted, ref } from 'vue'
  import { getUrlParam } from "./../../utils/index.js"

  const type = ref("")
  
  onMounted(() => {
    type.value = getUrlParam("type") || "";
  })
</script>

<Aes v-if="type == 'aes'" />
<Base64Image v-if="type == 'base64'" />
<ImageCompress v-if="type == 'compress'" />
<ImageFormatConvert v-if="type == 'convert'" />
<TimeStampConvert v-if="type == 'timestamp-convert'" />
<ImageToSvgConvert v-if="type == 'svg'" />
<TextToImageGenerator v-if="type == 'text-to-image'" />
<QrCode v-if="type == 'qrcode'" />
<Temperature v-if="type == 'temperature'" />
---
head:
  - - meta
    - name: baidu-site-verification
      content: codeva-Fvp1kD6Rtm
layout: home

# title: Home

# hero:
  # name: aehyok
  # text: 那个曾经的少年回来了
  # tagline: Believe in yourself, there's nothing you can't do！
  # image:
  #   src: /home.svg
  #   alt: logo
  # actions:
  #   - theme: brand
  #     text: 更多详情
  #     link: /daily/
  #   - theme: alt
  #     text: 访问我的GitHub
  #     link: https://github.com/aehyok
  #   - theme: alt
  #     text: 关于我
  #     link: /me/
# features:
#   - icon: ⚡️ 
#     title: 记录生活，记录学习
#     details: 很多时候我们可以停下来，多回头看看，让那些美好的记忆成为永恒，让那些痛苦成为我们的财富
#   - icon: 🖖
#     title: 浅层的学习靠输入，深层的学习靠输出
#     details: 简单的学习可能达到会用的目的就可以了，但想深入便会漏洞百出，让你原型毕露，所以对原理和细节的捕捉要融会贯通，更要进行系统性的学习
#   - icon: 🛠️
#     title: 读源码和发博客
#     details: 读懂别人的代码，就像同他人进行交谈，而博客则更像是会自己学习成果的一种展示，最重要的是取悦自己，而非在意那些
---

<script setup lang="ts">
  import Group from "./components/group.vue"
  import { ref } from "vue"
  console.log(window.location.href, "window.location.href")
  const url = ref(window.location.href + "html/game/schulte_table.html")
</script>
<iframe :src="url" width="100%" height="500px" frameborder="0">
</iframe>
<Group />

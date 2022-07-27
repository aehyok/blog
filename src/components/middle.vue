<template>
  <div class="middle">
    <h2 className="message"><span @click="jumpClick()">我参与源码共读活动两个月的时间，写了七篇文章，但更重要的是学到更多的知识。源码共读活动，有兴趣的来一起参与一下吧</span></h2>    
  </div>      
</template>
<script lang="ts" setup>
  const jumpClick = () => window.open('https://juejin.cn/post/7079706017579139102','_blank')
</script>
<style lang="scss" scoped>
.middle {
  display: flex;
  align-items:center;
  justify-content: center;
  margin-top: 80px;
  color: var(--vp-c-brand);
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: var(--vp-c-brand-dark);
  } 
}
</style>

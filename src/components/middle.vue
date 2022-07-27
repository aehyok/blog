<template>
  <div className="middle">
    <div className="container">
      <h2 className="message"><span @click="jumpClick()">我参与源码共读活动两个月的时间，写了七篇文章，但更重要的是学到更多的知识。源码共读活动，有兴趣的来一起参与一下吧</span></h2>
    </div>
  </div>
</template>
<script lang="ts" setup>
  const jumpClick = () => window.open('https://juejin.cn/post/7079706017579139102','_blank')
</script>
<style lang="scss" scoped>
.middle {
  padding-top: 90px;
  margin-top: 20px;
  border-top: 1px solid var(--vp-c-divider-light);

  .container {
    color: var(--vp-c-text-2);
    text-align: center;
    img {
      margin: 0 auto;
      margin-bottom: 15px;
      filter: drop-shadow(#fff 10px 0);
    }

    span {
      color: var(--vp-c-brand);
      cursor: pointer;
      text-decoration: underline;
      &:hover {
        color: var(--vp-c-brand-dark);
      }
    }
  }
}
</style>

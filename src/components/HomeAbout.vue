<script setup lang="ts">
  const goVitePress = () => window.open('https://vitepress.vuejs.org/','_blank')
</script>

<template>
  <div class="home-about">
    <div class="container">
      <img src="../../docs/public/logo.svg" alt="love" />
      <h2 class="message">Use <span @click="goVitePress()">VitePress</span> Build</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-about {
  padding-top: 90px;
  margin-top: 50px;
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

      &:hover {
        color: var(--vp-c-brand-dark);
      }
    }
  }
}
</style>

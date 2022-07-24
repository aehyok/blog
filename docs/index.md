---
layout: home

title: Home

hero:
  name: aehyok
  text: 那个曾经的少年回来了
  tagline: 👋 你好，欢迎来到，我的个人网站.
  image:
    src: /logo-with-shadow.svg
    alt: logo
  actions:
    - theme: brand
      text: Show More
      link: /life/
    - theme: alt
      text: View on GitHub
      link: https://github.com/aehyok

features:
  - icon: ⚡️
    title: Vite, The DX that can't be beat
    details: Lorem ipsum...
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
---

<script setup>
import HomeAboutComponent from '../src/components/HomeAbout.vue'
</script>

<HomeAboutComponent />
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "aehyok",
  description: "hello world",
  base: "/blog-doc/",

  head: [["link", { rel: "icon", type: "image/svg+xml", href: "logo.svg" }]],
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "每日笔记", link: "/days/" },
      { text: "月度笔记", link: "/months/" },
      { text: "我的掘金", link: "/about/" },
      { text: "关于我", link: "/about/" },
      {
        text: "Resources",
        items: [
          { text: "Vue", link: "https://vuejs.org" },
          { text: "Vite", link: "https://vitejs.dev" },
          { text: "VitePress", link: "https://vitepress.vuejs.org" },
          { text: "Nuxt3", link: "https://nuxtjs.org" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/aehyok" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-now aehyok",
    },

    sidebar: [
      {
        text: "每日笔记",
        items: [
          { text: "2022-07", link: "/days/" },
          { text: "2022-06", link: "/days/2022-06" },
          { text: "2022-05", link: "/days/2022-05" },
          { text: "2022-04", link: "/days/2022-04" },
          { text: "2022-03", link: "/days/2022-03" },
          { text: "2022-02", link: "/days/2022-02" },
          { text: "2022-01", link: "/days/2022-01" },
        ],
      },
    ],
  },
  vite: {
    server: {
      host: true,
      port: 3000,
      open: true,
    },
  },
});

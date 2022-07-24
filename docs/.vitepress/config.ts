import { defineConfig } from "vitepress";

export default defineConfig({
  title: "aehyok",
  description: "hello world",
  base: "/blog/",

  head: [["link", { rel: "icon", type: "image/svg+xml", href: "logo.svg" }]],
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "每日笔记", link: "/days/" },
      { text: "月度笔记", link: "/months/" },
      { text: "我的掘金", link: "https://juejin.cn/user/2242659452477016" },
      { text: "关于我", link: "/me/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/aehyok" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present aehyok",
    },

    sidebar: {
      "/days/": [
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
      "/months/": [
        {
          text: "月度笔记",
          items: [
            { text: "2022-07", link: "/months/" },
            { text: "2022-06", link: "/months/2022-06" },
            { text: "2022-05", link: "/months/2022-05" },
            { text: "2022-04", link: "/months/2022-04" },
            { text: "2022-03", link: "/months/2022-03" },
            { text: "2022-02", link: "/months/2022-02" },
            { text: "2022-01", link: "/months/2022-01" },
          ],
        },
      ],
    },
  },
  vite: {
    server: {
      host: true,
      port: 3000,
      open: true,
    },
  },
});

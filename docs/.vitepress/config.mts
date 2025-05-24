import { defineConfig } from 'vitepress' 
import ai from "./ai.json"
import javascript from "./javascript.json"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blog",
  description: "那个曾经的少年回来了",
  base: "/blog",
  ignoreDeadLinks: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "logo.svg" }],
    ["script", 
      {
        src: "https://hananalytics-ene.pages.dev/tracker.min.js",
        defer: true,
      "data-website-id": "blog"
    }]
  ],
  // <script defer src="https://https://.pages.dev/.pages.dev/tracker.min.js" data-website-id="自定义网站唯一标识"></script>
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "我的笔记", link: "/daily/" },
      { text: "武器库", link: "/javascript/" },
      { text: "AI Blogs", link: "/ai/" },
      { text: "我的掘金", link: "https://juejin.cn/user/2242659452477016" },
      { text: "关于我", link: "/me/" },
      { text: "友情链接", link: "/friendly/info", activeMatch: "/friendly/" },
    ],

    sidebar: {
      "/daily/": [
        {
          text: "2024年每日笔记",
          items: [
            { text: "2024-09", link: "/daily/2024-09" },
            { text: "2024-08", link: "/daily/2024-08" },
            { text: "2024-07", link: "/daily/2024-07" },
            { text: "2024-06", link: "/daily/2024-06" },
            { text: "2024-05", link: "/daily/2024-05" },
            { text: "2024-04", link: "/daily/2024-04" },
            { text: "2024-03", link: "/daily/2024-03" },
            { text: "2024-02", link: "/daily/2024-02" },
            { text: "2024-01", link: "/daily/2024-01" },
          ],
        },
        {
          text: "2023年每日笔记",
          items: [
            { text: "2023-12", link: "/daily/2023-12" },
            { text: "2023-11", link: "/daily/2023-11" },
            { text: "2023-10", link: "/daily/2023-10" },
            { text: "2023-09", link: "/daily/2023-09" },
            { text: "2023-08", link: "/daily/2023-08" },
            { text: "2023-07", link: "/daily/2023-07" },
            { text: "2023-06", link: "/daily/2023-06" },
            { text: "2023-05", link: "/daily/2023-05" },
            { text: "2023-04", link: "/daily/2023-04" },
            { text: "2023-03", link: "/daily/2023-03" },
            { text: "2023-02", link: "/daily/2023-02" },
            { text: "2023-01", link: "/daily/2023-01" },
          ],
        },
        {
          text: "2022年每日笔记",
          items: [
            { text: "2022-12", link: "/daily/2022-12" },
            { text: "2022-11", link: "/daily/2022-11" },
            { text: "2022-10", link: "/daily/2022-10" },
            { text: "2022-09", link: "/daily/2022-09" },
            { text: "2022-08", link: "/daily/2022-08" },
            { text: "2022-07", link: "/daily/2022-07" },
            { text: "2022-06", link: "/daily/2022-06" },
            { text: "2022-05", link: "/daily/2022-05" },
            { text: "2022-04", link: "/daily/2022-04" },
            { text: "2022-03", link: "/daily/2022-03" },
            { text: "2022-02", link: "/daily/2022-02" },
            { text: "2022-01", link: "/daily/2022-01" },
          ],
        },
        {
          text: "2021年每日笔记",
          items: [
            { text: "2021-12", link: "/daily/2021-12" },
            { text: "2021-11", link: "/daily/2021-11" },
            { text: "2021-10", link: "/daily/2021-10" },
            { text: "2021-09", link: "/daily/2021-09" },
            { text: "2021-08", link: "/daily/2021-08" },
            { text: "2021-07", link: "/daily/2021-07" },
            { text: "2021-06", link: "/daily/2021-06" },
            { text: "2021-05", link: "/daily/2021-05" },
            { text: "2021-04", link: "/daily/2021-04" },
            { text: "2021-03", link: "/daily/2021-03" },
            { text: "2021-02", link: "/daily/2021-02" },
            { text: "2021-01", link: "/daily/2021-01" },
          ],
        },
      ],
      "/javascript/": javascript,
      "/ai/": ai
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aehyok' }
    ]
  },
})

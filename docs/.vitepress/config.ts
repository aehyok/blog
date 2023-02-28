import { defineConfig } from "vitepress";

export default defineConfig({
  title: "aehyok",
  description: "hello world",
  ignoreDeadLinks: true,
  base: "/blog/",

  head: [["link", { rel: "icon", type: "image/svg+xml", href: "logo.svg" }]],
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "我的笔记", link: "/daily/" },
      { text: "前端总结", link: "/javascript/" },
      { text: "剪映教程", link: "/video/" },
      { text: "我的掘金", link: "https://juejin.cn/user/2242659452477016" },
      { text: "关于我", link: "/me/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/aehyok" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-07-27～present aehyok",
    },

    sidebar: {
      "/video/": [
        {
          text: '剪映教程',
          items: [
            { text: "current", link: "/video/" },
            { text: "目录", link: "/video/dir" },
            { text: "01.认识剪映界面 (04-09)", link: "/video/001/01/3"},
            
            { text: "02.剪映基础工具 (11-39)", link: "/video/001/02/10"},

            { text: "03.剪映进阶工具 (41-81)", link: "/video/001/03/40"},

            { text: "04.剪映高阶工具(83-100)", link: "/video/001/04/82"},

            { text: "05.剪映相关问题(102-111)", link: "/video/001/05/101"}

          ]
        },
        {
          text: '视频剪辑的完整步骤',
          items: [
            { text: "1-5", link: "/video/002/01" }
          ]
        },
        {
          text: '抖音相关配置',
          items: [
            { text: "1-11", link: "/video/003/01" }
          ]
        },
        {
          text: '抖音运营技巧',
          items: [
            { text: "1-4", link: "/video/004/01" }
          ]
        },
        {
          text: '抖音飞书文档',
          items: [
            { text: "1-4", link: "/video/005/01" }
          ]
        }
      ],
      "/javascript/": [
        {
          text: 'JavaScript积累',
          items: [
            { text: "社会", link: "/javascript/" },
            { text: "2022-06年中总结", link: "/life/2022-06" },
            { text: "2021-12年终总结", link: "/life/2021-12" },
          ]
        }
      ],
      "/daily/": [
        {
          text: "2023年每日笔记",
          items: [
            { text: "current", link: "/daily/" },
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
    },
  },
  vite: {
    server: {
      host: true,
      port: 3000,
      open: true,
      proxy: {
        '/so': {
          target: 'http://139.159.245.209:5000', // 代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/so/, '')
        }
      }
    },
  },
});

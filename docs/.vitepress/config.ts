import { link } from "fs";
import { text } from "stream/consumers";
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
      { text: "langchain中文教程", link: "/langchain/" },
      { text: "我的掘金", link: "https://juejin.cn/user/2242659452477016" },
      { text: "关于我", link: "/me/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/aehyok" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-07-27～present aehyok",
    },

    sidebar: {
      "/langchain/": [
        {
          text: "langchain",
          items: [
            { text: "开始", link: "/video/001/01/3" },
            {
              text: "Components组件",
              collapsed: true,
              items: [
                {
                  text: "Schema",
                  items: [
                    { text: "Chat Messages", link: "" },
                    { text: "Document", link: "" },
                    { text: "Examples", link: "" },
                  ],
                },
                {
                  text: "Models",
                  items: [
                    { text: "Chat Models", link: "" },
                    { text: "Embeddings", link: "" },
                    { text: "LLMs", link: "" },
                  ],
                },
                {
                  text: "Prompts",
                  items: [
                    { text: "Prompt Templates", link: "" },
                    { text: "Output Parsers", link: "" },
                    { text: "Example Selectors", link: "" },
                  ],
                },
                { 
                  text: "Indexes", 
                  items: [
                    { text: "Document Loaders", link: "" },
                    { text: "Text Splitters", link: "" },
                    { text: "Vector Stores", link: "" },
                    { text: "Retrievers", link: "" },
                  ],
                },
                { text: "Memory", link: "/video/005/01" },
                { text: "Chains", link: "/video/005/01" },
                { text: "Agents", link: "/video/005/01" },
              ],
            },
            { text: "使用示例", link: "/video/001/03/40" },
            { text: "生产环境", link: "/video/001/04/82" },
            { text: "生态系统", link: "/video/001/05/101" },
            { text: "API参考", link: "/video/001/05/101" },
          ],
        },
        {
          text: "视频剪辑的完整步骤",
          items: [{ text: "1-5", link: "/video/002/01" }],
        },
        {
          text: "抖音相关配置",
          items: [{ text: "1-11", link: "/video/003/01" }],
        },
        {
          text: "抖音运营技巧",
          items: [{ text: "1-4", link: "/video/004/01" }],
        },
        {
          text: "抖音飞书文档",
          items: [{ text: "1-4", link: "/video/005/01" }],
        },
      ],
      "/javascript/": [
        {
          text: "JavaScript积累",
          items: [
            { text: "社会", link: "/javascript/" },
            { text: "2022-06年中总结", link: "/life/2022-06" },
            { text: "2021-12年终总结", link: "/life/2021-12" },
          ],
        },
      ],
      "/daily/": [
        {
          text: "2023年每日笔记",
          items: [
            { text: "current", link: "/daily/" },
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
    },
  },
  vite: {
    server: {
      host: true,
      port: 3333,
      open: false,
      proxy: {
        "/so": {
          target: "http://139.159.245.209:5000", // 代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/so/, ""),
        },
      },
    },
  },
});

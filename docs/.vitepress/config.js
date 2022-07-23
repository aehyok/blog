export default {
  title: 'aehyok',
  description: 'Just playing around.',
  siteTitle: false,
  base: '/blog-doc/',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    //顶部菜单
    nav: [
      {text: '首页', link: '/'},
      { text: '每日笔记', link: 'notes/' },
      { text: '月度汇总', link: 'months/' },
      { text: 'github', link: 'https://github.com/aehyok' },
      {
        text: '关于我',
        items: [
          { text: 'github', link: 'https://github.com/aehyok/vue-qiankun' },
          { text: '掘金', link: 'https://github.com/aehyok' }
        ]
      }
    ],
    sidebar: [
      {
        text: '每日笔记',
        items: [
          { text: '2022-07', link: 'notes/' },
          { text: '2022-06', link: 'notes/2022-06' },
          { text: '2022-05', link: '/notes/2022-05' },
          { text: '2022-04', link: '/notes/2022-04' },
          { text: '2022-03', link: '/notes/2022-03' },
          { text: '2022-02', link: '/notes/2022-02' },
          { text: '2022-01', link: '/notes/2022-01' },
        ]
      }
    ]
  }
}
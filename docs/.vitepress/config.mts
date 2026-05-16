import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs' // 插件

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "小小星空",
  description: "小小输入法 + 星空系列汉字编码方案",
  lang: "zh-CN",
  head: [
    ['link', { rel: 'icon', href: '/xxxk-crystal-64.png' }]
  ],

  // 默认主题
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '在 KeyTao 上在线练习键道', link: 'https://keytao.rea.ink/practice' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '快速开始', link: '/start' },
          { text: '安装小小星空', link: '/install' },
          { text: '方案介绍', link: '/schema' },
          { text: '使用小小星空',
            link: '/usage',
            items: [
              { text: '基本功能', link: '/usage-typing' },
              { text: '进阶设置', link: '/usage-custom' },
            ]
          },
          { text: '更新历史',
            link: '/history',
            items: [
              { text: '2019-2022年归档', link: '/history-2019-2022' },
              { text: '2018年归档', link: '/history-2018' },
              { text: '2017年归档', link: '/history-2017' }
            ]
          },
          { text: '开发指南', link: '/develop'}
        ]
      }
    ],

    outline:{
      level: [2, 3],
      label: '本页大纲'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xkinput/xxxk' }
    ],

    externalLinkIcon: true
  },

  // 插件
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  }

})

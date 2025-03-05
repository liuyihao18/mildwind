import { defineConfig } from 'vitepress'
import { Japanese } from '../japanese/index.js'
import { Program } from '../program/'
import { Tutorials } from '../tutorials/'
import { Tools } from '../tools/'
import { Images } from '../images'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '微风拂过之处',
  description: '夜空星光闪耀',
  lang: 'zh-CN',
  base: '/mildwind/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/images/sun.svg',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    nav: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '日本語の勉強',
        link: Japanese.link,
        activeMatch: Japanese.link
      },
      {
        text: '编程经验',
        link: Program.link,
        activeMatch: Program.link
      },
      {
        text: '知识分享',
        link: Tutorials.link,
        activeMatch: Tutorials.link
      },
      {
        text: '小工具',
        link: Tools.link,
        activeMatch: Tools.link
      },
      {
        text: '图库',
        link: Images.link,
        activeMatch: Images.link
      }
    ],

    sidebar: {
      'japanese': Japanese.sidebar,
      'program': Program.sidebar,
      'tutorials': Tutorials.sidebar,
      'tools': Tools.sidebar,
      'images': Images.sidebar
    },

    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/liuyihao18' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    darkModeSwitchLabel: '主题',

    lastUpdated: {
      text: '最后更新于'
    },

    editLink: {
      pattern: 'https://github.com/liuyihao18/mildwind/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    }
  },
  markdown: {
    math: true,
    toc: [2, 3],
    anchor: {
      slugify: (str) => str.replace(/\(.*?\)/g, () => ''),
    },
    config: (md) => {
      // 在 Markdown 渲染之前对内容进行预处理
      md.core.ruler.before('normalize', 'preprocess', (state) => {
        // 假名标音替换
        state.src = state.src.replace(/\[([^\]]*?{[^\]]*?}[^\]]*?)]/g, (match, content) =>
          `<ruby>${content.replace(/(.*?){(.*?)}/g, (match, kanji, kana) => `${kanji}<rp>(</rp><rt>${kana}</rt><rp>)</rp>`)}</ruby>`
        )
        // 带圆圈数字替换
        state.src = state.src.replace(/\((\d+?)\);/g, (match, accent) =>
          `<span class="circled-number">${accent}</span>`
        )
      })
    }
  },
  sitemap: {
    hostname: 'https://www.liuyihao.top/mildwind/'
  },
  lastUpdated: true,
})

// https://vitepress.dev/guide/custom-theme
import {h, nextTick, onMounted, watch} from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'
import RainbowRing from '../../components/RainbowRing.vue'
import {useRoute} from "vitepress";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-features-after': () => h(RainbowRing)
    })
  },
  enhanceApp({app, router, siteData}) {
    // ...
  },
  setup() {
    const route = useRoute()

    // 日语页面特殊处理
    const toJapanese = () => {
      // 在页面导航中去除假名标注部分
      nextTick().then(() => {
        const elements = document.querySelectorAll('.outline-link')
        elements.forEach((el) => {
          el.innerHTML = el.innerHTML.replace(/\(.*?\)/g, () => '')
        })
      })
    }

    onMounted(() => {
      if (window.location.pathname.includes('japanese')) {
        toJapanese()
      }
    })

    watch(() => route.path, route => {
      if (route.includes('japanese')) {
        toJapanese()
      }
    })
  }
}

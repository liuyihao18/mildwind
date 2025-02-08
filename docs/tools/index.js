const Base = {
  name: 'Base',
  tools: '/tools',
}

export const Tools = {
  name: 'Tools',
  link: `${Base.tools}/`,
  sidebar: {
    text: '小工具',
    link: `${Base.tools}/`,
    items: [
      {
        text: '抽签',
        link: `${Base.tools}/draw`
      },
      {
        text: '今天吃什么食堂',
        link: `${Base.tools}/canteen`
      }
    ]
  }
}
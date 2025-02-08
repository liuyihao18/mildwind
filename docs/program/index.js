const Base = {
  name: 'Base',
  program: '/program',
  haskell: '/program/haskell'
}

const Haskell = {
  name: 'Haskell',
  link: `${Base.haskell}/`,
  sidebar: {
    text: 'Haskell',
    link: `${Base.haskell}/`,
    collapsed: false,
    items: [
      {
        text: 'IO模块',
        link: `${Base.haskell}/io`
      },
      {
        text: '队列',
        link: `${Base.haskell}/queue`
      },
      {
        text: '栈',
        link: `${Base.haskell}/stack`
      },
      {
        text: '树',
        link: `${Base.haskell}/tree`
      },
      {
        text: 'LeetCode',
        link: `${Base.haskell}/leetcode/`,
        collapsed: true,
        items: [
          {
            text: '2529',
            link: `${Base.haskell}/leetcode/2529`,
          }
        ]
      },
    ]
  }
}

export const Program = {
  name: 'Program',
  link: `${Base.program}/`,
  sidebar: {
    text: '编程经验',
    link: `${Base.program}/`,
    items: [
      Haskell.sidebar
    ]
  }
}
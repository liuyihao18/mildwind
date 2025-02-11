const Base = {
  name: 'Base',
  tutorials: '/tutorials',
}

export const Tutorials = {
  name: 'Tutorials',
  link: `${Base.tutorials}/`,
  sidebar: {
    text: '知识分享',
    link: `${Base.tutorials}/`,
    items: [
      {
        text: 'SSH密钥的使用',
        link: `${Base.tutorials}/ssh_keys`
      },
      {
        text: '程序员演奏音乐',
        link: `${Base.tutorials}/music`
      },
      {
        text: '傅里叶分析',
        link: `${Base.tutorials}/fft`
      }
    ]
  }
}
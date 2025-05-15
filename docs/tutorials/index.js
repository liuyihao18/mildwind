const Base = {
  name: 'Base',
  tutorials: '/tutorials',
  UE5: '/tutorials/UE5'
}

const UE5 = {
  name: 'UE5',
  link: `${Base.UE5}`,
  sidebar: {
    text: 'UE5',
    link: `${Base.UE5}`,
    collapsed: false,
    items: [
      {
        text: '虚幻商城',
        link: `${Base.UE5}/fab`,
      }
    ]
  }
}

export const Tutorials = {
  name: 'Tutorials',
  link: `${Base.tutorials}/`,
  sidebar: {
    text: '知识分享',
    link: `${Base.tutorials}/`,
    items: [
      UE5.sidebar,
      {
        text: '简历求职',
        link: `${Base.tutorials}/resume`,
      },
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
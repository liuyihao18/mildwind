const Base = {
  name: 'Base',
  images: '/images',
  gbc: '/images/gbc'
}

const GBC = {
  name: 'GBC',
  link: `${Base.gbc}/`,
  sidebar: {
    text: '少女乐队哭泣',
    link: `${Base.gbc}/`
  }
}

export const Images = {
  name: 'Images',
  link: `${Base.images}/`,
  sidebar: {
    text: '图库',
    link: `${Base.images}/`,
    items: [
      GBC.sidebar
    ]
  }
}
export const layoutComponents = [
  {
    type: 'grid',
    name: '栅格布局',
    icon: 'ld-form-grid',
    columns: [
      {
        span: 12,
        list: []
      },
      {
        span: 12,
        list: []
      }
    ],
    options: {
      gutter: 0, // 0-24
      justify: 'start', // start end center space-around space-between
      align: 'top' // top middle bottom
    }
  },
  {
    type: 'card',
    name: '卡片',
    icon: '',
  },
  {
    type: 'tabs',
    name: 'Tab页',
    icon: '',
  },
]
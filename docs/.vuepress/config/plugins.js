module.exports = [
  // require('./kan-ban-niang.js'),
 
  // 流程图
  ['flowchart'],
  ['@vuepress-reco/vuepress-plugin-kan-ban-niang',{
    messages:{
      welcome: '阿姨敞开肚皮吃大饼', 
      home: '阿姨敞开肚皮吃馅饼',
       theme: '阿姨吃饱换衣服',
        close: '阿姨吃饱了'
    }
  }],
  [
    ['vuepress-plugin-smooth-scroll'],  // 平滑滚动
    ['@vuepress/nprogress'],  // 加载进度条
    ['reading-progress']  // 阅读进度条
  ],
  [ 
    "cursor-effects",
    {
      size: 2,                    // 粒子大小 默认2
      shape: ['star'],  // 粒子形状 默认为 'star' 还可以是 circle
      zIndex: 999999999           //画布层级
    }
  ]

]
module.exports =  {
  
    type: 'blog',
    // 友链
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
      // ...
    ],
    // 主题
    codeTheme: 'tomorrow',
    // 首页logo
    authorAvatar: '/auth.jpg',
    // 导航栏头部
    logo: '/auth.jpg',
    // 是否开启 404 跳转 腾讯公益
    noFoundPageByTencent: false,
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      },
    },
    // 头部导航
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      // { text: '关于', link: '/views/About/', icon:'reco-eye' },

      {
        text: '联系',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/lvtc', icon: 'reco-github' },
          { text: '掘金', link: 'https://juejin.im/user/2172290708282382', icon: 'reco-juejin' }
        ]
      }
    ],
    markdown: {
      lineNumbers: true //代码显示行号
    },
    // 备案
    sidebar: 'auto',  //在所有页面中启用自动生成侧栏
    mode: 'light', //默认显示白天
    modePicker: false ,//关闭颜色调节
    record: '鲁ICP备19009226号',
    recordLink: 'ICP 备案指向链接',
    lastUpdated: '最后更新时间', // string | boolean
    // 项目开始时间，只填写年份
    startYear: '2018',
    // 评论
    valineConfig: {
      appId: 'TDkQWUPamujWEvpzeWUFPNdE-gzGzoHsz',// your appId
      appKey: 'pDYBX6FeNIQ3k6H1BkPkKmk2', // your appKey
    }
    
    

  
}
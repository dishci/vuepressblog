
module.exports = {

  // 默认访问路径
  base: '/',
  // 默认语言 vuepress 默认为英文
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // webpack 配置
  configureWebpack: {

  },
  // host: '0.0.0.0',  // 生成网页地址（本地调试使用）
  // port: '22335',  // 生成网页端口（本地调试使用）
  title: "This_",  // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '想翻身的臭咸鱼',  // meta 中的描述文字，用于SEO
  // 主题
  theme: 'reco',
  // title
  // 移动端优化
  head: [
    // title 浏览器角标
    ['link', { rel: 'icon', href: '/auth.jpg' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  themeConfig:require('./config/reco'),
  // 插件
  plugins:require('./config/plugins')
}  
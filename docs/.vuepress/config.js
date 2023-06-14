const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');


module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../vdoing'), // 使用本地主题

  title: "youlai-mall",
  description: '有来商城官网，覆盖全栈主流技术栈的开源商城项目',
  base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'youlai-mall,有来商城官网,有来官方文档,有来商城,有来文档,有来技术' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['meta', { name: '360-site-verification', content: 'd488ee6064664b938d6e581e592e42e8' }], // 360站点验证

  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南',
        link: '/guide/',
        items: [
          { text: '项目介绍', link: '/pages/52d5c3/' },
          { text: '项目启动', link: '/pages/793dcb/' },
          { text: '项目部署', link: '/pages/mot3n/' },
          { text: '开发规范', link: '/pages/0d40fe/' }
        ]
      },
  /*     {
        text: '在线预览',
        items: [
          { text: 'mall-admin', link: 'https://admin.youlai.tech/' },
          { text: 'mall-app', link: 'http://app.youlai.tech/' },
          { text: 'vue3-element-admin', link: 'https://vue3.youlai.tech/' },
          { text: 'knife4j接口文档', link: 'https://api.youlai.tech/doc.html' },
        ]
      }, */
      {
        text: '生态',
        items: [
          {
            text: '有来商城',
            items: [
              { text: 'youlai-mall', link: 'https://gitee.com/youlaitech/youlai-mall' },
              { text: 'mall-admin', link: 'https://gitee.com/youlaiorg/mall-admin-web' },
              { text: 'mall-app', link: 'https://gitee.com/youlaiorg/mall-app' },
            ]
          },
          {
            text: '其他',
            items: [
              { text: 'vue3-element-admin', link: '/pages/5d571c/' }
            ]
          }
        ]
      },


      /* { text: '问答', link: '/pages/9cc27d/' }, */
      {
        text: '技术栈官网',
        items: [
          {
            text: '后端',
            items: [
              { text: 'spring', link: 'https://spring.io/' },
              { text: 'mybatis-plus', link: 'https://baomidou.com/' },
              { text: 'knife4j', link: 'https://doc.xiaominfo.com/knife4j/documentation/' }
            ]
          },
          {
            text: '前端',
            items: [
              { text: 'element-plus', link: 'https://element-plus.gitee.io/zh-CN/' },
              { text: 'vue3', link: 'https://v3.cn.vuejs.org/guide/introduction.html' },
              { text: 'vite2', link: 'https://cn.vitejs.dev/guide' }
            ]
          },
          {
            text: '移动端',
            items: [
              { text: 'uni-app', link: 'https://uniapp.dcloud.io/' }
            ]
          },

        ]
      },


     /*  { text: '💖支持', link: '/pages/1b12ed/' }, */
      {
        text: '💛友情链接',
        items: [
          {
            text: 'April的记录小屋', link: 'https://april-tong.com'
          },{
            text: '博客园主题awescnb', link: 'https://github.com/cnbloglabs'
          }
        ]
      },
      { text: 'Gitee', link: 'https://gitee.com/haoxr' },
    ],
    sidebarDepth: 3, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: 'https://www.youlai.tech/files/blog/logo_normal.png', // 导航栏logo
    repo: 'youlaitech/youlai-mall', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。


    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: '郝先瑞', // 必需
      href: 'https://gitee.com/haoxr' // 可选的
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:youlaitech@163.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/haoxianrui'
        },
        {
          iconClass: 'icon-gitee',
          title: 'Gitee',
          link: 'https://gitee.com/haoxr'
        },
        {
          iconClass: 'icon-bokeyuan',
          title: '博客园',
          link: 'https://www.cnblogs.com/haoxianrui/'
        },
        {
          iconClass: 'icon-juejin',
          title: '掘金',
          link: 'https://juejin.cn/user/4187394044331261'
        },
        {
          iconClass: 'icon-zhihu',
          title: '知乎',
          link: 'https://www.zhihu.com/people/haoxr'
        },
        {
          iconClass: 'icon-csdn',
          title: 'CSDN',
          link: 'https://blog.csdn.net/u013737132'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2020 - 2023, // 博客创建年份
      copyrightInfo: '有来技术团队', // 博客版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],


    ['fulltext-search'], // 全文搜索


    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: '8e9b75ae4c1dde9551af',
          clientSecret: '9ace8795ad0ba54e53409cf653fee69dc366ced0',
          repo: 'wiki-comments', // GitHub 仓库
          owner: 'haoxianrui', // GitHub仓库所有者
          admin: ['haoxianrui'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body:
            '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
        },
      },
    ],

  ],
  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}

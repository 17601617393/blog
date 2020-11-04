module.exports = {
  // theme: 'antdocs',
  title: 'HUBBLE',
  description: '获取机器智能像读书一样简单',
  base : '/blog/',
  themeConfig : {
    logo: '/favicon.png',
    nav : [
        { text: '首页', link: '/' },
        { text: '文档', link: '/apiword' },
    ],
    sidebar: {
        '/' : [
      		// "/", //指的是根目录的md文件 也就是 README.md 里面的内容
            "apiword", // 根目录创建 apiword.md文件
            "aa",
            "READMEw",
        ]
    },
    sidebarDepth : 2
  }
};

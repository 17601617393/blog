# 介绍
事实上，一个 VuePress 网站是一个由 Vue、Vue Router 和 webpack 驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。

在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 Nuxt 的 nuxt generate 命令，以及其他的一些项目，比如README.md[HUBBLE](http://www.baidu.com)
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
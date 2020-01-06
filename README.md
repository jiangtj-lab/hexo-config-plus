# Hexo Config Plus
[![](https://img.shields.io/npm/v/@jiangtj/hexo-config-plus.svg?style=popout-square)](https://www.npmjs.com/package/@jiangtj/hexo-config-plus)
![npm](https://img.shields.io/npm/l/@jiangtj/hexo-config-plus?style=popout-square)

Read and override theme configuration or languages from _data, extract from [NexT](https://github.com/theme-next/hexo-theme-next) theme

## Install

```bash
yarn add @jiangtj/hexo-config-plus
```

## Use

```yml
config_plus:
  theme: next
  languages: languages
```

And them

Create `next.yml` or `languages.yml` in `${hexo}/source/_data`

next.yml
```js
// config in your theme config
bar:
  foo: true
```

languages.yml
```js
// override languages
[zh-CN]:
  menu:
    home: 首页
    archives: 归档
    categories: 分类
    tags: 标签
    about: 关于
    search: 搜索
    sitemap: 站点地图
    commonweal: 公益 404
en:
// ...
```

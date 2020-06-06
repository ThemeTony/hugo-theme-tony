---
title: "Hugo Theme Tony主题文档"
date: 2020-05-07T09:51:27+08:00
draft: false
keywords: ["移植主题","Hugo","hugo theme"]
categories: ["博客"]
tags: ["博客","Tony主题"]
weight: 1
noclick: false
categoryLink: "/"
slug: "docs-of-hugo-theme-tony"
buy: true
buyLink: "https://htony.js.org"
buyName: "hugo-theme-tony"
buyInfo: "WP-Theme-Tony的hugo移植版"
buyImage: "/images/t.jpg"
buyButtonText: "官网"
weight: 2
---

<!--more-->

<div align="center">
  <h1>hugo-theme-tony</h1>
  <p>一个使用Hugo静态网站生成器的简洁强大的博客主题</p>
</div>




## 预览

![预览](https://cdn.jsdelivr.net/gh/FFRaycoder/cdn/imgs/20200509164101.png "预览")

## 关联项目

https://github.com/ThemeTony/tony_wordpress

## 作者

前端主要由 [HelipengTony](https://github.com/HelipengTony) 制作
[FFRaycoder](https://github.com/FFRaycoder)移植

## 特性

- Medium Zoom
- 左下个人GitHub链接
- 外链引导
- Thumbnail
- 首页标记页面
- 阅读进度条
- 谷歌统计
- 百度推送
- 使用Bootstrap作为CSS模板
- 标签 (页)
- 分类 (页)
- 阅读进度条
- 评论
  - Valine
- Pinned Pages
- JQuery
- Remixicon https://remixicon.cn/
- 归档页
- i18n

## Demo

<https://htony.js.org/>

---

## 要求

- Hugo: 拓展版

## 下载和使用

### 下载

```bash
$ git init
$ git submodule add --depth 1 https://github.com/ThemeTony/hugo-theme-tony.git themes/tony
```

### 使用

1. 替换config.toml

   ```bash
   $ rm config.toml && cp themes/tony/exampleSite/config.toml config.toml
   ```

2. 新建一篇文章和`about`页面

   ```bash
   $ hugo new "posts/hello-world.md"
   $ hugo new "about/index.md"
   ```

3. 启动服务:

   ```bash
   $ hugo server -D
   ```

### 升级

```bash
$ git submodule update --rebase --remote
```

### 自定义

查看<https://github.com/ThemeTony/hugo-theme-tony/tree/master/layouts/partials/custom>

---

## 短代码`pageLink`

```
[[< pageLink "title" "link" "bio" >]]
将 "[]" 用 "{}" 替换
```

{{< pageLink "hugo-theme-tony" "/" "简介" >}}

## 归档页

```bash
$ hugo new archives/_index.md
```

`archives/_index.md`

```markdown
---
title: "Archives"
date: 2020-05-09T15:50:35+08:00
draft: false
type: archives
adjacentPost: false
---
```

## 友链页

```bash
$ hugo new links/_index.md
```

`links/_index.md`

```markdown
---
title: "Links"
date: 2020-05-09T15:50:35+08:00
draft: false
type: links
adjacentPost: false
---
```

复制`themes/tony/data/links.toml`至`blog/data/links.toml`并修改。

## 支持的`Front Matter`：

|                              项                              |                  作用                  |                             示例                             |
| :----------------------------------------------------------: | :------------------------------------: | :----------------------------------------------------------: |
|                           `title`                            |                文章标题                |              `title: "Hugo Theme Tony主题文档"`              |
|                            `date`                            |              文章发布日期              |              `date: 2020-05-07T09:51:27+08:00`               |
|                            `slug`                            |                文章链接                |              `slug: "docs-of-hugo-theme-tony"`               |
|                           `draft`                            |                是否草稿                |                        `draft: false`                        |
|                          `keywords`                          |        文章关键词，用于HTML头部        |                   `keywords: ["移植主题"]`                   |
|                         `categories`                         |                  分类                  |                    `categories: ["博客"]`                    |
|                            `tags`                            |                  标签                  |                       `tags: ["博客"]`                       |
|                           `status`                           | 不允许点击（类似碎碎念），仅在主页展示 |                       `status: false`                        |
|                        `categoryLink`                        |          分类按钮点击时的链接          |                     `categoryLink: "/"`                      |
|                            `toc`                             |              是否开启目录              |                         `toc: true`                          |
| `buy: false`<br/>`buyLink: ""`<br/>`buyName: ""`<br/>`buyInfo: ""`<br/>`buyImage: ""`<br/>`buyButtonText: ""` |                购物链接                | `buyLink: "https://htony.js.org"`<br/>`buyName: "hugo-theme-tony"<br/>``buyInfo: "WP-Theme-Tony的hugo移植版"`<br/>`buyImage: "/images/t.jpg"`<br/>`buyButtonText: "官网"` |
|                         `thumbnail`                          |                 缩略图                 | `thumbnail: "https://cdn.jsdelivr.net/gh/FFRaycoder/cdn/imgs/20200507094721.png"` |
|                           `weight`                           |                文章权重                |                         `weight: 2`                          |
|                         `readingBar`                         |           是否开启阅读进度条           |                      `readingBar: true`                      |
|                        `adjacentPost`                        |             是否显示上下页             |                     `adjacentPost: true`                     |




<div align="center">
  <h1>hugo-theme-tony</h1>
  <p>一个使用Hugo静态网站生成器的简洁强大的博客主题</p>
  <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/ThemeTony/hugo-theme-tony/total">
  <img alt="GitHub" src="https://img.shields.io/github/license/ThemeTony/hugo-theme-tony">
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/ThemeTony/hugo-theme-tony">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/ThemeTony/hugo-theme-tony?style=social">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/ThemeTony/hugo-theme-tony?style=social">
  <img alt="GitHub forks" src="https://img.shields.io/github/watchers/ThemeTony/hugo-theme-tony?style=social">
  <p><a href="https://github.com/ThemeTony/hugo-theme-tony/blob/master/README.md">English</a> | 简体中文
  </p>
</div>

## 预览

![](https://cdn.jsdelivr.net/gh/FFRaycoder/cdn/imgs/20200507094721.png)

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

## 文档

<https://htony.js.org/docs-of-hugo-theme-tony/>

## Demo

<https://htony.js.org/>

---

## 要求

- Hugo: 未知

## 下载和使用

### 下载

```bash
$ git init
$ git clone https://github.com/ThemeTony/hugo-theme-tony.git themes/tony
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

   ```
   ~/blog $ hugo server -D
   ```

### 自定义

查看<https://github.com/ThemeTony/hugo-theme-tony/tree/master/layouts/partials/custom>

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

## 支持的`Front Matter`：

|                              项                              |                  作用                  |                             示例                             |
| :----------------------------------------------------------: | :------------------------------------: | :----------------------------------------------------------: |
|                            title                             |                文章标题                |               title: "Hugo Theme Tony主题文档"               |
|                             date                             |              文章发布日期              |               date: 2020-05-07T09:51:27+08:00                |
|                            draft                             |                是否草稿                |                         draft: false                         |
|                           keywords                           |        文章关键词，用于HTML头部        |                    keywords: ["移植主题"]                    |
|                          categories                          |             分类（未完成）             |                     categories: ["博客"]                     |
|                             tags                             |             标签（未完成）             |                        tags: ["博客"]                        |
|                           noclick                            | 不允许点击（类似碎碎念），仅在主页展示 |                       notclick: false                        |
|                         categoryLink                         |          分类按钮点击时的链接          |                      categoryLink: "/"                       |
|                             toc                              |              是否开启目录              |                          toc: true                           |
| buy: false<br/>buyLink: ""<br/>buyName: ""<br/>buyInfo: ""<br/>buyImage: ""<br/>buyButtonText: "" |                购物链接                | buyLink: "https://htony.js.org"<br/>buyName: "hugo-theme-tony"<br/>buyInfo: "WP-Theme-Tony的hugo移植版"<br/>buyImage: "/images/t.jpg"<br/>buyButtonText: "官网" |
|                          thumbnail                           |                 缩略图                 | thumbnail: "https://cdn.jsdelivr.net/gh/FFRaycoder/cdn/imgs/20200507094721.png" |
|                            weight                            |                文章权重                |                          weight: 2                           |


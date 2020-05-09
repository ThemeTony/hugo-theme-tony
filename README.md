<div align="center">
  <h1>hugo-theme-tony</h1>
  <p>An Elegant Hugo Theme Based on WordPress Theme Tony </p>
  <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/ThemeTony/hugo-theme-tony/total">
  <img alt="GitHub" src="https://img.shields.io/github/license/ThemeTony/hugo-theme-tony">
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/ThemeTony/hugo-theme-tony">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/ThemeTony/hugo-theme-tony?style=social">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/ThemeTony/hugo-theme-tony?style=social">
  <img alt="GitHub forks" src="https://img.shields.io/github/watchers/ThemeTony/hugo-theme-tony?style=social">
  <p>English |
    <a href="https://github.com/ThemeTony/hugo-theme-tony/blob/master/README.zh-cn.md">简体中文</a>
  </p>
</div>


### Screenshot

![](https://raw.githubusercontent.com/ThemeTony/hugo-theme-tony/master/images/screenshot.png)

### Related repository

https://github.com/ThemeTony/tony_wordpress

### Author

The front end is mainly made by [HelipengTony](https://github.com/HelipengTony)
[FFRaycoder](https://github.com/FFRaycoder) transplantation

### Feature

- Medium Zoom
- Social links
- Thumbnail
- Based on Bootstrap
- Tags (Page)
- Categories (Page)
- Reading Bar
- Google Analytics
- Google Site Verification
- Comments
  - Valine
- Baidu Push
- Pinned Pages
- JQuery
- Remixicon https://remixicon.cn/
- Archives Page

### Document

<https://htony.js.org/docs-of-hugo-theme-tony/>

### Demo

<https://htony.js.org/>

---

### Requirements

- Hugo: 0.59.1

### Installation and Usage

#### Download

```bash
$ git init
$ git git submodule add --depth 1 https://github.com/ThemeTony/hugo-theme-tony.git themes/tony
```

#### Usage

1. Replace `config.toml` with [config examples](https://github.com/ThemeTony/hugo-theme-tony/blob/master/exampleSite/config.toml).

   ```bash
   $ rm config.toml && cp themes/tony/exampleSite/config.toml config.toml
   ```

2. Create a new post and the about page:

   ```bash
   $ hugo new "posts/hello-world.md"
   $ hugo new "about/index.md"
   ```

3. Now:

   ```
   ~/blog $ hugo server -D
   ```

## Customize

See <https://github.com/ThemeTony/hugo-theme-tony/tree/master/layouts/partials/custom>

## Archives Page

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

## Supported Front Matter

|                             Name                             |     Description     |                           Example                            |
| :----------------------------------------------------------: | :-----------------: | :----------------------------------------------------------: |
|                            title                             |          *          |                   title: "Hugo Theme Tony"                   |
|                             date                             |          *          |               date: 2020-05-07T09:51:27+08:00                |
|                            `slug`                            |          *          |              `slug: "docs-of-hugo-theme-tony"`               |
|                            draft                             |          *          |                         draft: false                         |
|                           keywords                           |          *          |                      keywords: ["Blog"]                      |
|                          categories                          |          *          |                     categories: ["Blog"]                     |
|                             tags                             |          *          |                        tags: ["Blog"]                        |
|                           noclick                            |      no click       |                       notclick: false                        |
|                         categoryLink                         |    categoryLink     |                      categoryLink: "/"                       |
|                             toc                              |     enable toc      |                          toc: true                           |
| buy: false<br/>buyLink: ""<br/>buyName: ""<br/>buyInfo: ""<br/>buyImage: ""<br/>buyButtonText: "" |      Buy link       | buyLink: "https://htony.js.org"<br/>buyName: "hugo-theme-tony"<br/>buyInfo: "WP-Theme-Tony in hugo"<br/>buyImage: "/images/t.jpg"<br/>buyButtonText: "Website" |
|                          thumbnail                           |      thumbnail      | thumbnail: "https://cdn.jsdelivr.net/gh/FFRaycoder/cdn/imgs/20200507094721.png" |
|                            weight                            |       weight        |                          weight: 2                           |
|                          readingBar                          | enable reading bar  |                       readingBar: true                       |
|                         adjacentPost                         | show adjacent post? |                      adjacentPost: true                      |


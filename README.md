<div align="center">
  <h1>hugo-theme-tony</h1>
  <p>一个使用Hugo静态网站生成器的简洁强大的博客主题</p>
  <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/ThemeTony/hugo-theme-tony/total">
  <img alt="GitHub" src="https://img.shields.io/github/license/ThemeTony/hugo-theme-tony">
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/ThemeTony/hugo-theme-tony">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/ThemeTony/hugo-theme-tony?style=social">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/ThemeTony/hugo-theme-tony?style=social">
  <img alt="GitHub forks" src="https://img.shields.io/github/watchers/ThemeTony/hugo-theme-tony?style=social">
</div>

## 预览

![](https://cdn.jsdelivr.net/gh/FFRaycoder/cdn/imgs/20200505195413.png)

## 关联项目

https://github.com/ThemeTony/tony_wordpress

## 作者

前端主要由 [HelipengTony](https://github.com/HelipengTony) 制作
[FFRaycoder](https://github.com/FFRaycoder)移植

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
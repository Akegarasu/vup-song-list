# vup歌单页


## 修改相关

修改自项目 [song-list-of-nanakaie](https://github.com/alan314m/song-list-of-nanakaie)

修改了一系列的代码问题 (代码结构问题、耦合问题、一系列的重复代码等等问题)，由于打算拿来自用就不提交 PR 了

将一系列的关键设置（包括主页名称、过滤按钮设置等）放入 config ，提供在不大幅度修改源代码的情况下的迁移使用，可以作为模板批量生成。

本项目遵守 MIT License


## 启动开发环境

```bash
npm instal
npm run dev
```


## 导出静态网站

```bash
npm run build
npm run export
# or
npm run buildssg
```

Next.JS自动生成的"out"文件夹可直接用于部署静态网页

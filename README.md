# vup 歌单页

## 部署使用

### 制作歌单内容

**进行此步骤之前请先确保拥有 python 环境并安装依赖**

1. 按照模板 `scrips/example.xlsx` 填写，制作歌单内容
2. 运行 `python3 scripts/converter.py` 生成歌单文件

### 修改配置文件

1. 重命名 `config/constants.example.js` 为 `config/constants.js`
2. 修改其中内容 (以下为示例)

```js
let config = {
  Name: "", // 主页名字

  BiliLiveRoomID: "", // 直播间id

  NetEaseMusicId: "", // 网易云音乐id
  QQMusicId: "", // QQ音乐id
  Footer: "Copyright © 2022 秋葉",

  Cursor: true, // 使用自定义光标图片

  LanguageCategories: ["日语", "英语", "粤语"], // 语言分类
  RemarkCategories: ["流行", "弹唱"], // 标签分类

  BannerTitle: "", // banner 标题

  BannerContent: [
    `秋葉喵`, // banner 内容
  ],

  // 自定义按钮 （可以复制生成更多）
  CustomButtons: [
    {
      link: "https://www.tapechat.net/",
      name: "提问箱",
      image: "/assets/icon/tapechat.png",
    },
    {
      link: "https://space.bilibili.com/",
      name: "录播组",
      image: "",
    },
  ],
};
```

### 启动开发环境

```bash
npm instal
npm run dev
```

### 导出静态网站

```bash
npm run build
npm run export
# or
npm run buildssg
```

Next.JS 自动生成的"out"文件夹可直接用于部署静态网页

## 配置相关

### 鼠标指针

如果需要更改鼠标指针，可以在 config 中更改，默认为 `false`，如果需要请更改为 `true`，并且更改 styles 中的相关样式
并且将鼠标指针图片放入 `./assets/cursor/` 目录下

## 修改相关

修改自项目 [song-list-of-nanakaie](https://github.com/alan314m/song-list-of-nanakaie)

修改了一系列的代码问题 (代码结构问题、耦合问题、一系列的重复代码等等问题)，由于打算拿来自用就不提交 PR 了

将一系列的关键设置（包括主页名称、过滤按钮设置等）放入 config ，提供在不大幅度修改源代码的情况下的迁移使用，可以作为模板批量生成。

本项目遵守 MIT License

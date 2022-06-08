let config = {
    Name: "",
    
    BiliLiveRoomID: "",
    
    NetEaseMusicId: "",
    QQMusicId: "",
    Footer: "Copyright © 2022 秋葉",

    Cursor: true,

    LanguageCategories: ["日语", "英语", "粤语"],
    RemarkCategories: ["流行", "弹唱"],

    BannerTitle: "",
    BannerContent: [
        `秋葉喵`,
     ],

    CustomButtons: [
        {
            link: "https://www.tapechat.net/",
            name: "提问箱",
            image: "/assets/icon/tapechat.png"
        },        
        {
            link: "https://space.bilibili.com/",
            name: "录播组",
            image: ""
        }
    ]
}


module.exports = {
    config
}
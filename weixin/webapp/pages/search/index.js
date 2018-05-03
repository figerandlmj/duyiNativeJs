// pages/search/index.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue:'',
    resultArr:[]
  },

  bindToHome(){
    wx.navigateBack({
      delta:1
    })
  },

  bindSearch(e){
    console.log(e);
    this.searchData(e.detail.value)
  },

  searchData(data){
    var url = app.globalData.doubanBase + app.globalData.searchUrl + data + '&start=0&count=10';
    // wx.request({
    //   url,
    //   method:'GET',
    //   header:{'content-type': 'json'},
    //   success:(res) => {
    //     console.log(res);
    //     this.arrageData(res.data.subjects);
    //   },
    //   fail:(err) => {
    //     console.log(err);
    //   }
    // })
    var res = { "count": 10, "start": 0, "total": 1757, "subjects": [{ "rating": { "max": 10, "average": 7.6, "stars": "40", "min": 0 }, "genres": ["\u52a8\u4f5c", "\u79d1\u5e7b", "\u60ca\u609a"], "title": "X\u6218\u8b662", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1010540\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p50451.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p50451.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p50451.webp" }, "name": "\u5e15\u7279\u91cc\u514b\u00b7\u65af\u56fe\u5c14\u7279", "id": "1010540" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1010508\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p22036.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p22036.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p22036.webp" }, "name": "\u4f11\u00b7\u6770\u514b\u66fc", "id": "1010508" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1054410\/", "avatars": { "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1453792417.87.webp", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1453792417.87.webp", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1453792417.87.webp" }, "name": "\u4f0a\u6069\u00b7\u9ea6\u514b\u83b1\u6069", "id": "1054410" }], "collect_count": 170931, "original_title": "X2", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1049586\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1403264395.93.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1403264395.93.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1403264395.93.webp" }, "name": "\u5e03\u83b1\u6069\u00b7\u8f9b\u683c", "id": "1049586" }], "year": "2003", "images": { "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p726784568.webp", "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p726784568.webp", "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p726784568.webp" }, "alt": "https:\/\/movie.douban.com\/subject\/1305724\/", "id": "1305724" }, { "rating": { "max": 10, "average": 9.2, "stars": "45", "min": 0 }, "genres": ["\u5267\u60c5", "\u79d1\u5e7b", "\u5192\u9669"], "title": "\u661f\u9645\u7a7f\u8d8a", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1040511\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1392653727.04.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1392653727.04.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1392653727.04.webp" }, "name": "\u9a6c\u4fee\u00b7\u9ea6\u5eb7\u7eb3", "id": "1040511" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1048027\/", "avatars": { "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p10467.webp", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p10467.webp", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p10467.webp" }, "name": "\u5b89\u59ae\u00b7\u6d77\u745f\u8587", "id": "1048027" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1000225\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p54076.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p54076.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p54076.webp" }, "name": "\u6770\u897f\u5361\u00b7\u67e5\u65af\u5766", "id": "1000225" }], "collect_count": 630464, "original_title": "Interstellar", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1054524\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p673.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p673.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p673.webp" }, "name": "\u514b\u91cc\u65af\u6258\u5f17\u00b7\u8bfa\u5170", "id": "1054524" }], "year": "2014", "images": { "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2206088801.webp", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2206088801.webp", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2206088801.webp" }, "alt": "https:\/\/movie.douban.com\/subject\/1889243\/", "id": "1889243" }, { "rating": { "max": 10, "average": 0, "stars": "00", "min": 0 }, "genres": ["\u77ed\u7247"], "title": "X", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1211334\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49491.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49491.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49491.webp" }, "name": "\u59dc\u680b\u5143", "id": "1211334" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1213102\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p7836.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p7836.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p7836.webp" }, "name": "\u7533\u654f\u513f", "id": "1213102" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1322386\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p53343.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p53343.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p53343.webp" }, "name": "\u674e\u7d6e", "id": "1322386" }], "collect_count": 24, "original_title": "\ub354 \uc5d1\uc2a4", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1018200\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p51094.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p51094.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p51094.webp" }, "name": "\u91d1\u77e5\u4e91", "id": "1018200" }], "year": "2013", "images": { "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2134555314.webp", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2134555314.webp", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2134555314.webp" }, "alt": "https:\/\/movie.douban.com\/subject\/21360418\/", "id": "21360418" }, { "rating": { "max": 10, "average": 0, "stars": "00", "min": 0 }, "genres": ["\u6050\u6016", "\u79d1\u5e7b", "\u60ca\u609a"], "title": "\u7535\u775b\u602a\u5ba2", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1014042\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1455204646.1.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1455204646.1.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1455204646.1.webp" }, "name": "\u96f7\u00b7\u7c73\u5170\u5fb7", "id": "1014042" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1157518\/", "avatars": { "small": "https://img1.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png", "large": "https://img3.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png", "medium": "https://img1.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png" }, "name": "Diana Van der Vlis", "id": "1157518" }], "collect_count": 33, "original_title": "X:The Man with the X-Ray Eyes", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1002780\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p12632.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p12632.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p12632.webp" }, "name": "\u7f57\u6770\u00b7\u79d1\u66fc", "id": "1002780" }], "year": "1963", "images": { "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2509606394.webp", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2509606394.webp", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2509606394.webp" }, "alt": "https:\/\/movie.douban.com\/subject\/2350882\/", "id": "2350882" }, { "rating": { "max": 10, "average": 5.7, "stars": "30", "min": 0 }, "genres": ["\u52a8\u4f5c", "\u5192\u9669"], "title": "\u6781\u9650\u7279\u5de53\uff1a\u7ec8\u6781\u56de\u5f52", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1041020\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p53186.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p53186.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p53186.webp" }, "name": "\u8303\u00b7\u8fea\u585e\u5c14", "id": "1041020" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1025194\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p10695.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p10695.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p10695.webp" }, "name": "\u7504\u5b50\u4e39", "id": "1025194" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1014002\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4946.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4946.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4946.webp" }, "name": "\u8fea\u76ae\u5361\u00b7\u5e15\u5ea6\u67ef\u59ae", "id": "1014002" }], "collect_count": 85141, "original_title": "xXx: Return of Xander Cage", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1014019\/", "avatars": { "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1493912388.67.webp", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1493912388.67.webp", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1493912388.67.webp" }, "name": "D\u00b7J\u00b7\u5361\u5362\u7d22", "id": "1014019" }], "year": "2017", "images": { "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2410569976.webp", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2410569976.webp", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2410569976.webp" }, "alt": "https:\/\/movie.douban.com\/subject\/3230115\/", "id": "3230115" }, { "rating": { "max": 10, "average": 6.5, "stars": "35", "min": 0 }, "genres": ["\u52a8\u4f5c", "\u72af\u7f6a", "\u5192\u9669"], "title": "\u6781\u9650\u7279\u5de52", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1017946\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p13751.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p13751.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p13751.webp" }, "name": "\u827e\u65af\u00b7\u5e93\u73c0", "id": "1017946" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1054408\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1365913316.45.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1365913316.45.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1365913316.45.webp" }, "name": "\u585e\u7f2a\u5c14\u00b7\u6770\u514b\u900a", "id": "1054408" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1010539\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p9206.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p9206.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p9206.webp" }, "name": "\u5a01\u5ec9\u00b7\u8fbe\u798f", "id": "1010539" }], "collect_count": 30276, "original_title": "xXx: State of the Union", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1018222\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41174.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41174.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p41174.webp" }, "name": "\u674e\u00b7\u5854\u739b\u970d\u745e", "id": "1018222" }], "year": "2005", "images": { "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p1355092179.webp", "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p1355092179.webp", "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p1355092179.webp" }, "alt": "https:\/\/movie.douban.com\/subject\/1309209\/", "id": "1309209" }, { "rating": { "max": 10, "average": 8.5, "stars": "45", "min": 0 }, "genres": ["\u5267\u60c5", "\u8fd0\u52a8"], "title": "\u767e\u4e07\u7f8e\u5143\u5b9d\u8d1d", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1054436\/", "avatars": { "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1438777188.48.webp", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1438777188.48.webp", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1438777188.48.webp" }, "name": "\u514b\u6797\u7279\u00b7\u4f0a\u65af\u7279\u4f0d\u5fb7", "id": "1054436" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1054411\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44654.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44654.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44654.webp" }, "name": "\u5e0c\u62c9\u91cc\u00b7\u65af\u4e07\u514b", "id": "1054411" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1054534\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p34642.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p34642.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p34642.webp" }, "name": "\u6469\u6839\u00b7\u5f17\u91cc\u66fc", "id": "1054534" }], "collect_count": 133286, "original_title": "Million Dollar Baby", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1054436\/", "avatars": { "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1438777188.48.webp", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1438777188.48.webp", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1438777188.48.webp" }, "name": "\u514b\u6797\u7279\u00b7\u4f0a\u65af\u7279\u4f0d\u5fb7", "id": "1054436" }], "year": "2004", "images": { "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p1734930026.webp", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p1734930026.webp", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p1734930026.webp" }, "alt": "https:\/\/movie.douban.com\/subject\/1309016\/", "id": "1309016" }, { "rating": { "max": 10, "average": 9.1, "stars": "45", "min": 0 }, "genres": ["\u5267\u60c5", "\u79d1\u5e7b", "\u52a8\u753b"], "title": "\u798f\u97f3\u6218\u58eb\u65b0\u5267\u573a\u7248\uff1a\u5e8f", "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1019398\/", "avatars": { "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4959.webp", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4959.webp", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4959.webp" }, "name": "\u7eea\u65b9\u60e0\u7f8e", "id": "1019398" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1002915\/", "avatars": { "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p988.webp", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p988.webp", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p988.webp" }, "name": "\u6797\u539f\u60e0\u7f8e", "id": "1002915" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1037583\/", "avatars": { "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4957.webp", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4957.webp", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4957.webp" }, "name": "\u4e09\u77f3\u7434\u4e43", "id": "1037583" }], "collect_count": 42037, "original_title": "\u30f1\u30f4\u30a1\u30f3\u30b2\u30ea\u30f2\u30f3\u65b0\u5287\u5834\u7248\uff1a\u5e8f", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1059748\/", "avatars": { "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1659.webp", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1659.webp", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1659.webp" }, "name": "\u5eb5\u91ce\u79c0\u660e", "id": "1059748" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1014756\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1440332891.21.webp", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1440332891.21.webp", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1440332891.21.webp" }, "name": "\u6469\u7802\u96ea", "id": "1014756" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1005624\/", "avatars": { "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1998.webp", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1998.webp", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1998.webp" }, "name": "\u9e64\u5377\u548c\u54c9", "id": "1005624" }], "year": "2007", "images": { "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p453715063.webp", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p453715063.webp", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p453715063.webp" }, "alt": "https:\/\/movie.douban.com\/subject\/1968790\/", "id": "1968790" }, { "rating": { "max": 10, "average": 0, "stars": "00", "min": 0 }, "genres": ["\u5267\u60c5"], "title": "X\u5149\u7537\u4eba", "casts": [], "collect_count": 4, "original_title": "X", "subtype": "movie", "directors": [{ "alt": null, "avatars": null, "name": "Oddvar Einarson", "id": null }], "year": "1986", "images": { "small": "https://img1.doubanio.com\/view\/subject\/s\/public\/s3976959.jpg", "large": "https://img1.doubanio.com\/view\/subject\/l\/public\/s3976959.jpg", "medium": "https://img1.doubanio.com\/view\/subject\/m\/public\/s3976959.jpg" }, "alt": "https:\/\/movie.douban.com\/subject\/4032569\/", "id": "4032569" }], "title": "\u641c\u7d22 \"x\" \u7684\u7ed3\u679c" };
    this.arrageData(res.subjects);
  },

  arrageData(res){
    let resultArr = [];
    res.forEach(item => {
      let totalDir = item.directors.map(i => i.name).join('/');
      let total = item.rating.average + '分/' + item.year + '/' + totalDir;
      resultArr.push({
        id:item.id,
        title:item.title,
        image:item.images.small,
        total:total
      });
    })
    this.setData({
      resultArr
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
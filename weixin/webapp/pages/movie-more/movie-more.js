// pages/movie-more/movie-more.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showIntheaters:true,
    showComingSoon:false,
    intheaters:[],
    comingSoon:[]
  },

  bindSelect(e){
    var tabId = e.currentTarget.dataset.tabId;
    this.getMovieListData(tabId);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let typeId = options.typeId;
    this.getMovieListData(typeId);
  },

  getMovieListData(typeId) {
    if (typeId == 'intheaters') {
      this.setData({
        showIntheaters: true,
        showComingSoon: false,
      })
    } else {
      this.setData({
        showIntheaters: false,
        showComingSoon: true,
      })
    }
    var url = app.globalData.doubanBase;
    if (typeId == 'intheaters'){
      url += app.globalData.intheaters + '?start=0&count=10';
    }else{
      url += app.globalData.comingSoon + '?start=0&count=10';
    }
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    });
    wx.request({
      url: url,
      method: 'GET',
      header: { 'content-type': 'json' },
      success: (res) => {
        console.log(res);
        this.arrageData(res.data.subjects, typeId);
        // this.setData({
        //   [type]: res.data.subjects
        // })
      },
      fail: err => console.log(err),
      complete() {
        wx.hideToast();
      }
    })
  },

  arrageData(res, typeId) {
    let resultArr = [];
    res.forEach(item => {
      let allCasts = item.casts.map(i => i.name).join('/');
      let totalDir = item.directors.map(i => i.name).join('/');
      let allGenres = item.genres.join('/');
      // let total = item.rating.average + '分/' + item.year + '/' + totalDir;
      resultArr.push({
        // id: item.id,
        // title: item.title,
        // image: item.images.small,
        // total: total
        allCasts,
        totalDir,
        allGenres,
        ...item
      });
    })
    this.setData({
      [typeId]: resultArr
    })
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
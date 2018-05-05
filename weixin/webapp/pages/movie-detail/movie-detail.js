// pages/movie-detail/movie-detail.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    movie:{},
    showAllDesc:false
  },

  bindExtension(){
    this.setData({
      showAllDesc: true
    })
  },

  bindToImg(e){
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: '../movie-img/index?url=' + url
    })
  },

  bindWish(){
    wx.showModal({
      title: '提示',
      content: '一起去看吧',
      showCancel:false,
      success:(res) => {
        console.log(res)
      }
    })
  },

  bindDo(e){
    wx.navigateTo({
      url: '../score/index?id=' + this.data.id
    })
  },

  bindToCelebrity(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../celebrity/index?id=' + id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    let url = app.globalData.doubanBase + app.globalData.subject + id;
    wx.showToast({
      title: '加载中',
      icon:'loading',
      duration:10000
    });
    wx.request({
      url: url,
      type:'GET',
      header:{'content-type':'json'},
      success:(res) => {
        console.log(res);
        let dirsAndCasts = [...res.data.directors,...res.data.casts];
        let allGenres = res.data.year + '/' + res.data.genres.join('/');
        let originName = '原名：' + res.data.original_title;
        let country = '国家：' + res.data.countries.join('/');
        this.setData({
          id,
          movie:{
            dirsAndCasts,
            allGenres,
            originName,
            country,
            ...res.data
          },
          rating:res.data.rating
        })
      },
      fail: (error) => {
        console.log(error);
      },
      complete(){
        wx.hideToast();
      }
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
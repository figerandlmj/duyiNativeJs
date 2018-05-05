// pages/celebrity/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    celebrity:{},
    showAllDesc: false
  },

  bindExtension() {
    this.setData({
      showAllDesc: true
    })
  },

  bindToDetail(e) {
    let id = e.currentTarget.dataset.id;
    wx.redirectTo({
      url: '../movie-detail/movie-detail?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    let url = app.globalData.doubanBase + app.globalData.celebrity + id;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    });
    console.log(url)
    wx.request({
      url: url,
      type: 'GET',
      header: { 'content-type': 'json' },
      success: (res) => {
        console.log(res);
        this.setData({
          celebrity: res.data
        })
      },
      fail: (error) => {
        console.log(error);
      },
      complete() {
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
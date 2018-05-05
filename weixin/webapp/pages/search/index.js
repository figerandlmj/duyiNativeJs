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

  bindToDetail(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id=' + id,
    })
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
    var url = app.globalData.doubanBase + app.globalData.searchUrl + data + '&start=0&count=20';
    wx.request({
      url,
      method:'GET',
      header:{'content-type': 'json'},
      success:(res) => {
        console.log(res);
        this.arrageData(res.data.subjects);
      },
      fail:(err) => {
        console.log(err);
      }
    })
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
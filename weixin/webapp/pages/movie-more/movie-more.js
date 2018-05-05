// pages/movie-more/movie-more.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: app.globalData.windowWidth,
    windowHeight:app.globalData.windowHeight,
    showIntheaters:true,
    showComingSoon:false,
    block:true,
    intheaters:{
      offset:0,
      total:999,
      movies:[]
    },
    comingSoon:{
      offset: 0,
      total: 999,
      movies: []
    }
  },

  bindSelect(e){
    var tabId = e.currentTarget.dataset.tabId;
    this.getMovieListData(tabId);
  },

  handleLower(){
    let typeId = '';
    if (this.data.showIntheaters){
      typeId = 'intheaters';
    }else{
      typeId = 'comingSoon';
    }
    this.getMovieListData(typeId);
  },

  bindToDetail(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let typeId = options.typeId;
    this.getMovieListData(typeId);
  },

  getMovieListData(typeId) {
    let offset = this.data[typeId].offset;
    let total = this.data[typeId].total;
    console.log(offset+'/'+total)
    if (!this.data.block || offset >= total){
      return;
    }else{
      this.data.block = false;
    }
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    });
    var url = app.globalData.doubanBase;
    if (typeId == 'intheaters') {
      url += app.globalData.intheaters;
      this.setData({
        showIntheaters: true,
        showComingSoon: false
      })
    } else {
      url += app.globalData.comingSoon;
      this.setData({
        showIntheaters: false,
        showComingSoon: true
      })
    }
    wx.request({
      url: url,
      method: 'GET',
      header: { 'content-type': 'json' },
      data:{
        start: offset,
        count:5,
      },
      success: (res) => {
        console.log(res);
        this.arrageData(res.data.subjects, typeId, res.data.total);
      },
      fail: err => console.log(err),
      complete() {
        wx.hideToast();
      }
    })
  },

  arrageData(res, typeId, total) {
    let resultArr = this.data[typeId].movies;
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
        typeId: typeId,
        windowWidth: this.data.windowWidth,
        allCasts,
        totalDir,
        allGenres,
        ...item
      });
    })
    this.setData({
      [typeId]: {
        offset: this.data[typeId].offset + res.length,
        total: total,
        movies: resultArr
      },
      block:true
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
// pages/post/points/points.js
Page({

  /**
   * Page initial data
   */
  data: {
    tabs: ["全部", "增加", "减少"], //定义navbar的选项卡

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      currentUser: app.globalData.userInfo,
    });


  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },
  tabClick: function (e) {
    //如果切换Tab才响应
    if (e.currentTarget.id != this.data.activeIndex) {
      this.setData({
        points: res.data.objects
      });
    }
  },
  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
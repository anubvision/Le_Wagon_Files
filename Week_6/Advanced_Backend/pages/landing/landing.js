// pages/landing/landing.js
Page({

  data: {
    title: "tasty...",
    cta: "Start here"
  },

  goToStories: function() {
    wx.reLaunch({
      url: '/pages/stories/stories'
    })
  },

  onLoad: function (options) {
    const app = getApp();
    console.log(app.globalData.userInfo)
  },
  userInfoHandler(data) {
    const app = getApp()
    wx.BaaS.auth.loginWithWechat(data).then(user => {
      console.log(user);
      app.globalData.userInfo = user;
      wx.reLaunch({
        url: '/pages/stories/stories',
      });
      this.setData({
        currentUser: user,
      }); err => {
    }
    })
  },

  onReady: function () {
  },

  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

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

  onShareAppMessage: function () {

  }
})
// pages/post/post.js

const app = getApp();

Page({


  data: {
   currentUser: {},
   order: []
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
  
  onLoad: function (options) {
    this.setData({
      currentUser: app.globalData.userInfo,
    });
    //get your user points from your global data by .get('points')
    const points = this.data.currentUser.get('points');
    this.setData({
      userPoints: points,
    })

    let orders = new wx.BaaS.TableObject('order');

    orders.find().then((res) => {
      console.log('res',res)
      this.setData ({
        order: res.data.objects
      })
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

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
//app.js
App({
  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin');
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo, wx.requestPayment);
    //wx.BaaS.init(app.client.ID)
    wx.BaaS.init('29578368652a91f88d80');

    wx.BaaS.auth.loginWithWechat().then(user => {
      this.globalData.userInfo = user;
      wx.setStorageSync('userInfo', user);

      console.log(user);
    }, err => {
      console.log();
    })
    
  },

  globalData: {
    userInfo: wx.getStorageSync('userInfo') || null,
    stories:[]
  }
})
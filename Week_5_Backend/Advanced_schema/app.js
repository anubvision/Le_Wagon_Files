//app.js
App({
  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin');
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo, wx.requestPayment);
    //wx.BaaS.init(app.client.ID)
    wx.BaaS.init('29578368652a91f88d80');


    wx.BaaS.auth.loginWithWechat().then(user => {
      this.globalData.userInfo = user;
      console.log(user);
    }, err => {
      console.log();
    }
    ) // 静默登录
    
  },

  globalData: {
    stories:[]
  }
})
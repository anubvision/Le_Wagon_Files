//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    //connect 
    require('./sdk-wechat.3.12.0');
    let clientID= 'fb0b918b2cea994cf179';
    wx.BaaS.init(clientID);
    
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    stories:[ 
      // { content: "Summer time sadness...", title: "Erika", image:"/pages/images/IMG_1370.jpg"},
      // { content: "We create high quality poster design by team of aspiring graphic designers.", title: "Monica", image:"/pages/images/image-4.jpg" },
      // { content: "easily swayed by women.......a foolish trait to have", title: "Clare", image:"/pages/images/image-3.jpg"}
  ]
  }
})
// pages/stories/stories.js
let app= getApp()
Page({

  /*** Page initial data*/
  data: {
    images:[
      '/pages/images/IMG_1370.jpg','/pages/images/image-4.jpg','/pages/images/image-3.jpg', '/pages/images/image-5.jpg', '/pages/images/image-6.jpg'
    ],
    stories: [] 
 },
showStory(event) {
    let data = event.currentTarget.dataset;
    let id = data.id;
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    });
},
toStory: function(event) {
  console.log('res', event);
  const id = event.currentTarget.dataset.id;
  wx.navigateTo({
    url: 'detail?id' + id,
  })
  this.dataset({
  })
},
goToPost: function() {
  wx.reLaunch({
    url: '/pages/show/show'
  })
},

// this is a function to handle data
  setStories: function (data) {
   let page = this; 
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: 'pages/stories/stories'
    })
  },

  getRequestData: function (res) {
    let page = this;
    let tempStories = res.data.objects;
    let stories = tempStories.map((s, idx) => {
      s.img = page.data.images[idx]
      return s;
    });
    this.setData ({
      stories: tempStories
    });
  },

  onLoad: function (options) {
    // let stories = 'story'
    // let story = new wx.BaaS.TableObject('stories');
    // //stories() - is the promise .then() => moves to console.log
    // story.find().then((res) => {
    //   console.log('res',res)
    //   this.setData ({
    //     stories: res.data.objects
    //   })
    // })
    // console.log('test function');
  // //Old API
      let page = this;
      let id = options.id
      const request = {
        url: `https://cloud.minapp.com/oserve/v1/table/84988/record/`,
        header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
        method: 'GET', // If no method, default is GET
        success: page.getRequestData
      }
      wx.request(request);
    },
    deleteStory(event) {
      let data = event.currentTarget.dataset;
      // make a DELETE request
      wx.request({
        url: `https://cloud.minapp.com/oserve/v1/table/84988/record/${id}`,
        method: 'DELETE',
        header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above

        success() {
          // no need for response data
          // redirect to index page when done
          wx.switchTab({
            url: '/pages/stories/stories'
          });
        },
      })
    },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    this.setData({
      stories: app.globalData.stories
    })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // this.setData({
    //   stories:app.globalData.stories
    // })
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
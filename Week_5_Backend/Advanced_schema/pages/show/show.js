// pages/stories/stories.js
let app= getApp()
Page({

  data: {
    restaurants: [],
    review: [],
    ratings: [1, 2, 3, 4, 5],
    rating: 'None',
  },
  
  onLoad: function (options) {
    this.setData({
      currentUser: app.globalData.userInfo,
    });
    let restaurants = new wx.BaaS.TableObject('restaurants_detail');
    let reviews = new wx.BaaS.TableObject('review');

    restaurants.get(options.id).then((res)=>{
      console.log('restaurant_detail', res);
      this.setData({
        restaurants: res.data
      })
    });
    // review section
    let query = new wx.BaaS.Query();

    query.compare('restaurants_id', '=', options.id);
    reviews.setQuery(query).find().then((res)=> {
      console.log('restaurants review', res);
      this.setData({
        review: res.data.objects,
      })
    });
  },

  formSubmit: function (event) {
    console.log('formSubmit', event);
    let content = event.detail.value.content;
    let review = new wx.BaaS.TableObject('review');
    let newReview = review.create();
    const data = {
      restaurants_id: this.data.restaurants.id,
      rating: this.data.rating,
      content: content,
    }

    newReview.set(data);
    // Post data to API
    newReview.save().then((res) => {
      console.log('save res', res);
      const newReviews = this.data.review;
      newReviews.push(res.data);
      this.setData({
        review: newReviews,
      })
    })
  },

  formReset: function () {
    console.log('reset')
  },

  onRate: function(event) {
    console.log('change rating', event);
    const index = event.detail.value;
    this.setData({
      rating: this.data.rating[index],
    })
  },

  userInfoHandler(data) {
    wx.BaaS.auth.loginWithWechat(data).then(user => {
        app.globalData.userInfo = user;
        this.setData({
          currentUser: user,
        })
      }, err => {
    })
  },

  onReady: function () {

  },
  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})
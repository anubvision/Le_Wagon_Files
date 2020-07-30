// pages/stories/stories.js
let app= getApp()
Page({

  /*** Page initial data*/
  data: {
    images:['/pages/images/image-3.jpg'],
    stories: [],
    comment: []
  },
  formSubmit: function (event) {
      let name = event.detail.value.name
      let content = event.detail.value.content
      // STORING IN API
      let story = {
        name: name,
        content: text,
      }
      // STORING IN API
      const request = {
        url: `https://cloud.minapp.com/oserve/v1/table/85188/record/`,
        method: 'POST',
        data: story,
        success() {
          wx.reLaunch({
            url: '/pages/show/show',
          }) 
          }
        }
      // Post data to API
      wx.request(request);
  },




  onLoad: function (options) {
    let page = this;
    let tableName= 'stories';
    let story = new wx.BaaS.TableObject('stories');
    let recordID = options.id;
    story.get(recordID).then((res)=>{
      console.log(res);
      this.setData({
        stories: res.data
      })
    });

   
    let id = options.id;
    let comments = new wx.BaaS.TableObject('comment');
    let query = new wx.BaaS.Query();
    query.compare('stories_id', '=', id);

    comments.setQuery(query).find().then((res)=> {
      console.log('comment', res);
      this.setData({
        comment: res.data.objects,
      })
    });
  },

  voteComment(event) {
    let page = this
    let data = event.currentTarget.dataset;
    let votes = data.votes;
    let new_votes = { votes: votes + 1 }

    // make a PUT request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'PUT',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above
      data: new_votes,

      success(res) {
        // new comment from response
        let new_comment = res.data
      
        // all the page comments
        let comments = page.data.comments
      
        // find the comment from page comments to update based on unique id
        let comment = comments.find(comment => comment._id == new_comment.id)
      
        // update comment
        comment.votes = new_comment.votes
      
        // update the page comments
        page.setData({comments: comments})
      }
    });
  },

  deleteComment(event) {
    let page = this;
    let data = event.currentTarget.dataset;

    // make a DELETE request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'DELETE',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above
      success(){
        let commentsrequest = {
          url:'https://cloud.minapp.com/oserve/v1/table/85188/record/',
          method: 'GET',
          header: {'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
          success(res) {
            console.log(res)
            page.setData({
              comments:res.data.objects
            })
          },
          data: {
            where: {
              "story_id":{"$eq":data.id}
            }
          },
        }
        wx.request(commentsrequest)
      }
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
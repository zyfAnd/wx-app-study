Page({
  data: {
    list: {}
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
  onLoad: function (options) {
    var that = this
    this.title = options.title
    wx.request({
      url: 'https://www.daliandaxue.cn/wxapi/liwushuo_literature',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
         that.setData({
           list: res.data.stories
         })
         console.log(res.data)
      }
    })
  }
})

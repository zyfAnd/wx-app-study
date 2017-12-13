// latest.js
var Api = require('../../utils/api.js');
Page({
  data: {
    list:[],
    hidden: false
  },
  onPullDownRefresh: function(){
    this.fetchData();
    console.log('onPullDownRefresh', new Date())
  },
  fetchData: function () {
    var that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: 'https://www.daliandaxue.cn/wxapi/liwushuo_literature',
      success: function (res) {
        console.log(res);
        that.setData({
          list: res.data.data.items
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },
  onLoad: function () {
    this.fetchData();
  }
})
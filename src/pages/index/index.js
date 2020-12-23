//index.js
//获取应用实例
const app = getApp()
import { formatNumber } from '@/utils/index'
Page({
  onLoad: function () {
    const user = "小明";
    user = "小红";
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    longitude: 116.403963,
    latitude: 39.915119,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 页面加载完成就会执行的函数
  onLoad: function () {
    // console.log('地图组件加载完成了，期待经度纬度获取')
    wx.getLocation({
      type: 'gcj02',
      success:(res) => {
        let longitude = res.longitude;
        let latitute = res.latitude;
        this.setData({
          //wxml 模板的值
          longitude:longitude,
          latitude:latitute
        })
      }
    })
  },
  toScan(){
    // console.log('toScan');
    wx.scanCode({
      success:(res) =>{
        // wx.showModal({
        //   title: '二维码',
        //   content:JSON.stringify(res)
        // })
        let id = res.result;
        wx.navigateTo({
          url: `/pages/unlock/unlock?id=${id}`,
        })
      },
    })
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

// miniprogram/pages/homepage/homepage.js
const app = getApp();  // 全局方法
Page({

  /**
   * 页面的初始数据
   */
  data: {
    offline: false, // 打烊
    isShow: true,
    imgUrls: [
      'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/152869/36/733/129848/5f6da644E8c640b50/35117f17f08456ad.jpg!q70.dpg.webp',
      'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/149571/38/9289/117895/5f6da644E784f911b/21a284afecffdb4f.jpg!q70.dpg.webp'
    ],
    activeTypeId: 0,
    typeCat: [ /** 类型的数据配置 */
      {
        id: 0, name:"美味鲜果",
      },
      {
        id: 1, name: "今日特惠"
      },
      {
        id: 2, name: "新鲜上架"
      },
      {
        id: 3, name: "店主推荐"
      }
    ]
  },
  typeSwitch(e) {
    this.setData({
      activeTypeId: e.currentTarget.dataset.id
    })
    console.log(e.currentTarget.dataset.id);
  },
  tapToDetail(e) {
    const _id = e.currentTarget.dataset.fID;
    
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('load');
    wx.showLoading({
      title: '正在加载中...',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('ready');
    // 进行交互 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('show');
    // 数据请求  区云端请求数据 需要花时间  因此尽量提前请求
    // 提前到 ready之前    onload 正在加载 加载且计算渲染界面 需要占用进程 
    //  app 是当前应用
    app.getInfoByOrder('fruit-board', 'time', 'desc', e => {
      this.setData({
        fruitInfo: e.data,
        isShow:true
      })
      wx.hideLoading(); // 

    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

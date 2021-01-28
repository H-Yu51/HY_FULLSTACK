// miniprogram/pages/detail/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleID: null,
    fruitDetail: {},
    popUpHidden:true,
    popCartCount:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.name);
    let _id = options._id;
    // 是你的， 不是我的
    // let _id = '023ce955600029e80471bc632c76c669';
    // console.log(_id);
    this.setData({
      articleID: _id
    })
    app.getInfoWhere('fruit-board', {_id: _id}, e => {
      this.setData({
        fruitDetail: e.data["0"]
      })
    })
  },
  toCart() {
    // 1. 加入购物车
    // 2. 关闭
    let newCartItem = this.data.fruitDetail;
    newCartItem.num = this.data.popCartCount;
    app.isNotRepeteToCart(newCartItem)
    wx.showToast({
      title: '已添加至购物车'
    })
    this.setData({
      popUpHidden: true
    })
  },
  minusCount() {
    this.setData({
      popCartCount: this.data.popCartCount - 1
    })
  },
  plusCount() {
    this.setData({
      popCartCount: this.data.popCartCount + 1
    })
  },
  toBuy(){
    let newCartItem = this.data.fruitDetail
    newCartItem.num = this.data.popCartCount
    app.isNotRepeteToCart(newCartItem)
    wx.switchTab({
      url: '/pages/cart/cart/cart',
    })
  },
  addToCart(){
    this.setData({
      popUpHidden:false,
    })
  },
  popCancel(){
    this.setData({
      popUpHidden: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

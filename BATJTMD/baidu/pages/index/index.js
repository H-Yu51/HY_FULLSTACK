Page({

    // 页面的初始数据
    data: {
        charts:[{
            id:'bar',
            name:'柱状图'
        }, {
            id:'pie',
            name:'饼图'
        }, {
            id:'line',
            name:'折线图'
        }
    ]
    },
    showChart(e){
        const id = e.currentTarget.dataset.id;
        swan.navigateTo({
            url: '/pages/' + id + '/' + id
        });
    },

    // 页面的生命周期函数 – 监听页面加载
    onLoad(res) {

    },

    // 页面的生命周期函数 – 监听页面初次渲染完成
    onReady(res) {

    },

    // 页面的生命周期函数 – 监听页面显示
    onShow(res) {

    },

    // 页面的生命周期函数 – 监听页面隐藏
    onHide(res) {

    },

    // 页面的生命周期函数 – 监听页面卸载
    onUnload(res) {

    },

    // 页面的生命周期函数 – 监听页面重启，单击重启按钮时触发
    onForceReLaunch(res) {

    },

    // 页面的事件处理函数 – 监听用户下拉动作
    onPullDownRefresh(res) {

    },

    // 页面的事件处理函数 – 上拉触底事件的处理函数
    onReachBottom(res) {

    },

    // 页面的事件处理函数 – 用户点击右上角转发
    onShareAppMessage(res) {

    },

    // 页面的事件处理函数 – 页面滚动触发事件的处理函数
    onPageScroll(res) {

    },

    // 页面的事件处理函数 – 当前是 tab 页时，点击 tab 时触发
    onTabItemTap(res) {

    }
});
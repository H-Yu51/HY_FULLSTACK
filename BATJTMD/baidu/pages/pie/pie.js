const option = {
    backgroundColor: '#ffffff',
    legend: {
    },
    color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#FFDB5C', '#FF9F7F'],
    series: [{
        label: {
            normal: {
                fontSize: 14
            }
        },
        type: 'pie',
        center: ['50%', '50%'],
        radius: [30, '60%'],
        data: [{
            value: 55,
            name: '北京'
        }, {
            value: 20,
            name: '武汉'
        }, {
            value: 10,
            name: '杭州'
        }, {
            value: 20,
            name: '广州'
        }, {
            value: 38,
            name: '上海'
        }],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 2, 2, 0.3)'
            }
        }
    }]
};


Page({
    data: {
        option: option
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    }
});
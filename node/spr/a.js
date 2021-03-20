//  node 
const tecenttime = require('./tecenttime')

// 事件监听如何实现   订阅 发布者 模式
tecenttime.on('newlesson', ({price}) => {
    if(price < 80) {
        console.log('ok, buy it');
    }

})
// import es6  模块化方案
// 游戏规则与设备  分离    游戏在小程序上玩  移植怎么办
// 复用性
const game = require('./game.js');  // commonJS 模块化方案

var winCount = 0;
process.stdin.on('data',(buffer) => {
    const action = buffer.toString().trim();  // 二进制变string
    const result = game(action);
    if(result == 1){
        winCount++
        if(winCount == 3){
            console.log('我不玩了，哼');
            process.exit()
        }
    }
})
// js 事件监听 
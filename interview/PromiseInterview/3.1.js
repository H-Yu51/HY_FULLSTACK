let hj = new Promise((resolve, reject) => {
    // 封装一个时间较多的任务 实现异步变同步
    // resolve(10)
    setTimeout(() => {
        // console.log(0);
        resolve(10)   // 把状态改为 fulfiiled  然后 把value改为10
        // reject('脑子瓦特了')
        // 可能有错误
        // throw new Error('出错了')

    }, 1000)
}).then(() => {
       throw Error("1123")
    
}).catch((err) => {
    console.log(err);
})
.then(() => {
    console.log('异常捕获后可以继续.then');
})
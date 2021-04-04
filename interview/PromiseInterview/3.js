
//1.  执行器  在 promise实例化完成后立即执行 然后 调用resolve 函数 
//2.  状态转移  
//  如何让执行器决定状态转移的执行
// 3. thenable
class Promise {
    constructor(executor) {
        this.state = 'pending'  // 初始化 未完成状态 
        // 成功的值
        this.value = undefined;
        // 失败的原因
        this.reason = undefined;

        // .then 立即执行后 state为pengding  把.then保存起来
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        // 把异步任务 把结果交给 resolve
        let resolve = (value) => {
            console.log(value, '----------');
            if (this.state === 'pending') {
                console.log('fulfilled 状态被执行');
                this.value = value
                this.state = 'fulfilled'
                // onFulfilled 要执行一次
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        }
        let reject = (reason) => {
            if (this.state === 'pending') {
                console.log('rejected 状态被执行');
                this.reason = reason
                this.state = 'rejected'
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }
        try {
            executor(resolve, reject)
        }
        catch (e) {
            reject(err)
        }

    }

    // 一个promise解决了后（完成状态转移，把控制权交出来）
    then(onFullfilled, onRejected) {
        if (this.state == 'pending') {
            this.onResolvedCallbacks.push(() => {
                onFullfilled(this.value)
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.value)
            })
        }
        console.log('then');

        // 状态为fulfilled  执行成功  传入成功后的回调  把执行权转移
        if (this.state == 'fulfiiied') {
            console.log('onfulfilled');
            onFullfilled(this.value);
        }
        // 状态为rejected 执行失败  传入失败后的回调  把执行权转移
        if (this.state == 'rejected') {
            onRejected(this.reason)
        }
    }
}


new Promise((resolve, reject) => {
    // 封装一个时间较多的任务 实现异步变同步

    setTimeout(() => {
        // console.log(0);
        resolve(10)   // 把状态改为 fulfiiled  然后 把value改为10
        // reject('脑子瓦特了')
        // 可能有错误
        // throw new Error('出错了')

    }, 1000)
}).then((data) => {
    console.log(data, '++++++++++');
})
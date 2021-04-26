
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
    then(onFulfilled, onRejected) {
        let promise2 = new Promise((resolve, reject) => {
            if (this.state == 'pending') {
                this.onResolvedCallbacks.push(() => {
                    onFulfilled(this.value)
                })
                this.onRejectedCallbacks.push(() => {
                    onRejected(this.reason)
                })
            }
            console.log('then');
            // 状态为fulfilled  执行成功  传入成功后的回调  把执行权转移
            if (this.state == 'fulfiiied') {
                console.log('onfulfilled');
                onFulfilled(this.value);
            }
            // 状态为rejected 执行失败  传入失败后的回调  把执行权转移
            if (this.state == 'rejected') {
                onRejected(this.reason)
            }
        })
        return promise2
    }
}


let p1 = new Promise((resolve, reject) => {

    console.log(0);
    setTimeout(() => {   
        // reject('我不爱你了')
        console.log('setTimeout');   
        resolve(10)
        // 可能有错误
        // throw new Error('是你的错')      
    }, 1000)
}).then((data) => {
    console.log(data, '++++++++++');
})
// 0
// then
// rejected 状态被执行
// 我不爱你了 ++++++++++
// setTimeout
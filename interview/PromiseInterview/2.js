
//1.  执行器  在 promise实例化完成后立即执行 然后 调用resolve 函数 
//2.  状态转移  
//  如何让执行器决定状态转移的执行
class Promise {
    constructor(executor) {
        this.state = 'pending'  // 初始化 未完成状态 
        // 成功的值
        this.value = undefined;
        // 失败的原因
        this.reason = undefined;

        // 把异步任务 把结果交给 resolve
        let resolve = (value) => {
            console.log(value);
            if (this.state === 'pending'){
                console.log('fulfilled 状态被执行');
                this.value = value
                this.state = 'fulfilled'
            }              
        }
        let reject = (reason) => {
            if (this.state === 'pending'){
                console.log('rejected 状态被执行');
                this.reason = reason
                this.state = 'rejected'
            }
        }
        try{
            executor(resolve, reject)
        }
        catch(e){
            reject(err)
        }
        
    }

}


new Promise((resolve, reject) => {
    // 封装一个时间较多的任务 实现异步变同步

    setTimeout(() => {
        console.log(0);
        resolve(10)
        reject('脑子瓦特了')
        // 可能有错误
        // throw new Error('出错了')
        
    }, 1000)
})
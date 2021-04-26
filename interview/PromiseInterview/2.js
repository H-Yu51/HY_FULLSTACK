
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
            console.log(reason);
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


let p1 = new Promise((resolve, reject) => {

    console.log(0);
    setTimeout(() => {      
        resolve(10)
        // reject('我不爱你了')
        console.log('setTimeout');
        // 可能有错误
        // throw new Error('是你的错')      
    }, 1000)
})
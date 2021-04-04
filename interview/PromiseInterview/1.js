//  1. 三种状态  实现promise 类
// promise 是一个类 把异步任务封装实例 通过执行器 把异步任务执行
class Promise {
    constructor(executor) {
        // 1. cb 的意义   函数   executor 执行器  立即执行

        // 2. resolve  是一个函数
        // 3. 状态只能从一个状态到另一个状态
        // payload  固定格式    resolve  一个执行结果  reject 返回error 报错信息
        let resolve = (data) => { }
        let reject = () => { }
        executor(resolve, reject)
    }
}


new Promise((resolve, reject) => {
    // 封装一个时间较多的任务 实现异步变同步

    setTimeout(() => {
        console.log(0);
        resolve(10)
    }, 1000)
})
# ES6 
  - js 的最新版本 
    传统es5 + 最新的es6 + 版本
    1. ES6手册， 阮一峰
    https://es6.ruanyifeng.com/
    2. ES6 15篇 

  ES6知识点通过大厂的审核
  通过阮一峰的ES6在线刷， 每周看一篇
  冴羽的文章


  - 1. HTTP Server
        live-server 启动,   是web服务+自动刷新功能 
        fetch(url)   // Promise 的一个实例
          .then((data) => {

          })   // 异步  所以需要then
    2.  let p1 = new Promise((resolve,reject) => {
      resolve(2)    // 解决promise 
    })   //有费时的任务   不能同步

    3. p1.then()

    4. 同步:  一个CPU计算时间就可以快速执行完的指令  比如 加减乘除 变量声明

    5. 异步  多线程 
        发端于耗时的功能需求   比如  定时器（以后会发生）setTimeout
                                    promise   fetch    先承诺 后 resolve（）帮助异步任务解决promise承诺  解决执行流
                          let p1 = new Promise()
                          let p2 = new Promise()
       
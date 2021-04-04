# 面试官为什么要问Promise 

- promise A+ 规范
  - promise 几种状态  pending未完成    fulfilled完成    rejected失败  
  - 只会从未完成到完成
  - 状态一旦改变 将不能更改
  1. JS  异步   callback => promise => generator => await

  2. 手写题代表promise    new   Object.create    clone
     状态转移的编程  如何实现三种状态转换   如何实现thenable   如何实现thenable链式调用  promise.all 方法实现

  3. promise 比较复杂  面试中生成灵魂拷问  压制性打击
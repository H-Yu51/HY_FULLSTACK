- es6 class  与 es5 构造函数+prototype的关系？

- 一线公司问题？
    es6 class  关键字在实现时有什么不同的地方
    - ES6 class  构造函数在constructor上 
       只可以被new  不能作为普通函数执行


    - Person.prototype 不可枚举 
       // Object.keys()   可枚举
        //Object.keys()返回一个数组，包括对象自身的（不含继承的）
        // 所有可枚举属性（不含 Symbol 属性）的键名。
        Object.getOwnPropertyNames（） 可调用

    - es6 比es5 实现更丰富    
      es6 声明属性时 

    1. Babel  js转义  把es6 class  转为 es6 function

     bable 的意义  
       es6 不断更新  需要对 node的版本进行适应 

    - 手写一个babel  手写 es6  class 的转义代码
        babel 
 
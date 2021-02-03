- intanceof  功能
instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

- 手写intanceof 功能函数
    1. 原型三者关系
        类（构造函数+原型对象）   实例对象
        Constructor.prototype = 原型对象
        原型对象.constructor = 构造函数
        实例对象.__proto__ = 原型对象

        instanceof  就是检测 构造函数的 prototype 属性是否出现在该对象的原型链上

// babel  手写 源码分析篇

// 1. Person class  -> function  new 普通调用报错
// 转义后为 function 不是class
// 把1.js转义为 下面代码

function _classCallCheck(instance, Constructor){
    if(!(instance instanceof Constructor)){
        throw new TypeError('Cannot call a class as a function')
    }
}


var Person = function Person(name){ //es5
    // 函数运行方式 不是new 的方式



    // if(this instanceof Person){// 如何判断是用普通方式调用？？
    //     throw new TypeError('Cannot call a class as a function')
    // }
    _classCallCheck(this,Person);
    this.name = name;

}


new Person();
Person();


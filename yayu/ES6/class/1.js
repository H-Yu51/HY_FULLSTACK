// es6 提供class关键字
// 实际上还是原型式继承
// 只是让它和大型语言一样的写法
class Person{
    // 新写法
    // state = {
    //     count : 0
    // }
    count = 0;
    constructor(name){
        this.name = name;
    }
    sayHello(){
        return 'hello I am' + this.name
    }
}

const kevin = new Person('Kevin');
console.log(kevin.sayHello());
// 可访问 不可枚举
console.log(kevin.__proto__,Person.prototype);
// Person();
// Object.keys()
//Object.keys()返回一个数组，包括对象自身的（不含继承的）
// 所有可枚举属性（不含 Symbol 属性）的键名。
console.log(Object.keys(Person.prototype));

console.log(Object.getOwnPropertyNames(Person.prototype));
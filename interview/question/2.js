//   js 类型装换

// 转数字
// 转布尔值
// 转字符串


// 隐式类型转换

// 显式类型转换


let obj = {name: 'obj'}; // 引用类型
console.log(obj.toString()); // [object Object]  || null
// console.log(typeof null);
console.log(Object.prototype.toString.call(null));  // [object Null]

console.log('1'.toString()); //  可以运行  原因是？
//  简单数据类型没有toString方法  这里的原因是？  
// String 是简单类型
//  区别与引用类型  
//  js  提供了  Number() string() Boolean()  包装类型   可以方便 "abc".split('a')

// 实际上 在后台执行 类型转换 引用类型和基本包装对象的区别在于：生存期
// 引用类型所创建的对象，在执行的期间一直在内存中，而基本包装对象只是存在了一瞬间。

var s = new String("1")  // 包装对象 在 后台执行
console.log(s); // '1'.toString()  实际上没有toString方法   在执行瞬间 在后台执行 new Object
// 在基本类型中，有三个比较特殊的存在就是：String Number Boolean，这三个基本类型都有自己对应的包装对象。
// 包装对象，其实就是对象，有相应的属性和方法。调用方法的过程，是在后台偷偷发生的。

var s1 = 'some text';
console.log(typeof s1);  // string

console.log(s1.toString());

s1.color = 'red';  // 无法添加  因为销毁了 无法访问  基本包装对象只是存在了一瞬间  
console.log(s1.color); //undefined


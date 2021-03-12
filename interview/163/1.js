// symbol

// es6 引入的 原始数据类型 symbol  表示独一无二的值

// var sym1 = Symbol();
// var sym2 = Symbol('foo');// 唯一的
// var sym3 = Symbol('foo');
// console.log(sym2 == sym3); // false
// typeof sym1    symbol

// 1. 函数创建 原始数据  有什么冲突？  如何说明两种数据用法上的区别？
// 不能 new symbol 
// 变量需要分配内存空间    原始数据类型大小固定被频繁使用 分配在栈中   引用数据类型大小不定 空间大  分配在堆中
//var sym3 = Symbol('foo');
// Symbol（字符串）？ foo有何用？  做一个标识
// console.log(sym3.toString());  // foo
// 2.Symbol  有何用？


// var mySymbol = Symbol() // 初始化
// // var shapeType = { // 形状的类型  json object 
// //   triangle: 'Triangle', // 三角形
// //   square: 'Square' // 正方形
// // }
// // 不用给值
// var shapeType = { // 形状的类型  json object 
//     triangle: Symbol(), // 三角形
//     square: Symbol() // 正方形
//   }
// function getArea(shape, options) {
//   var area = 0;
//   switch(shape) {
//     case shapeType.triangle:
//       area = 0.5 * options.width *options.height;
//     break;
//     case shapeType.square:
//       area = options.width * options.height;
//     break;
//   }
//   return area;
// }
// console.log(getArea(shapeType.triangle, {
//   width: 100,
//   height: 100
// }))

// var s1 = Symbol('foo');
// console.log(typeof s1);
// console.log(s1 instanceof Symbol); //false   原始数据类型   instanceof   左侧为右侧的类对象 
// console.log(s1 instanceof Object);//instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

// const obj = {
//     toString(){ // 覆盖Object.prototype.toString()
//         return 'abc'
//     }
// }
// const sym = Symbol(obj);
// console.log(sym.toString());

// var sym = Symbol("my symbol");
// console.log("your symvol is " + sym); // Cannot convert a Symbol value to a string

// symbol 用于 json key 表示唯一 
// var obj = {}
// var a = Symbol("a") // 可以用于json object key
// var b = Symbol("b")

// obj[a] = 'hello';
// obj[b] = 'world';
// obj.cc =  'cc';// 常规  

// console.log(Object.keys(obj));//[ 'cc' ]
// console.log(Object.getOwnPropertyNames(obj));//[ 'cc' ]
// console.log(Object.getOwnPropertySymbols(obj));//[ Symbol(a), Symbol(b) ]
// console.log(obj[a]);//hello

// for(let key in obj){
//     console.log(obj[key]); //cc
// }
// Object.getOwnPropertySymbols(obj).forEach(item => {
//     console.log(obj[item]);
//     //  hello
//     // hello
//     // world
// })


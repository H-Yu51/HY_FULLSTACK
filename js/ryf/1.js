
// 函数名  对象
//  js 类型 
let a ;  //声明一个变量  类型是  undefined(类型未定义)
const b = "hello";   //常量无法改变的类型的  String 
const c = [1,2,3];   //  JS 无数组类型   数组属于Object类型下的数组对象
c.push(4);   //相同类型可以进行操作   



console.log(typeof a);
console.log(typeof b);
console.log( c);
a = 1;
console.log(typeof a);
function Cart(){
    this.type="折耳";
}
Cart.prototype.sayHello = function(){
    console.log('喵');
}
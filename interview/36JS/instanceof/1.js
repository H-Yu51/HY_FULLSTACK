function NewinstanceOf(left, right) {
    // 定义“爸爸” 
     // let proto = Object.getPrototypeOf(left); //同理获取原型对象
    let proto = left.__proto__
    while (true) {
        // “爸爸”为空了，已经到了Object.prototype了
        if (proto === null) return false
        // 找到了 返回true
        if (proto === right.prototype) {
            return true
        }
        // 继续往上找
        proto = proto.__proto__
    }
}
// 定义构造函数
function C(){}
function D(){}

var o = new C();
console.log(NewinstanceOf(o,C));// true，因为 Object.getPrototypeOf(o) === C.prototype
console.log(NewinstanceOf(o,D));// false，因为 D.prototype 不在 o 的原型链上
console.log(NewinstanceOf(o,Object));// true，因为 Object.prototype.isPrototypeOf(o) 返回 true
console.log(NewinstanceOf(C.prototype,Object));// true，同上

C.prototype = {};
var o2 = new C();
console.log(NewinstanceOf(o2,C));// true
console.log(NewinstanceOf(o,C));// false，C.prototype 指向了一个空对象,这个空对象不在 o 的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
console.log(NewinstanceOf(o3,D));// true
console.log(NewinstanceOf(o3,C)); // true 因为 C.prototype 现在在 o3 的原型链上
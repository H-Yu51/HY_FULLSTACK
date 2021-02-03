// 手写instanceof 功能

function instance_of(L, R) {
    L = L.__proto__;
    while (true) {
        if(L === null) return false;
        if (L === R.prototype) {
            return true;
        }
        L = L.__proto__;
    }

}

function Animal(name) {
    this.name = name;
}
// 原型对象   
Animal.prototype = {
    // 原型对象上的方法
    canRun: function () {
        console.log('it can run');
    }
}
function Cat() {
    this.speak = '喵';
}
// 将Animal的实例交给 Cat 子类构造函数prototype属性作为原型对象
Cat.prototype = new Animal('miao');
// 原型对象的constructor属性， 谁是原型对象的构造函数
Cat.prototype.constructor = Cat;


const dog = new Animal('dog')
const cat = new Cat('加菲猫')
console.log(instance_of(dog, Animal));
// __proto__ 指向原型对象Cat   Cat是Animal的子类 
console.log(cat.__proto__);//{ name: 'miao', constructor: [Function: Cat] }
// 指向  Animal的prototype
console.log(cat.__proto__.__proto__);//{ canRun: [Function: canRun] }

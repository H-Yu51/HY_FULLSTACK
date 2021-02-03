//类

function Animal(name){
    this.name = name;
}
// 原型对象   
Animal.prototype = {
    // 原型对象上的方法
    canRun: function(){
        console.log('it can run');
    }
}
// 实例
const dog = new Animal('dog')
dog.canRun();
console.log(dog instanceof Animal);  // ture

console.log(Animal.prototype); //{ canRun: [Function: canRun] }
console.log(dog.__proto__); // { canRun: [Function: canRun] }
console.log(Animal.prototype === dog.__proto__);  // ture
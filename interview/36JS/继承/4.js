function object(o) {
    function F() {}
    F.prototype = o
    return new F()
}
// 寄生式组合继承
function inheritPrototype(child,parent){
    // 创建父类原型的副本
    let prototypeParent = object(parent.prototype);
    //把新建立的 原型对象 赋值constructor
    prototypeParent.constructor = child;
    // 赋值给 子类原型
    child.prototype = prototypeParent;
}


function Person(name) {
    this.name = name
    this.friends = ['Bob', 'Bill']
}
Person.prototype.getName = function() {
    return this.name
}
function Student(name, age) {
    // 继承属性
    Person.call(this, name)
    this.age = age
}
// 组合继承方法
// Student.prototype =  new Person()
// 寄生式组合继承
inheritPrototype(Student,Person);
Student.prototype.sayAge = function() {
    return this.age;
}

let student1 = new Student('Jay', 18)
student1.friends.push('Amy')
console.log(student1.friends); // [ 'Bob', 'Bill', 'Amy' ]
console.log(student1.getName());// Jay
console.log(student1.sayAge());// 18


let student2 = new Student('Van', 22)
console.log(student2.friends) // [ 'Bob', 'Bill' ]
console.log(student2.getName());// Van
console.log(student2.sayAge());// 22



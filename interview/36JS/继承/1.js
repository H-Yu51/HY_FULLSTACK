// 原型链继承

function Person() {
    this.name = ['Bill', 'Bob']
}
Person.prototype.getName = function() {
    return this.name
}
function Student() {}
Student.prototype =  new Person()

let s1 = new Student()
s1.name.push('Jay')
console.log(s1.name);//[ 'Bill', 'Bob', 'Jay' ]

let s2 = new Student()
console.log(s2.name)  //[ 'Bill', 'Bob', 'Jay' ]


// 组合继承
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
// 继承方法
Student.prototype =  new Person()
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



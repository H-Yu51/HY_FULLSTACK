// // 构造函数继承
// function Person() {
//     this.name = ['Bill', 'Bob']
// }
// function Student() {
//     // 继承 Person
//     // 等于在Student上运行Person的所有初始化代码，让每个实例有自己的name属性
//     Person.call(this);
// }

// let s1 = new Student()
// s1.name.push('Jay')
// console.log(s1.name);//[ 'Bill', 'Bob', 'Jay' ]

// let s2 = new Student()
// console.log(s2.name)  //[ 'Bill', 'Bob',  ]


// 构造函数继承
// function Person(name) {
//     this.name = name
// }
// function Student() {
//     // 继承 Person 传参
//     Person.call(this,'Bob');
//     // 实例属性
//     this.age = 18
// }

// let s1 = new Student()
// console.log(s1.name)  //Bob
// console.log(s1.age);  //18

function Person(name) {
    this.name = name
    this.getName = function() {
        return this.name
    }
}
function Student(name) {
    Person.call(this, name)
}
let s1 = new Student('Jay')
console.log(s1.name);//Jay
let s2 = new Student('Bob')
console.log(s2.name)  //Bob
console.log(s2.getName());


class Person {
    constructor(name) {
        this.name = name
    } 
    getName() {
        return this.name
    }
}
class Student extends Person {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}

let p1 = new Person('Bob')
console.log(p1.name); // Bob
console.log(p1.getName());//Bob

let s1 = new Student('Jay',18)
console.log(s1.name,s1.age); // Jay 18
console.log(s1.getName());//Jay
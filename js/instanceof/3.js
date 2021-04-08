Object.prototype.a = 'a'
Function.prototype.a = 'a1'
function Person(){}
var person = new Person()


console.dir(Person);
console.log(person.a);
console.log(Person.a);
console.log(person.__proto__.__proto__.constructor);

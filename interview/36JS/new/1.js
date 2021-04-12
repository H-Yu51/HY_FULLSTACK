function myNew(obj, ...args) {
    //Object.create()方法创建一个新对象，
    // 使用现有的对象来提供新创建的对象的__proto__。
    //构造obj.prototype 的原型  NewObj
    const NewObj = Object.create(obj.prototype); 
    console.log(NewObj); // Person1 {} , Person2{}
    // 新对象的this绑定到构造函数中this
    const result = obj.apply(NewObj, args);  
    console.log(result); // undefined  {name:'Bob',age:18}
    // 若构造函数返回 非空对象 ，则返回该对象， 否则返回刚刚创建的对象
    return (typeof result === 'object' && result !== null) ? result : NewObj;
}

function Person1(name, age) {
    this.name = name;
    this.age = age;
}
function Person2(name, age) {
    this.name = name;
    this.age = age;
    return {
        name: 'Bob',
        age: 18
    }
}

const Bill = myNew(Person1, 'Bill', 18);
console.log(Bill.name, Bill.age)//Bill 18

const Jay = myNew(Person2, 'Jay', 18)
console.log(Jay.name, Jay.age); // Bob  18
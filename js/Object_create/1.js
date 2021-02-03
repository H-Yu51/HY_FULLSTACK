//  实现Object.create功能
// 返回一个新对象  原型对象为参数
const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log('My name is ${this.name}... ');
    }
}
function create (pro) {
    function F(){

    }
    F.prototype = pro;
    return new F();
}
const me = create(person);

console.log(me.__proto__);
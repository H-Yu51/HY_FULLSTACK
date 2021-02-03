

const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log('My name is ${this.name}... ');
    }
}

const me = Object.create(person);

console.log(me.isHuman);
console.log(me.__proto__); //
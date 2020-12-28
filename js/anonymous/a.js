class Book{
    constructor(isbn, title, author){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
    display(){
        return `
            ISBN号:${this.isbn}
            Title:${this.title}
            Author：${this.author}
        `
    }
}

const jsDontKnow = new Book('111', 'aa', 'bb')


// 找到原型对象
// Book.prototype.display = () => {}
// Book.prototype.sell = () => {}
// Book.prototype = {
//     display:() => {},
//     sell:() =>{}
// }
console.log(jsDontKnow.__proto__ == Book.prototype) // true

// jsDontKnow.constructor == Book  为 true
// Book == Book.prototype.constructor   为true
// jsDontKnow.constructor == Book == Book.prototype.constructor  为false
console.log(jsDontKnow.constructor == Book == Book.prototype.constructor) //false



console.log(jsDontKnow.__proto__ == Book.prototype) //true


// console.log(jsDontKnow.hasOwnProperty('display'))
console.log(jsDontKnow.hasOwnProperty('isbn')) //true 
console.log(jsDontKnow.hasOwnProperty('display')) //false

console.log(jsDontKnow.__proto__.__proto__.__proto__) //null


console.log(Book.prototype.isPrototypeOf(jsDontKnow)) //true

console.log("display" in jsDontKnow) // true 










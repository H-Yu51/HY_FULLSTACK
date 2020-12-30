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
//  作业 返回所有对象上可以调用的方法或属性  attrs
let jsDontKnow = new Book('111', 'aa', 'bb');
//  ... 展开运算符   把二维数组展开一维数组 [ [ 'isbn', 'title', 'author' ] ]  ----> [ 'isbn', 'title', 'author' ]
const attrs = (obj) =>{
    return [...Object.getOwnPropertyNames(jsDontKnow), ...Object.getOwnPropertyNames(Book.prototype)];
    
}

// const attrs = [...Object.getOwnPropertyNames(jsDontKnow), ...Object.getOwnPropertyNames(Book.prototype)];
// [ 'isbn', 'title', 'author', 'constructor', 'display' ]
console.log(attrs(jsDontKnow))
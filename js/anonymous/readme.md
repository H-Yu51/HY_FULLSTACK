# js 的灵魂在函数，函数的灵魂在匿名函数

- 匿名函数
    ```js
        ()=>{}
        (function(){

        })()
    ```




- 作为图书管理系统，写个书的入库类
  js 面向对象 的 class 关键字来的比较晚   用function 来构造类
  js的类 与火车相似 ：  火车头  车身

  ```JavaScript
  // 单独的构造函数就可以成为一个类
  function Book(isbn, title, author){
      this.isbn = isbn;
      this.title = title;
      this.author = author;
  }
  ```

- 构造函数与普通函数的区别
    构造函数 生产实例  constructor 
    this...
    this...
    构造过程就是生成实例的过程
    1. 构造函数函数名 首字母大写
    2. 运行方式  new 一个新对象会执行 一次构造函数  且 this 指向当前对象
    3. this 指向实例
    4. 对象上   ，任何对象的原型对象  都是Object 
    5. Object  是顶层对象 实际上是一个函数
    6. 任何一个函数都有一个 prototype 属性 用来添加方法   
        Book.prototype.display = function(){
            return this.isbn + this.title + this.author;
        }

    7. 任何一个对象实例都一定有__proto__都有私有属性  
        指向原型对象，基于原型的
        js_dontknow.display();  基于原型继承book父类
        只要原型链上 有的 子类就可以调用

        

    9. JS  class 关键字只是语法糖






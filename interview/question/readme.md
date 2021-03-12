# js  有没有可能
 
 console.log(a == 1 && a == 2 && a == 3) // ture?

  null 不是对象  但是typeof 是object

  js的存在bug   最初版本 32位系统
  二进制   前三位 用来标明类型的  
  undefined  null   000000000
  {} 前三位 也是 000   

  typeof  只取三位判断 


  为了性能考虑 低位存储变量的类型信息   

    Object。prototype.toString()  //进行类型转换

# '1'.toString()
 String -> Object 上的
 Object  是所有对象的原型对象
 简单数据类型不会有方法   没有原型链
 1. 创建包装类实例  new String（'1')
 2. 调用该实例的的方法  '1'.toString()  s..toString()
 3. 使命已经完成  销毁实例  s = null  

console.log('1'.toString()); //  可以运行  原因是？
//  简单数据类型没有toString方法  这里的原因是？  
// String 是简单类型
//  区别与引用类型  
//  js  提供了  Number() string() Boolean()  包装类型   可以方便 "abc".split('a')

// 实际上 在后台执行 类型转换 引用类型和基本包装对象的区别在于：生存期
// 引用类型所创建的对象，在执行的期间一直在内存中，而基本包装对象只是存在了一瞬间。

var s = new String("1")  // 包装对象 在 后台执行
console.log(s); // '1'.toString()  实际上没有toString方法   在执行瞬间 在后台执行 new Object
// 在基本类型中，有三个比较特殊的存在就是：String Number Boolean，这三个基本类型都有自己对应的包装对象。
// 包装对象，其实就是对象，有相应的属性和方法。调用方法的过程，是在后台偷偷发生的。
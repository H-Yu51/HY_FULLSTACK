

- 阮一峰

 1.  js 变量的数据类型由值决定
       - 常量   const   es6前不存在常量  只是用 var
       -  const  常量    无法改变为其他类型  
       - 简单类型的值不可变     复杂数据类型  Object值可以改变
       - 数值、布尔、字符串、undefined、null、对象（数组、函数）、symbol

 2. typeOf [1,2,3] 如何知道是数组?
    区分简单数据类型 和复杂数据类型
    复杂数据类型 function
    typeof 返回结果是该类型的字符串形式表示（number、string、undefined、boolean、function、object）
      - 在 typeof中 无法识别 null  和 array 

 3. Object.prototype.toString.call()  
    Object 是所有对象的原型对象  
    prototype 
    toString
    call
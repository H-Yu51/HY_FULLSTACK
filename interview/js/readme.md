# 把面试题当高考题
 1. 以题目来检验当前js所学 


 2. 
    - 打卡 : 课后做的任何事情 : )
    - 能力增长点
        js


- null   和  undefined  的区别是什么？
  Object.prototype.__proto == null 

 Undefined 意义是类型  当一个声明了的一个变量  但未初始化时，得到的是 undefined
 1. 箭头函数和普通函数不一样 不只是便利，也被干掉了arguments
      fn() => {}  
      function fn() {}
      - 箭头函数省略了 arguments  但是es6 提供了 ...reset 运算符

 2. Object 的原型对象
    Object.prototype
    父（原型）对象
    Object（函数）.prototype.__proto__ 
     为null原因  到顶了  上面没有对象  不该有值

 3. null的数据类型是 Object,undefined的数据类型就是undefined；
    null是一个表示”无”的对象，转为数值时为0；
    undefined是一个表示”无”的原始值，转为数值时为NaN


 4.  找到所有的.box元素有什么方法？
            // 通过ID获取（getElementById）
            // 通过name属性（getElementsByName）
            // 通过标签名（getElementsByTagName）
            // 通过类名（getElementsByClassName）
           // 通过选择器获取一个元素（querySelector）
           // 通过选择器获取一组元素（querySelectorAll）
           // 获取html的方法（document.documentElement）
           // document.documentElement是专门获取html这个标签的
           // 获取body的方法（document.body）
           // document.body是专门获取body这个标签的。


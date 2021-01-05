#  
 1. 
    - spread 运算符 展开字符串 [..word]

    - map 函数属于数组  把数组的每一项都调用 一个callback 
    返回值是新的数组的这一项  所以返回一个新的函数
        letter => `<span>&{letter}</span>` 

    - join  将数组变成字符串 连接字符串

 2.   people不是真正的数组  是一个伪数组  Nodelist
        `const people = document.querySelectorAll('.people p');`

    -   新建数组 push   使其有map方法
         `const arr = [];`
        ` people.forEach(person => { arr.push(person)})`
        ` const names = arr.map(person => person.textContent);`
    -   [...arr] 都可以将类数组arr转换成数组
       ` // const names = [...people].map(person => person.textContent);`

    -  Array.from(arr)  类数组arr转换成数组

 3. ... 可以展开  也可以收齐

- 类数组   
    - 有数字索引
    - 有长度length
    - 是个对象
    - 能被迭代




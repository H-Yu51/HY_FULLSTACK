let a = 25;
let b = a ;
b = 18;
console.log(a);  // 25
console.log(b);  // 18

let test = {
    a: 'a',
    b: 'b'
}

// 复杂数据类型  是引用的传递关系 共享内存地址
let test2 = test;

test2.a = 'a2';

console.log(test.a); // a2
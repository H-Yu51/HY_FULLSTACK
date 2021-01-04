// 有哪些情况是 undefined

let a;  //声明变量 未赋值
// 变量声明时， js类型由值决定
console.log(typeof a, '1');  // undefined

// 函数没有返回值
const fnNoReturn =() => {}
console.log(fnNoReturn(), '2')

// 参数不传值 
const fn = (b) => {
    // 一运行就会有的  this   指针对象  
    // console.log(arguments);
    console.log(typeof b, '3');
}
fn();

// 对象未声明的属性
const obj = {c:'1'};
console.log(obj.d,'4');  // undefined
console.log(zr); //语法错误


console.log(null == undefined); //true

console.log(null === undefined);// false
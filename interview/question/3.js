
var a = 0xa;  // 十六进制数 
console.log(0xa);
console.log(typeof a);

var b = 010;  // 八进制
var c = 0b01; // 二进制


// js  没有浮点数  只有number   不适合计算 
// js   浮点数在转成二进制的时候  会无限循环    小数部分  会舍弃一些位   二进制相加时  就不精确
console.log(0.1+0.2);    // 0.30000000000000004

console.log(Number.parseInt('010',8));   // 8
console.log(Number.parseInt('20',2));  // NaN   二进制 不可能 出现2   011010

// 上溢  js Number类型 只能安全表达  (2^53) 超过这 
console.log(9999999999999999);  //  10000000000000000
console.log(9007199254740992 === 9007199254740993);   // ture
console.log(9007199254740992n === 9007199254740993n)  // false

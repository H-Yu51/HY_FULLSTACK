console.log([] == ![]);// true  ![] 转为布尔值 false     然后 false 和  [] 对象比较 类型转换为  0
// 0 == 0

// ！可将变量转换成boolean类型，null、undefined、NaN以及空字符串('')取反都为true，其余都为false。

// 所以 ! [] 运算后的结果就是 false

// 也就是 [] == ! [] 相当于 [] == false

//三种隐式转换  数值 字符串 布尔值 
// == 会触发类型转换 
console.log(Boolean([])); // true
console.log({} == {});  // false   引用地址不一样
console.log(Number([]));  // 0
console.log(Number(![]));   // 0


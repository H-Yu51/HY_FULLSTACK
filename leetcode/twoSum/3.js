const numbers = [3,62,234,7,23,74,23,76,92];
const arr =[];

// const largeNumbers = numbers.forEach((e, i) => {
//     if (e>70){
//         arr.push(e); // push 给数字添加元素  
//     }
// })
// console.log(arr);


// 在forEach 的基础上 
const cb = numbers => { 
    return numbers >70
}        //箭头函数  当一个参数时可以省略括号  ，一句代码时可以省略花括号

const largeNumbers = numbers.filter(cb)       //过滤器 filter  内置函数 的布尔值为真 则筛选出来   为假则不管

console.log(largeNumbers);
// 
// let arr1 = [1, 2, 3];

// arr2 = arr1;
// arr2[0] = 4;
// console.log(arr1 == arr2);
// console.log(arr1); // [4, 2, 3]
// console.log(arr2); // [4, 2, 3]

var arr1 = [1, 2, 3]; //数组
var arr2 = arr1;
arr1 = [4, 5, 6]; //改变的是引用

console.log(arr1); // [4, 5, 6]
console.log(arr2); // [1,2,3]

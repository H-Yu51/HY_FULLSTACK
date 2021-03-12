
// let a = [1,2,3];
// // console.log(a.shift);
// a.join = a.shift;  // 其中一种
 // a 是对象  等于 1  
const a = {
    i: 0,
    valueOf: function() {
        return this.i++
    }
}
// const a = {
//     value: [3,2,1],
//     valueOf: function() {
//         return value.pop()
//     }
// }
console.log(a == 1); // false
console.log(a == 1 && a == 2 && a == 3);  // true
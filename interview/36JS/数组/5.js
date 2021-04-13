// let arr = [1, [2, [3, 4]]];

// function flatten(arr) {
//     while (arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr);
//     }
//     return arr;
// }

// console.log(flatten(arr))

// function flatten(arr) {
//     var result = [];
//     for (var i = 0, len = arr.length; i < len; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flatten(arr[i]))
//         }
//         else {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// let arr = [1, [2, [3, 4]]];
// console.log(flatten(arr))





// function flatten(arr) {
//     console.log(arr.toString());// 1,2,3,4,5,6
//     console.log(arr.toString().split(',')); //[ '1', '2', '3', '4', '5', '6' ]
//     return arr.toString().split(',').map(function(item) {
//         return Number(item);
//     })
// } 


function flatten(arr) {
    return arr.join(',').split(',').map(function(item) {
        return parseInt(item);
    })
}

// function flatten(arr) {  
//     return arr.reduce((result, item)=> {
//         return result.concat(Array.isArray(item) ? flatten(item) : item);
//     }, []);
// }


let ary = [1, [2, [3, [4, 5]]], 6,[]];
// console.log(ary.flat(Infinity),'------');
let arr = [[1,3],{a:1,b:1},{a:1,b:1}]
console.log(flatten(ary),'ary'); // [ 1, 2, 3, 4, 5, 6 ]
console.log(flatten(arr),'arr'); // [ 1, 2, 3, 4, 5, 6 ]
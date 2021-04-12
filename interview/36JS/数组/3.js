
// function unique(arr) {
//     return Array.from(new Set(arr))
// }
// let arr = [1, 1, 'true', 'true', true, true, 15, 15];
// console.log(unique(arr))// [ 1, 'true', true, 15 ]

// let unique2 = arr => [...new Set(arr)] 
// console.log(unique2(arr));


// function unique(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {         //第一个等同于第二个，splice方法删除第二个
//                 arr.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return arr;
// }


function unique(arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (!array.includes( arr[i]) ) {
            array .push(arr[i])
        }
    }
    return array;
}

// function unique(arr) {
//     var res = arr.filter(function(item, index, array) {
//         console.log(item);
//         return array.indexOf(item) === index
//     })
//     return res
// }


let arr = [1, 1, 'true', 'true', true, true, 15, 15];
console.log(unique(arr))// [ 1, 'true', true, 15 ]















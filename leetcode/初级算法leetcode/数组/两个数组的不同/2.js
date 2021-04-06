
var arr1 = [0, 1, 2, 3, 4, 5];
var arr2 = [0, 4, 6, 1, 3, 9];
function getArrDifference(arr1, arr2) {
    let arr = arr1.concat(arr2);
    return new Set(arr)
    
}

console.log(getArrDifference(arr1, arr2));
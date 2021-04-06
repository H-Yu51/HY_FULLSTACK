
var arr1 = [0, 1, 2, 3, 4, 5];
var arr2 = [0, 4, 6, 1, 3, 9];
function getArrDifference(arr1, arr2) {
    console.log(arr1.concat(arr2));
    
    return arr1.concat(arr2).filter(function (v, i, arr) {
        console.log(arr.indexOf(v),arr.lastIndexOf(v));
        return arr.indexOf(v) === arr.lastIndexOf(v);
    });
}

console.log(getArrDifference(arr1, arr2));
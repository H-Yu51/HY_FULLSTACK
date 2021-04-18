// 不用追求完美， 上岸就好
// 
// 提供36位 的表达  0-9 a-z 
function getNums36() {
    var nums36 = [];
    for (var i = 0; i < 36; i++) {
        if (i >= 0 && i <= 9) {
            nums36.push(i)
        } else {
            nums36.push(String.fromCharCode(i + 87));
        }
    }
    // console.log(nums36, '-----');
    return nums36
}

function scale36(n) {
    //  单独的功能函数
    //  36  0-9 a-f  a-z   36 进制`
    const arr = []
    var nums36 = getNums36();
    // 36  10 
    while(n){
        var res = n % 36;
        // console.log(res,'.....');
        arr.unshift(nums36[res])
        n = parseInt(n/36);
        // console.log(n,'----------');
    }
    return arr.join('')
}


console.log(scale36(36));  //10
console.log(scale36(360));  //a0

console.log(scale36(10));  //a0
console.log(scale36(9));  //a0

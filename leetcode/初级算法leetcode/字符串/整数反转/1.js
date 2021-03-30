/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let op = x>0?1:-1;
    let res = 0;
    x = Math.abs(x)
    while(x){
        res = res * 10 + x % 10;
        if(res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
        x = Math.floor(x / 10);
    }
    return res*op;

};

console.log(reverse(-123));
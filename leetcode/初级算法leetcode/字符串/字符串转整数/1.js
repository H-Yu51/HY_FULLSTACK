/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(str) {
    const num = str.trim().match(/^[+-]?\d+/)
    
    console.log(str.trim().match(/^[+-]?\d+/));
    if (!num) return 0

    const min = - (2 ** 31), max = (2 ** 31) - 1
    return num <= min ? min : num >= max ? max : num


};


console.log(myAtoi("96words and 987"));
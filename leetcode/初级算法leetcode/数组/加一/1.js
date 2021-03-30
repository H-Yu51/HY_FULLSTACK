// 暴力 


const plusOne = (digits) => {
    for(let i=digits.length-1;i>=0;i--){
        digits[i]=digits[i]+1
        digits[i]=digits[i]%10
        if(digits[i]!==0){
            return digits
        }
    }
    digits.unshift(1)
    return digits


}


console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([0]));
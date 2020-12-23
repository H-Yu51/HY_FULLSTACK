const ArraysSum = (nums) =>{
    let sum = 0;
    if (nums.length == 0) {
        return 0;
    }
    else{
        for(let i = 0; i < nums.length; i++){
            sum += nums[i];
        }
        return sum;
    }
}

console.log(ArraysSum([1, 5.2, 4, 0, -1]))
console.log(ArraysSum([]))
console.log(ArraysSum([-1.333]))

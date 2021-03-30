var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        
        let j = target-nums[i]
        console.log(j);
        nums.splice(i,1,null)
        console.log(nums);
        let k = nums.indexOf(j)
        console.log(k);
        if(k > -1) {
            return [i, k]
        }
    }
};


// console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))
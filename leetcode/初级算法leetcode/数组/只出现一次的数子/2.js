var singleNumber = function(nums) {
    for(var i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i])==i&&nums.lastIndexOf(nums[i])==i){
            return nums[i];
        }
    }


    
};


console.log(singleNumber([2,2,1]));

console.log(singleNumber([4,1,2,1,2]));
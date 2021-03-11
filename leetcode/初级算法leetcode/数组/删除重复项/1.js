const removeDuplicates =(nums) => {
    if(nums.length == 0)
    {
        return 0;
    }
    let index = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            // nums.splice(i, 1);
            nums[index] = nums[i];
            index ++;
        }
    }
    return index;
}

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,1,1,1,2,2,3,3,4])); 
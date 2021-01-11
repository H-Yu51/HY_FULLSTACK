
//  解法一  从后往前遍历  遇到 0 删除   末尾补0

const moveZero =(nums) => {
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] == 0){
            nums.splice(i,1);
            nums.push(0);
        }
        
    }
    return nums;
}


console.log(moveZero([0,1,0,3,12]));
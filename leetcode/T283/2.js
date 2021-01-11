

// 解法二  双指针法
const moveZero =(nums) => {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if(nums[fast]){
            nums[slow++] = nums[fast];
        }      
    }
    for (let i = slow; i < nums.length; i++) {
       nums[i] = 0;       
    }
    return nums;
}


console.log(moveZero([0,1,0,3,12]));
 
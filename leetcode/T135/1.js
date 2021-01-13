const candy =(ratings) => {
    // 每个人先分配一个
    let nums = new Array(ratings.length).fill(1);
     // 从左往右
    for(let i = 1 ; i < ratings.length; i++){
        if(ratings[i] > ratings[i-1]){
            //发现一个问题 如何先分配 每个人有一颗 所以得创建个数组
            //  ...  与给定数组长度一致
            // const array = new Array(9).fill('')
            // 当 [1] > [0] 的评分   就 + 1
            nums[i] = nums[i-1] +1;
        }
    }
    // 从右往左 
    for(let j = ratings.length - 1; j > 0; j--){
        if (ratings[j] < ratings[j-1] && nums[j-1] <= nums[j]) {
            nums[j-1] = nums[j] + 1;
        }
    }   
    // return nums;
    // 求和
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
}
console.log(candy([1,2,2]));
console.log(candy([1,0,2]));
console.log(candy([1,3,4,5,2]));   // 实际  输出 11  




const summaryRanges = (nums) =>{
    let r = [], i = j = 0
    while (i++ < nums.length) 
        if (nums[i] - nums[i - 1] !== 1) {
            r.push(nums[j] + (i - j === 1 ? '' : '->' + nums[i - 1]))
            j = i
        }
    return r
}

// const summaryRanges = (nums) => {
//     let slow = 0;
//     let res = [];
//     for (let fast = 0; fast < nums.length; fast++) {
//         if(fast[i]+1 != fast[i+1]){
            
//         }
        
//     }

// }


console.log(summaryRanges([0,1,2,4,5,7]));
// ["0->2","4->5","7"]
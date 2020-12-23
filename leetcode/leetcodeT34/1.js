/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let arr = [];
    for (let  i = 0; i < nums.length; i++) {
        if (nums[i] == target ) {
            arr[0] = i;
            break;
        }           
    }

    for(let  j = nums.length; j >-1 ;j--){
        if (nums[j-1] == target) {
            arr[1] = j-1;
            return arr;
        }       
    }
    if (arr.length == 0) {
        return [-1,-1];
    }
    
};
console.log(searchRange([1],1))
console.log(searchRange([5,7,7,8,8,10],8))
console.log(searchRange([5,7,7,8,8,10],6))
console.log(searchRange([],0))
// searchRange([5,7,7,8,8,10],10)

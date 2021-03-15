/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b);
    console.log(nums);

};


console.log([1,2,3,1]);
console.log([1,2,3,4]);
console.log( [1,1,1,3,3,4,3,2,4,2]);

const BinarySearch = (nums,target) => {
    let left = 0,right = nums.length-1;
    // console.log(nums.length)
    while(left<=right){
        const mid =parseInt( (left+right) /2);
        // console.log(mid);
        if(nums[mid] > target){
            right = mid  - 1;
        }
        else if (nums[mid] < target){
            left = mid + 1;
        }
        else{
            return mid;
        }
    }
}
const SeachRange = function(nums, target){
    let leftIdx = BinarySearch(nums, target)-1;
    let rightIdx = BinarySearch(nums, target);
    let ans = [-1, -1];
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        ans = [leftIdx, rightIdx];
    } 
    return ans;


}


console.log(SeachRange([5,7,7,8,8,10],8))

// const binarySearch = (nums, target, lower) => {
//     let left = 0, right = nums.length - 1, ans = nums.length;
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] > target || (lower && nums[mid] >= target)) {
//             right = mid - 1;
//             ans = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return ans;
// }

// var searchRange = function(nums, target) {
//     let ans = [-1, -1];
//     const leftIdx = binarySearch(nums, target, true);
//     const rightIdx = binarySearch(nums, target, false) - 1;
//     if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
//         ans = [leftIdx, rightIdx];
//     } 
//     return ans;
// };


// console.log(searchRange([5,7,7,8,8,10],8))
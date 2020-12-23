// console.log('leetcode,必考之two Sum')
// 手写代码 
/**
 * 
 * @author  hy
 * @data    20-11-20
 * @param  { number[] } nums
 * @param  { number }   target
 * @return { number[] }
 * 
 */

 // 箭头函数 

 const twoSum = (nums, target) => {
    // console.log('两数相加')  
    let map = {}; //JSON Object     键值对 key value  HashMap 哈希表         空间复杂度   数组和Object 的空间复杂度 O(n)
    let res = [];
    // 编写功能 一个函数完成一个功能
    // for + 执行功能
    nums.forEach((e,i) => map[e] = i);     // forEach 用于调用数组的每个元素，并将元素传递给回调函数
    // console.log(map);
    for(let i = 0 ; i < nums.length ; i++){
        let j = map[target-nums[i]]
        if(j && j !== i){
            res = [i,j];
            break;
        }
    }
    return res;
 }


 console.log(twoSun([2,7,11,15],9));


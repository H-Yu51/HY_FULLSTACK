/**
 * 
 * 
 */

//  function merge(){

//  }

// JS  变量类型由 值决定   弱类型 
// m+n <= num1.length 
const merge  = (nums1,m,nums2,n) => {          //  箭头函数  es6
    //吧nums2  放入 nums1 中
    //[1,2,3,0,0,0]  变为  [1,2,3,2,5,6]  再排序

    let current2 = n-1;
    for(let i = nums1.length-1;i >= nums1.length-n;i--){
        console.log(current2--);
        nums1[i]=nums2[current2--];
    }
    
    return nums1.sort((a,b) => a - b);


}
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const  medianSlidingWindow = (nums, k) => {
    if (nums === [] || k === 0) return [];
 
 let ans = [],
     nlen = nums.length,
     window = nums.slice(0, k);
 window.sort((a, b) => a - b);
 let mid = k % 2 === 0 ? (window[ Math.floor(k / 2) - 1 ] + window[ Math.floor(k / 2) ]) / 2 : window[ Math.floor(k / 2) ];
 ans.push( mid );
 
 for (let i = k; i < nlen; i++) {
   let c = nums[i];
   for (let p = 0; p < k; p++) {
     if (window[p] === nums[i - k]) {
       window.splice(p, 1);
       break;
     }
   }
   
   let j = window.length - 1;
   while (j >= 0 && window[j] > c) {
     window[j + 1] = window[j];
     j--;
   }
   window[j + 1] = c;
   let mid = k % 2 === 0 ? (window[ Math.floor(k / 2) - 1 ] + window[ Math.floor(k / 2) ]) / 2 : window[ Math.floor(k / 2) ];
   ans.push( mid );
 }
 
 return ans;

}
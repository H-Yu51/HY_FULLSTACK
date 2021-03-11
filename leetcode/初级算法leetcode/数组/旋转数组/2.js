const rotate = (nums, k) => {
    
    let temp;
    let last;
   for (let i = 0; i < k; i++) {
       last = nums[nums.length - 1];
    //    console.log(last);
       for (let j = 0; j < nums.length; j++) {
           temp = nums[j];
           nums[j] = last;
           last = temp;
           console.log('nums:'+nums+'   ');
           console.log('last:'+last+ '    ');
       }
   }


}

console.log(rotate([1,2,3,4,5,6,7],3));
console.log(rotate([-1,-100,3,99],2));

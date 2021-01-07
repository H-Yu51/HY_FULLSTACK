  const rotate =(nums,k) => {
     let temp;
     let last;
    for (let i = 0; i < k; i++) {
        last = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++) {
            temp = nums[j];
            nums[j] = last;
            last = temp;
        }
    } 
}
  


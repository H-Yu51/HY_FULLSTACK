const rotate = (nums, k) => {
    
    const n = nums.length;
    const newArr = new Array(n);
    for (let i = 0; i < n; ++i) {
        // console.log((i + k) % n);
        newArr[(i + k) % n] = nums[i];
        // console.log(newArr);
    }
    for (let i = 0; i < n; ++i) {
        nums[i] = newArr[i];
    }


}

console.log(rotate([1,2,3,4,5,6,7],3));
console.log(rotate([-1,-100,3,99],2));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const  medianSlidingWindow = (nums, k) => {
    let left = 0, right = k;
    const result =[];
    for(let i = 0; i < nums.length - k + 1; i++){
        const sliderArr = nums.slice(left, right).sort(function(a, b){return a - b});
        console.log(sliderArr);
        if( k % 2 == 0){
            result.push((sliderArr[ Math.floor(k / 2) - 1 ] + sliderArr[ Math.floor(k / 2) ]) / 2);
        }
        else{ 
            result.push(sliderArr[[ Math.floor(k / 2) ]]);
        }
        left++;
        right++;
    }
    return result;

};

console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7],3));
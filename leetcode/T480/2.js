

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const  medianSlidingWindow = (nums, k) => {
    let left = 0, right = k;
    const result =[];
    for(let i = 0; i < nums.length - k + 1; i++){
        const sliderArr = nums.slice(left, right);
        insertionSort(sliderArr);
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
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}

console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7],3));
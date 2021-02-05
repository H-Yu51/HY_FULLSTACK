const  findMaxAverage = (nums, k) => {
    let sum = 0;
    const n = nums.length;
    // 第一个滑块
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxSum = sum;
    // 滑块往后推入
    for (let i = k; i < n; i++) {
        // sum 为 第一个滑块之和  - 滑块中第一个数 + 新滑块最后一个数
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum / k;
}

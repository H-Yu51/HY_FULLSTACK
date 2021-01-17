const eraseOverlapIntervals = (intervals) => {
    if (!intervals.length) {
        return 0;
    }
    //  按照 右侧区间排序
    intervals.sort((a, b) => a[1] - b[1]);
    console.log(intervals);
    let right = intervals[0][1];
    // console.log(right);
    let ans = 1;
    for (let i = 1; i <  intervals.length; ++i) {
        if (intervals[i][0] >= right) {
            ++ans;
            right = intervals[i][1];
        }
    }
    return  intervals.length - ans;
}

console.log(eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ]));
console.log(eraseOverlapIntervals( [ [1,2], [1,2], [1,2] ]));
console.log(eraseOverlapIntervals([ [1,2], [2,3] ]));
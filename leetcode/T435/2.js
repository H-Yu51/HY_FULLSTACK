const eraseOverlapIntervals = (intervals) => {
    if (!intervals.length) {
        return 0;
    }
    //  按照 右侧区间排序
    intervals.sort((a, b) => a[1] - b[1]);
    console.log(intervals);
    let rignt = intervals[0][1];  // 首个区间的右边界
    let count = 0;
    for (let i = 1; i <  intervals.length; ++i) {
        if(rignt > intervals[i][0]){ // 该区间需要移除  
            count ++ ;
        }    
        else{  // 不需要移除则 遍历下一个区间
            left = intervals[i][1]
        }     
    }
    return count ;
}

console.log(eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ]));
console.log(eraseOverlapIntervals( [ [1,2], [1,2], [1,2] ]));
console.log(eraseOverlapIntervals([ [1,2], [2,3] ]));
console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]]));
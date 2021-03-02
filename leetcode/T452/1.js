const findMinArrowShots = (points) => {
    if (!points.length ) {
        return 0;
    }
    points.sort((a, b) => a[1] - b[1]);
    console.log(points);
    let pos = points[0][1];
    let ans = 1;
    for(let balloon of points ){
        if(balloon[0] > pos ){
            ans++;
            pos = balloon[1];
        }
        // console.log(balloon);
    }
    return ans;

}

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));
console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]));
console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]));
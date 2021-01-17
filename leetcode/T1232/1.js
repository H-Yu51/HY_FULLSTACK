const checkStraightLine =(coordinates) => {
    for (let i = 1; i < coordinates.length - 1; ++i) {
        let y1 = coordinates[i][1] -coordinates[i-1][1];
        let x1 = coordinates[i][0] -coordinates[i-1][0];
        let y2 = coordinates[i+1][1] -coordinates[i][1];         
        let x2 = coordinates[i+1][0] -coordinates[i][0];
        if (y1*x2 != y2*x1) {
            return false;
        }
        
    }
    return true;


}

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));
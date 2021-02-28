const isMonotonic = (A) => {
    for(let i=1;i<A.length-1;i++){
        if(A[i]>A[0]){
            if(A[i+1]<A[i]) return false
        }
        if(A[i]<A[0]){
            if(A[i+1]>A[i]) return false
        }
    }
    return true

}


console.log(isMonotonic([1,2,2,3]));
console.log(isMonotonic([6,5,4,4]));
console.log(isMonotonic([1,3,2]));
console.log(isMonotonic([1,2,4,5]));
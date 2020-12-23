
/**
 * 
 */

 const largestPerimeter = (A) => {
     
    A.sort((a,b) => a - b);
    for(let i = A.length-1 ; i >= 2; i--)
    {
        if(A[i-1]+A[i-2]>A[i]){
            return (A[i-1]+A[i-2]+A[i]);
        }
        
    }
    return 0;
 };




 console.log(largestPerimeter([5,4,3]))
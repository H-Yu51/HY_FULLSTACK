
const fairCandySwap = function (A, B) {
  let sum1 = A.reduce((prev,next) => prev + next)
  let sum2 = B.reduce((prev,next) => prev + next)
  let gap = (sum1 - sum2) / 2
  for (let i = 0; i < A.length; i++) {
    if(B.includes(A[i]-gap)){
      return [A[i],A[i]-gap]
    }
  }
}


console.log(fairCandySwap([1, 1], [2, 2]));
console.log(fairCandySwap([1, 2], [2, 3]));

console.log(fairCandySwap());


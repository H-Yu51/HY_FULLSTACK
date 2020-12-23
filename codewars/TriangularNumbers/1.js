const TriangularNumbers = (n) =>{
    // let j = 0;
    // for(let i = 1; i < 30; i++){
    //     let temp = parseInt((i*(i+1)/2));
    //     // console.log(temp);
    //     if( n == temp){
    //         j = 1;
    //     }
    // }
    // if(j == 1){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    for(let i = 1, t = 1; i <= t; n++){
        i = n*(n+1)/2;
        if (i==t) return true
      }
      return false;
    

}
console.log(TriangularNumbers(1));
console.log(TriangularNumbers(6));
console.log(TriangularNumbers(27));
console.log(TriangularNumbers(28));


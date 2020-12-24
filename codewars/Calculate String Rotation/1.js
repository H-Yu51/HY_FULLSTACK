const shiftedDiff =(first,second) =>{
    for(let i=0;i<first.length;i++){
        if(first.substr(first.length-i,i) + first.substr(0, first.length-i) == second) return i;
    }
    return -1;
//     if (first.length != second.length) return -1
//   return (second + second).indexOf(first)
}
console.log(shiftedDiff("coffee", "eecoff"))
console.log(shiftedDiff("isn't", "'tisn"))
console.log(shiftedDiff())
console.log(shiftedDiff())
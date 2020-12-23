const CountingBit = (n) => {
    let n2 = n.toString(2);
    // console.log(n2)
    let count = 0;
    for(let i of n2){
        // console.log(i);
        if ( i == 1) {
            count++;
        }
    }
    return count;
}
// CountingBit(100)
console.log(CountingBit(100));
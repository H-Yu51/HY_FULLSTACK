const prefixesDivBy5 = (A) => {
    let list = [];
    let str = "";
    for(let i = 0; i < A.length; i++){
        // str += A[i];
        // console.log(str);
        // console.log(parseInt(str, 2));
        // list[i] = (parseInt(str, 2) % 5  === 0) ;
        str = (str * 2 + A[i]) % 5;
        list.push(str === 0);
    }
    return list;
}

// console.log(prefixesDivBy5([0,1,1]));
// console.log(prefixesDivBy5([1,1,1]));
// console.log(prefixesDivBy5([0,1,1,1,1,1]));
console.log(prefixesDivBy5([1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1
                            ,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1]));
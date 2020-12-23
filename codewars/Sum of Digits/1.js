const digital_root = (n) => {
    let res = 0;
    do{
        res += n%10;
        n = parseInt( n / 10);

     }    
    while( n );
    if(res < 10) return res;
    else return digital_root(res)
    // 数根公式
    // return 1 + (n - 1) % 9

}

console.log(digital_root(9))
const calcType =(a,b,res) => {
    let addi = a + b;
    let sub = a - b;
    let mul = a * b ;
    let div = a / b ;
    switch(res){
        case addi: return 'addition';
        case sub: return 'subtraction';
        case mul: return 'multiplication';
        case div: return 'division'
    }
}
console.log(calcType(1,2,3));
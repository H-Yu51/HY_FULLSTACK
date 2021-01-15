const tickets =(moneys) => {
    let a25 = 0; // 25
    let b50 = 0; // 50
    for(let  money of moneys){
        if (money == 25) {
            a25++;
        }
        else if(money == 50){
            b50++;
            a25--;
        }
        else if (money == 100) {
            if(b50 > 0){
                b50--;
                a25--;
            }
            else{
                a25 -= 3;
            }   
        }
        if (a25 < 0) {
            return 'NO';
        }    
    }
    return 'YES';
}

console.log(tickets([25, 25, 50, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50, 100]));
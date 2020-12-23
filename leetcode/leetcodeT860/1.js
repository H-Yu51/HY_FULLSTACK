const lemonadeChange = (bills) =>{
    let five = 0,ten = 0;
    for(let  bill of bills){
        // console.log(bill,bills);
        if (bill == 5) {
            five++;
        }
        else if(bill == 10){
            ten++;
            five--;
        }
        else if (bill == 20) {
            if(ten > 0){
                ten--;
                five--;
            }
            else{
                five -= 3;
            }   
            console.log(five);
        }
        // console.log(five);
        if (five < 0) {
            return false;
        }    
    }
    return true;
}
// console.log(lemonadeChange([5,5,5,10,20]))
// console.log(lemonadeChange([5,5,10]))
// console.log(lemonadeChange([10,10]))
// console.log(lemonadeChange([5,5,10,10,20]))

console.log(lemonadeChange([5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5]))


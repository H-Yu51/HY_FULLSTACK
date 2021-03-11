var maxProfit = (prices) => {

    let max = 0;
    for(let i = 0; i < prices.length - 1; i++){

        if(prices[i] < prices[i+1]){
            max = max + prices[i+1] -prices[i]
            // console.log(max+'--------');
        }
    }
    return max;
}



console.log(maxProfit([7, 1, 5, 3, 6, 4]));

console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
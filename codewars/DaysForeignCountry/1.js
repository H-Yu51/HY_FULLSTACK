const DaysForeignCountry = (nums) => {
    let sum = 0;
    for(let i = 0 ; i < nums.length; i++){
        let temp = 0;
        temp = (nums[i][1] - nums[i][0] + 1);
        sum += temp;
    }
    return sum;
}



console.log(DaysForeignCountry([[10,17],[200,207]]))
console.log(DaysForeignCountry([[2,8], [220,229],[10,16]]))
console.log(DaysForeignCountry([ [ 286, 323 ],
    [ 307, 318 ],
    [ 253, 263 ],
    [ 27, 45 ],
    [ 194, 223 ],
    [ 217, 244 ] ]))
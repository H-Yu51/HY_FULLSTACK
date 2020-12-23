const firstUniqChar = (s) =>{

    let obj= {};
    for (let elem of s) {
        if (!(elem in obj)) {
            obj[elem] = 1;
        } else {
            obj[elem] += 1;
        }
        
    }
    for (let elem of s) {
        if(obj[elem] == 1){
            return ;
        }
    }


}
console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
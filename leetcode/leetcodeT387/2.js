const firstUniqChar = (s) =>{
    for(let i in s){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return i
        }
    }
}
return -1;
console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
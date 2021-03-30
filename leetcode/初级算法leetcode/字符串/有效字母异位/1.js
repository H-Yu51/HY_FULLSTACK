/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    // let arr1 = s.split('').sort()
//    console.log([...t].sort().join(''));
//    console.log([...s].sort().join(''));
   
    if([...s].sort().join('') === [...t].sort().join('')){
        return true
    }else{
        return false
    }
};

console.log(isAnagram("ana%ra8","na%ara8"));
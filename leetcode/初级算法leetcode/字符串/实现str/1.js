/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    // return haystack.indexOf(needle)
    if(needle.length == 0 ) {
         return 0
    }
       
    let i = 0;
    while(i < haystack.length ){
        if(haystack.charAt(i) == needle[0]){
            for(let j = 1; j < needle.length; j++ ){
                if(haystack[i+j] == needle[j]){
                    return i
                }
            }
            
        }
        else{
            i++;
        }
    }
    return -1

};

console.log(strStr('hello','ll'));
/**
 * @param {string} 
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const newS = s.replace(/[^a-zA-Z0-9]/ig, '').toLowerCase();
    // console.log(newS);
    // return newS === newS.split('').reverse().join('')
    let i = 0, j = newS.length - 1;
    while( i < j){
        if(newS[i] != newS[j]){
            return false
        }
        i++;
        j--;
    }
    return true



};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
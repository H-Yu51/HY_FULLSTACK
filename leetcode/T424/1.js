const characterReplacement = (s,k) => {

    const num = new Array(26).fill(0);
    const n = s.length;
    let maxn = 0, left = 0, right = 0;

    while (right < n) {
        
        num[s[right].charCodeAt() - 'A'.charCodeAt()]++;
        console.log(num);
        maxn = Math.max(maxn, num[s[right].charCodeAt() - 'A'.charCodeAt()])
        console.log(maxn);
        if (right - left + 1 - maxn > k) {
            num[s[left].charCodeAt() - 'A'.charCodeAt()]--;
            left++;
        }
        right++;
    }
    return right - left;

}


console.log(characterReplacement("ABBA",2));
console.log((characterReplacement("AABABBA",1)));
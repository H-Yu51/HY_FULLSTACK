/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const table = new Array(26).fill(0);
    for (let i = 0; i < s.length; ++i) {
        // console.log(s.charCodeAt(i),'-----------');
        // console.log(s.codePointAt(i));
        // console.log('a'.codePointAt(0));
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
        // console.log(table);
    }
    for (let i = 0; i < t.length; ++i) {
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
        // console.log(table);
        if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram("snagram", "nagaram"));

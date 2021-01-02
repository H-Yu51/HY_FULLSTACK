const solutuon =(roman) => {
    let num = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    str = roman.split("");
    let sum = 0;
    for (var i = 0; i < str.length; i++) {
        // console.log(str[i]);
        if (num[str[i]] < num[str[i + 1]]) {
            sum += (num[str[i + 1]] - num[str[i]]);
            i++;
        } else {
            sum += num[str[i]];
        }

    }
    return sum;
}

console.log(solutuon('VI'))
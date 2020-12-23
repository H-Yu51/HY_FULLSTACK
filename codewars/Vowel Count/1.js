const getCount =(str) =>{
    let vowelsCount = 0 ;
    for (var i = 0; i <= str.length - 1; i++) {
          if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
            vowelsCount += 1;
          }
        }
    return vowelsCount;

}
console.log(getCount("abracadabra"))
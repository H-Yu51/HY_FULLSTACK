/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let pre = s[0]
      let j = 0
      let res = []
      for(let i = 1; i <= s.length; i++){
          if ( pre === s[i] ) continue
          if ( i - j >= 3 ) res.push( [j, i - 1] )
          pre = s[i]
          j = i
      }
      return res
  }
  
  
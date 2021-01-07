function duplicateCount(word){
    // 判断有多少组重复字符串？
   // 法二
    // es6 定义 新的数据结构  有两个   map 和  set
    let map = new Map();    // 数据结构 es6 提供的数据结构  HashMap 
                            // key => value  把  for O(n) -> O(1)  主要是为了查找
                            // 时间复杂度 
    for(let char of word){
      if(map.has(char)){
        map.set(char,map.get(char)+1);
      }
      else{
        map.set(char,1);
      }
    }
    return map;
    // Map(8) {
    //     'a' => 2,
    //     'd' => 2,
    //     's' => 1,
    //     'j' => 1,
    //     'f' => 1,
    //     'w' => 1,
    //     'u' => 1,
    //     'h' => 2
    //   }
  




}
console.log( duplicateCount('aadsdjfwuhh'));
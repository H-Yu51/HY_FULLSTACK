const getConsectiveItems =(items, key) => {
    items = items.toString();
    key = key.toString();
    let max = 0;
    let cnt = 0;
    for(let i = 0;i<items.length;i++){
      if(items[i] === key){
        cnt++;
        if(cnt>max) max = cnt;
      }else{
        cnt = 0;
      }
    }
    return max;


}
console.log(getConsectiveItems(90000,0));
console.log(getConsectiveItems('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'i'));
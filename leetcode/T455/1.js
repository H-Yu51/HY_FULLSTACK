const findContentChildren =(g,s) =>{
    g.sort((a,b) => (a-b));
    s.sort((a,b) => (a-b));
    let child = 0;
    let cookie = 0;
    while(child < g.length && cookie < s.length){
        if(g[child] <= s[cookie]){
            child++;
        }
        else{
            cookie++;
        }
    }
    return child;
}
console.log(findContentChildren([1,2], [1,2,3]));
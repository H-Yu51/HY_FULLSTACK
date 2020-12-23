
//    codewars   超时 ？？？  
const City = (citys) => {
    let ob = {}
    citys = citys.toLowerCase();
    for(let i= 0; i < citys.length; i++){
        let key = citys[i];
        if (ob[key]) {
            ob[key] += '*';
       }
       else{
           ob[key] = '*';
       }
    }
    return ob;
    
        


}
console.log(City("Chicagoccc"))
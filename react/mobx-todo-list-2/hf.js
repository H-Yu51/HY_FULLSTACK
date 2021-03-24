//  HF high function  
// decorators @function
function add (a,b){
    return a+b
}
//两数相加 
// 结果打印
function withLog (fn) {
    return  (a,b) =>{
        const result = fn(a,b); // 
        console.log(result);
        return result
    }
}

const withLogAdd = withLog(add)

withLogAdd(1,2)
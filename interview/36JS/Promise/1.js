let p1 = new Promise((resolve,reject) => {
    resolve();
})
setTimeout(() => {
    console.log((p1)); // Promise {<fulfilled>: undefined}
},1)   

let p2 = new Promise((resolve,reject) => {
    reject();
})
setTimeout(() => {
    
    console.log((p2)); // Promise {<rejected>: undefined}
},1)   

  {
    var a = 0
}
console.log(a);









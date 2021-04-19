let p1 = new Promise((resolve, reject) => {
    console.log(0);
    setTimeout(() => {
        
        console.log('setTimeout');
        // reject(10)
        resolve(10)
    }, 1000)
    
    
}).then((data) => {
    console.log(data, 'resolve(10)++++++++++');
})

// 0
// 一秒
// setTimeout
// 10 resolve(10)++++++++++
// 10 链式第二次成功
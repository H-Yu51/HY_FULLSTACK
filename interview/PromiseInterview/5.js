// let p1 = new Promise((resolve, reject) => {  
//     resolve('success1')
// })

// let p2 = new Promise((resolve, reject) => {  
//     resolve('success1')
// })

// let p3 = Promise.reject('失败3')

// Promise.all([p1, p2]).then((result) => {  
//     console.log(result)                
//     // ['success', 'success']
// }).catch((error) => {  
//     console.log(error)
// })

// Promise.all([p1,p3,p2]).then((result) => {  
//     console.log(result)
// }).catch((error) => {  
//     console.log(error)      
//     //  '失败3'
// })




let p1 = new Promise((resolve, reject) => {  
    setTimeout(() => {    
        resolve('success1')  
    },1000)
})

let p2 = new Promise((resolve, reject) => {  
    setTimeout(() => {    
        reject('failed2')  
    }, 1500)
})

Promise.race([p1, p2]).then((result) => {  
    console.log(result)
}).catch((error) => {  
    console.log(error)  
    //  'success1'
})










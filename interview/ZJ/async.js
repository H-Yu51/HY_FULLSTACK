const getJson = () => {  // 异步

    // return 'json'
    console.log('json');
}

// 函数前面加async  只是声明  这个函数内部存在异步
async function testAsync() {
    try {
        // 函数前面 加 await  逻辑就会等到这个异步函数 执行完毕后再执行剩下的代码
        await getJson()
        // 必须等到 await返回一个promise才能执行
        // 如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。
        // 如果它等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，
        // 等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。
    } catch (error) {
        console.log(error);
    }

}

//  async/await  等于
// testAsync()
// .then(() => {
//     getJson()
// })
// .then(() => {
//     //...
// })



console.log(testAsync());
console.log(a);

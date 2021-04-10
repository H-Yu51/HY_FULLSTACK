const getJson = () => {  // 异步
    console.log('2');
}


async function testAsync() {
        await getJson()
        console.log(3);
}

testAsync()
console.log(testAsync());

// 等于
function testAsync () {
    return Promise.resolve().then(() => {
        return getJson()
    }).then(() => {
        console.log(3);
    })
}

const getUserInfo = function(user) {
    // 判断里面存在 name 和 age

    if( !user ||typeof user != 'object' || !Object.keys(user).includes("name") || !Object.keys(user).includes("age"))
        throw new Error('参数错误')
    return `name: ${user.name}, age:${user.age}`
}
console.log(getUserInfo({name:'koala', age: 18}));
// 有什么问题？
console.log(getUserInfo({name:'koala'})); //age  undefined
console.log(getUserInfo());   //为了限制随意性  抛出异常


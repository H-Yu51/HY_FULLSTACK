
// 函数是天生可以复用的

// var Cat = {
//     name:'',
//     color:'',
//     sayHello(){
//         console.log('');
//     }
// }
function Cat(name, color){
    return{
        name,
        color
    }
}
var cat1 = Cat("大毛","黑色")
var cat2 = Cat("2毛","黑色")  //  cat1 和 cat2  之间无关系
console.log(cat1)
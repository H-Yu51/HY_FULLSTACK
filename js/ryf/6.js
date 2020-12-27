
function Cat(name,color) {
    this.name = name;  //this 指向它实例的
    this.color = color;
    // this.type = '猫科动物',
    // prototype 要生成的原因    需要给方法添加一个方法   让方法作为一个属性 
    // this.eat = function(){
    //     console.log('老鼠');
    // }
}

//如果是 static  静态  不在实例上
// Cat.eat = function(){

// }

// 所以 构建 prototype   使 Cat方法作为属性  prototype 作为原型对象方法
 //prototype  原型对象   无须分配内存 即可调用
    Cat.prototype.eat = function (){
        console.log('老鼠');
    }
    Cat.prototype.type = '猫科动物';

//将其放在Cat外的原因  ？？？？？？？？

//因为 new  的时候一定会执行 Cat 
//  所以会执行内存分配  


// 实例化对象
var cat1 = new Cat("大毛","黑色");
var cat2 = new Cat("二毛","白色");

console.log(cat1 );
console.log(cat1.constructor == cat2.constructor )  //构造函数
console.log(cat1 instanceof Cat);

cat1.eat();
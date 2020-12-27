function Cat(name,color) {
    this.name = name;  //this 指向它实例的
    this.color = color;
}
// 实例化对象
var cat1 = new Cat("大毛","黑色");
var cat2 = new Cat("二毛","白色");


console.log(cat1.constructor == cat2.constructor )  //构造函数
console.log(cat1 instanceof Cat);
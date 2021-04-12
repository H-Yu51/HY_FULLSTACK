var name = '拔剑四顾心茫然';
var obj = {
    name: '行路难'
};

function fn() {
    console.log(this.name);
}; 
fn();   // 拔剑四顾心茫然
fn.call(obj);   // 行路难


Function.prototype.my_call = function (obj) {
     //判断是否为null或者undefined,同时考虑传递参数不是对象情况
     obj = obj ? Object(obj) : window;
     let args = [];
     // 注意i从1开始
     for (let i = 1, len = arguments.length; i < len; i++) {
         args.push("arguments[" + i + "]");
     };
     obj.fn = this; // 此时this就是函数fn
     let result = eval("obj.fn(" + args + ")"); // 执行fn
     delete obj.fn; //删除fn
     return result
};


Function.prototype.my_call = function (obj) {
    obj = obj ? Object(obj) : window;
    obj.fn = this;
    // 利用拓展运算符直接将arguments转为数组
    let args = [...arguments].slice(1);
    let result = obj.fn(...args);

    delete obj.fn
    return result;
};


fn.my_call(obj); // 行路难
fn.my_call(obj, "我的", "名字", "是"); // 我的名字是听风是风
fn.my_call(null, "我的", "名字", "是"); // 我的名字是时间跳跃
fn.my_call(undefined, "我的", "名字", "是"); // 我的名字是时间跳跃





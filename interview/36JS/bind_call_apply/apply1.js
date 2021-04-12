// apply模拟
Function.prototype.my_apply = function (obj, arr) {
    obj = obj ? Object(obj) : window;
    obj.fn = this;
    var result;
    if (!arr) {
        result = obj.fn();
    } else {
        var args = [];
        // 注意这里的i从0开始
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push("arr[" + i + "]");
        };
        result = eval("obj.fn(" + args + ")"); // 执行fn
    };
    delete obj.fn; //删除fn
    return result;
};
Function.prototype.my_apply = function (obj, arr) {
    obj = obj ? Object(obj) : window;
    obj.fn = this;
    let result;
    if (!arr) {
        result = obj.fn();
    } else {
        result = obj.fn(...arr);
    };

    delete obj.fn
    return result;
};
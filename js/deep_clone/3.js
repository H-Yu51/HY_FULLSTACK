var  obj = {a: {a:'hello', b:21}};

var initialObj = Object.assign({}, obj);

initialObj.a = '你好';
console.log(initialObj); // 属于浅拷贝
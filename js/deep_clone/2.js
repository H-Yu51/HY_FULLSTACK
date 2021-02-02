function simpleClone (initiaObj) {
    var obj = {};
    for(var key in initiaObj){
        obj[key] = initiaObj[key];
    }
    return obj;
}

var obj ={
    a:'hello',
    c:'[sss]'
}

var cloneObj = simpleClone(obj);
cloneObj.a = '你好';
console.log(cloneObj.a);
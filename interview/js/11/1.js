const arr = [3,4,5];
// 在数组尾部/头部 加删除的方法

arr.push(6)  //  尾部增加
arr.pop(6)  //   尾部删除

// 头部
arr.unshift(1) //队头插入元素
arr.shift(1)   //队头删除元素


// 打印数组的方法 
for(let i in arr){
    console.log(i);
}

arr.forEach(item => {
    console.log(item);
})

console.log(arr.join(" "));//join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的


console.log(arr.splice(0,arr.length));//splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

console.log(arr.map(item =>item));
/**
 * 功能： 获得唯一ID
 * @author hy
 * @date 20-11-21
 * @return {string}
 * 
 */



// const uniqueID = () => {
//     // let t = new Date();   //日期对象
//     let t = + new Date();   //类型转换
//     let ranNum = Math.ceil(Math.random()*10000);
//     return t + "" + ranNum;
// } 

// 箭头函数优化  参数为一 /语句为一 则可以省略参数括号（）和语句花括号（）
const uniqueID = () => + new Date() + "" + Math.ceil(Math.random()*10000);

console.log(uniqueID());


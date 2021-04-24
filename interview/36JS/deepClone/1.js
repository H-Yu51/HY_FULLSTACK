// var arr = [1,2,3];
// var newArr = arr;
// newArr[1] = "二";
// console.log(arr);    //  [ 1, '二', 3 ]
// console.log(newArr);    //  [ 1, '二', 3 ]
// console.log(arr==newArr);   //  true
// console.log(arr===newArr);  //  true




let obj1 = { person:1 };
let obj2 = Object.assign( obj1);
obj2.person = "wade";
console.log(obj1); // { person: { name: 'wade', age: 41 }, sports: 'football' }
console.log(obj2);// { person: { name: 'wade', age: 41 }, sports: 'football' }


var a = { age: 18, name: 'yy', info: { address: 'beijing', sports: 'basketball' } };
var b = Object.assign(a);
b.info.address = 'shenzhen';
b.age = 22
console.log(a); // {age: 22,name: 'yy',info: { address: 'shenzhen', sports: 'basketball' } }
console.log(b); // {age: 22,name: 'yy',info: { address: 'shenzhen', sports: 'basketball' } }

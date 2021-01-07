
var reg = /\d{4}-\d{2}-\d{2}/;
console.log(reg.test('0791-86-34')); //true

var reg = /(\d{4})-(\d{2})-(\d{2})/;
var dateStr = '2018-04-18';
console.log(reg.test(dateStr)); ;  //true
console.log(RegExp.$1) // 正则后的第一组是 2018 
console.log(RegExp.$2) // 04
console.log(RegExp.$3) // 18




var word = '123-456-666';
//  /\d+/  正则分组  检查字符串是否符合规则
console.log(/\d+/.test(word));//true
console.log(word.match(/\d+/));
console.log(word.match(/\d+/g));// [ '123', '456', '666' ]
console.log(word.match(/\d/g));// ['1', '2', '3','4', '5', '6','6', '6', '6']

str = 'aadsdjfwuhh'
//  [a-z] a-z 的取值范围
console.log(str.match(/([a-zA-Z])\1/g))



var reg = /\d{4}-\d{2}-\d{2}/;
console.log(reg.test('0791-86-34')); //true

// 数据范围 2(53) - 1
// bigint
 // 数字加  n   就是bigint
const theBiggestInt = 9007199254740991n;

// console.log(typeof theBiggestInt) //bigint

const alsoHuge = BigInt(9007199254740991)


const b1 = BigInt(Number.MAX_SAFE_INTEGER);
console.log(b1);
console.log(BigInt(Number.MAX_SAFE_INTEGER));
//9007199254740991n
// 9007199254740991n
const maxPlusOne = b1 + 1n;
console.log(maxPlusOne);  //9007199254740992n
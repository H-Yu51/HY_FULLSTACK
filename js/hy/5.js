const dogs = new Map();
const friends = new Map();
friends.set('hy','zjc');
friends.set('yf','sgy');
// 得到 key  value
// friends.forEach((val, key) => {
//     console.log(val,key);
// })
// zjc hy
// sgy yf

for(const [key, val] of friends){
    // 解构 
    console.log(key, val);
}
const [a,b] = [1,2]
console.log(a,b);
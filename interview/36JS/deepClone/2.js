// let a = [1,2,3,4];
// let b = a.concat();
// a[0] = 0;
// console.log(a);  // [ 0, 2, 3, 4 ]
// console.log(b);  // [ 1, 2, 3, 4 ]

// let a1 = [1,2,[3,4],{name:'HH'}];
// let b1 = a1.concat();
// a1[3].name = 'YY';
// a1[0] = 0;
// console.log(a1); // [ 0, 2, [ 3, 4 ], { name: 'YY' } ]
// console.log(b1); // [ 1, 2, [ 3, 4 ], { name: 'YY' } ]



// let a2 = [1,2,3,4];
// let b2 = a2.slice();
// a2[0] = 0;
// console.log(a2);  // [ 0, 2, 3, 4 ]
// console.log(b2);  // [ 1, 2, 3, 4 ]

// let a3 = [1, 3, {
//     name: ' HH'
//     }];
// let a4 = a3.slice();
// a3[2].name = 'YY'
// a3[0] = 0
// console.log(a3); // [ 0, 3, { name: 'YY' } ]
// console.log(a4); // [ 1, 3, { name: 'YY' } ]


let obj1 = { name: 'HH', address:{x:'beijing',y:'wuhan'}}
let obj2= {... obj1}
obj1.address.x = 'shenzhen';
obj1.name = 'YY'
console.log(obj1) // { name: 'YY', address: { x: 'shenzhen', y: 'wuhan' } }
console.log(obj2) // { name: 'HH', address: { x: 'shenzhen', y: 'wuhan' } }


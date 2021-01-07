// es6 提供新的数据结构
// 为数组优化而来
// Set Map  两种


// set  集合  不会重复添加的 
const people = new Set(); // []
people.add('黄煜');
people.add('hy');
people.add('zjc');

for(const person of people){  // of 和  in
    console.log(person);
}

const students = new Set(['hy','zjc','yf',])

students.add('sgy');
console.log(students);
// console.log(people);
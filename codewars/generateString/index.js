// console.log("hello world".split(" ")[0].toUpperCase().charAt(0)+"hello world".slite(1))
//   split()  分割 后成为数组         toUpperCase()  z转换大写    


      


// console.log("hello world".slice(1))

// function generateHashtag(str) {
//     // 'hello world'  'Hello World'
//     let arr = [];
//     str
//       .split(' ')
//       .forEach(item => {        // item 为分割后的数组子集    forEach 
//         // console.log(item);
//         arr.push(item.charAt(0).toUpperCase() + item.slice(1))
//       })
//     // console.log(arr);
//     return arr.join(' ')
//   }
//   console.log(generateHashtag('hello world'));



function generateHashtag(str){
    return str.length > 140 || str === '' ? false: '#' + str.split(' ').map(capitalize).join(' ')
}

//map 的 callback

function capitalize(item) {
   return  item.charAt(0).toUpperCase() + item.slice(1)
}

  
console.log(generateHashtag(['hello world']))


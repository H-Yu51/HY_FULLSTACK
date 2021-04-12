// 使用bind方法一
var a = {
    b: function () {
        console.log(this); //{ b: [Function: b], c: 'hello' }
        var func = function () {
            console.log(this);
            console.log(this.c,'----'); // hello
        };
        
        func();
    },
    c: 'hello'
}
a.b(); 
console.log(a.c); // hello

// 使用bind方法二
//   var a = {
//     b: function() {
//       var func = function() {
//         console.log(this.c);
//       }
//       func.bind(this)();
//     },
//     c: 'hello'
//   }
//   a.b(); // hello
//   console.log(a.c); // hello
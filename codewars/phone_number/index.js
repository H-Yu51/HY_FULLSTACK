// const createPhoneNumber = (arr) => "(" + arr[0] + arr[1] + arr[2] + ")" + arr[3] + arr[4] + arr[5] + "-" + arr[6] ...

// createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);

function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx"; //手机模板
    numbers.forEach(element => {
        format.replace('x',element)
    });  
}

// // console.log("x9yz".replace("9",1));
// // console.log("x9yz".replace(/[0-9]/,1));
// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));




// function createPhoneNumber(numbers){
//     var format="(xxx) xxx-xxxx";//手机模板
//     for(var i=0;i<10;i++){
//         format=format.replace("x",numbers[i]);
//     }
//     console.log(format);
// }

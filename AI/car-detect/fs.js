const fs = require('fs');


// fs.readFile('./timg.jpg', function(err, data){
fs.readFile('./chepai.jpg', function(err, data){
    // console.log(err);
    if(err){
        throw new Error(err)
        return;
    }
    console.log(data)
})
// console.log('AI 来了， 帅！')

//  node   引入模块关键字
// 图像识别
const ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify;

// node的内置模块  fileSystem
const fs = require('fs')
// 1. 读入文件 I/O操作   从硬盘读入内存
const APP_ID = "23077960";
const APP_KEY = "aqj8iXMfbAmsKVC94yR4Q4yX";
const SECRET_KEY = "cOQF46X7D3VpMluNdih5htMr5aCcZZ2W";

const client = new ApiImageClassifyClient(APP_ID,APP_KEY,SECRET_KEY);
// const fs = require('fs')
// const image = fs.readFileSync("timg.jpg").toString("base64");
const image = fs.readFileSync("01.png").toString("base64");

client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })
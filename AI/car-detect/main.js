const AipOcrClient= require('baidu-aip-sdk').ocr; //图像识别
const fs =require('fs');
const image =fs.readFileSync("chepai.jpg").toString("base64");
// 内置模块 fileSystem
//1.读入文件 I/O 从硬盘里读入内存中，
const APP_ID="23078078";
const API_KEY="7M973TGNqEtviBGDNoIW3cq8";
const SECRET_KEY="CiAQeWpqQ1QgHfZSY9YGomPjtCPl9EaG";

const client= new AipOcrClient(APP_ID,API_KEY,SECRET_KEY);
const option={};
option["multi_detect"]="true";

client
    .licensePlate(image,option)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })

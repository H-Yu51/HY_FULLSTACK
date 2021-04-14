const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs')
const path = require('path')
const md5 = require('md5')
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
    <title>Document</title>
    </head>
    <body>
    demo1
    <script src="/demo.js">
    </script>
    </body>
  </html>
  `)
})

// 把fs读取到发送流
app.get('/demo.js',(req,res) => {
    console.log('response here');
    // 如果浏览器带上一个304  表示 有这个文件   且时间
    //返回文件
    const jsPath = path.resolve(__dirname,'./static/js/demo.js');

    let status = fs.statSync(jsPath);
    console.log(status,'----------');
    let lastModified = status.mtime.toUTCString();
    
    let cont = fs.readFileSync(jsPath)
    let etag = md5(cont);


    if (req.headers['if-none-match'] === etag) {
        res.setHeader('ETag', etag);
        res.writeHead(304, 'Not Modified');
        res.end();
        return;
      }
//   if(lastModified == req.headers['if-modified-since']) {
//     res.writeHead(304, 'Not Modified');
//     res.end(); // 为空 不需要有响应体， 请使用本地缓存，
//     return ;
//   }




    console.log(lastModified,'+++++++++');
    // 1. 先把文件返回
    // 2. 在访问文件的同时，应该给他加上时间标识    http ETag

    // 设置响应头
    res.setHeader('Cache-Control','public,max-age=30')
    res.setHeader('Last-Modified',lastModified)
    res.setHeader('ETag',etag)
    res.writeHead(200,'OK')
    res.end(cont)
})

app.listen(port, () => {
  console.log('listen ...');
})

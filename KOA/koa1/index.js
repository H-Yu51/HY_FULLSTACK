const Koa = require('./lib/application')
// const Koa = require('koa')
// Koa  是构造函数  一个框架
const app = new Koa() // 具备use方法和listen方法  ctx参数  next参数

app.use((ctx,next) => {  //这个箭头函数就叫中间件 
    ctx.body = 'Hello World'
    console.log(ctx.req.url);
    console.log(ctx.request.req.url);
    console.log(ctx.response.req.url);
    // console.log(ctx.request.url);
    // console.log(ctx.request.path);
    // console.log(ctx.url);
    // console.log(ctx.path);
})

app.listen(1234,() => {
    console.log('服务启动了listen 1234');
})




// 原生node

// let http = require('http')
// let server =  http.createServer((req,res) => {
//     res.end('Hello World 1235')
// })

// server.listen(1235,() => {
//     console.log('listen 1235');
// })
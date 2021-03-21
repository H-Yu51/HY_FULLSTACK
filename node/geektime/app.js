const koa = require('koa')
const app = new koa();
const mount = require('koa-mount');
const fs = require('fs');
// console.log(app instanceof require('events').EventEmitter);
// 使用中间件 
app.use(
  // app 内存中
  // views/index.htm 硬盘
  // 1. 调入内存 fs await   有点慢
  // 2. 发送
  mount('/', async (ctx) => {
    ctx.body = fs.readFileSync(__dirname + '/views/index.html', 'utf-8')
  })
)

app.listen(3000);

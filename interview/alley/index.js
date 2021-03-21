const koa = require('koa')
const mount = require("koa-mount")
const fs = require('fs')
const serve = require('koa-static')
const app = new koa()
// 有什么问题?  过几天css  小米官网css更新了  导致..
console.log(__dirname + '/static');
app.use(serve(__dirname + '/static'))
app.use(
    mount('/', ctx => {
      ctx.body = fs.readFileSync(__dirname + '/max_count.html', 'utf-8');
    })
  )

app.listen(1234)
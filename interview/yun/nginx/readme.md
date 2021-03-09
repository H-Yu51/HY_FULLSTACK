
nginx 静态网页 http 服务 html

动态  node

1. centos node
    -  wget https://npm.taobao.org/mirrors/node/v12.16.1/node-v12.16.1-linux-x64.tar.gz



- ln -s /usr/local/bin/node/bin/node /usr/bin/node
- ln -s /usr/local/bin/node/bin/npx /usr/bin/npx
- ln -s /usr/local/bin/node/bin/npm /usr/bin/npm

- rm -rf /usr/bin/npx


 /www  mkdir  /koa-demo

cd koa-demo   npm init -y

 npm i koa --save

vi app.js




2. Koa code

const Koa = require('koa');    // 引入最好的node开发框架
const app = new Koa();

// 中间件 middleWars
//  app.get('/',(req,res) => {// express
    res.send('hello world') 
})

app.use(async ctx => {    // ctx
        ctx.body = 'Hello World';
})
app.listen(3000);  // 
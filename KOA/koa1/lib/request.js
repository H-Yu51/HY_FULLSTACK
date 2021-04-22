// 为什么koa 没有req
let url = require('url')
let request = {  // 处理前端请求
    get url(){
        console.log(this);
        return this.req.url
    },
    get path() {
        return url.parse(this.req.url).pathname
    }
}


module.exports = request




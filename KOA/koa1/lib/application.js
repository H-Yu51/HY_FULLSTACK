let EventEmitter = require('events')
let http = require('http')
let context = require('./context')
let response = require('./response')
let resquest = require('./request')


class Koa extends EventEmitter { // 
    constructor() {
        super() // 让实例对象可以继承父类链上的属性和方法
        this.fn
        this.context = context
        this.response = response
        this.resquest = resquest
    }

    use(fn) {
        this.fn = fn
    }

    createContext(req,res) { // 构建 ctx

        const ctx = Object.create(this.context)
        const request = ctx.request = Object.create(this.request)
        const response = ctx.response = Object.create(this.response)
        ctx.req = request.req = response.req = req
        ctx.res = request.res = response.res = res
        request.ctx = response.ctx = ctx 
        request.response = response
        response.request = request

        return ctx
    }

    handleRequest(req,res) {
        let ctx = this.createContext(req,res)
        this.fn(ctx)
        res.end(ctx.body)

    }

    listen(...args) {
        let server = http.createServer(this.handleRequest.bind(this))
        server.listen(...args) // 原生node
    }
}



module.exports = Koa
1. 安装 node 开发框架  express  MVC

    - 引入express  require()
    - app = express() 中小型应用 用node
    - app.get('/', (req, res) => {
        res.send('')
    })
    - 101 协议跳转？  原因？ 复杂应用
        websocket  不断开，保持一直链接  websocket 
        http 协议无法实现聊天室
    - app.listen(端口号:port)
    - 101 在ws 应用场景下  服务器用socket.io（封装了websocket的实现）
        客户端主动申请切换协议 101 
    - socket.io 在服务器端启用后  它会提供/socket.io/socket.io.js
    - 客户端n：1 服务器  io（）


nvm 一台电脑多个node 版本管理 作业
nvm list
nvm use v

- vite 正在干掉webpack
快
:3001 前端项目 react
:3000 music sdk API 服务
跨域访问  端口不同

- 前后端分离
:3000/banner 展示到页面上

- redux 引入的标准流程
  将单一状态树引入组件开发流程

  1. 安装
    redux-thunk 是支持异步action操作的中间价
  2. 目录
    export default store
    createStore(reducer)
    reducer 比较复杂的, 可以是模块化的 combineReducers
    applyMiddlewares 中间件服务 redux-thunk redux-log

    3. reducer 过日子业务
     - 纯函数  用于返回状态
     - 放在store/ 目录下
     - 

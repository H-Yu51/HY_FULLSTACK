# 框架的意义  
更快更高效的开发代码

- koa 就是 在node上套了一个壳子   koa只是实现了封装

一个语法糖   listen 内部嵌套原生js的listen
            use 是保留住执行   
            ctx 最大的区别    集 req res 于一身的功能   ctx把response request  原生js的 req res 交叉赋值
            next 四个东西  
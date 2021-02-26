# 字节react 技术栈要求   
    - react
        jspang  react-router  redux  打卡 
        react hooks  class 很少  函数式组件
        ts
    - 牙羽 js 系列 小黄书
    - 山月  神三元  面试系列 
    - leetcode  


1. 开发流程 react+hooks+ts  大型项目  webpack 、webpack-cli、 webpack-dev-server
webpack-cli  4.0 版本 与webpack 5兼容问题
手动的指定 安装 webpack-cli 3

    1.1 配置开发流程 三兄弟
        --hot  热更新 
    1.2 css-loader style-loader file-loader url-loader 
        webpack loader机制 转译 或编译   
        html-webpack-plugin
        mini-css-extract-plugin webpack 插件 
        awesome-typesript-loader ts -> js 
    1.3 typescript-loader  typescript 
        tsconfig.json 
    1.4 js   babel es6 -> es5
        @babel/polyfill ? 
        babel-loader 也坑  
        .babelrc

    1.5 webpack.config.js 
        entry-> output 
        module test loader 

    1.6  src/ index.html  root

2. react  react-dom
    ts + react 这才是阿里郎
    npm i @types/react   @types/react-dom  react的类型约定
    ts 类型化的js 

- app.tsx
    根组件 tsx webpack -> ts-loader -> babel-loader
- index.tsx
    入口文件 webpack entry 打理
- react 16 之后 可以在函数组件里直接使用状态
    全面拥抱函数式编程
    useState 超级函数    状态就是数据
    1. 创建了 name 状态
    2. setName 修改
    3. 初始值
- ts 就是加类型约束

- 围绕着 name 状态  两个组件开发实现
    App  父组件   状态 name： defaultUserName
    const [name,staName] = React.useState('defaultUserName')

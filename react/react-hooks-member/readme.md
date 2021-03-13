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


#  react + ts 的怀抱

1. logo
  webpack bundler
  一切静态资源可以打包
2. DisplayData  更加安全和
  ts 展示数据
  - 异步/同步 Promise + ts
  - api  模块化 
  - ts  model 
  members  数组
  js []   ts  type[]
3. 面试官问 React 项目的目录架构， 你是怎么理解的
  开公司 小型项目， 没那么要求   webpack index.ts 入口 -> App 根组件-> Component 挂载上去
  大型项目， react 全家桶组织起来， MVVM -> SPA router + 数据管理Rudux 
  /api  请求的管理  
  /pages 路由级别组件
  /model  ts 独有的， 对所有的数据做interface 

  ts + react  拦路虎 api 
  1. 组件里要有数据 生命周期来请求  
  2. /api 提供了 members.fetchMember
  3. 返回的是thenable的数据 
  4. api 定义的时候 Prmise.resolve(data) thenable return data 
  5. ts 要对api 请求方法做类型的检 返回值
    :Promise<MemberEntity[]>
  6. model 提供了对 MemberEntity定义
  







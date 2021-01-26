三个重要考点

- ES6
- webpack  处理一切静态资源
    @5.17.0
    npm i -g webpack
    npm i -g webpack-cli 



- react
  1. webpack 处理的入口 一定是js文件

  2. 写代码的时候  src/index.js    通过 webpack  或者 npm run ***     得到 dist/main.js 进行上线


- react 初体验  
 1. 每个文件都有引入 
  react 负责  提供组件（小程序内置组件概念） 
  ```js
    import React from 'react';                npm i react react-dom
    import ReactDOM from 'react-dom';
  ``` 
 2.  index.js  entry 引入 test.jsx          import TestComponent from './test.jsx';
    react 语法中的jsx语法  用来表示模板

    ```
      render(){
        return(
            <p>测试一下</p>
        )
    }
    ```
    webpack 处理一切静态文件  

    loader 加载器  处理模块  npm i babel-loader -D   //  -D 开发阶段安装 
    ```
        module: {
        rules: [
            {
                test:/\.jsx?$/,
                use:{   /** 使用什么来处理这个模块  */
                    loader:'babel-loader'
                }
            },
            {
                test:/\.styl$/,
                use:{
                    loader:'stylus-loader'
                }
            }

        ]
    }
    ```



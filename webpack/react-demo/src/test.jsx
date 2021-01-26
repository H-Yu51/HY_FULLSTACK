import React from 'react';  //  es6 模块 引入require


// react 以组件作为最小单元  
// React.Component  父类  匿名类
export default class extends React.Component{
    //  render() 方法是每个react组件必须实现的  接口
    render(){
        return(
            <p>测试一下</p>
        )
    }
}
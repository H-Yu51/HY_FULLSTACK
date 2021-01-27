// 应用根组件
import React from 'react';
import './CommentApp.css'; // webpack  一切静态资源皆可打包
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

class CommentApp extends React.Component{  // 通过继承快速创建类
    constructor() {
        super()
        this.state = {
          name: 'CommentApp'
        }
      }
    // 至少要实现的方法
    render(){  // 复杂 JSX template wxml
        return (   //JSX 语法
            <div className="wrapper">
                {this.state.name}
                <CommentForm/>
                <CommentList/>
            </div>
        )

    }

}


export default CommentApp; // 向外输出 挂载到root dom 上的react区域
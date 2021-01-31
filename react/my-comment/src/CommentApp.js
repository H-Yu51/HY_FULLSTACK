import React, { Component } from 'react';
import './CommentApp.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component {
  constructor() {
    super();  // 把Comment 基类， 它的构造函数执行一下
    this.state = {
      comments: [{
        username: '宋宋',
        content: '猪'
      },{
        username: '宋宋',
        content: '猪'
      },{
        username: '宋宋',
        content: '猪'
      }]
    }
  }
  // 留下一个钩子函数
  handleUsernameChange(comment){
    // console.log(comment);
    this.setState({
      comments:[...this.state.comments, comment]
    })
  }

  render() {
    return (
      <div className="wrapper">
        CommentApp
        <CommentInput onSubmit={this.handleUsernameChange.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

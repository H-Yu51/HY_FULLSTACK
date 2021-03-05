import React from 'react';

export default class Notes extends React.Component {

  constructor(props) {
    super(props)

  }
  
  state = { // es6 class properties 新特性 
    entities: []
  }

  
  
  render() {
    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
          YanJie Notes App _ React.js
        </h4>
        <button className="ui right floated basic violet button">
          添加笔记
        </button>
      </div>
    )
  }
}

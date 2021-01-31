// webpack 入口文件  #root 真实DOM 还需要一个根组件 *** App    把其他挂在根组件上
import React from 'react';
import {render} from 'react-dom';
// 手动配置路由
import { BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main'
import Beer from './components/Beer'
import './index.css'; //全局CSS


//配置路由
const Root = function() {
  return(
    <BrowserRouter>
      <div>
        {/*Route path 匹配规则 有就匹配  excat 完全匹配   */}
        <Route exact path="/" component ={Main}></Route>
        <Route path="/beer" component ={Beer}></Route>
      </div>
    </BrowserRouter>
  )

}

// react 不想操作DOM 尽量不操作   一般有且只有一处DOM操作   放在index.js
render(<Root />, document.getElementById('root'))

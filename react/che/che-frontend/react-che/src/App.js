import * as  React from 'react';
import { connect } from "react-redux"
import {useCallback} from 'react'
import {setFrom, setTo} from './store/actions';
import Header from './components/header/Header';
import './App.css'
import Journey from './components/journey/Journey'
const App = (props) => {
  console.log(props);
  const {from , to} = props
  // 性能优化   函数点击事件 每次传都会刷新  会带来header的更新  使用UseCalback 不会更新
  const onBack = useCallback(() => {
    window.history.back();
  },[]) // 当中括号的数据改变后 才会执行
  return (
    <div>
      <div className="header-wrapper">
        {/* title Header 通用  */}
        <Header title="火车票" onBack={onBack}/>
      </div>
      <form className="form">
        <Journey from = {from} to={to} />
      </form>
    </div>
  )
} 

const mapStateToProps = (state) => {
  return {
    from: state.from,
    to: state.to
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // 对调， 城市选择
    setFrom(from) {
      dispatch(setFrom(from))
    },
    setTo(to) {
      dispatch(setFrom(to))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

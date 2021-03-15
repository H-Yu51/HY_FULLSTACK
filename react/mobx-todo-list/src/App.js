import Home from './components/Home';
// 没有用到store  不需要有关系
// store 可以跨层级 传递
function App (){
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App;
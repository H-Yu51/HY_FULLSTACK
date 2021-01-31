import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
// import '~antd/dist/antd.css'  // CSS 单独引入
import Login from './Login';
import Post from './Post'; //新的页面  组件
function App() {
  return (
    <div className="App">
      <Post></Post>
      {/* <Login></Login> */}
      {/* <Button type="primary">Primary Button</Button> */}
    </div>
  );
}

export default App;

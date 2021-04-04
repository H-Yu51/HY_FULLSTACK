import logo from './logo.svg';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import Detail from './pages/Detail'
import './assets/reset.min.css';
import './assets/common.css'

const Home = () => {
  return(
    <div>
      Home
    </div>
  )
}


function App() {
  return (
 
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail/:id"  component={Detail} />
      {/* <Detail /> */}
    </Switch>
      
 
  );
}

export default App;

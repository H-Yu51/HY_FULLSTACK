import React, { useState } from 'react'
import { Provider } from 'react-redux';
import store  from './store';
import Recommend from './pages/Recommend'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Provider store={store}>
      <Recommend />
    </Provider>
  )
}

export default App

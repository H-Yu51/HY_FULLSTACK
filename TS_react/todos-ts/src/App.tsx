import React, { useState, useEffect } from 'react';
// style-component   moment   lodash   batter-scroll  axios
import classNames from 'classnames';
import ts from 'typescript';
import TodoForm from './TodoForm'
import axios from './api/axios'

// ts+ React 类型检测？   静态类型检测
//  Promise  <Todo[]>   todo返回值是 promise    promise 是todo的数组

type Todo = {
  id: number;
  name: string;
  done: boolean;
}


type Todos = Todo[]


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todos>([]);
  const onToggleTodo = (todo: Todo) => {
  
  }
  const refreshTodos = () => {
    axios<Todos>('/api/todos').then(setTodos)
  }
  useEffect (() => {
    refreshTodos()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm refreshTodos={refreshTodos}/>
        <ul>
          {
            todos.map((todo, index) => {

              <li
                key={index} 
                className={classNames({ done: todo.done })}
                onClick={() => onToggleTodo(todo)}>
                  {todo.name}
              </li>

            })
          }
        </ul>
      </header>
    </div>
  )
}

export default App

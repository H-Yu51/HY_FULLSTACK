import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
// 复杂应用 都是细分的
// 组件和数据是分离的
// 给我们的组件提供状态管理

import { Provider } from 'mobx-react';
import articlesStore from './stores/articlesStore';
import { HashRouter } from 'react-router-dom';
import usersStore from './stores/usersStore';


const stores = {
  articlesStore: articlesStore,
  usersStore:usersStore
}

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <HashRouter>
        <App />
      </HashRouter>

    </Provider>
  </React.StrictMode>, document.body
)

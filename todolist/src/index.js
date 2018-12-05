import React from 'react';  // 编译 JSX
import ReactDOM from 'react-dom';
// import App from './App';
import TodoList from './TodoList';

// PWA progressive web application
// https 协议的服务器上 用户访问一次，本地将有完整的缓存（作用于断网的情况下）
// import * as serviceWorker from './serviceWorker';

// <App />挂载到id="root"的Dom节点下
// JSX <App /> 组件名，首字母大写
ReactDOM.render(<TodoList />, document.getElementById('root'));
// serviceWorker.unregister();

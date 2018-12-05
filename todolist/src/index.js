import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// PWA progressive web application
// https 协议的服务器上 用户访问一次，本地有完整的缓存（作用于断网的情况下）
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import store from './redux/store.js'
import 'amfe-flexible';
import './index.less';
import App from './App.jsx';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import './App.less';
import React from 'react';
import ConstantRoute from './route';
// "react-router-dom": "^5.1.2",
function App() {
  return (
    <div className="app">
      <ConstantRoute />
      <ul>
        <li>11</li>
        <li>22</li>
      </ul>
    </div>
  );
}

export default App;

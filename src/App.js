import React from 'react';

import BaseballField from './images/baseballfield.jpg';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={BaseballField} alt="Redsox Baseball Field" />
      <Dashboard />
    </div>
  );
}

export default App;

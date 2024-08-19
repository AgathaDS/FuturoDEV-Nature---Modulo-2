// src/App.js
import React from 'react';
import './App.css';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
};

export default App;

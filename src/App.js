// src/App.js
import React from 'react';
import VirtualKeyboard from './VirtualKeyboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Keyboard</h1>
        <VirtualKeyboard />
      </header>
    </div>
  );
}

export default App;

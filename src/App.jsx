import './App.css';
import { useState } from 'react';
import Todos from './Todos.jsx'
import Clock from './Clock.jsx'

function App() {
  return (
    <div className="App">
      <Clock/>
      <h3 className='wheaterInfo'> wheater infomation will here</h3>
      <Todos/>
    </div>
  );
}

export default App;

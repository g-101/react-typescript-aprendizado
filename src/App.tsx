import { useState } from 'react';
import { Header } from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header name={'Solas'} />
      <p>Olá Mundo</p>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Header } from './components/Header';
import './App.css';

function App() {
  let [name, setName] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <div className="App">
      <Header name={'Hello World!'} />
      <label>Nome:</label>
      <input type="text" value={name} onChange={inputHandler} />
      <hr />
      <p>Seu nome é: {name} </p>
    </div>
  );
}

export default App;

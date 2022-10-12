import React, { useState } from 'react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import './App.css';

function App() {
  let buttonText = 'Clique Aqui';
  const clickHandler = (text: string) => {
    alert('Ativou no App \n' + text);
  };
  return (
    <div className="App">
      <Header name={'Hello World!'} />
      {/* componente Button é o filho de App  */}
      {/* Passando uma função que esta no pai para o filho por meio da prop clickFn */}
      <Button text={buttonText} clickFn={clickHandler} />
    </div>
  );
}

export default App;

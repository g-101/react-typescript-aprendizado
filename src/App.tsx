import { useState } from 'react';
import { Header } from './components/Header';
import './App.css';

function App() {
  let [number, setNumber] = useState(0);
  const incrementHandler = () => {
    setNumber((number += 1));
  };
  const decrementHandler = () => {
    if (number > 0) {
      setNumber((number -= 1));
    }
  };

  const resetHandler = () => {
    setNumber(0);
  };
  return (
    <div className="App">
      <Header name={'Contador'} />
      <p>Número: {number}</p>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;

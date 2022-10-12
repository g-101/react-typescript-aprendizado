import { useState } from 'react';
import { Header } from './components/Header';
import './App.css';

function App() {
  let [number, setNumber] = useState(0);
  const clickHandler = () => {
    setNumber((number += 1));
  };
  const resetHandler = () => {
    setNumber(0);
  };
  return (
    <div className="App">
      <Header name={'Solas'} />
      <p>Número: {number}</p>
      <button onClick={clickHandler}>Increment</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;

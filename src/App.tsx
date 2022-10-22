import './App.css';
import { useCounter } from './reducers/counter';

const App = () => {
  const [state, counterDispatch] = useCounter();
  return (
    <div className="wrapper">
      <p>Contagem: {state.count}</p>
      <div>
        <button onClick={() => counterDispatch({ type: '+' })}>+</button>
        <button onClick={() => counterDispatch({ type: '-' })}>-</button>
        <button onClick={() => counterDispatch({ type: 'reset' })}>reset</button>
      </div>
    </div>
  );
};

export default App;

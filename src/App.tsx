import { usePeopleList } from './reducers/peopleList';

import { ChangeEvent, useState } from 'react';
import './App.css';
const App = () => {
  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState('');
  const addButtonHandler = () => {
    if (nameInput) {
      dispatch({
        type: 'add',
        payload: {
          name: nameInput,
        },
      });
      setNameInput('');
    }
  };
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };
  const deleteButtonHandler = (id: string) => {
    dispatch({
      type: 'del',
      payload: {
        id: id,
      },
    });
  };
  return (
    <div className="wrapper">
      <input className="input-text" type="text" value={nameInput} onChange={inputChangeHandler} />
      <button onClick={addButtonHandler}>Adicionar</button>
      <hr />
      <ul>
        <p>Lista de Pessoas: </p>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => deleteButtonHandler(item.id)}>[ deletar ]</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

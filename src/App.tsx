import './App.css';
import { ChangeEvent, useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    // alert('executou');
    setFullName(`${name}  ${lastName}`);
  }, [name, lastName]);
  /*o segundo parametro, no array, são onde fica os observers */
  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const lastNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  return (
    <div className="App">
      <input type="text" placeholder="DIGITE O NOME" value={name} onChange={nameChangeHandler} />
      <input
        type="text"
        placeholder="DIGITE O SOBRENOME"
        value={lastName}
        onChange={lastNameChangeHandler}
      />
      <p>Nome completo: {fullName}</p>
    </div>
  );
}

export default App;

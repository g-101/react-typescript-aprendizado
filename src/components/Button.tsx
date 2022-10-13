import { useState } from 'react';

export const Button = () => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div>
      <button onClick={clickHandler}>Clique Aqui</button>
      {show && <p>Isso é um texto ipsum ipsum</p>}
    </div>
  );
};

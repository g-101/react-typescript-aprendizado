import { useState } from 'react';
import { ButtonStyled } from './ButtonStyled';

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
    <>
      <ButtonStyled onClick={clickHandler}>Clique Aqui</ButtonStyled>
      {show && <p>Isso é um texto ipsum ipsum</p>}
    </>
  );
};

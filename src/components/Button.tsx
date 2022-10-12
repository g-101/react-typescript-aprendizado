type Props = {
  text: string;
  clickFn: (text: string) => void;
};

export const Button = ({ text, clickFn }: Props) => {
  // Passando informação do filho para o pai,
  // vai utilizar a função passada no prop clickFn do Pai
  const clickHandler = () => {
    clickFn('Do filho para o pai');
  };
  return (
    <div>
      <button onClick={clickHandler}>{text}</button>
    </div>
  );
};

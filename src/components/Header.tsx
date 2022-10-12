type Props = {
  name?: string;
};

export const Header = ({ name }: Props) => {
  const handlerName = !name ? 'Não foi passado o nome' : name;
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{handlerName}</h2>
      <hr />
    </div>
  );
};

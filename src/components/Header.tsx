type Props = {
  name?: string;
};

export const Header = ({ name }: Props) => {
  const handlerName = !name ? 'Não foi passado o nome' : name;
  return (
    <div>
      <h1>{handlerName}</h1>
      <hr />
    </div>
  );
};

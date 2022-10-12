type Props = {
  data: {
    name: string;
    age: number;
  };
};

export const Pessoa = ({ data }: Props) => {
  const { name, age } = data;

  return (
    <li>
      {name} - {age} anos
    </li>
  );
};

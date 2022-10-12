import { Pessoa } from './Pessoa';

export const List = () => {
  const names = [
    { name: 'Solas', age: 2000 },
    { name: 'Maru', age: 5 },
    { name: 'Suga', age: 29 },
    { name: 'Cassandra', age: 33 },
  ];

  return (
    <ul>
      {names.map((name, index) => (
        <Pessoa key={index} data={name} />
      ))}
    </ul>
  );
};

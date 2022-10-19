import './Item.css';
type Props = {
  data: {
    titulo: string;
    avatar: string;
  };
};

export const Item = ({ data }: Props) => {
  const { titulo, avatar } = data;

  return (
    <div className="container">
      <li className="movie-title">{titulo}</li>
      <img className="img" src={avatar} />
    </div>
  );
};
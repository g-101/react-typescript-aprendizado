import { useParams } from 'react-router-dom';

export const AboutItem = () => {
  const { slug } = useParams();
  return <div>Pagina sobre {slug}</div>;
};

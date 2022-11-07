import { useParams, useNavigate } from 'react-router-dom';

export const AboutItem = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate(-1);
  };
  const homeButtonHandler = () => {
    navigate('/');
  };
  return (
    <div>
      Pagina sobre {slug}
      <hr />
      <button onClick={backButtonHandler}>Voltar</button>
      <button onClick={homeButtonHandler}>Home</button>
    </div>
  );
};

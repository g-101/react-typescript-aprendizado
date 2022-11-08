import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <div>
      <h2>PAGINA HOME</h2>
      <ul>
        <li>
          <Link to="/sobre">IR PARA A PAGINA SOBRE</Link>
        </li>
      </ul>
    </div>
  );
};

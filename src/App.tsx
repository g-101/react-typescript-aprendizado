import './App.css';
import { useState } from 'react';
import { Item } from './components/Item';
import { MovieTypes } from './types/MovieTypes';

function App() {
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const loadMoviesHandler = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setMovies(json);
      });
  };

  return (
    <div className="App">
      <p>Total de filmes: {movies.length}</p>
      <ul>
        {movies.map((movie, index) => (
          <Item key={index} data={movie} />
        ))}
      </ul>
      <button className="btn" onClick={loadMoviesHandler}>
        Carregar filmes
      </button>
    </div>
  );
}

export default App;

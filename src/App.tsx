import React, { useEffect, useState } from 'react';
import './App.css';
import { MovieTypes } from './types/MovieTypes';
import { Item } from './components/Item';

function App() {
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMoviesHandler = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://api.b7web.com.br/cinema/'); /* retorna a resposta no fetch */
      const json = await res.json(); /* transforma em json */
      setLoading(false);
      setMovies(json); /*atualiza o state com o json */
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadMoviesHandler();
  }, []);

  return (
    <div className="wrapper">
      {loading && <p className="title">Carregando...</p>}
      {!loading && (
        <>
          <p className="title">Total de filmes: {movies.length}</p>
          <ol className="list">
            {movies.map((movie, index) => (
              <Item key={index} data={movie} />
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import { MovieTypes } from './types/MovieTypes';
import { Item } from './components/Item';

function App() {
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMoviesHandler = async () => {
    try {
      /* vai tentar executar esse bloco, se não houver erros. */
      setLoading(true);
      const res = await fetch('https://api.b7web.com.br/cinema/'); /* retorna a resposta no fetch */
      const json = await res.json(); /* transforma em json */
      setLoading(false);
      setMovies(json); /*atualiza o state com o json */
    } catch (err) {
      /* caso haja erro de request, vai cair no catch */
      setLoading(false);
      setMovies([]);
      console.log(err);
    }
  };

  useEffect(() => {
    loadMoviesHandler();
  }, []);

  return (
    <div className="wrapper">
      {loading && <p className="title">Carregando...</p>}
      {!loading && movies.length > 0 && (
        <>
          <p className="title">Total de filmes: {movies.length}</p>
          <ol className="list">
            {movies.map((movie, index) => (
              <Item key={index} data={movie} />
            ))}
          </ol>
        </>
      )}
      {!loading && movies.length === 0 && <p className="title">Tente novamente mais tarde</p>}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { MovieTypes } from './types/MovieTypes';
import { Item } from './components/Item';

function App() {
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  // const loadMoviesHandler = () => {
  //   fetch('https://api.b7web.com.br/cinema/')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(json => {
  //       setMovies(json);
  //     });
  // };
  const loadMoviesHandler = async () => {
    try {
      const res = await fetch('https://api.b7web.com.br/cinema/'); /* retorna a resposta no fetch */
      const json = await res.json(); /* transforma em json */
      setMovies(json); /*atualiza o state com o json */
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="wrapper">
      <p>Total de filmes: {movies.length}</p>
      <ol className="list">
        {movies.map((movie, index) => (
          <Item key={index} data={movie} />
        ))}
      </ol>
      <button className="btn" onClick={loadMoviesHandler}>
        Carregar filmes
      </button>
    </div>
  );
}

export default App;

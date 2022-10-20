import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { PostTypes } from './types/PostTypes';

function App() {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    loadPostHandler();
  }, []);

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };
  const loadPostHandler = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setLoading(false);
      setPosts(json);
    } catch (error) {
      setLoading(false);
      setPosts([]);
      console.error(error);
    }
  };
  const clickHandler = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userID: 1,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      alert('Post adicionado com sucesso');
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wrapper">
      {loading && <p className="title">Carregando...</p>}

      <fieldset>
        <legend className="title">Adicionar novo post:</legend>
        <input
          className="inTitle"
          type="text"
          placeholder="Digite um titulo"
          value={title}
          onChange={titleChangeHandler}
        />
        <textarea value={body} onChange={bodyChangeHandler}></textarea>
        <button className="btn" onClick={clickHandler}>
          Adicionar
        </button>
      </fieldset>
      {!loading && posts.length > 0 && (
        <>
          <p className="title">Total de posts: {posts.length}</p>

          {posts.map((item, index) => (
            <div key={index}>
              <h4>{item.title}</h4>
              <small>
                #{item.id} - Usuario: {item.userId}
              </small>
              <p>{item.body}</p>
            </div>
          ))}
        </>
      )}
      {!loading && posts.length === 0 && <p className="title">Não há post para exibir</p>}
    </div>
  );
}

export default App;

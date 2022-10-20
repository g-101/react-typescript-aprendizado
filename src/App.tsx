import React, { useEffect, useState } from 'react';
import './App.css';
import { PostTypes } from './types/PostTypes';
import { Item } from './components/Item';

function App() {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPostHandler();
  }, []);
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

  return (
    <div className="wrapper">
      {loading && <p className="title">Carregando...</p>}
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

import React, { useEffect, useState } from 'react';
import './App.css';
import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';
import { PostTypes } from './types/PostTypes';
import { api } from './api';

function App() {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPostHandler();
  }, []);

  const loadPostHandler = async () => {
    try {
      setLoading(true);
      const answer = await api.getAllPosts();
      setLoading(false);
      setPosts(answer);
    } catch (error) {
      setLoading(false);
      alert('ocorreu um erro, tente novamente mais tarde');
      setPosts([]);
      console.error(error);
    }
  };
  const createPostHandler = async (title: string, body: string) => {
    try {
      await api.createNewPost(1, title, body);
      alert('Post adicionado com sucesso');
    } catch (error) {
      alert('ocorreu um erro');

      console.error(error);
    }
  };

  return (
    <div className="wrapper">
      {loading && <p className="title">Carregando...</p>}
      <PostForm onAdd={createPostHandler} />

      {!loading && posts.length > 0 && (
        <>
          <p className="title">Total de posts: {posts.length}</p>

          {posts.map((item, index) => (
            <PostItem dataPost={item} key={index} />
          ))}
        </>
      )}
      {!loading && posts.length === 0 && <p className="title">Não há post para exibir</p>}
    </div>
  );
}

export default App;

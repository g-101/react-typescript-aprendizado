import { useState, ChangeEvent } from 'react';
import './PostForm.css';
type Props = {
  onAdd: (title: string, body: string) => void;
};
export const PostForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const addClickHandler = () => {
    if (!title || !body) {
      alert();
      return;
    }
    onAdd(title, body);
  };

  return (
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
      <button className="btn" onClick={addClickHandler}>
        Adicionar
      </button>
    </fieldset>
  );
};

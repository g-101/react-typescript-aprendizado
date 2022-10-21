import { PostTypes } from '../types/PostTypes';
import './PostItem.css';
type Props = {
  dataPost: PostTypes;
};

export const PostItem = ({ dataPost }: Props) => {
  const { id, userId, title, body } = dataPost;
  return (
    <div>
      <h4>{title}</h4>
      <small>
        #{id} - Usuario: {userId}
      </small>
      <p>{body}</p>
    </div>
  );
};

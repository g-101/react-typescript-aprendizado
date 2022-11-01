import { useReducer } from 'react';
import { v4 as uuidV4 } from 'uuid';

type Person = {
  id: string;
  name: string;
};
type ActionType = {
  type: string;
  payload: {
    name?: string;
    id?: string;
  };
};

const reducer = (state: Person[], action: ActionType) => {
  const { id, name } = action.payload;
  switch (action.type) {
    case 'add':
      if (name) {
        let copyState = [...state];
        copyState.push({
          id: uuidV4(),
          name: name,
        });
        return copyState;
      }
      break;
    case 'del':
      if (id) {
        let copyState = [...state];
        copyState = copyState.filter(item => item.id !== id);
        return copyState;
      }
      break;
    case 'order':
      let copyState = [...state];
      copyState = copyState.sort((a, b) => (a.name > b.name ? 1 : -1));
      return copyState;
  }
  return state;
};
const initialState: Person[] = [];

export const usePeopleList = () => {
  return useReducer(reducer, initialState);
};

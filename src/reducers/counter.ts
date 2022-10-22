import { useReducer } from 'react';

type reducerState = {
  count: number;
};
type actionState = {
  type: string;
};
const initialState = { count: 0 };
const reducer = (state: reducerState, action: actionState) => {
  switch (action.type) {
    case '+':
      // não modificar o objeto state diretamente para manter a imutabilidade no código
      return { ...state, count: state.count + 1 };
    case '-':
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      }
      break;
    case 'reset':
      return initialState;
  }
  return state;
};

export const useCounter = () => useReducer(reducer, initialState);

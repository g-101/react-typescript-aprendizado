import { createContext } from 'react';

type ContextType = {
  name: string;
  age: number;
  children?: React.ReactNode;
};
const initialState = {
  name: 'Solas',
  age: 1000,
};
const Context = createContext<ContextType>(initialState);
export const ContextProvider = ({ children }: ContextType) => {
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};

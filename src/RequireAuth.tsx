import { Navigate } from 'react-router-dom';
//  autenticando a rota privada
type Props = {
  children: JSX.Element;
};

export const RequireAuth = ({ children }: Props) => {
  const isAuth = true; // simulando o login feito
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};

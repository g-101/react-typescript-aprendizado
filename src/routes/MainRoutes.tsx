import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { AboutPedro } from '../pages/ShowData';
import { AboutItem } from '../pages/AboutItem';
import { Admin } from '../pages/SignUp';
import { RequireAuth } from '../RequireAuth';
import { NotFound } from '../pages/NotFound';

export const MainRoutes = () => {
  // dispensa o uso dos hooks de Routes e Route
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sobre', element: <About /> },
    { path: '/sobre/pedro', element: <AboutPedro /> },
    { path: '/sobre/:slug', element: <AboutItem /> },
    {
      path: '/admin',
      element: (
        <RequireAuth>
          <Admin />
        </RequireAuth>
      ),
    },
    { path: '*', element: <NotFound /> },
  ]);
};

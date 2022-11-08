import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { AboutPedro } from '../pages/AboutPedro';
import { AboutItem } from '../pages/AboutItem';
import { Admin } from '../pages/Admin';
import { RequireAuth } from '../RequireAuth';
import { NotFound } from '../pages/NotFound';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route
        path="/admin"
        element={
          <RequireAuth>
            <Admin />
          </RequireAuth>
        }
      />
      <Route path="/sobre/pedro" element={<AboutPedro />} />
      <Route path="/sobre/:slug" element={<AboutItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

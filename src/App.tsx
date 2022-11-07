import { Routes, Route } from 'react-router-dom';

import { About } from './pages/About';
import { AboutBonieky } from './pages/AboutBonieky';
import { AboutPedro } from './pages/AboutPedro';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { AboutItem } from './pages/AboutItem';

const App = () => {
  return (
    <div>
      <h1>Titulo</h1>
      <hr />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/sobre/bonieky" element={<AboutBonieky />} />
          <Route path="/sobre/pedro" element={<AboutPedro />} />
          <Route path="/sobre/:slug" element={<AboutItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <hr />
      <footer>todos os direitos reservados.</footer>
    </div>
  );
};

export default App;

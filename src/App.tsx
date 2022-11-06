import { Routes, Route } from 'react-router-dom';

import { About } from './pages/About';
import { Home } from './pages/Home';

const App = () => {
  return (
    <div>
      <h1>Titulo</h1>
      <hr />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </div>
      <hr />
      <footer>todos os direitos reservados.</footer>
    </div>
  );
};

export default App;

import { Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { ShowData } from './pages/ShowData';
import { NotFound } from './pages/NotFound';
import { ContextProvider } from './contexts/Context';

const App = () => {
  return (
    <ContextProvider>
      <h1>Titulo da Pagina</h1>
      <hr />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/exibir" element={<ShowData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContextProvider>
  );
};

export default App;

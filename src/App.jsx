import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kushoo from '../src/pages/Kushoo';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Kushoo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

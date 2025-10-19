import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lander from '../src/pages/Lander/Lander';
import Position from './pages/Position/Position';
import Positions from './pages/Positions/Positions';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lander />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/*" element={<Positions />} />
          <Route path="/positions/:position" element={<Position />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViaCep from '../pages/ViaCep';
import BrasilApi from '../pages/BrasilApi';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ViaCep />} />
      <Route path="/brasilapi" element={<BrasilApi />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;
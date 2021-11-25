import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViaCep from '../pages/ViaCep';
import BrasilApi from '../pages/BrasilApi';
import NotFound from '../pages/NotFound';
import DDD from '../pages/DDD/index';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ViaCep />} />
      <Route path="/brasilapi" element={<BrasilApi />} />
      <Route path="/:numeroDdd" element={<DDD />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;
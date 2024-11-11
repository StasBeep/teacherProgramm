import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import SecondPage from '../pages/SecondPage';
import TraficLight from '../pages/TraficLight';
import ErrorPage from '../pages/ErrorPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/second" element={<SecondPage />} />
      <Route path="/trafic" element={<TraficLight />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;

import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import SecondPage from '../pages/SecondPage';
import ErrorPage from '../pages/ErrorPage';
import Plotly3d from '../pages/PLotly3d';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/second" index element={<SecondPage />} />
      <Route path="/plotly" element={<Plotly3d />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;

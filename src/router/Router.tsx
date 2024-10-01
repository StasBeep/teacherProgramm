import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import SecondPage from '../pages/SecondPage';
import RestApi from '../pages/RestApi';
import ErrorPage from '../pages/ErrorPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/second" index element={<SecondPage />} />
      <Route path="api" element={<RestApi />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;

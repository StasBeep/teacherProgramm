import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import SecondPage from '../pages/SecondPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path='/second' element={<SecondPage />} />
    </Routes>
  );
};

export default Router;

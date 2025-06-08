import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
    </Routes>
  );
};

export default Router;

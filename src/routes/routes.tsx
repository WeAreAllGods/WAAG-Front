import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTER } from './const';
import { HomeScreen } from '../screens';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTER.home.path} element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };

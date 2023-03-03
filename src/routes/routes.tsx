import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LOGIN_PATH, MAIN_PATH } from './const';
import { HomeScreen, KakaoAuthScreen, LoginScreen } from '../screens';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN_PATH} element={<HomeScreen />} />
        <Route path={LOGIN_PATH} element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };

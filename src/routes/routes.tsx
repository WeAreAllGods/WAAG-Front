import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { KAKOA_REDIRECT_PATH, LOGIN_PATH, MAIN_PATH, SIGNUP_PATH } from './const';
import { HomeScreen, KakaoAuthScreen, LoginScreen, SignupScreen } from '../screens';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN_PATH} element={<HomeScreen />} />
        <Route path={LOGIN_PATH} element={<LoginScreen />} />
        <Route path={SIGNUP_PATH} element={<SignupScreen />} />
        <Route path={KAKOA_REDIRECT_PATH} element={<KakaoAuthScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };

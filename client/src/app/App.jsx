import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/public/login/LoginPage';
import SignUpPage from '../pages/public/sign-up/SignUpPage';
import SignUpSuccessPage from '../pages/public/sign-up/SignUpSuccessPage';
import FindPasswordPage from '../pages/public/find-password/FindPasswordPage';

import MyProfilePage from '../pages/private/my-profile/MyProfilePage';
import ResetPasswordPage from '../pages/private/reset-password/ResetPasswordPage';
import ResetPasswordSuccessPage from '../pages/private/reset-password/ResetPasswordSuccessPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public router */}
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/sign-up/success" element={<SignUpSuccessPage />}></Route>
        <Route path="/find-password" element={<FindPasswordPage />}></Route>

        {/* private router */}
        <Route path="/my-profile" element={<MyProfilePage />}></Route>
        <Route path="/reset-password" element={<ResetPasswordPage />}></Route>
        <Route path="/reset-password/success" element={<ResetPasswordSuccessPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

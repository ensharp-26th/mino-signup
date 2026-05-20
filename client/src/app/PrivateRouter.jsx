import { Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/public/login/LoginPage';
import SignUpPage from '../pages/public/sign-up/SignUpPage';
import SignUpSuccessPage from '../pages/public/sign-up/SignUpSuccessPage';
import FindPasswordPage from '../pages/public/find-password/FindPasswordPage';

function PrivateRouter() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/sign-up" element={<SignUpPage />}></Route>
            <Route path="/sign-up/success" element={<SignUpSuccessPage />}></Route>
            <Route path="/find-password" element={<FindPasswordPage />}></Route>
        </Routes>
    );
}

export default PrivateRouter;
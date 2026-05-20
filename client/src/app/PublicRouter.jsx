import { Routes, Route } from 'react-router-dom';

import MyInformationPage from '../pages/private/my-information/MyInformationPage';
import ResetPasswordPage from '../pages/private/reset-password/ResetPasswordPage';
import ResetPasswordSuccessPage from '../pages/private/reset-password/ResetPasswordSuccessPage';

function PrivateRouter() {
    return (
        <Routes>
            <Route path="/my-information" element={<MyInformationPage />}></Route>
            <Route path="/reset-password" element={<ResetPasswordPage />}></Route>
            <Route path="/reset-password/success" element={<ResetPasswordSuccessPage />}></Route>
        </Routes>
    );
}

export default PrivateRouter;
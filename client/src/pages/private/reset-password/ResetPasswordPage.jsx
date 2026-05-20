import './ResetPasswordPage.css';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Card from '../../../components/Card/Card';
import Header from '../../../components/Header/Header';
import EmailBox from '../../../features/auth/components/email-box/EmailBox';
import PasswordForm from '../../../features/auth/components/password-form/PasswordForm';
import Button from '../../../components/Button/Button';

import { changePassword } from '../../../features/auth/services/ChangePasswordRequest';

function ResetPasswordPage() {
    const navigateResetPassword = useNavigate();

    const location = useLocation();
    const obj = location.state;
    const emailJSON = JSON.stringify(obj);
    const email = emailJSON.replace(/"/g, '')

    const [password, setPassword] = useState("");
    const [isPasswordVerified, setIsPasswordVerified] = useState(false);

    const useRequest = async () => {
        try {
            const response = await changePassword(email, password);

            console.log(response);
            navigateResetPassword('/');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card>
            <Header text="비밀번호 재설정" />
            <EmailBox email={email} />
            <PasswordForm password={password} setPassword={setPassword} isPasswordVerified={isPasswordVerified} setIsPasswordVerified={setIsPasswordVerified} />
            <Button text="재설정" onClick={() => useRequest()} disabled={!isPasswordVerified} />
        </Card>
    );
}

export default ResetPasswordPage;
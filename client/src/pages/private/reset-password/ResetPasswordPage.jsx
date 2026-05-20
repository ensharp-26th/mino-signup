import './ResetPassword.css';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Card from "../../../components/Card/Card";
import Header from "../../../components/Header/Header";
import EmailBox from '../../features/email-box/EmailBox';
import PasswordForm from "../../features/password-form/PasswordForm";
import Button from "../../../components/Button/Button";

import { changePassword } from '../../api/ChangePasswordRequest';

function ResetPassword() {
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
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card>
            <Header text="비밀번호 재설정" />
            <EmailBox email={email} />
            <PasswordForm password={password} setPassword={setPassword} isPasswordVerified={isPasswordVerified} setIsPasswordVerified={setIsPasswordVerified} />
            <Link className="to-success" to="/reset-password/success">
                <Button text="재설정" onClick={useRequest()} disabled={!isPasswordVerified} />
            </Link>
        </Card>
    );
}

export default ResetPassword;
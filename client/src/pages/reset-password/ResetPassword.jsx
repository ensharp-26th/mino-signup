import './ResetPassword.css';

import { Link } from 'react-router-dom';

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import EmailBox from '../../features/email-box/EmailBox';
import PasswordForm from "../../features/password-form/PasswordForm";
import Button from "../../components/Button/Button";

function ResetPassword() {
    return (
        <Card>
            <Header text="비밀번호 재설정" />
            <EmailBox />
            <PasswordForm />
            <Link className="to-success" to="/reset-password/success">
                <Button text="재설정" />
            </Link>
        </Card>
    );
}

export default ResetPassword;
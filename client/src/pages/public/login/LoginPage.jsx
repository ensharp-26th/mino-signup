import { useState, useEffect } from 'react';

import Card from '../../../components/Card/Card';
import Header from '../../../components/Header/Header';
import LoginForm from '../../../features/auth/components/login-form/LoginForm';
import LoginAction from '../../../features/auth/components/login-action/LoginAction';

import { login } from '../../../features/auth/services/LoginRequest';

function LoginPage() {
    const getEmail = () => {
        if (localStorage.getItem('email') === null) {
            return "";
        }
        else {
            return localStorage.getItem('email');
        }
    }

    const startEmail = getEmail();

    const [email, setEmail] = useState(startEmail);
    const [password, setPassword] = useState("");
    const [canLogin, setCanLogin] = useState(true);
    const [rememberEmail, setRememberEmail] = useState(
        localStorage.getItem('rememberEmail') === "true"
    );

    return (
        <Card>
            <Header text="En# SignUp!!"/>
            <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} canLogin={canLogin} setCanLogin={setCanLogin} rememberEmail={rememberEmail} setRememberEmail={setRememberEmail} />
            <LoginAction email={email} password={password} canLogin={canLogin} setCanLogin={setCanLogin} rememberEmail={rememberEmail} />
        </Card>
    );
}

export default LoginPage;
import { useState, useEffect } from 'react';

import Card from '../../../components/Card/Card';
import Header from '../../../components/Header/Header';
import LoginForm from '../../../features/auth/components/login-form/LoginForm';
import LoginAction from '../../../features/auth/components/login-action/LoginAction';

import { login } from '../../../features/auth/services/LoginRequest';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [canLogin, setCanLogin] = useState(true);
    const [rememberEmail, setRememberEmail] = useState(false);

    return (
        <Card>
            <Header text="En# SignUp!!"/>
            <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} canLogin={canLogin} setCanLogin={setCanLogin} rememberEmail={rememberEmail} setRememberEmail={setRememberEmail} />
            <LoginAction email={email} password={password} canLogin={canLogin} setCanLogin={setCanLogin} rememberEmail={rememberEmail} />
        </Card>
    );
}

export default LoginPage;
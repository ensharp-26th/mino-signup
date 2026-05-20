import { useState, useEffect } from 'react';

import Card from '../../../components/Card/Card';
import Header from '../../../components/Header/Header';
import LoginForm from '../../../features/auth/components/login-form/LoginForm';
import LoginAction from '../../../features/auth/components/login-action/LoginAction';

import { login } from '../../../features/auth/services/LoginRequest';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [canLogin, setCanLogin] = useState(false);
    const [rememberEmail, setRememberEmail] = useState(false);

    useEffect(() => {
        const useRequest = async () => {
            try {
                const response = await login(email, password);
                    
                console.log(response);
                setCanLogin(true);
            } catch (error) {
                console.log(error)
                setCanLogin(false);
            }
        }
        useRequest();
    });

    return (
        <Card>
            <Header text="En# SignUp!!"/>
            <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} canLogin={canLogin} rememberEmail={rememberEmail} setRememberEmail={setRememberEmail} />
            <LoginAction email={email} password={password} canLogin={canLogin} rememberEmail={rememberEmail} />
        </Card>
    );
}

export default LoginPage;
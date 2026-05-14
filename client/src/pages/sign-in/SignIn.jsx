import { useState, useEffect } from 'react';

import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SignInForm from '../../features/sign-in-form/SignInForm';
import SignInAction from '../../features/sign-in-action/SignInAction';

import { login } from '../../api/LoginRequest';

function SignIn() {
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
    // 버튼 눌렀을때만 호출

    return (
        <Card>
            <Header text="En# SignUp!!"/>
            <SignInForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} canLogin={canLogin} rememberEmail={rememberEmail} setRememberEmail={setRememberEmail} />
            <SignInAction email={email} password={password} canLogin={canLogin} rememberEmail={rememberEmail} />
        </Card>
    );
}

export default SignIn;
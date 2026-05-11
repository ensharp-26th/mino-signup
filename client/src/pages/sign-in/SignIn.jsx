import { useState } from 'react';

import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SignInForm from '../../features/sign-in-form/SignInForm';
import SignInAction from '../../features/sign-in-action/SignInAction';

import { login } from '../../api/LoginRequest';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [canLogin, setCanLogin] = useState(false);

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

    return (
        <Card>
            <Header text="En# SignUp!!"/>
            <SignInForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            <SignInAction />
        </Card>
    );
}

export default SignIn;
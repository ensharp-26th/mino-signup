import { useState } from 'react';

import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SignInForm from '../../features/sign-in-form/SignInForm';
import SignInAction from '../../features/sign-in-action/SignInAction';

import { login } from '../../api/LoginRequest';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const useRequest = async () => {
        try {
            const response = await login(email, password);
                
            console.log(response);
            alert('로그인에 성공했습니다.');
        } catch (error) {
            console.log(error)
            alert('로그인에 실패했습니다.');
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
import { useState } from 'react';

import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SignInForm from '../../features/sign-in-form/SignInForm';
import SignInAction from '../../features/sign-in-action/SignInAction';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Card>
            <Header text="En# SignUp!!"/>
            <SignInForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            <SignInAction email={email} password={password} />
        </Card>
    );
}

export default SignIn;
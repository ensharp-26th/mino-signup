import './SignUpPage.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../../../components/Card/Card';
import Header from  '../../../components/Header/Header';
import EmailForm from '../../../features/auth/components/email-form/EmailForm';
import PasswordForm from '../../../features/auth/components/password-form/PasswordForm';
import UsernameForm from '../../../features/auth/components/username-form/UsernameForm';
import AddressForm from '../../../features/auth/components/address-form/AddressForm';
import Button from '../../../components/Button/Button';

import { signUp } from '../../../features/auth/services/SignUpRequest';

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");

    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [isPasswordVerified, setIsPasswordVerified] = useState(false);

    const navigateSignUp = useNavigate();

    const requestSignUp = async () => {
        try {
            const response = await signUp(email, password, username, streetAddress, detailAddress);
                
            console.log(response);
            navigateSignUp("/sign-up/success");
        } catch (error) {
            console.log(error)
        }
    }

    const isValidForms = () => {
        return (
            email !== "" &&
            password !== "" &&
            username !== "" &&
            streetAddress !== "" &&
            isEmailVerified && isPasswordVerified
        );
    }

    return (
        <Card>
            <Header text="회원가입" />
            <div className="forms">
                <EmailForm type="sign-up" email={email} setEmail={setEmail} isEmailVerified={isEmailVerified} setIsEmailVerified={setIsEmailVerified} />
                <PasswordForm password={password} setPassword={setPassword} isPasswordVerified={isPasswordVerified} setIsPasswordVerified={setIsPasswordVerified} />
                <UsernameForm username={username} setUsername={setUsername} />
                <AddressForm streetAddress={streetAddress} setStreetAddress={setStreetAddress} detailAddress={detailAddress} setDetailAddress={setDetailAddress} />
            </div>
            <Button text="제출하기" onClick={requestSignUp} disabled={!isValidForms()} />
        </Card>
    );
}

export default SignUpPage;
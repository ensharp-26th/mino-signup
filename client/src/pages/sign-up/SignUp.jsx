import './SignUp.css';

import { useState } from 'react';

import Card from '../../components/Card/Card';
import Header from  '../../components/Header/Header';
import EmailForm from '../../features/e-mail-form/EmailForm';
import PasswordForm from '../../features/password-form/PasswordForm';
import UsernameForm from '../../features/username-form/UsernameForm';
import AddressForm from '../../features/address-form/AddressForm';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { signUp } from '../../api/SignUpRequest';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");

    const useRequest = async () => {
        try {
            const response = await signUp(email, password, username, streetAddress, detailAddress);
                
            console.log(response);
            alert('회원가입에 성공했습니다.');
        } catch (error) {
            console.log(error)
            alert('회원가입에 실패했습니다.');
        }
    }

    return (
        <Card>
            <Header text="회원가입" />
            <div className="forms">
                <EmailForm email={email} setEmail={setEmail} />
                <PasswordForm password={password} setPassword={setPassword} />
                <UsernameForm username={username} setUsername={setUsername} />
                <AddressForm streetAddress={streetAddress} setStreetAddress={setStreetAddress} detailAddress={detailAddress} setDetailAddress={setDetailAddress} />
            </div>
            <Link className="to-sign-up-success" to="/sign-up/success">
                <Button text="제출하기" onClick={useRequest}/>
            </Link>
        </Card>
    );
}

export default SignUp;
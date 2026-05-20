import './FindPassword.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from "../../../components/Card/Card";
import Header from "../../../components/Header/Header";
import EmailForm from "../../features/email-form/EmailForm";
import Button from "../../../components/Button/Button";

function FindPassword() {
    const [email, setEmail] = useState("");
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    
    return (
        <Card>
            <Header text="비밀번호 찾기" />
            <EmailForm type="find-password" email={email} setEmail={setEmail} isEmailVerified={isEmailVerified} setIsEmailVerified={setIsEmailVerified} />
            <Link className="to-reset-password" to="/reset-password" state={email} >
                <Button text="제출하기" disabled={!isEmailVerified}/>
            </Link>
        </Card>
    );
}

export default FindPassword;
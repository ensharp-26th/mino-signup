import './FindPasswordPage.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../../../components/Card/Card';
import Header from '../../../components/Header/Header';
import EmailForm from '../../../features/auth/components/email-form/EmailForm';
import Button from '../../../components/Button/Button';

function FindPasswordPage() {
    const navigateFindPassword = useNavigate();

    const [email, setEmail] = useState("");
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    
    return (
        <Card>
            <Header text="비밀번호 찾기" />
            <EmailForm type="find-password" email={email} setEmail={setEmail} isEmailVerified={isEmailVerified} setIsEmailVerified={setIsEmailVerified} />
            <Button text="제출하기" onClick={() => navigateFindPassword('/reset-password', {state: email})} disabled={!isEmailVerified}/>
        </Card>
    );
}

export default FindPasswordPage;
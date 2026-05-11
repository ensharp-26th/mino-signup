import './EmailForm.css';

import { useState } from 'react';

import InputBox from '../../components/InputBox/InputBox';
import check from '../../assets/check.png';
import fail from '../../assets/fail.png';
import Button from '../../components/Button/Button';

import { requestVerificationCode } from '../../api/VerificationCodeRequest';
import { confirmVerificationCode } from '../../api/EmailVerificationRequest';

function EmailForm() {
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");

    const request = async () => {
        try {
            const response = await requestVerificationCode(email);
            
            console.log(response);
            alert('인증번호 전송에 성공했습니다.');
        } catch (error) {
            console.log(error)
  
            alert('인증번호 전송에 실패했습니다.');
        }
    }

    const isValidEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const setInputBoxIcon = () => {
        return isValidEmail() ? <img src={check} /> : <img src={fail} />;
    }

    return (
        <div className="email-form">
            <legend>이메일</legend>
            <div className="email-wrapper">
                <InputBox 
                    type="text" 
                    value={email}
                    placeholder="이메일" 
                    onChange={(e) => setEmail(e.target.value)} 
                    icon={setInputBoxIcon()}
                />
                <Button 
                    type="button" 
                    style={{ borderRadius: "10px" }} 
                    onClick={request}
                    text="전송"
                />
            </div>
            <InputBox 
                type="text" 
                value={verificationCode}
                placeholder="인증번호" 
                onChange={(e) => setVerificationCode(e.target.value)}
            />
        </div>
    );
}

export default EmailForm;
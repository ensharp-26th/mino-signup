import './EmailForm.css';

import { useState } from 'react';

import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';

import { requestVerificationCode } from '../../api/VerificationCodeRequest';
import { confirmVerificationCode } from '../../api/EmailVerificationRequest';

function EmailForm() {
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [verificationError, setVerificationError] = useState("ang");

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
    const confirm = async () => {
        try {
            const response = await confirmVerificationCode(email, verificationCode);

            console.log(response);

            setVerificationError("ang");
        } catch (error) {
            console.log(error)

            setVerificationError("인증번호가 올바르지 않습니다.");
        }
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
            {verificationError && (
                <p className="verification-error">
                    {verificationError}
                </p>
            )}
        </div>
    );
}

export default EmailForm;
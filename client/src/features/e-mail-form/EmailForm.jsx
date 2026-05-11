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
    const [isRequested, setIsRequested] = useState(false);

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

    const setInputBoxBorder = () => {
        if (email !== "") {
            return isValidEmail() ? { border: "1px solid #435DEEA6" } : { border: "1px solid #EE4346A6" }
        }
    }
    const setInputBoxIcon = () => {
        if (email !== "") {
            return isValidEmail() ? <img src={check} /> : <img src={fail} />;
        }
    }

    const setButtonSytle = () => {
        return isValidEmail() 
            ? {
                borderRadius: "10px"
            } 
            : { 
                borderRadius: "10px",
                background: "#E3E3E3",
                border: "1px solid #E3E3E3",
                cursor: "default"
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
                    style={setInputBoxBorder()}
                    icon={setInputBoxIcon()}
                />
                <Button 
                    type="button" 
                    style={setButtonSytle()} 
                    onClick={request}
                    disabled={!isValidEmail()}
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
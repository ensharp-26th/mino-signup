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
    const [isSent, setIsSent] = useState(false);
    const [isResent, setIsResent] = useState(false);
    const [isVerified, setIsVerified] = useState(true);

    const useRequest = async () => {
        try {
            const response = await requestVerificationCode(email);

            if (isSent) {
                setIsResent(true);
            }
            setIsSent(true);
            
            console.log(response);
            alert('인증번호 전송에 성공했습니다.');
        } catch (error) {
            console.log(error)
            alert('인증번호 전송에 실패했습니다.');
        }
    }
    const useConfirm = async (code) => {
        try {
            const response = await confirmVerificationCode(email, code);

            setIsVerified(true);
            console.log(response);
        } catch (error) {
            setIsVerified(false);
            console.log(error);
        }
    }

    const isValidEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const setEmailInputBoxBorder = () => {
        if (email !== "") {
            return isValidEmail() ? { border: "1px solid #435DEEA6" } : { border: "1px solid #EE4346A6" }
        }
    }
    const setEmailInputBoxIcon = () => {
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
    const setButtonText = () => {
        return isSent ? "재전송" : "전송";
    }

    const showSentMessage = () => {
        if (isResent) {
            return (
                <span className="sent-message">
                    인증번호가 재전송되었습니다.
                </span>  
            );
        }
        else if (isSent) {
            return (
                <span className="sent-message">
                    인증번호가 전송되었습니다.
                </span>
            );
        }
    }
    const showEmailErrorMessage = () => {
        if (email !== "" && !isValidEmail()) {
            return (
                <span className="error-message">
                    유효하지 않은 메일입니다.
                </span>
            )
        }
    }
    const showErrorVerificationCode = () => {
        if (isSent && verificationCode !== "" && !isVerified) {
            return (
                <span className="error-message">
                    인증번호가 일치하지 않습니다.
                </span>
            );
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
                    style={setEmailInputBoxBorder()}
                    icon={setEmailInputBoxIcon()}
                />
                <Button 
                    type="button" 
                    style={setButtonSytle()} 
                    onClick={useRequest}
                    disabled={!isValidEmail()}
                    text={setButtonText()}
                />
            </div>
            <InputBox 
                type="text" 
                value={verificationCode}
                placeholder="인증번호" 
                onChange={(e) => {
                        setVerificationCode(e.target.value);
                        useConfirm(e.target.value);
                }}
            />
            {showEmailErrorMessage()}
            {showSentMessage()}
            {showErrorVerificationCode()}
        </div>
    );
}

export default EmailForm;
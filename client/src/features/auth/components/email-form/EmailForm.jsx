import './EmailForm.css';

import { useState } from 'react';

import InputBox from '../../../../components/InputBox/InputBox';
import ValidationCheck from '../../../../assets/icons/ValidationCheck.png';
import ValidationFail from '../../../../assets/icons/ValidationFail.png';
import Button from '../../../../components/Button/Button';

import { sendVerificationCode } from '../../services/VerificationCodeRequest';
import { checkVerificationCode } from '../../services/EmailVerificationRequest';
import { checkEmailDuplication } from '../../services/EmailDuplicationCheckRequest';

function EmailForm({ type, email, setEmail, isEmailVerified, setIsEmailVerified }) {
    const [verificationCode, setVerificationCode] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [isResent, setIsResent] = useState(false);
    const [isDuplicated, setIsDuplicated] = useState(false);

    const useRequest = async () => {
        try {
            const response = await sendVerificationCode(email);

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
            const response = await checkVerificationCode(email, code);

            setIsEmailVerified(true);
            console.log(response);
        } catch (error) {
            setIsEmailVerified(false);
            console.log(error);
        }
    }
    const useCheck = async (temp) => {
        try {
            const response = await checkEmailDuplication(temp);
            
            setIsDuplicated(false);
            console.log(response);
        } catch (error) {
            if (type === "sign-up") {
                setIsDuplicated(true);
            }
            console.log(error);
        }
    }

    const isValidEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const setEmailInputBoxBorder = () => {
        if (email !== "") {
            return (isValidEmail() && !isDuplicated) ? { border: "1px solid #435DEEA6" } : { border: "1px solid #EE4346A6" }
        }
    }
    const setEmailInputBoxIcon = () => {
        if (email !== "") {
            return (isValidEmail() && !isDuplicated) ? <img src={ValidationCheck} /> : <img src={ValidationFail} />;
        }
    }

    const setButtonSytle = () => {
        return (isValidEmail() && !isDuplicated)
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
                <span className="success-message">
                    인증번호가 재전송되었습니다.
                </span>  
            );
        }
        else if (isSent) {
            return (
                <span className="success-message">
                    인증번호가 전송되었습니다.
                </span>
            );
        }
    }
    const showEmailErrorMessage = () => {
        if (email !== "") {
            if (!isValidEmail()) {
                return (
                    <span className="error-message">
                        유효하지 않은 메일입니다.
                    </span>
                )
            }
            else if (isDuplicated) {
                return (
                    <span className="error-message">
                        중복된 메일입니다.
                    </span>
                )
            }
        }
    }
    const showErrorVerificationCode = () => {
        if (isSent && verificationCode !== "" && !isEmailVerified) {
            return (
                <span className="error-message">
                    인증번호가 일치하지 않습니다.
                </span>
            );
        }
    }

    return (
        <div className="email-form">
            <label>이메일</label>
            <div className="email-wrapper">
                <InputBox 
                    type="text" 
                    value={email}
                    placeholder="이메일" 
                    onChange={(e) => {
                        setEmail(e.target.value)
                        useCheck(e.target.value)
                    }} 
                    style={setEmailInputBoxBorder()}
                    icon={setEmailInputBoxIcon()}
                />
                <Button 
                    type="button" 
                    style={setButtonSytle()} 
                    onClick={useRequest}
                    disabled={!isValidEmail() || isDuplicated}
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
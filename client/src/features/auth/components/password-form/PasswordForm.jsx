import './PasswordForm.css';

import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import InputBox from '../../../../components/InputBox/InputBox';

function PasswordForm({ password, setPassword, isPasswordVerified, setIsPasswordVerified }) {
    const [subPassword, setSubPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showSubPassword, setShowSubPassword] = useState(false)

    const isValidPassword = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/-]).{8,16}$/;
        return passwordRegex.test(password);
    }
    const setPasswordInputBoxBorder = () => {
        if (password !== "") {
            return isValidPassword() ? { border: "1px solid #435DEEA6" } : { border: "1px solid #EE4346A6" }
        }
    }
    const setPasswordInputBoxIcon = () => {
        return (
            <span onClick={() => setShowPassword(!showPassword)}>
                { showPassword ? <FaEye /> : <FaEyeSlash /> }
            </span>
        );
    }

    const isValidSubPassword = () => {
        return subPassword === password;
    }
    const setSubPasswordInputBoxBorder = () => {
        if (password !== "") {
            return isValidSubPassword() ? { border: "1px solid #435DEEA6" } : { border: "1px solid #EE4346A6" }
        }
    }
    const setSubPasswordInputBoxIcon = () => {
        return (
            <span onClick={() => setShowSubPassword(!showSubPassword)}>
                { showSubPassword ? <FaEye /> : <FaEyeSlash /> }
            </span>
        );
    }

    const passwordType = showPassword ? "text" : "password";
    const subPasswordType = showSubPassword ? "text" : "password";

    const showErrorInvalidPassword = () => {
        if (password !== "" && !isValidPassword()) {
            return (
                <span className="password-error-message">
                    8~16자의 영문 대/소문자, 숫자, 특수문자
                </span>
            );
        }
    }
    const showErrorInvalidSubPassword = () => {
        if (password !== "" && !isValidSubPassword()) {
            return (
                <span className="password-error-message">
                    비밀번호가 일치하지 않습니다.
                </span>
            );
        }
    }

    return (
        <div className="password-form">
            <label>비밀번호</label>
            <InputBox
                type={passwordType}
                value={password}
                placeholder="8~16자의 영문 대/소문자, 숫자, 특수문자"
                onChange={(e) => setPassword(e.target.value)}
                style={setPasswordInputBoxBorder()}
                icon={setPasswordInputBoxIcon()}
             />
            <InputBox 
                type={subPasswordType}
                value={subPassword}
                placeholder="비밀번호 확인" 
                onChange={(e) => {
                    setSubPassword(e.target.value)
                    setIsPasswordVerified(password === e.target.value)
                }}
                style={setSubPasswordInputBoxBorder()}
                icon={setSubPasswordInputBoxIcon()}
            />
            {showErrorInvalidPassword()}
            {showErrorInvalidSubPassword()}
        </div>
    );
}

export default PasswordForm;
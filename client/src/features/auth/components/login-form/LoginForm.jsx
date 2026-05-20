import './SignInForm.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

import InputBox from "../../../../components/InputBox/InputBox";

function SignInForm({ email, setEmail, password, setPassword, canLogin, rememberEmail, setRememberEmail }) {
    const [showPassword, setShowPassword] = useState(false);

    const setPasswordInputBoxIcon = () => {
        if (password === "") {
            return <FaLock />
        }
        else {
            return (
                <span onClick={() => setShowPassword(!showPassword)}>
                    { showPassword ? <FaEye /> : <FaEyeSlash /> }
                </span>
            );
        }
    }

    const passwordType = showPassword ? "text" : "password";
    
    const showErrorInvalidAccount = () => {
        if (email !== "" && password !== "" && !canLogin) {
            return (
                <span className="error-message">
                    이메일 주소가 정확한지 확인해 주세요.
                </span>
            )
        }
    }

    return(
        <div className="sign-in-form">
            <InputBox
                type="text" 
                value={email} 
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)} 
                icon={<FaEnvelope />}
            />
            <InputBox 
                type={passwordType}
                value={password} 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}
                icon={setPasswordInputBoxIcon()}
            />
            {showErrorInvalidAccount()}
            <span className="form-action">
                <span className="remember-id">
                    <label>
                        <input 
                            type="checkbox"
                            checked={rememberEmail}
                            onChange={(e) => setRememberEmail(e.target.checked)}
                        />아이디 저장
                    </label>
                </span>
                <Link className="to-find-password" to="/find-password">비밀번호 찾기</Link>
            </span>
        </div>
    );
}

export default SignInForm;
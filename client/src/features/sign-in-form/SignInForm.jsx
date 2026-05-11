import './SignInForm.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

import InputBox from "../../components/InputBox/InputBox";

function SignInForm({ email, setEmail, password, setPassword }) {
    const [showPassword, setShowPassword] = useState("");

    return(
        <div className="sign-in-form">
            <InputBox
                type="text" 
                value={email} 
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)} 
            />
            <InputBox 
                type="password" 
                value={password} 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}
            />
            <span className="form-action">
                <span className="remember-id">
                    <label>
                        <input type="checkbox"/>아이디 저장
                    </label>
                </span>
                <Link className="to-find-password" to="/find-password">비밀번호 찾기</Link>
            </span>
        </div>
    );
}

export default SignInForm;
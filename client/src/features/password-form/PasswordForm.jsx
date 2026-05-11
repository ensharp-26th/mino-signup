import './PasswordForm.css';

import { useState } from 'react';

import InputBox from "../../components/InputBox/InputBox";

function PasswordForm() {
    const [password, setPassword] = useState("");
    const [subPassword, setSubPassword] = useState("");

    return (
        <div className="password-form">
            <legend>비밀번호</legend>
            <InputBox
                type="password"
                value={password}
                placeholder="8~16자의 영문 대/소문자, 숫자, 특수문자"
                onChange={(e) => setPassword(e.target.value)}
             />
            <InputBox 
                type="password" 
                value={subPassword}
                placeholder="비밀번호 확인" 
                onChange={(e) => setSubPassword(e.target.value)}
            />
        </div>
    );
}

export default PasswordForm;
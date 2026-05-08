import './PasswordForm.css';

import InputBox from "../../components/InputBox/InputBox";
import { useState } from 'react';

function PasswordForm() {
    const [password, setPassword] = useState("");

    return (
        <div className="password-form">
            <legend>비밀번호</legend>
            <InputBox
                type="password"
                placeholder="8~16자의 영문 대/소문자, 숫자, 특수문자"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
             />
            <InputBox type="password" placeholder="비밀번호 확인" />
        </div>
    );
}

export default PasswordForm;
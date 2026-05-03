import './PasswordForm.css';

import InputBox from "../../components/InputBox/InputBox";

function PasswordForm() {
    return (
        <div className="password-form">
            <span>비밀번호</span>
            <InputBox type="password" placeholder="8~16자의 영문 대/소문자, 숫자, 특수문자" />
            <InputBox type="password" placeholder="비밀번호 확인" />
        </div>
    );
}

export default PasswordForm;
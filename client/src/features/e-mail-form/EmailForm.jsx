import './EmailForm.css';

import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';

function EmailForm() {
    return (
        <div className="e-mail-form">
            <span>이메일</span>
            <div className="e-mail-wrapper">
                <InputBox type="text" placeholder="이메일" />
                <Button text="전송" children="/find-password" />
            </div>
            <InputBox type="text" placeholder="인증번호" />
        </div>
    );
}

export default EmailForm;
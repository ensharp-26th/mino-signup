import './EmailForm.css';

import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';

function EmailForm({ name }) {
    return (
        <form className="e-mail-form">
            <legend>이메일</legend>
            <div className="e-mail-wrapper">
                <InputBox type="text" placeholder="이메일" />
                <Button type="submit" name={name} style={{ borderRadius: "10px" }} text="전송" />
            </div>
            <InputBox type="text" placeholder="인증번호" />
        </form>
    );
}

export default EmailForm;
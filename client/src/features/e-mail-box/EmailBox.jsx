import './EmailBox.css';

import InputBox from '../../components/InputBox/InputBox';

function EmailBox({ name }) {
    return (
        <div className="e-mail-box">
            <legend>이메일</legend>
            <InputBox type="email" name={name} placeholder="이메일" style={{ borderRadius: "10px" }}/>
        </div>
    );
}

export default EmailBox;
import './EmailBox.css';

import InputBox from '../../components/InputBox/InputBox';

function EmailBox() {
    return (
        <div className="e-mail-box">
            <legend>이메일</legend>
            <InputBox type="text" placeholder="이메일" style={{ borderRadius: "10px" }}/>
        </div>
    );
}

export default EmailBox;
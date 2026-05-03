import './EmailBox.css';

import InputBox from '../../components/InputBox/InputBox';

function EmailBox() {
    return (
        <div className="e-mail-box">
            <span>이메일</span>
            <InputBox type="text" placeholder="이메일" />
        </div>
    );
}

export default EmailBox;
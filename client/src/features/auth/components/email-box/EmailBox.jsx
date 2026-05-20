import './EmailBox.css';

import InputBox from '../../../../components/InputBox/InputBox';

function EmailBox({ email }) {
    return (
        <div className="email-box">
            <label>이메일</label>
            <InputBox type="text" value={email} readOnly={true} style={{ borderRadius: "10px" }}/>
        </div>
    );
}

export default EmailBox;
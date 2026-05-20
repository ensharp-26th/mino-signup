import './EmailBox.css';

import InputBox from '../../../../components/InputBox/InputBox';

function EmailBox({ email }) {
    return (
        <div className="email-box">
            <legend>이메일</legend>
            <InputBox type="text" value={email} readOnly={true} style={{ borderRadius: "10px" }}/>
        </div>
    );
}

export default EmailBox;
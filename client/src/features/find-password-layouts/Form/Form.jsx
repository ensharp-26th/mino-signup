import './Form.css';

import InputBox from '../../../components/InputBox/InputBox';
import Button from '../../../components/Button/Button';

function Form() {
    return (
        <div className="e-mail">
            <span>이메일</span>
            <span className="sss">
                <InputBox type="text" placeholder="이메일" />
                <Button text="전송" />
            </span>
            <InputBox type="text" placeholder="인증번호" />
        </div>
    );
}

export default Form;
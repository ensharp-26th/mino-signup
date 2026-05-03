import './Form.css';

import InputBox from '../../../components/InputBox/InputBox';
import Button from '../../../components/Button/Button';

function Form() {
    return(
        <div className="form">
            <div className="e-mail">
                <span>이메일</span>
                <span className="sss">
                    <InputBox type="text" placeholder="이메일" />
                    <Button text="전송" />
                </span>
                <InputBox type="text" placeholder="인증번호" />
            </div>
            <div className="password">
                <span>비밀번호</span>
                <InputBox type="password" placeholder="8~16자의 영문 대/소문자, 숫자, 특수문자" />
                <InputBox type="password" placeholder="비밀번호 확인" />
            </div>
            <div className="name">
                <span>이름</span>
                <InputBox type="text" placeholder="" />
            </div>
            <div className="address">
                <span>주소</span>
                <InputBox type="text" placeholder="클릭하여 주소 검색" />
                <InputBox type="text" placeholder="상세주소" />
            </div>
        </div>
    );
}

export default Form;
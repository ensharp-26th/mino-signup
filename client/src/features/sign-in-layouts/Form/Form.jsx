import './Form.css';

import InputBox from "../../../components/InputBox/InputBox";
import { Link } from 'react-router-dom';

function Form() {
    return(
        <div className="form">
            <InputBox type="text" placeholder="E-mail" />
            <InputBox type="password" placeholder="Password" />
            <span className="form-action">
                <span className="remember-id">
                    <input type="checkbox"/><label>아이디 저장</label>
                </span>
                <Link className="to-find-password" to="/find-password">비밀번호 찾기</Link>
            </span>
        </div>
    );
}

export default Form;
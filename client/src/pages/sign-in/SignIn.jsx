import './SignIn.css';

import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <Card>
            <Header title="En# SignUp!!"/>
            <div className="form">
                <Input />
                <Input />
                <div className="form-options">
                    <span className="remember-id">
                        <input type="checkbox"/><label>아이디 저장</label>
                    </span>
                    <Link className="to-find-password" to="/find-password">비밀번호 찾기</Link>
                </div>
            </div>
            <div className="actions">
                <Button text="Login"/>
                <span className="sign-up-prompt">
                    계정이 없으신가요? <Link className="to-sign-up" to="/sign-up">회원가입</Link>
                </span>
            </div>
        </Card>
    );
}

export default SignIn;
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
                    <div className="remember-id">
                        <input type="checkbox"/><label>아이디 저장</label>
                    </div>
                    <div className="find-password-prompt">
                        
                    </div>
                </div>
            </div>
            <div className="actions">
                <Button text="Login"/>
                <span className="sign-up-prompt">
                    계정이 없으신가요? <Link to="/sign-up" className="to-sign-in">회원가입</Link>
                </span>
            </div>
        </Card>
    );
}

export default SignIn;
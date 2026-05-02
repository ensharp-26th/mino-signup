import './SignIn.css';

import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <Card>
            <Header title="En# SignUp!!"/>
            <div className="form">
                <Input />
                <Input />
            </div>
            <div className="actions">
                <Button text="Login"/>
                <span>
                    계정이 없으신가요? <Link to="/SignUp" className="toSignIn">회원가입</Link>
                </span>
            </div>
        </Card>
    );
}

export default SignIn;
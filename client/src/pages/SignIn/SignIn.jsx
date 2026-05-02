import './SignIn.css';

import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

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
            </div>
        </Card>
    );
}

export default SignIn;
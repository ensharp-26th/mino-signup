import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';

function SignIn() {
    return (
        <Card>
            <Header title="En# SignUp!!"/>
            <div className="form">
                <Input />
                <Input />
            </div>
            <div className="actions">
                <Input />
            </div>
        </Card>
    );
}

export default SignIn;
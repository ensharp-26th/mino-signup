import './SignUp.css';

import Card from '../../components/Card/Card';
import Header from  '../../components/Header/Header';
import EmailForm from '../../features/e-mail-form/EmailForm';
import PasswordForm from '../../features/password-form/PasswordForm';
import NameForm from '../../features/name-form/NameForm';
import AddressForm from '../../features/address-form/AddressForm';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <Card>
            <Header text="회원가입" />
            <div className="forms">
                <EmailForm />
                <PasswordForm />
                <NameForm />
                <AddressForm />
            </div>
            <Link className="to-sign-up-success" to="/sign-up/success">
                <Button text="제출하기" />
            </Link>
        </Card>
    );
}

export default SignUp;
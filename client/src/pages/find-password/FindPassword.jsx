import './FindPassword.css';

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import EmailForm from "../../features/e-mail-form/EmailForm";
import Button from "../../components/Button/Button";
import { Link } from 'react-router-dom';

function FindPassword() {
    return (
        <Card>
            <Header text="비밀번호 찾기" />
            <EmailForm />
            <Link className="to-reset-password" to="/reset-password">
                <Button text="제출하기" />
            </Link>
        </Card>
    );
}

export default FindPassword;
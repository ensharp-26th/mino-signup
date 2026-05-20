import './SignUpSuccessPage.css';

import { Link } from "react-router-dom";

import Card from '../../../components/Card/Card';
import Header from '../../../components/Header/Header';
import ActionSuccess from '../../../features/auth/components/action-success/ActionSuccess';
import Button from '../../../components/Button/Button';

function SignUpSuccessPage() {
    return(
        <Card>
            <Header text="안내" />
            <ActionSuccess detail="회원가입 완료" />
            <Link className="to-sign-in" to="/">
                <Button text="로그인 하기" />
            </Link>
        </Card>
    );
}

export default SignUpSuccessPage;
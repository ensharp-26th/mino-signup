import './ResetPasswordSuccess.css';

import { Link } from "react-router-dom";

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import ActionSuccess from "../../features/action-success/ActionSuccess";
import Button from "../../components/Button/Button";

function ResetPasswordSuccess() {
    return(
        <Card>
            <Header text="안내" />
            <ActionSuccess detail="비밀번호 재설정 완료"/>
            <Link className="to-sign-in" to="/">
                <Button text="로그인 하기" />
            </Link>
        </Card>
    );
}

export default ResetPasswordSuccess;
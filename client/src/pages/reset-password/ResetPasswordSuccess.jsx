import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import ActionSuccess from "../../features/action-success/ActionSuccess";
import Button from "../../components/Button/Button";

function ResetPasswordSuccess() {
    return(
        <Card>
            <Header text="안내" />
            <ActionSuccess detail="비밀번호 재설정 완료"/>
            <Button text="로그인 하기" />
        </Card>
    );
}

export default ResetPasswordSuccess;
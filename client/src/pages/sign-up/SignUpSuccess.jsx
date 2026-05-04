import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import ActionSuccess from "../../features/action-success/ActionSuccess";
import Button from "../../components/Button/Button";

function SignUpSuccess() {
    return(
        <Card>
            <Header text="안내" />
            <ActionSuccess detail="회원가입 완료" />
            <Button text="로그인 하기" />
        </Card>
    );
}

export default SignUpSuccess;
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import EmailBox from "../../features/e-mail-box/EmailBox";
import PasswordForm from "../../features/password-form/PasswordForm";
import Button from "../../components/Button/Button";

function ResetPassword() {
    return (
        <Card>
            <Header title="비밀번호 재설정" />
            <EmailBox />
            <PasswordForm />
            <Button text="재설정" />
        </Card>
    );
}

export default ResetPassword;
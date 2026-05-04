import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import EmailForm from "../../features/e-mail-form/EmailForm";
import Button from "../../components/Button/Button";

function FindPassword() {
    return (
        <Card>
            <Header text="비밀번호 찾기" />
            <EmailForm />
            <Button text="제출하기" />
        </Card>
    );
}

export default FindPassword;
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Form from "../features/find-password-layouts/Form/Form";
import Button from "../components/Button/Button";

function FindPassword() {
    return (
        <Card>
            <Header title="비밀번호 찾기" />
            <Form />
            <Button text="제출하기" />
        </Card>
    );
}

export default FindPassword;
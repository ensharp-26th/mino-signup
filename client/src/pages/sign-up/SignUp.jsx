import Card from '../../components/Card/Card';
import Header from  '../../components/Header/Header';
import Form from '../../features/sign-up-layouts/Form/Form';
import Button from '../../components/Button/Button';

function SignUp() {
    return (
        <Card>
            <Header title="회원가입" />
            <Form />
            <Button text="제출하기" />
        </Card>
    );
}

export default SignUp;
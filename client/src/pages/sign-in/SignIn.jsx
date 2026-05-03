import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Form from '../../features/sign-in-layouts/Form/Form'
import Action from '../../features/sign-in-layouts/Action/Action';

function SignIn() {
    return (
        <Card>
            <Header title="En# SignUp!!"/>
            <Form />
            <Action />
        </Card>
    );
}

export default SignIn;
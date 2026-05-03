import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SignInForm from '../../features/sign-in-form/SignInForm';
import SignInAction from '../../features/sign-in-action/SignInAction';

function SignIn() {
    return (
        <Card>
            <Header title="En# SignUp!!"/>
            <SignInForm />
            <SignInAction />
        </Card>
    );
}

export default SignIn;
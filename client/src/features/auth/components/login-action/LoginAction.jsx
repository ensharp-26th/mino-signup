import './LoginAction.css';

import { Link, useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button/Button';

import { login } from '../../services/LoginRequest';

function LoginAction({ email, password, canLogin, setCanLogin, rememberEmail }) {
    const navigateLogin = useNavigate();

    const saveEmail = () => {
        if (rememberEmail) {
            localStorage.setItem("email", email);
        }
    }

    const useRequest = async () => {
        try {
            const response = await login(email, password);

            console.log(response);
            setCanLogin(true);
            saveEmail();
            navigateLogin('/my-information', { state: email });
        } catch (error) {
            console.log(error)
            setCanLogin(false);
        }
    }

    const navigate = useNavigate();

    return (
        <div className="login-action">
            <Button 
                text="Login" 
                onClick={() => {
                    useRequest();
                }} 
                 />
            <span className="sign-up-suggest">
                계정이 없으신가요? <Link className="to-sign-up" to="/sign-up">회원가입</Link>
            </span>
        </div>
    );
}

export default LoginAction;
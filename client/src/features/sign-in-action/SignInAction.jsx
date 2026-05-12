import './SignInAction.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from "../../components/Button/Button";

import { login } from '../../api/LoginRequest';

function SignInAction({ email, password }) {
    const [canLogin, setCanLogin] = useState(false);

    useEffect(() => {
        const useRequest = async () => {
            try {
                const response = await login(email, password);
                
                console.log(response);
                setCanLogin(true);
            } catch (error) {
                console.log(error)
                setCanLogin(false);
            }
        }
        useRequest();
    });

    return(
        <div className="sign-in-action">
            <Link className="to-my-information" to="/my-information">
                <Button text="Login" disabled={!canLogin} />
            </Link>
            <span className="sign-up-suggest">
                계정이 없으신가요? <Link className="to-sign-up" to="/sign-up">회원가입</Link>
            </span>
        </div>
    );
}

export default SignInAction;
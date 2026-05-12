import './SignInAction.css';

import { Link } from 'react-router-dom';

import Button from "../../components/Button/Button";

function SignInAction({ email, password, canLogin }) {
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
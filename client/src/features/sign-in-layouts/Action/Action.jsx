import './Action.css';

import Button from "../../../components/Button/Button";
import { Link } from 'react-router-dom';

function Action() {
    return(
        <div className="action">
            <Button text="Login"/>
            <span className="sign-up-suggest">
                계정이 없으신가요? <Link className="to-sign-up" to="/sign-up">회원가입</Link>
            </span>
        </div>
    );
}

export default Action;
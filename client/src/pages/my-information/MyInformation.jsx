import './MyInformation.css';

import { Link, useLocation } from 'react-router-dom';

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import UserInformation from "../../features/user-information/UserInformation";
import Button from "../../components/Button/Button";

function MyInformation() {
    const location = useLocation();
    const obj = location.state;
    const emailJSON = JSON.stringify(obj);
    const email = emailJSON.replace(/"/g, '')

    return (
        <Card>
            <Header text="내 정보" />
            <UserInformation email={email} />
            <Link className="to-sign-in" to="/">
                <Button text="로그아웃" />
            </Link>
        </Card>
    );
}

export default MyInformation;
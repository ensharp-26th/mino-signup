import './MyInformation.css';

import { Link } from 'react-router-dom';

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import UserInformation from "../../features/user-information/UserInformation";
import Button from "../../components/Button/Button";

function MyInformation() {
    return (
        <Card>
            <Header text="내 정보" />
            <UserInformation />
            <Link className="to-sign-in" to="/">
                <Button text="로그아웃" />
            </Link>
        </Card>
    );
}

export default MyInformation;
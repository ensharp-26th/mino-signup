import './MyProfilePage.css';

import { Link, useLocation } from 'react-router-dom';

import Card from '../../../components/Card/Card';
import Header from '../../../components/Header/Header';
import UserProfile from '../../../features/auth/components/user-profile/UserProfile';
import Button from '../../../components/Button/Button';

import { logout } from '../../../features/auth/services/LogoutReqeust';

function MyInformationPage() {
    const location = useLocation();
    const obj = location.state;
    const emailJSON = JSON.stringify(obj);
    const email = emailJSON.replace(/"/g, '')

    const requestLogout = async () => {
        try {
            const response = await logout();

            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card>
            <Header text="내 정보" />
            <UserProfile email={email} />
            <Link className="to-sign-in" to="/">
                <Button text="로그아웃" onClick={() => requestLogout()} />
            </Link>
        </Card>
    );
}

export default MyInformationPage;
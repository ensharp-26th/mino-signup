import './MyProfilePage.css';

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Card from '../../../components/Card/Card';
import Header from '../../../components/Header/Header';
import UserProfile from '../../../features/auth/components/user-profile/UserProfile';
import Button from '../../../components/Button/Button';

import { logout } from '../../../features/auth/services/LogoutReqeust';
import { checkSession } from '../../../features/auth/services/CheckSession';

function MyProfilePage() {
    const navigateLogin = useNavigate();

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

    useEffect(() => {
        const check = async () => {
            try {
                const response = await checkSession();

            } catch (error) {
                navigateLogin('/error');
            }
        }

        check();
    }, []);

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

export default MyProfilePage;
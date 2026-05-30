import './AdminPage.css';

import { useState } from 'react';

import Card from '../../../components/Card/Card';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';
import InputBox from '../../../components/InputBox/InputBox';

import { getAllUserProfile } from '../../../features/auth/services/AllUserProfileRequest';
import { deleteUser } from '../../../features/auth/services/DeleteUserRequest';
import { clearEmailVerification } from '../../../features/auth/services/ClearEmailVerificationsRequest';

function AdminPage() {
    const [email, setEmail] = useState("");

    const requestAllUserProfile = async () => {
        try {
            const response = await getAllUserProfile();

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const requestDeleteUser = async () => {
        try {
            const response = await deleteUser(email);

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const requestClearEmailVerifications = async () => {
        try {
            const response = await clearEmailVerification();

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card>
            <Header text="관리자 페이지" />
            <div className="all-user">
                <label>모든 유저 조회</label>
                <Button text="조회" onClick={requestAllUserProfile}/>
            </div>
            <div className="delete-user">
                <label>유저 삭제</label>
                <InputBox type="text" value={email} placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
                <Button text="삭제" onClick={requestDeleteUser} />
            </div>
            <div className="clear-email-verifications">
                <label>이메일 인증 기록 초기화</label>
                <Button text="초기화" onClick={requestClearEmailVerifications} />
            </div>
        </Card>
    );
}

export default AdminPage
import './UserInformation.css';

import { useState, useEffect } from 'react';

import { getUserInfo } from '../../api/UserInfoResponse';

function UserInformation({ email }) {
    const [username, setUsername] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");

    useEffect(() => {
        const useRequest = async () => {
            try {
                const response = await getUserInfo(email);

                setUsername(response.username);
                setStreetAddress(response.streetAddress);
                setDetailAddress(response.detailAddress);

                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        useRequest();
    });


    return (
        <div className="user-information">
            <div className="show-name">
                <span className="header-name">이름</span>
                <span className="user-name">{username}</span>
            </div>
            <div className="show-email">
                <span className="header-email">이메일</span>
                <span className="user-email">{email}</span>
            </div>
            <div className="show-address">
                <span className="header-address">주소</span>
                <span className="user-address">{streetAddress} {detailAddress}</span>
            </div>
        </div>
    );
}

export default UserInformation;
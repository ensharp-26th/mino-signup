import './UserProfile.css';

import { useState, useEffect } from 'react';

import { getUserProfile } from '../../services/UserProfileRequest';

function UserInformation({ email }) {
    const [username, setUsername] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");

    useEffect(() => {
        const requestUserProfile = async () => {
            try {
                const response = await getUserProfile(email);

                setUsername(response.username);
                setStreetAddress(response.streetAddress);
                setDetailAddress(response.detailAddress);

                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        requestUserProfile();
    });


    return (
        <div className="user-profile">
            <div className="show-username">
                <span className="header-username">이름</span>
                <span className="user-username">{username}</span>
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
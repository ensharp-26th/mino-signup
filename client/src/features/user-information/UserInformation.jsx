import './UserInformation.css';

function UserInformation() {
    return (
        <div className="user-information">
            <div className="show-name">
                <span className="header-name">이름</span>
                <span className="user-name">김민오</span>
            </div>
            <div className="show-e-mail">
                <span className="header-e-mail">이메일</span>
                <span className="user-e-mail">k9425mino@gmail.com</span>
            </div>
            <div className="show-address">
                <span className="header-address">주소</span>
                <span className="user-address">인천광역시 영종구 중산동 하늘별빛로 86</span>
            </div>
        </div>
    );
}

export default UserInformation;
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import UserInformation from "../../features/user-information/UserInformation";
import Button from "../../components/Button/Button";

function MyInformation() {
    return (
        <Card>
            <Header title="내 정보" />
            <UserInformation />
            <Button text="로그아웃" />
        </Card>
    );
}

export default MyInformation;
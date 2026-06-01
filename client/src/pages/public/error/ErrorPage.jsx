import './ErrorPage.css';

import { useNavigate } from 'react-router-dom';

import Card from '../../../components/Card/Card';
import Header from '../../../components/Header/Header';
import Warn from '../../../assets/images/Warn.png'
import Button from '../../../components/Button/Button';

function ErrorPage() {
    const navigateLogin = useNavigate();

    return (
        <Card className="error-page">
            <Header text="403 Forbidden" />
            <img className="error-image" src={Warn} />
            <span className="error-phrase">
                해당 페이지에 대한 접근 권한이 없습니다.
            </span>
            <Button text="로그인 하기" onClick={() => navigateLogin('/')} />
        </Card>
    );
}

export default ErrorPage;
import axios from 'axios';

const VerificationCodeRequest = async(email) => {
    const url = 'http://43.201.198.223:8080/api/v1/email-verfication/request';

    try {
        const response = await axios.post(url, {
            email: email
        });

        alert('인증 이메일이 발송되었습니다');
    } catch(error) {
        alert('실패');
    }
}
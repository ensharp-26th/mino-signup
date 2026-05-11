import './EmailForm.css';

import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import axios from 'axios';
import { useState } from 'react';

function EmailForm({ name }) {
    const [email, setEmail] = useState("");

    const VerificationCodeRequest = async() => {
        var url = '/api/v1/email-verification/request';

        try {
            const response = await axios.post(url, {
                email: email
            });

            alert('성공');
        } catch(error) {
            alert('실패');
        }
    }

    return (
        <form className="e-mail-form">
            <legend>이메일</legend>
            <div className="e-mail-wrapper">
                <InputBox 
                    type="text" 
                    placeholder="이메일" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Button 
                    type="button" 
                    name={name} 
                    style={{ borderRadius: "10px" }} 
                    text="전송" 
                    onClick={VerificationCodeRequest}/>
            </div>
            <InputBox 
                type="text" 
                placeholder="인증번호" 
            />
        </form>
    );
}

export default EmailForm;
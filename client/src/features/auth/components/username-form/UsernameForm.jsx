import './UsernameForm.css';

import { useState } from 'react';

import InputBox from '../../../../components/InputBox/InputBox';

function UsernameForm({ username, setUsername }) {
    return (
        <div className="username-form">
            <legend>이름</legend>
            <InputBox 
                type="text" 
                value={username} 
                placeholder=""
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
    );
}

export default UsernameForm;
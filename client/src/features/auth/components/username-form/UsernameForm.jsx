import './UsernameForm.css';

import { useState } from 'react';

import InputBox from '../../../../components/InputBox/InputBox';

function UsernameForm({ username, setUsername }) {
    return (
        <div className="username-form">
            <label>이름</label>
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
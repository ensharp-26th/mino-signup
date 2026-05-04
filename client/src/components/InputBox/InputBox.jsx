import './InputBox.css';

import { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

function InputBox({ type, placeholder }) {
    const [inputValue, setInputValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const changeInput = (event) => {
        setInputValue(event.target.value);
    };

    const isPasswordVisible = () => {
        setShowPassword(!showPassword);
    };

    const icon = () => {
        if (type === "text") {
            if (placeholder === "E-mail") {
                return <FaEnvelope />;
            }
        }
        
        if (type === "password") {
            if (placeholder === "Password" && inputValue === "" ) {
                return <FaLock />;
            }
            return (
                <div onClick={isPasswordVisible}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
            );
        }
    };

    const changedType = type === "password" && showPassword ? "text" : type;

    return(
        <div className="inputBox">
            <input className="input" type={changedType} placeholder={placeholder} value={inputValue} onChange={changeInput} />
            <span className="icon">
                {icon()}
            </span>
        </div>
    );
}

export default InputBox;
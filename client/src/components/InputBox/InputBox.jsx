import './InputBox.css';

import { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import check from '../../assets/check.png';
import fail from '../../assets/fail.png';

function InputBox({ type, name, placeholder, value, onChange, onFocus }) {
    const [showPassword, setShowPassword] = useState(false);

    const changeInput = (event) => {
        if (onChange) {
            onChange(event);
        }
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
            if (placeholder === "Password" && value === "" ) {
                return <FaLock />;
            }
            return (
                <div onClick={isPasswordVisible}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
            );
        }

        if (value !== "" && placeholder === "이메일") {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(value) ? <img src={check} /> : <img src={fail} />
        }
    };

    const dynamicSytle = () => {
        if (value !== "" && placeholder === "이메일") {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(value) ? { border: "1px solid #435DEEA6" } : { border: "1px solid #EE4346A6"}
        }
        if (value !== "" && placeholder === "8~16자의 영문 대/소문자, 숫자, 특수문자") {
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).{8,16}$/;
            return passwordRegex.test(value) ? { border: "1px solid #435DEEA6" } : { border: "1px solid #EE4346A6"}
        }
    }

    const dynamicType = type === "password" && showPassword ? "text" : type;

    return(
        <div className="inputBox" style={dynamicSytle()}>
            <input 
                className="input" 
                type={dynamicType} 
                name={name} 
                placeholder={placeholder} 
                value={value} 
                onChange={changeInput}
                onFocus={onFocus}
            />
            <span className="icon">
                {icon()}
            </span>
        </div>
    );
}

export default InputBox;
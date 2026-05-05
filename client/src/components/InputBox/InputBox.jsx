import './InputBox.css';

import { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import check from '../../asset/check.png';
import fail from '../../asset/fail.png';

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

        if (inputValue != "" && placeholder === "이메일") {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(inputValue) ? <img src={check} /> : <img src={fail} />
        }
    };

    const dynamicSytle = () => {
        if (inputValue != "" && placeholder === "이메일") {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(inputValue) ? { border: "1px solid #435DEEA6" } : { border: "1px solid #EE4346A6"}
        }
        if (inputValue != "" && placeholder === "8~16자의 영문 대/소문자, 숫자, 특수문자") {
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).{8,16}$/;
            return passwordRegex.test(inputValue) ? { border: "1px solid #435DEEA6" } : { border: "1px solid #EE4346A6"}
        }
    }

    const dynamicType = type === "password" && showPassword ? "text" : type;

    return(
        <div className="inputBox" style={dynamicSytle()}>
            <input className="input" type={dynamicType} placeholder={placeholder} value={inputValue} onChange={changeInput} />
            <span className="icon">
                {icon()}
            </span>
        </div>
    );
}

export default InputBox;
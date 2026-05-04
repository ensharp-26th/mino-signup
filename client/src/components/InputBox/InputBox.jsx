import './InputBox.css';

import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

function InputBox({ type, placeholder }) {
    const icon = () => {
        if (type === "text") {
            if (placeholder === "E-mail") {
                return <FaEnvelope />;
            }
        }
        if (type === "password") {
            return <FaLock />;
        }
    };

    return(
        <div className="inputBox">
            <input className="input" type={type} placeholder={placeholder} />
            <span className="icon">
                {icon()}
            </span>
        </div>
    );
}

export default InputBox;
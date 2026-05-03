import './InputBox.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

function InputBox({ type, placeholder }) {

    const icon = () => {
        if (type === "text") {
            if (placeholder === "E-mail") {
                return <FaEnvelope />;
            }
        }
    };

    return(
        <div className="inputBox">
            <input type={type} placeholder={placeholder} className="input" />
            <span className="icon">
            {icon()}
            </span>
        </div>
    );
}

export default InputBox;
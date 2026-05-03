import './InputBox.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

function InputBox({ type, placeholder }) {
    return(
        <div className="inputBox">
            <input type={type} placeholder={placeholder} className="input" />
        </div>
    );
}

export default InputBox;
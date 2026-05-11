import './InputBox.css';

function InputBox({ 
    type, 
    value, 
    placeholder,
    required, 
    onChange, 
    onFocus, 
    style, 
    icon 
}) {
    return(
        <div className="input-box" style={style}>
            <input 
                className="input" 
                type={type} 
                value={value} 
                placeholder={placeholder} 
                required={required}
                onChange={onChange}
                onFocus={onFocus}
            />
            <span className="input-box-icon">
                {icon}
            </span>
        </div>
    );
}

export default InputBox;
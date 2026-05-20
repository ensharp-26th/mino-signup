import './InputBox.css';

function InputBox({ 
    type, 
    value, 
    placeholder,
    required, 
    readOnly,
    onChange, 
    onFocus, 
    onBlur,
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
                readOnly={readOnly}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <span className="input-box-icon">
                {icon}
            </span>
        </div>
    );
}

export default InputBox;
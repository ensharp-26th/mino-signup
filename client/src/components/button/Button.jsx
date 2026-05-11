import './Button.css';

function Button({ 
    type, 
    onClick, 
    disabled,
    style, 
    text 
}) {
    return (
        <button
            className="button"
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {text}
        </button>
    );
}

export default Button;
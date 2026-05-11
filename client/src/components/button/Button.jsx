import './Button.css';

function Button({ 
    type, 
    onClick, 
    style, 
    text 
}) {
    return (
        <button
            className="button"
            type={type}
            onClick={onClick}
            style={style}
        >
            {text}
        </button>
    );
}

export default Button;
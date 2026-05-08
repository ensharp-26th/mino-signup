import './Button.css';

function Button({ type, name, style, onClick, text }) {
    return (
        <button
            className="button"
            type={type}
            name={name}
            style={style}
            onClick={onClick}
        >
            <div className="text">
                {text}
            </div>
        </button>
    );
}

export default Button;
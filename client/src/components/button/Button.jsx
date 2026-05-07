import './Button.css';

function Button({ type, name, style, text }) {
    return (
        <button className="button" type={type} name={name} style={style}>
            <div className="text">
                {text}
            </div>
        </button>
    );
}

export default Button;
import './Button.css';

function Button({ text, type, name, style }) {
    return (
        <button className="button" type={type} name={name} style={style}>
            <div className="text">
                {text}
            </div>
        </button>
    );
}

export default Button;
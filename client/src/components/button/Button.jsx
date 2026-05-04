import './Button.css';

function Button({ text, br }) {
    return (
        <button className="button" style={br}>
            <div className="text">
                {text}
            </div>
        </button>
    );
}

export default Button;
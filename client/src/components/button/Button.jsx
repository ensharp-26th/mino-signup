import './Button.css';

function Button({ text }) {
    return (
        <button className="button">
            <div className="text">
                {text}
            </div>
        </button>
    );
}

export default Button;
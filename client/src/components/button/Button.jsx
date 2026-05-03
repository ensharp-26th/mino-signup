import './Button.css';

function Button({ text }) {
    return (
        <div className="button">
            <div className="text">
                {text}
            </div>
        </div>
    );
}

export default Button;
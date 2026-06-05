import './TextareaBox.css';

function TextareaBox({ value, placeholder, onChange }) {
    return (
        <textarea className="textarea-box"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default TextareaBox;
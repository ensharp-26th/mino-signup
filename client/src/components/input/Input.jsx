import './Input.css';

function Input({ type }) {
    return(
        <div className="input">
            <input type="text" placeholder={type} className="custom-input"/>
        </div>
    );
}

export default Input;
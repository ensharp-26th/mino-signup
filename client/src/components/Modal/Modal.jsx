import './Modal.css';

function Modal({ children }) {
    return (
        <div className="modal-wrapper">
            <div className="modal">
                { children }
            </div>
        </div>
    );
}

export default Modal;
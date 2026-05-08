import './Modal.css';

function Modal({ children }) {
    return (
        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-inner">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Modal;
import './MessageBox.css';

function MessageBox({ sender, content }) {
    return (
        <div
            className={
                sender === "USER"
                ? "message-row user"
                : "message-row ohter"
            }
        >
            <div className={
                sender === "USER"
                ? "message-box user"
                : "message-box other"
                }
            >
                {content}
            </div>
        </div>
    );
}

export default MessageBox;
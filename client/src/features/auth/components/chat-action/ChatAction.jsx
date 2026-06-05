import './ChatAction.css';

import TextareaBox from '../../../../components/TextareaBox/TextareaBox';
import Button from '../../../../components/Button/Button';

function ChatAction({ content, setContent, sendMessage }) {
    return (
        <div className="chat-action">
            <TextareaBox
                value={content}
                placeholder="프롬프트 입력..."
                onChange={(e) => setContent(e.target.value)}
            />
            <Button
                text="전송"
                onClick={sendMessage}
                style={{borderRadius: "10px"}}
            />
        </div>
    );
}

export default ChatAction;
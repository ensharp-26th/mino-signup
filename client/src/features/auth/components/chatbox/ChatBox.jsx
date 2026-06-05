import './ChatBox.css';

import { useEffect, useRef } from 'react';

import MessageBox from '../../../../components/MessageBox/MessageBox';
import InputBox from '../../../../components/InputBox/InputBox';

import { chatGemini } from '../../services/ChatGeminiRequest';
import Button from '../../../../components/Button/Button';

function ChatBox({ messages }) {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [messages]);

    return (
        <div className="chat-box">
            <div>
                {messages.map((message, index) => (
                    <MessageBox
                        key={index}
                        sender={message.sender}
                        content={message.content}
                    />
                ))}
            </div>
            <div ref={bottomRef}></div>
        </div>
    );
}

export default ChatBox;
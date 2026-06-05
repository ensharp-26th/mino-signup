import './ChatPage.css';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Card from '../../../components/Card/Card';
import Header from '../../../components/Header/Header';
import Profile from '../../../assets/icons/Profile.png';
import ChatBox from '../../../features/auth/components/chatbox/ChatBox';
import Button from '../../../components/Button/Button';
import ChatAction from '../../../features/auth/components/chat-action/ChatAction';

import { chatGemini } from '../../../features/auth/services/ChatGeminiRequest';
import { clearChatMessages } from '../../../features/auth/services/ClearChatMessagesReqeust';

function ChatPage() {
    const location = useLocation();
    const email = location.state; 

    const navigateMyProfile = useNavigate();

    const [messages, setMessages] = useState([]);
    const [content, setContent] = useState("");

    const sendMessage = async () => {

        const userContent = content;
        setContent("");

        setMessages(prev => [
            ...prev,
            {
                sender: "USER",
                content: userContent
            }
        ]);

        try {
            const geminiResponse = await chatGemini(userContent);

            setMessages(prev => [
                ...prev,
                {
                    sender: geminiResponse.sender,
                    content: geminiResponse.content
                }
            ]);
        } catch (error) {
            console.log(error);
        }
    }

    const reqeustClearChatMessages = async () => {
        try {
            const response = await clearChatMessages();

            setMessages([]);
            console.log(response);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <Card>
            <div className="chat-header">
                <Header text="En# 챗봇" style={{textAlign: "left"}}/>
                <img className="profile-icon" src={Profile} onClick={() => {navigateMyProfile('/my-profile', { state: email })}} />
            </div>
            
            <ChatBox messages={messages} />
            <ChatAction content={content} setContent={setContent} sendMessage={sendMessage} />
            <Button text="대화 내역 초기화" onClick={reqeustClearChatMessages} />
        </Card>
    );
}

export default ChatPage;
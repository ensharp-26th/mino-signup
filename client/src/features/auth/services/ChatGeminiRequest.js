import api from './Api';

export const chatGemini = async (content) => {    
    const response = await api.post(
        '/api/v1/gemini/chat',
        {
            sender: "USER",
            content: content
        }
    );

    return response.data;
} 
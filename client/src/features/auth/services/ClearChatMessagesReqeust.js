import api from './Api';

export const clearChatMessages = async () => {
    const response = await api.delete(
        '/api/v1/gemini/chat'
    );

    return response.data;
} 
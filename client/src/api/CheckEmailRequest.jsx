import api from './Api';

export const checkEmail = async (email) => {
    const response = await api.post(
        '/api/v1/auth/email-check',
        {
            email: email
        }
    );

    return response.data;
} 
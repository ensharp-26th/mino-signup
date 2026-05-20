import api from './AuthApi';

export const checkEmailDuplication = async (email) => {
    const response = await api.post(
        '/api/v1/auth/email-check',
        {
            email: email
        }
    );

    return response.data;
} 
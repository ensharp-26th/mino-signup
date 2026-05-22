import api from './AuthApi';

export const checkEmailDuplication = async (email) => {
    const response = await api.post(
        '/api/v1/auth/check-email-exists',
        {
            email: email
        }
    );

    return response.data;
} 
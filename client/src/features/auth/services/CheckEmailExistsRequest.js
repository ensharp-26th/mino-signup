import api from './AuthApi';

export const checkEmailExist = async (email) => {
    const response = await api.post(
        '/api/v1/users/email-availability',
        {
            email: email
        }
    );

    return response.data;
} 
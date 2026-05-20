import api from '../features/auth/services/AuthApi';

export const requestVerificationCode = async (email) => {
    const response = await api.post(
        '/api/v1/email-verification/request',
        { 
            email: email
        }
    );

    return response.data;
}
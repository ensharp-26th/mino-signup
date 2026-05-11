import api from './Api';

export const requestVerificationCode = async (email) => {
    const response = await api.post(
        '/api/v1/email-verification/request',
        { 
            email: email
        }
    );

    return response.data;
}
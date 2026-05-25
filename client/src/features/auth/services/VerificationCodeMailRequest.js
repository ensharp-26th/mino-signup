import api from './AuthApi';

export const sendVerificationCodeMail = async (email) => {
    const response = await api.post(
        '/api/v1/email-verifications/send',
        { 
            email: email
        }
    );

    return response.data;
}
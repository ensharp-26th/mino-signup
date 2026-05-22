import api from './AuthApi';

export const sendVerificationCodeMail = async (email) => {
    const response = await api.post(
        '/api/v1/email-verification/send-verification-code-mail',
        { 
            email: email
        }
    );

    return response.data;
}
import api from './Api';

export const sendVerificationCodeMail = async (email) => {
    const response = await api.post(
        '/api/v1/email-verifications/send',
        { 
            email: email
        }
    );

    return response.data;
}
import api from './Api';

export const verifyEmail = async (email, verificationCode) => {
    const response = await api.patch(
        '/api/v1/email-verifications/verify',
        { 
            email: email,
            verificationCode: verificationCode
        }
    );

    return response.data;
}
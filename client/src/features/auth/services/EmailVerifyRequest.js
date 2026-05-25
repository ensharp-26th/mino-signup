import api from './AuthApi';

export const verifyEmail = async (email, verificationCode) => {
    const response = await api.post(
        '/api/v1/email-verifications/verify',
        { 
            email: email,
            verificationCode: verificationCode
        }
    );

    return response.data;
}
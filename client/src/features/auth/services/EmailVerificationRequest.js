import api from './AuthApi';

export const confirmVerificationCode = async (email, verificationCode) => {
    const response = await api.post(
        '/api/v1/email-verification/confirm',
        { 
            email: email,
            verificationCode: verificationCode
        }
    );

    return response.data;
}
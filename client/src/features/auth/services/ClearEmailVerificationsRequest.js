import api from './AuthApi';

export const clearEmailVerification = async () => {
    const response = await api.delete(
        '/api/v1/admin/email-verifications'
    );

    return response.data;
} 
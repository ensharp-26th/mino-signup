import api from './AuthApi';

export const changePassword = async (email, password) => {
    const response = await api.patch(
        '/api/v1/auth/reset-password',
        {
            email: email,
            newPassword: password
        }
    )

    return response.data;
}
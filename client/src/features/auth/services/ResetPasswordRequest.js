import api from './AuthApi';

export const resetPassword = async (email, password) => {
    const response = await api.patch(
        '/api/v1/users/me/password',
        {
            email: email,
            newPassword: password
        }
    )

    return response.data;
}
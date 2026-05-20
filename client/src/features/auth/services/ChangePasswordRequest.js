import api from '../features/auth/services/AuthApi';

export const changePassword = async (email, password) => {
    const response = await api.patch(
        '/api/v1/auth/password',
        {
            email: email,
            password: password
        }
    )

    return response.data;
}
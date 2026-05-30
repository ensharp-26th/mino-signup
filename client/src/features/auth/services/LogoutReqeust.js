import api from './AuthApi';

export const logout = async () => {
    const response = await api.delete(
        '/api/v1/sessions/current'
    );

    return response.data;
}
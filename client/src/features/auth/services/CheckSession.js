import api from './AuthApi';

export const checkSession = async () => {
    const response = await api.get(
        '/api/v1/sessions/current'
    );

    return response;
}
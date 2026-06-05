import api from './Api';

export const checkSession = async () => {
    const response = await api.get(
        '/api/v1/sessions/current'
    );

    return response.data;
}
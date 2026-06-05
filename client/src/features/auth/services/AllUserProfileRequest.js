import api from './Api';

export const getAllUserProfile = async () => {
    const response = await api.get(
        '/api/v1/admin/users'
    );

    return response.data;
} 
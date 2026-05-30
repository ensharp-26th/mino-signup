import api from './AuthApi';

export const getAllUserProfile = async () => {
    const response = await api.get(
        '/api/v1/admin/users'
    );

    return response.data;
} 
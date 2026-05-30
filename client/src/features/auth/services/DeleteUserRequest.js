import api from './AuthApi';

export const deleteUser = async (email) => {
    const response = await api.delete(
        '/api/v1/admin/user',
        {
            data: {
                email: email
            }
        }
    );

    return response.data;
} 
import api from './Api';

export const getUserProfile = async (email) => {
    const response = await api.get(
        '/api/v1/users/me/profile',
        { params: 
            {
                email: email
            }
        }
    );

    return response.data;
}
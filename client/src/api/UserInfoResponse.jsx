import api from './Api';

export const getUserInfo = async (email) => {
    const response = await api.get(
        '/api/v1/auth/me',
        { params: 
            {
                email: email
            }
        }
    );

    return response.data;
}
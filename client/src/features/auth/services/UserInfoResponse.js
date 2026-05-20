import api from '../features/auth/services/AuthApi';

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
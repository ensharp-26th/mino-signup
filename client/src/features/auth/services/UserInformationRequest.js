import api from './AuthApi';

export const getUserInformation = async (email) => {
    const response = await api.get(
        '/api/v1/auth/profile',
        { params: 
            {
                email: email
            }
        }
    );

    return response.data;
}
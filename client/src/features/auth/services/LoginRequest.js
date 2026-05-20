import api from './AuthApi';

export const login = async (email, password) => {
    const response = await api.post(
        '/api/v1/auth/login',
        {
            email: email,
            password: password
        }
    );

    return response.data;
}
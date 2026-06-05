import api from './Api';

export const checkEmailExist = async (email) => {
    const response = await api.post(
        '/api/v1/users/email-availability',
        {
            email: email
        }
    );

    return response.data;
} 
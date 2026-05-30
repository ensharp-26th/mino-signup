import api from './AuthApi';

export const signUp = async (email, password, username, streetAddress, detailAddress) => {
    const response = await api.post(
        '/api/v1/users',
        {
            email: email,
            password: password,
            username: username,
            streetAddress: streetAddress,
            detailAddress: detailAddress
        }
    );

    return response.data;
}
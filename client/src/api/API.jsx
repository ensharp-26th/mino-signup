import axios from 'axios';

const API = axios.create({
    baseURL: "http://43.201.198.223:8080",
    headers: {
        "Content-Type": application/json,
    },
    withCredentials: true,
});

export default API;